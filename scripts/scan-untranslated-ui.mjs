import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { parseSync } from "oxc-parser";

const root = process.cwd();
const catalogFiles = [
  "ui/src/i18n/legacy-pt-br.ts",
  "ui/src/i18n/legacy-priority-pt-br.ts",
  "ui/src/i18n/fork-pt-br.ts",
];
const visiblePropertyNames = new Set([
  "action", "ariaLabel", "body", "description", "emptyMessage", "error",
  "label", "loadingMessage", "message", "name", "noneLabel", "pendingLabel",
  "placeholder", "reason", "restore", "searchPlaceholder", "stopRunLabel",
  "title", "tooltip", "text",
]);
const ignoredDirectories = new Set(["__tests__", "tests", "ux-lab", "design-sandbox"]);
const ignoredFragments = [
  "className", "data-testid", "aria-describedby", "https://", "http://",
  "SKILL.md", "application/", "font-", "text-", "bg-", "border-", "rounded",
  "flex", "grid", "space-", "px-", "py-", "mx-", "my-", "size-",
];

function walk(node, parent, grandparent, visit) {
  if (!node || typeof node !== "object") return;
  visit(node, parent, grandparent);
  for (const [name, value] of Object.entries(node)) {
    if (name === "loc") continue;
    if (Array.isArray(value)) {
      for (const child of value) walk(child, node, parent, visit);
    } else if (value && typeof value === "object" && value.type) {
      walk(value, node, parent, visit);
    }
  }
}

function decodeEntities(value) {
  return value
    .replaceAll("&apos;", "'")
    .replaceAll("&rsquo;", "’")
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&rarr;", "→")
    .replaceAll("&middot;", "·")
    .replaceAll("&nbsp;", " ");
}

function normalize(value) {
  return decodeEntities(value).replace(/\s+/g, " ").trim();
}

function propertyName(node) {
  if (!node?.key || node.computed) return "";
  if (node.key.type === "Identifier") return node.key.name;
  if (node.key.type === "Literal" && typeof node.key.value === "string") return node.key.value;
  return "";
}

const catalogKeys = new Set();
for (const file of catalogFiles) {
  const ast = parseSync(file, readFileSync(file, "utf8"));
  walk(ast.program, null, null, (node) => {
    if (node.type !== "Property") return;
    const key = propertyName(node);
    if (key) catalogKeys.add(normalize(key));
  });
}

function collectFiles(directory) {
  const files = [];
  for (const entry of readdirSync(directory)) {
    if (ignoredDirectories.has(entry)) continue;
    const file = join(directory, entry);
    const stats = statSync(file);
    if (stats.isDirectory()) files.push(...collectFiles(file));
    else if (file.endsWith(".tsx") && !file.endsWith(".test.tsx")) files.push(file);
  }
  return files;
}

const requested = process.argv.slice(2).map((file) => file.replace(/\\/g, "/"));
const files = requested.length ? requested : collectFiles(join(root, "ui/src/pages"));
const results = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");
  const ast = parseSync(file, source);
  walk(ast.program, null, null, (node, parent, grandparent) => {
    let value = null;
    let visible = false;
    if (node.type === "JSXText") {
      value = node.value;
      visible = true;
    } else if (node.type === "Literal" && typeof node.value === "string") {
      if (parent?.type === "JSXAttribute") {
        const attribute = parent.name?.name;
        visible = ["aria-label", "placeholder", "title", "alt"].includes(attribute);
      } else if (parent?.type === "JSXExpressionContainer") {
        visible = grandparent?.type !== "JSXAttribute";
      } else if (parent?.type === "Property" && visiblePropertyNames.has(propertyName(parent))) {
        visible = true;
      }
      if (grandparent?.type === "JSXAttribute" && !["aria-label", "placeholder", "title", "alt"].includes(grandparent.name?.name)) {
        visible = false;
      }
    }
    if (!visible || value == null) return;
    const text = normalize(value);
    if (!text || text.length < 3 || catalogKeys.has(text)) return;
    if (!/[A-Za-z]{3,}/.test(text)) return;
    if (ignoredFragments.some((fragment) => text.includes(fragment))) return;
    if (text.startsWith("/") || text.startsWith("./") || text.startsWith("../")) return;
    if (/^[a-z0-9_-]+$/.test(text)) return;
    const line = source.slice(0, node.start ?? 0).split("\n").length;
    results.push({ file: relative(root, file), line, text });
  });
}

const unique = new Map();
for (const result of results) unique.set(`${result.file}:${result.line}:${result.text}`, result);
for (const result of unique.values()) console.log(`${result.file}:${result.line}\t${result.text}`);
console.error(`UNMAPPED=${unique.size}`);

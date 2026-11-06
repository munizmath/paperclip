import { useEffect } from "react";
import { useTranslation } from "@/i18n";
import { translateLegacyPtBr } from "@/i18n/legacy-pt-br";

const TRANSLATABLE_ATTRIBUTES = ["aria-label", "placeholder", "title"] as const;

function shouldSkipElement(element: Element): boolean {
  return ["SCRIPT", "STYLE", "CODE", "PRE", "TEXTAREA"].includes(element.tagName);
}

function translateTextNode(node: Text) {
  const original = node.nodeValue ?? "";
  const trimmed = original.trim();
  if (!trimmed) return;
  const translated = translateLegacyPtBr(trimmed);
  if (translated === trimmed) return;
  const start = original.indexOf(trimmed);
  const end = start + trimmed.length;
  node.nodeValue = `${original.slice(0, start)}${translated}${original.slice(end)}`;
}

function translateElement(element: Element) {
  if (shouldSkipElement(element) || element.hasAttribute("data-i18n-ignore")) return;
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    textNodes.push(node as Text);
    node = walker.nextNode();
  }
  textNodes.forEach(translateTextNode);

  for (const attribute of TRANSLATABLE_ATTRIBUTES) {
    const value = element.getAttribute(attribute);
    if (!value) continue;
    const translated = translateLegacyPtBr(value);
    if (translated !== value) element.setAttribute(attribute, translated);
  }
}

/**
 * Keeps legacy hard-coded copy usable in PT-BR while individual screens are
 * migrated to i18next keys. It is deliberately exact-match and DOM-local.
 */
export function LegacyLocaleBridge() {
  const { i18n } = useTranslation();
  const resolvedLanguage = i18n.resolvedLanguage;

  useEffect(() => {
    if (resolvedLanguage !== "pt-BR" || typeof document === "undefined") return;
    const root = document.body;
    if (!root) return;

    let applying = false;
    const translate = (element: Element) => {
      if (applying) return;
      applying = true;
      try {
        translateElement(element);
      } finally {
        applying = false;
      }
    };

    translate(root);
    const observer = new MutationObserver((records) => {
      if (applying) return;
      applying = true;
      try {
        for (const record of records) {
          if (record.type === "characterData") {
            translateTextNode(record.target as Text);
          } else if (record.type === "attributes") {
            const element = record.target as Element;
            const attribute = record.attributeName;
            if (attribute && TRANSLATABLE_ATTRIBUTES.includes(attribute as (typeof TRANSLATABLE_ATTRIBUTES)[number])) {
              const value = element.getAttribute(attribute);
              if (value) element.setAttribute(attribute, translateLegacyPtBr(value));
            }
          } else {
            record.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) translateElement(node as Element);
              else if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text);
            });
          }
        }
      } finally {
        applying = false;
      }
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...TRANSLATABLE_ATTRIBUTES],
    });
    return () => observer.disconnect();
  }, [i18n, resolvedLanguage]);

  return null;
}

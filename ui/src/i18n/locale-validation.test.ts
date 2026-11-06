import { describe, expect, it } from "vitest";
import { t } from ".";
import en from "./locales/en.json";
import ptBr from "./locales/pt-BR.json";
import { localeMessages } from "./locales";
import { validateLocaleMessages } from "./locale-validation";
import { translateLegacyPtBr } from "./legacy-pt-br";

describe("locale validation", () => {
  it("resolves PT-BR messages with key and English fallbacks", () => {
    expect(t("app.noCompanies.title")).toBe(ptBr.app.noCompanies.title);
    expect(t("app.missing", { defaultValue: "Fallback" })).toBe("Fallback");
    expect(t("app.missing")).toBe("app.missing");
  });

  it("translates legacy messages that contain dynamic names and counts", () => {
    expect(translateLegacyPtBr("Workspace is now editable in the Paperclip workspace.")).toBe(
      "Workspace agora pode ser editada no espaço de trabalho do Paperclip.",
    );
    expect(translateLegacyPtBr("2 skills added.")).toBe("2 habilidades adicionadas.");
    expect(translateLegacyPtBr("Secret active")).toBe("Segredo ativo");
    expect(translateLegacyPtBr("Connected as you · Read and write")).toBe("Conectado como você · Leitura e escrita");
    expect(translateLegacyPtBr("No assistants connected to Acme yet.")).toBe("Nenhum assistente conectado a Acme ainda.");
    expect(translateLegacyPtBr("2 new skills available")).toBe("2 novas habilidades disponíveis");
    expect(translateLegacyPtBr("Import 1 skill")).toBe("Importar 1 habilidade");
    expect(translateLegacyPtBr("12 secrets · 3 folders")).toBe("12 segredos · 3 pastas");
    expect(translateLegacyPtBr("How Atlas runs: harness, model and environment.")).toBe(
      "Como Atlas executa: harness, modelo e ambiente.",
    );
    expect(translateLegacyPtBr("2 reusable sandboxes will be destroyed; the workspaces holding them stay open and provision a fresh sandbox on their next run.")).toContain(
      "2 sandboxes reutilizáveis serão destruídos",
    );
    expect(translateLegacyPtBr("Usage (3)")).toBe("Uso (3)");
    expect(translateLegacyPtBr("Accepted 2 drafts and skipped 1")).toBe("Aceitos 2 rascunhos e ignorados 1");
    expect(translateLegacyPtBr("What should this Slack connection do?")).toBe("Qual é a finalidade da conexão Slack?");
    expect(translateLegacyPtBr("People in Slack can start and continue Paperclip tasks.")).toBe(
      "Pessoas no Slack podem iniciar e continuar tarefas do Paperclip.",
    );
    expect(translateLegacyPtBr("Let agents use Slack actions and data while they work.")).toBe(
      "Permita que os agentes usem as ações e os dados do Slack durante o trabalho.",
    );
    expect(translateLegacyPtBr("2 consecutive / 5 total")).toBe("2 consecutivos / 5 no total");
  });

  it("covers shared settings, task chat, and run-log copy", () => {
    expect(translateLegacyPtBr("Plugin Manager")).toBe("Gerenciador de plugins");
    expect(translateLegacyPtBr("Couldn't save file")).toBe("Não foi possível salvar o arquivo");
    expect(translateLegacyPtBr("2 open assigned tasks")).toBe("2 tarefas atribuídas em aberto");
    expect(translateLegacyPtBr("Last 3 log entries")).toBe("Últimas 3 entradas de log");
    expect(translateLegacyPtBr("Categories: none")).toBe("Categorias: nenhuma");
    expect(translateLegacyPtBr("Start a setup sandbox, SSH in to customize the instance, then capture the running machine as a reusable image for future runs.")).toBe(
      "Inicie um sandbox de configuração, acesse-o por SSH para personalizar a instância e capture a máquina em execução como uma imagem reutilizável para futuras execuções.",
    );
    expect(translateLegacyPtBr("Installed apps load tools into Atlas's context on every run. Permitted-only apps do not add context cost.")).toContain(
      "Aplicativos instalados carregam ferramentas no contexto de Atlas",
    );
    expect(translateLegacyPtBr("2 more tasks")).toBe("2 outras tarefas");
    expect(translateLegacyPtBr("Default:")).toBe("Padrão:");
    expect(translateLegacyPtBr("No repositories added yet. Import your skills to make them available in this company.")).toBe(
      "Ainda não há repositórios adicionados. Importe suas skills para disponibilizá-las nesta organização.",
    );
    expect(translateLegacyPtBr("Select model and effort")).toBe("Selecionar modelo e esforço");
    expect(translateLegacyPtBr("Run ended")).toBe("Execução encerrada");
    expect(translateLegacyPtBr("Continued after steering · Agent"))
      .toBe("Continuou após orientação · Agent");
    expect(translateLegacyPtBr("Proposals")).toBe("Propostas");
    expect(translateLegacyPtBr("Save & exit")).toBe("Salvar e sair");
    expect(translateLegacyPtBr("Find existing AWS values")).toBe("Encontrar valores AWS existentes");
    expect(translateLegacyPtBr("Run browser smoke now")).toBe("Executar fumaça do navegador agora");
  });

  it("accepts registered locale files", () => {
    expect(Object.keys(localeMessages)).toContain("en");
    for (const [locale, messages] of Object.entries(localeMessages)) {
      expect(validateLocaleMessages(messages), locale).toEqual([]);
    }
  });

  it("rejects missing and extra nested keys", () => {
    expect(
      validateLocaleMessages({
        app: {
          noCompanies: {
            title: en.app.noCompanies.title,
            description: en.app.noCompanies.description,
            unexpected: "Unexpected",
          },
        },
      }),
    ).toEqual(
      expect.arrayContaining([
        "app.noCompanies.newCompany is missing",
        "app.noCompanies.unexpected is not defined in English",
      ]),
    );
  });

  it("rejects non-string leaves", () => {
    expect(
      validateLocaleMessages({
        app: {
          noCompanies: {
            ...en.app.noCompanies,
            title: ["Create your first company"],
          },
        },
      }),
    ).toEqual(expect.arrayContaining(["app.noCompanies.title must be a string"]));
  });

  it("requires interpolation placeholders to match English", () => {
    const reference = {
      message: "Invite {{name}} to {{company}}",
    };

    expect(validateLocaleMessages({ message: "Invite {{name}}" }, reference)).toEqual([
      'message interpolation placeholders must match English exactly: expected ["company","name"], received ["name"]',
    ]);
  });

  it("rejects executable, raw HTML, and unexpected link payloads not present in English", () => {
    const reference = {
      script: "Create company",
      handler: "Create company",
      js: "Create company",
      data: "Create company",
      url: "Create company",
      html: "Create company",
    };

    expect(
      validateLocaleMessages(
        {
          script: "<script>alert(1)</script>",
          handler: '<span ONCLICK="alert(1)">Create</span>',
          js: "javascript:alert(1)",
          data: "data:text/html,hello",
          url: "https://example.test",
          html: "<strong>Create company</strong>",
        },
        reference,
      ),
    ).toEqual(
      expect.arrayContaining([
        "script contains disallowed <script",
        "handler contains disallowed event-handler attribute",
        "js contains disallowed javascript:",
        "data contains disallowed data:",
        "url contains disallowed unexpected URL",
        "html contains disallowed raw HTML tag",
      ]),
    );
  });

  it("caps localized string length relative to English", () => {
    expect(validateLocaleMessages({ message: "x".repeat(200) }, { message: "Short" })).toEqual([
      "message is too long: 200 characters exceeds 133",
    ]);
  });
});

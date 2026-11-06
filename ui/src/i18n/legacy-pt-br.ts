import { legacyPriorityPtBrMessages } from "./legacy-priority-pt-br";
import { forkPtBrMessages } from "./fork-pt-br";

/**
 * Transitional translations for older Paperclip surfaces that still render
 * short, static English copy directly in JSX. Exact matches only: dynamic
 * names, identifiers, task titles, and user-authored content are untouched.
 */
export const legacyPtBrMessages: Record<string, string> = {
  Settings: "Configurações",
  "Instance settings": "Configurações da instância",
  "Instance Access": "Acesso da instância",
  "Search users, manage instance-admin status, and control which organizations they can access.": "Pesquise usuários, gerencie o status de administrador da instância e controle quais organizações eles podem acessar.",
  "Search users": "Pesquisar usuários",
  "active organization memberships": "associações ativas em organizações",
  "Remove instance admin": "Remover administrador da instância",
  "Organization access": "Acesso às organizações",
  "Toggle organization membership for this user. New access defaults to an active operator membership.": "Alterne a associação deste usuário às organizações. Um novo acesso usa por padrão uma associação ativa de operador.",
  "Save organization access": "Salvar acesso às organizações",
  "Current memberships": "Associações atuais",
  owner: "proprietário",
  "Back to app": "Voltar ao aplicativo",
  General: "Geral",
  Profile: "Perfil",
  Members: "Membros",
  Secrets: "Segredos",
  Environments: "Ambientes",
  "Enable Environments in instance experimental settings to manage shared execution targets.": "Ative Ambientes nas configurações experimentais da instância para gerenciar destinos de execução compartilhados.",
  Connections: "Conexões",
  "Decision model": "Modelo de decisão",
  "View usage": "Ver uso",
  "Choose the shared connection Paperclip uses for optional decision features. API usage is charged to this connection.":
    "Escolha a conexão compartilhada que o Paperclip usa para recursos opcionais de decisão. O uso da API é cobrado nesta conexão.",
  "Add a shared OpenAI or OpenRouter API connection to get started.": "Adicione uma conexão compartilhada de API da OpenAI ou OpenRouter para começar.",
  "Add connection": "Adicionar conexão",
  "Run test": "Executar teste",
  "Runs a small sample with an API charge.": "Executa uma pequena amostra com cobrança de API.",
  "Prompt Injection Prevention": "Prevenção de injeção de prompt",
  "Check tool results for instructions that could redirect your agents. The selected provider receives tool content and charges API usage. Built-in detection is used when the model is unavailable.":
    "Verifique os resultados das ferramentas em busca de instruções que possam redirecionar seus agentes. O provedor selecionado recebe o conteúdo das ferramentas e cobra o uso da API. A detecção integrada é usada quando o modelo está indisponível.",
  "Add a shared OpenRouter API connection to use model checks.": "Adicione uma conexão compartilhada de API do OpenRouter para usar as verificações do modelo.",
  "Add OpenRouter connection": "Adicionar conexão do OpenRouter",
  "Manage connections": "Gerenciar conexões",
  "Test model checks": "Testar verificações do modelo",
  "Tests two fixed samples with an API charge.": "Testa duas amostras fixas com cobrança de API.",
  Access: "Acesso",
  Export: "Exportar",
  Import: "Importar",
  Experimental: "Experimental",
  "CONFIGURAÇÕES": "CONFIGURAÇÕES",
  "Opt into features that are still being evaluated before they become default behavior.": "Ative recursos que ainda estão sendo avaliados antes que se tornem o comportamento padrão.",
  "Experimental features may break at any time.": "Recursos experimentais podem apresentar problemas a qualquer momento.",
  "These features are opt-in and come with no compatibility guarantees. They may change, break, or be removed without notice. Avoid relying on them for critical or production workflows.": "Esses recursos são opcionais e não têm garantia de compatibilidade. Eles podem mudar, apresentar problemas ou ser removidos sem aviso. Evite depender deles em fluxos críticos ou de produção.",
  "Experimental features": "Recursos experimentais",
  "Optional product features that are still being evaluated.": "Recursos opcionais do produto que ainda estão sendo avaliados.",
  "Coordinator workspace": "Espaço de trabalho do coordenador",
  "Try the new Chat, Tasks, and Needs You workspace. This changes your interface across companies on this instance.": "Experimente o novo espaço de trabalho de Chat, Tarefas e Precisa de você. Isso altera sua interface em todas as empresas desta instância.",
  "Off by default. Turn it off to return to the classic workspace. Your work and your teammates’ settings stay the same.": "Desativado por padrão. Desative-o para voltar ao espaço de trabalho clássico. Seu trabalho e as configurações dos seus colegas permanecem iguais.",
  "This local instance uses the shared Local Board identity.": "Esta instância local usa a identidade compartilhada do Conselho local.",
  "Agent Chat is off for this instance. Your workspace preference does not enable it.": "O Chat de agentes está desativado nesta instância. A preferência do espaço de trabalho não o ativa.",
  "Enable Agent Chat below": "Ative o Chat de agentes abaixo",
  "When the user's first request is a single task, the chief of staff writes a short plan document and a checkbox card instead of a one-card confirmation. Applies to organizations created after the toggle is flipped.": "Quando o primeiro pedido do usuário é uma única tarefa, o chefe de gabinete escreve um documento de plano curto e um card de confirmação em vez de uma confirmação de um único card. Aplica-se a organizações criadas depois que a opção é ativada.",
  "Independent of Chat connectors. Turning this off hides setup and management; existing bots keep running. GitHub tool connections stay available.": "Independente dos conectores de chat. Desativar isso oculta a configuração e o gerenciamento; os bots existentes continuam funcionando. As conexões de ferramentas do GitHub permanecem disponíveis.",
  "Show the built-in Google Workspace connector for Gmail, Drive, and Calendar while Google verification is pending.": "Mostre o conector integrado do Google Workspace para Gmail, Drive e Calendar enquanto a verificação do Google está pendente.",
  "Off by default. While off, Google apps are offered through Composio and Arcade instead, and the built-in connector cannot be set up or run.": "Desativado por padrão. Enquanto desativado, os aplicativos do Google são oferecidos pelo Composio e Arcade, e o conector integrado não pode ser configurado ou executado.",
  "Connect an existing Grok Bot as an agent. Verify routine delivery and an authenticated reply before assigning work.": "Conecte um Grok Bot existente como agente. Verifique a entrega de rotinas e uma resposta autenticada antes de atribuir trabalho.",
  "Requires Assistant connections (MCP), Paperclip Runner, and authenticated public HTTPS. Usage is not reported. Turning this off blocks Grok calls and new dispatch.": "Exige conexões de assistentes (MCP), Paperclip Runner e HTTPS público autenticado. O uso não é reportado. Desativar isso bloqueia chamadas do Grok e novos despachos.",
  "Connect Mem0, Zep, Supermemory, Cognee, and Honcho for long-term memory and context.": "Conecte Mem0, Zep, Supermemory, Cognee e Honcho para memória e contexto de longo prazo.",
  "Turning this off hides setup for these connectors. Existing connections keep running.": "Desativar isso oculta a configuração desses conectores. As conexões existentes continuam funcionando.",
  "Connect your personal Meta Muse. Pair it, detect its receiver, and verify an independent background reply before assigning tasks.": "Conecte seu Meta Muse pessoal. Faça o pareamento, detecte o receptor e verifique uma resposta independente em segundo plano antes de atribuir tarefas.",
  "Requires Paperclip Runner and an authenticated instance with a public HTTPS URL. Turning this off blocks new work; cleanup and stop evidence remain available. Provider usage and cost are unavailable.": "Exige o Paperclip Runner e uma instância autenticada com URL HTTPS pública. Desativar isso bloqueia novos trabalhos; a limpeza e as evidências de parada continuam disponíveis. O uso e o custo do provedor não estão disponíveis.",
  "Add OpenAI Dot as a standalone agent choice. Pair your Dot and verify event delivery before assigning work.": "Adicione o OpenAI Dot como uma opção de agente independente. Faça o pareamento do Dot e verifique a entrega de eventos antes de atribuir trabalho.",
  "Requires Assistant connections (MCP) and an authenticated instance with a public HTTPS URL. Turning this off blocks Dot calls and new work; saved connections are kept.": "Exige conexões de assistentes (MCP) e uma instância autenticada com URL HTTPS pública. Desativar isso bloqueia chamadas do Dot e novos trabalhos; as conexões salvas são mantidas.",
  "Allow agents to select Paperclip Runner, including authenticated runner ingress when a sandbox requires it. First-run setup offers qualified GitHub Copilot. Turning this off hides the choice without affecting existing native runs.": "Permita que os agentes selecionem o Paperclip Runner, incluindo a entrada autenticada quando um sandbox exigir. A configuração inicial oferece o GitHub Copilot qualificado. Desativar isso oculta a opção sem afetar execuções nativas existentes.",
  "Instruct agents to write user interactions (plan confirmations, questions, suggested tasks, checkbox prompts) in ASD-STE100 Simplified Technical English, with brief context on what information the decision needs and what happens for each choice.": "Instrua os agentes a escrever interações com o usuário (confirmações de plano, perguntas, tarefas sugeridas e prompts de caixas de seleção) em inglês técnico simplificado ASD-STE100, com contexto breve sobre quais informações a decisão exige e o que acontece em cada escolha.",
  "Enable the experimental shared status-card board and its gated API. Existing card data is kept when this is disabled.": "Ative o quadro experimental compartilhado de cards de status e sua API protegida. Os dados existentes dos cards são mantidos quando isso é desativado.",
  "Enabling Status Cards also enables Summaries.": "Ativar Cards de status também ativa Resumos.",
  "Use the simplified main sidebar, shared Tasks and Inbox presentation, focused task detail layout, and contextual navigation across Agents, Routines, Skills, and Settings.": "Use a barra lateral principal simplificada, a apresentação compartilhada de Tarefas e Caixa de entrada, um layout focado para detalhes de tarefas e navegação contextual entre Agentes, Rotinas, Habilidades e Configurações.",
  "Turning this off restores the legacy shell and navigation. Task and page data are unchanged.": "Desativar isso restaura o shell e a navegação legados. Os dados de tarefas e páginas não são alterados.",
  "Show Summarizer-generated status slots on project and workspace pages, with on-demand refresh and revision history. Existing summary data is kept when this is disabled.": "Mostre slots de status gerados pelo Summarizer nas páginas de projetos e espaços de trabalho, com atualização sob demanda e histórico de revisões. Os dados de resumo existentes são mantidos quando isso é desativado.",
  "Status Cards requires Summaries. Disabling Summaries also disables Status Cards.": "Cards de status exige Resumos. Desativar Resumos também desativa Cards de status.",
  "In `pnpm dev:once`, wait for all queued and running local agent runs to finish, then restart the server automatically when backend changes or migrations make the current boot stale.": "Em `pnpm dev:once`, aguarde todas as execuções locais de agentes enfileiradas e em andamento terminarem; depois reinicie o servidor automaticamente quando alterações no backend ou migrações tornarem a inicialização atual obsoleta.",
  "Show internal Paperclip maintainer tools and observability links, including Honeycomb trace queries on run pages.": "Mostre ferramentas internas de manutenção do Paperclip e links de observabilidade, incluindo consultas de traces do Honeycomb nas páginas de execução.",
  "Show a \"Server\" section in the account drawer with the current server restart time and running commit.": "Mostre uma seção \"Servidor\" no menu da conta com o horário atual de reinício do servidor e o commit em execução.",
  "Add a \"Smoke Lab\" tab under Apps → Developer and an \"Integration smoke\" card on the dashboard for exercising every integration path against deterministic local fixtures (fake OAuth provider + loopback MCP servers). Private (non-public) deployments only.": "Adicione uma aba \"Laboratório de fumaça\" em Aplicativos → Desenvolvedor e um card \"Fumaça de integração\" no painel para exercitar cada caminho de integração com fixtures locais determinísticas (provedor OAuth falso + servidores MCP de loopback). Somente implantações privadas (não públicas).",
  "Show accepted-plan decomposition history on task detail pages. Intended for debugging and validating subtask creation behavior while the presentation is still being refined.": "Mostre o histórico de decomposição de planos aceitos nas páginas de detalhes das tarefas. Destinado à depuração e validação da criação de subtarefas enquanto a apresentação ainda é refinada.",
  "Restores the previous task detail page: the page-level header with inline description editing, the plain comment thread, and the fixed Properties sidebar. Chat-only features — streaming activity folding, inline plan and question cards, the three-mode composer — are unavailable in the classic view.": "Restaura a página anterior de detalhes da tarefa: o cabeçalho no nível da página com edição de descrição embutida, a thread simples de comentários e a barra lateral fixa de Propriedades. Recursos exclusivos do Chat — agrupamento de atividade em streaming, cards embutidos de plano e pergunta e o compositor de três modos — não ficam disponíveis na visão clássica.",
  "Switching takes effect immediately. No task data is affected.": "A troca entra em vigor imediatamente. Nenhum dado de tarefa é afetado.",
  "Restore the Goals item in the main sidebar while the goals surface is being evaluated.": "Restaure o item Metas na barra lateral principal enquanto a área de metas é avaliada.",
  "Agent Chat": "Chat de agentes",
  "Talk to each agent in one ongoing conversation. Clarify goals and create tasks for execution. Chat leads the Work group and opens an agent rail beside the nav, and each chat's side panel shows the agent's tasks and artifacts as cards.": "Converse com cada agente em uma conversa contínua. Esclareça objetivos e crie tarefas para execução. O Chat lidera o grupo Trabalho e abre uma barra de agentes ao lado da navegação; o painel lateral de cada conversa mostra as tarefas e os artefatos do agente como cards.",
  "Turning this off preserves conversations and lets active runs finish, but prevents new messages.": "Desativar isso preserva as conversas e permite que as execuções ativas terminem, mas impede novas mensagens.",
  "Assistant connections (MCP)": "Conexões de assistentes (MCP)",
  "Connect Codex, Claude, and other assistants to your Paperclip organization. People sign in, select an organization once, and approve access to review work, delegate tasks, and add feedback.": "Conecte Codex, Claude e outros assistentes à sua organização do Paperclip. As pessoas fazem login, selecionam uma organização uma vez e aprovam o acesso para revisar o trabalho, delegar tarefas e adicionar feedback.",
  "Requires an authenticated instance with a configured public URL. Takes effect immediately. Turning this off blocks assistant calls and event delivery; work already delegated continues.": "Exige uma instância autenticada com uma URL pública configurada. Entra em vigor imediatamente. Desativar isso bloqueia chamadas de assistentes e entrega de eventos; o trabalho já delegado continua.",
  "Beta skills": "Habilidades beta",
  "Allow agents to pin beta releases of the Paperclip core skill. Disabling this returns every agent to the default live skill without removing saved pins.": "Permita que os agentes fixem versões beta da habilidade principal do Paperclip. Desativar isso retorna cada agente à habilidade ativa padrão sem remover os pins salvos.",
  "Built-in Agents": "Agentes integrados",
  "Show Paperclip-managed built-in agent surfaces, including built-in roster badges, the Built-in agents tab, and built-in agent setup controls.": "Mostre as áreas de agentes integrados gerenciadas pelo Paperclip, incluindo badges da lista, a aba de agentes integrados e os controles de configuração.",
  Cases: "Casos",
  "Durable work products (blog posts, tweet storms…) that tasks create and iterate on. Adds the Cases tab and the agent case API.": "Produtos de trabalho duráveis (posts de blog, sequências de posts…) que as tarefas criam e aprimoram. Adiciona a aba Casos e a API de casos dos agentes.",
  "Turning Cases off hides the tab and blocks the case API; existing case data is kept.": "Desativar Casos oculta a aba e bloqueia a API de casos; os dados existentes são mantidos.",
  "Chat connectors": "Conectores de chat",
  "Connect agents to Slack, Discord, Microsoft Teams, and Telegram conversations.": "Conecte agentes a conversas do Slack, Discord, Microsoft Teams e Telegram.",
  "Turning this off hides experimental chat setup and connected-task controls. Existing chat connections keep running. AgentMail, GitHub review bots, and tool connectors are controlled separately.": "Desativar isso oculta a configuração experimental de chat e os controles de tarefas conectadas. As conexões de chat existentes continuam funcionando. AgentMail, bots de revisão do GitHub e conectores de ferramentas são controlados separadamente.",
  "Combined Inbox + Task List": "Caixa de entrada + lista de tarefas combinadas",
  "Fold Inbox into Tasks. One Tasks row carries the unread badge, and a Views menu reaches every inbox view (Mine, Unread, Blocked, Recent, Everything) and every task view.": "Incorpore a Caixa de entrada às Tarefas. Uma linha de Tarefas exibe o badge de não lidas, e um menu de visualizações acessa todas as visões da caixa de entrada e todas as visões de tarefas.",
  "Old Inbox links redirect to the matching view. Turning this off restores the separate Inbox; no data changes.": "Links antigos da Caixa de entrada redirecionam para a visão correspondente. Desativar isso restaura a Caixa de entrada separada; nenhum dado é alterado.",
  "Conference Room Chat": "Chat da sala de conferência",
  "Command/Ctrl+Enter to Submit": "Command/Ctrl+Enter para enviar",
  "Restore the previous keyboard shortcut for task replies and new tasks: Command/Ctrl+Enter submits, and Enter adds a new line.": "Restaure o atalho de teclado anterior para respostas e novas tarefas: Command/Ctrl+Enter envia, e Enter adiciona uma nova linha.",
  "Off by default: Enter submits, and Shift+Enter adds a new line.": "Desativado por padrão: Enter envia, e Shift+Enter adiciona uma nova linha.",
  Decisions: "Decisões",
  "Show the Decisions item in the main sidebar — the attention home that surfaces the tasks awaiting your input — while the surface is still being evaluated.": "Mostre o item Decisões na barra lateral principal — a área que reúne tarefas aguardando sua atenção — enquanto o recurso ainda é avaliado.",
  "Enable Environments": "Ativar ambientes",
  "Show environment management in company settings and allow project and agent environment assignment controls.": "Mostre o gerenciamento de ambientes nas configurações da empresa e permita atribuir ambientes a projetos e agentes.",
  "Enable External Objects": "Ativar objetos externos",
  "Detect external URLs in issues and show resolved status for pull requests, tickets, and other referenced work objects.": "Detecte URLs externas nas tarefas e mostre o status resolvido de pull requests, tickets e outros objetos de trabalho referenciados.",
  "Enable Isolated Workspaces": "Ativar espaços de trabalho isolados",
  "Show execution workspace controls in project configuration and allow isolated workspace behavior for new and existing task runs.": "Mostre controles de espaços de trabalho de execução na configuração de projetos e permita o comportamento isolado em execuções novas e existentes.",
  "Experimental fast responses": "Respostas rápidas experimentais",
  "Allow short acknowledgements while agents begin work. Configure them in Settings → Connections.": "Permita confirmações breves enquanto os agentes começam o trabalho. Configure-as em Configurações → Conexões.",
  "Experimental File Viewer": "Visualizador experimental de arquivos",
  "Show task detail controls for browsing and previewing workspace files relative to a task.": "Mostre controles nos detalhes da tarefa para navegar e visualizar arquivos do espaço de trabalho relacionados a uma tarefa.",
  "First task: propose with a plan document": "Primeira tarefa: propor com um documento de plano",
  "GitHub review bots": "Bots de revisão do GitHub",
  "Connect agents to GitHub with their own App identity to review pull requests and respond to issues.": "Conecte agentes ao GitHub com sua própria identidade de App para revisar pull requests e responder a tarefas.",
  "Google Workspace connector (Paperclip)": "Conector do Google Workspace (Paperclip)",
  "Grok Bot": "Bot Grok",
  "Memory connectors": "Conectores de memória",
  "Muse — Personal agent": "Muse — agente pessoal",
  "OpenAI Dot": "OpenAI Dot",
  "Paperclip Runner": "Paperclip Runner",
  "Simplified English Interactions": "Interações em inglês simplificado",
  "Status Cards": "Cards de status",
  "Streamlined UI": "Interface simplificada",
  Summaries: "Resumos",
  "Use Isolated Workspaces By Default": "Usar espaços de trabalho isolados por padrão",
  "Paperclip Developer Mode": "Modo de desenvolvimento do Paperclip",
  "Internal tools for developing, testing, and debugging Paperclip.": "Ferramentas internas para desenvolver, testar e depurar o Paperclip.",
  "Auto-Restart Dev Server When Idle": "Reiniciar o servidor de desenvolvimento quando ocioso",
  "Managed Environment Only": "Somente ambiente gerenciado",
  "Hide the local environment and run all agents in the platform-managed environment.": "Oculte o ambiente local e execute todos os agentes no ambiente gerenciado pela plataforma.",
  "Server Info Debug View": "Visualização de depuração das informações do servidor",
  "Smoke Lab": "Laboratório de fumaça",
  "Task Plan Decomposition": "Decomposição do plano da tarefa",
  Legacy: "Legado",
  "These features are going to be removed.": "Esses recursos serão removidos.",
  "Classic Task Interface": "Interface clássica de tarefas",
  "Goals Sidebar Link": "Link de Metas na barra lateral",
  Plugins: "Plugins",
  "Plugin Manager": "Gerenciador de plugins",
  "Install Plugin": "Instalar plugin",
  "Plugins are alpha.": "Os plugins estão em fase alfa.",
  "The plugin runtime and API surface are still changing. Expect breaking changes while this feature settles.": "O runtime e a superfície de API dos plugins ainda estão mudando. Espere mudanças incompatíveis enquanto esse recurso se estabiliza.",
  "Available Plugins": "Plugins disponíveis",
  Bundled: "Incluso",
  "First-party": "Oficial",
  "Not installed": "Não instalado",
  Install: "Instalar",
  "Installed Plugins": "Plugins instalados",
  "No plugins installed": "Nenhum plugin instalado",
  "Install a plugin to extend functionality.": "Instale um plugin para ampliar a funcionalidade.",
  Adapters: "Adaptadores",
  Appearance: "Aparência",
  Hiring: "Contratações",
  "Danger Zone": "Zona de risco",
  "Interaction governance": "Governança de interações",
  "Thread interactions are open by default:": "As interações em threads ficam abertas por padrão:",
  "in the organization — the board or any agent, including the one that asked — can respond. Narrow a kind only when you need to.":
    "na organização — o conselho ou qualquer agente, inclusive quem fez a solicitação, pode responder. Restrinja um tipo somente quando necessário.",
  "Thread interactions are open by default: Anyone in the organization — the board or any agent, including the one that asked — can respond. Narrow a kind only when you need to. Default policy is the audience new cards get when the requester does not ask for one; Cap narrows every request of that kind and can never widen one. Tool-approval confirmations always stay Human only.":
    "As interações em threads ficam abertas por padrão: qualquer pessoa da organização — o conselho ou qualquer agente, inclusive quem fez a solicitação — pode responder. Restrinja um tipo somente quando necessário. A política padrão define o público de novos cards quando o solicitante não pede um público específico; o limite restringe toda solicitação desse tipo e nunca pode ampliá-la. As confirmações de aprovação de ferramentas permanecem sempre restritas a pessoas.",
  KIND: "TIPO",
  Kind: "Tipo",
  "DEFAULT POLICY": "POLÍTICA PADRÃO",
  "Default policy": "Política padrão",
  CAP: "LIMITE",
  Cap: "Limite",
  "Suggested tasks": "Tarefas sugeridas",
  "Ask user questions": "Perguntas ao usuário",
  Confirmations: "Confirmações",
  "Checkbox confirmations": "Confirmações por caixa de seleção",
  "Item verdicts": "Vereditos de itens",
  "Connection requests": "Solicitações de conexão",
  "Anyone (default)": "Qualquer pessoa (padrão)",
  "No cap": "Sem limite",
  Anyone: "Qualquer pessoa",
  "Human only": "Somente pessoas",
  "the audience new cards get when the requester does not ask for one;": "o público de novos cards quando o solicitante não pede um público específico;",
  "is the audience new cards get when the requester does not ask for one;": "é o público de novos cards quando o solicitante não pede um público específico;",
  "narrows every request of that kind and can never widen one. Tool-approval confirmations always stay": "restringe toda solicitação desse tipo e nunca pode ampliá-la. As confirmações de aprovação de ferramentas permanecem sempre",
  "Tool-approval confirmations always stay": "As confirmações de aprovação de ferramentas permanecem sempre",
  "Anyone except creator": "Qualquer pessoa, exceto o criador",
  "New cards are open — the board or any agent can respond, including the one that asked.":
    "Novos cards ficam abertos — o conselho ou qualquer agente pode responder, inclusive quem fez a solicitação.",
  "A request keeps whatever audience it asks for.": "A solicitação mantém o público que pediu.",
  "New cards exclude the agent that created them, so the answer comes from someone else.":
    "Novos cards excluem o agente que os criou, então a resposta vem de outra pessoa.",
  "New cards wait for a person on the board. Agents are turned away.":
    "Novos cards aguardam uma pessoa do conselho. Agentes não podem responder.",
  "Even a card that asks for Anyone is narrowed to exclude its creator.":
    "Até um card que pede qualquer pessoa é restringido para excluir seu criador.",
  "Every card of this kind waits for a person, whatever it asked for.":
    "Todo card desse tipo aguarda uma pessoa, independentemente do público solicitado.",
  "Agent observability": "Observabilidade dos agentes",
  "Let agents tidy my inbox": "Permitir que agentes organizem minha caixa de entrada",
  "Choose whether the agents you manage may archive tasks out of your inbox on your behalf. You can undo any archive, and every agent archive is attributed in the task's properties.":
    "Escolha se os agentes que você gerencia podem arquivar tarefas da sua caixa de entrada em seu nome. Você pode desfazer qualquer arquivamento, e cada arquivamento feito por agente é identificado nas propriedades da tarefa.",
  "Any of my agents": "Qualquer um dos meus agentes",
  "Let any agent you manage archive tasks out of your inbox.": "Permitir que qualquer agente gerenciado por você arquive tarefas da sua caixa de entrada.",
  "Only chosen agents": "Somente agentes escolhidos",
  "Restrict inbox tidying to the agents you pick below.": "Restringir a organização da caixa de entrada aos agentes escolhidos abaixo.",
  Off: "Desativado",
  "Agents can never archive tasks from your inbox.": "Agentes nunca podem arquivar tarefas da sua caixa de entrada.",
  "Inbox agent archiving policy": "Política de arquivamento da caixa de entrada por agentes",
  "Agents allowed to tidy my inbox": "Agentes autorizados a organizar minha caixa de entrada",
  "Select agents": "Selecionar agentes",
  "You don’t manage any agents yet.": "Você ainda não gerencia nenhum agente.",
  "Send Codex, Claude Code and native OpenCode execution data to your observability service.":
    "Envie dados de execução do Codex, Claude Code e OpenCode nativo para seu serviço de observabilidade.",
  "Native limits apply. Exported records can contain task content, including prompts and tool output. A collector can forward records to multiple services.":
    "Os limites nativos se aplicam. Os registros exportados podem conter conteúdo de tarefas, incluindo prompts e saída de ferramentas. Um coletor pode encaminhar registros para vários serviços.",
  "Manage connections permission is required to configure agent observability.":
    "A permissão de gerenciamento de conexões é necessária para configurar a observabilidade dos agentes.",
  Destination: "Destino",
  "Custom OTLP": "OTLP personalizado",
  "Project ID": "ID do projeto",
  "API key": "Chave de API",
  "Tool output and content": "Saída e conteúdo das ferramentas",
  "Additional tool details (Claude Code)": "Detalhes adicionais das ferramentas (Claude Code)",
  "User prompts": "Prompts do usuário",
  "Assistant responses": "Respostas do assistente",
  "Enable export": "Ativar exportação",
  "Content capture": "Captura de conteúdo",
  "The agent harness receives these credentials. Use a key limited to telemetry ingestion.":
    "O ambiente de execução do agente recebe essas credenciais. Use uma chave limitada à ingestão de telemetria.",
  "Test connection": "Testar conexão",
  "Remove configuration": "Remover configuração",
  "Save configuration": "Salvar configuração",
  "Loading agent observability…": "Carregando observabilidade dos agentes…",
  "Agent observability settings could not be loaded.": "Não foi possível carregar as configurações de observabilidade dos agentes.",
  "Deployment and auth": "Implantação e autenticação",
  "Local trusted": "Local confiável",
  "Local trusted mode is optimized for a local operator. Browser requests run as local board context and no sign-in is required.":
    "O modo local confiável é otimizado para um operador local. As requisições do navegador usam o contexto local do conselho e não exigem login.",
  "Authenticated public mode requires sign-in for board access and is intended for public URLs.":
    "O modo público autenticado exige login para acessar o conselho e é destinado a URLs públicas.",
  "Authenticated private mode requires sign-in and is intended for LAN, VPN, or other private-network deployments.":
    "O modo privado autenticado exige login e é destinado a implantações em LAN, VPN ou outras redes privadas.",
  "AUTH READINESS": "PRONTIDÃO DA AUTENTICAÇÃO",
  "BOOTSTRAP STATUS": "STATUS DA CONFIGURAÇÃO INICIAL",
  "BOOTSTRAP INVITE": "CONVITE DE CONFIGURAÇÃO INICIAL",
  "Auth readiness": "Prontidão da autenticação",
  "Bootstrap status": "Status da configuração inicial",
  "Bootstrap invite": "Convite de configuração inicial",
  Ready: "Pronto",
  "Not ready": "Não pronto",
  "Setup required": "Configuração necessária",
  None: "Nenhum",
  "Censor username in logs": "Ocultar nome de usuário nos logs",
  "Toggle username log censoring": "Alternar ocultação do nome de usuário nos logs",
  "Hide the username segment in home-directory paths and similar operator-visible log output. Standalone username mentions outside of paths are not yet masked in the live transcript view. This is off by default.":
    "Oculte o trecho do nome de usuário em caminhos do diretório pessoal e em saídas de log semelhantes visíveis ao operador. Menções isoladas ao nome de usuário fora de caminhos ainda não são ocultadas na transcrição ao vivo. Isso fica desativado por padrão.",
  "Backup retention": "Retenção de backups",
  "Configure how long automatic database backups are retained. Backups run roughly every hour and are compressed with gzip. Within the daily window all backups are kept; beyond that, one backup per week and one per month are preserved.":
    "Configure por quanto tempo os backups automáticos do banco de dados serão mantidos. Os backups são executados aproximadamente a cada hora e compactados com gzip. Dentro da janela diária, todos são mantidos; depois dela, um backup por semana e um por mês são preservados.",
  Daily: "Diário",
  days: "dias",
  day: "dia",
  weeks: "semanas",
  week: "semana",
  months: "meses",
  month: "mês",
  Weekly: "Semanal",
  Monthly: "Mensal",
  "AI feedback sharing": "Compartilhamento de feedback de IA",
  "Control whether thumbs up and thumbs down votes can send the voted AI output to Paperclip Labs. Votes are always saved locally.":
    "Controle se os votos positivos e negativos podem enviar o resultado de IA votado para o Paperclip Labs. Os votos sempre são salvos localmente.",
  "Read our terms of service": "Leia nossos termos de serviço",
  "To retest the first-use prompt in local dev, remove the": "Para testar novamente o aviso de primeiro uso no desenvolvimento local, remova a",
  "key from the": "chave da linha",
  "JSON row for this instance, or set it back to": "registro JSON desta instância, ou redefina para",
  "Unset and": "Não definido e",
  "both mean no default has been chosen yet.": "ambos significam que nenhum padrão foi escolhido ainda.",
  "No default is saved yet. The next thumbs up or thumbs down choice will ask once and then save the answer here.":
    "Nenhum padrão foi salvo ainda. A próxima escolha de voto positivo ou negativo perguntará uma vez e salvará a resposta aqui.",
  "Always allow": "Permitir sempre",
  "Share voted AI outputs automatically.": "Compartilhar automaticamente os resultados de IA votados.",
  "Don't allow": "Não permitir",
  "Keep voted AI outputs local only.": "Manter localmente os resultados de IA votados.",
  "Sign out": "Sair",
  "Signing out...": "Saindo…",
  "Signing out…": "Saindo…",
  "Sign out of this Paperclip instance. You will be redirected to the login page.":
    "Saia desta instância do Paperclip. Você será redirecionado para a página de login.",
  "Organization name": "Nome da organização",
  "Description": "Descrição",
  Logo: "Logotipo",
  "Remove logo": "Remover logotipo",
  "Removing...": "Removendo…",
  "Removing…": "Removendo…",
  "Uploading logo...": "Enviando logotipo…",
  "Uploading logo…": "Enviando logotipo…",
  "Save changes": "Salvar alterações",
  "Saving...": "Salvando…",
  "Saving…": "Salvando…",
  Saved: "Salvo",
  "Archive organization": "Arquivar organização",
  "Archiving...": "Arquivando…",
  "Archiving…": "Arquivando…",
  "Already archived": "Já arquivada",
  "Invite people": "Convidar pessoas",
  Invites: "Convites",
  "Organization Members": "Membros da organização",
  "Pending human joins": "Entradas de pessoas pendentes",
  "Approve human": "Aprovar pessoa",
  "Reject human": "Rejeitar pessoa",
  Name: "Nome",
  Email: "E-mail",
  Role: "Função",
  Status: "Status",
  Action: "Ação",
  Unset: "Não definido",
  Edit: "Editar",
  Remove: "Remover",
  "Edit member": "Editar membro",
  "Organization role": "Função na organização",
  "Membership status": "Status da associação",
  Active: "Ativo",
  active: "ativo",
  Owner: "Proprietário",
  Admin: "Administrador",
  Member: "Membro",
  pending: "pendente",
  suspended: "suspenso",
  Pending: "Pendente",
  Suspended: "Suspenso",
  Cancel: "Cancelar",
  "Save member": "Salvar membro",
  "Remove member": "Remover membro",
  "Checking assigned tasks...": "Verificando tarefas atribuídas…",
  "Checking assigned tasks…": "Verificando tarefas atribuídas…",
  "Task reassignment": "Reatribuição de tarefas",
  "Leave unassigned": "Deixar sem atribuição",
  Humans: "Pessoas",
  Agents: "Agentes",
  "Loading profile...": "Carregando perfil…",
  "Loading profile…": "Carregando perfil…",
  "Failed to load profile.": "Falha ao carregar o perfil.",
  "Change photo": "Alterar foto",
  "Upload photo": "Enviar foto",
  "No email": "Sem e-mail",
  "Display name": "Nome de exibição",
  "Save profile": "Salvar perfil",
  "No organization selected. Select an organization from the switcher above.":
    "Nenhuma organização selecionada. Selecione uma organização no seletor acima.",
  "Select an organization to manage access.": "Selecione uma organização para gerenciar o acesso.",
  "Loading organization access…": "Carregando acesso da organização…",
  "You do not have permission to manage organization members.":
    "Você não tem permissão para gerenciar os membros da organização.",
  "Review pending join requests before they become active organization members.":
    "Revise as solicitações pendentes antes que se tornem membros ativos da organização.",
  "Unknown human requester": "Solicitante desconhecido",
  "No email available": "E-mail indisponível",
  "Invite metadata unavailable": "Metadados do convite indisponíveis",
  "No user memberships found for this organization yet.":
    "Ainda não há associações de usuários para esta organização.",
  "Member updated": "Membro atualizado",
  "Failed to update member": "Falha ao atualizar o membro",
  "Join request approved": "Solicitação de entrada aprovada",
  "Failed to approve join request": "Falha ao aprovar a solicitação de entrada",
  "Join request rejected": "Solicitação de entrada rejeitada",
  "Failed to reject join request": "Falha ao rejeitar a solicitação de entrada",
  "Member removed": "Membro removido",
  "Failed to remove member": "Falha ao remover o membro",
  "No agents match your search and selected status.": "Nenhum agente corresponde à pesquisa e ao status selecionado.",
  "No organizational hierarchy defined.": "Nenhuma hierarquia organizacional foi definida.",
  "Invalid reporting chain": "Cadeia de reporte inválida",
  "Last heartbeat": "Último sinal de atividade",
  "No recent agent runs.": "Não há execuções recentes de agentes.",
  "No runs yet": "Ainda não há execuções",
  "No tasks": "Nenhuma tarefa",
  "Search...": "Pesquisar…",
  "Search…": "Pesquisar…",
  "Command Palette": "Paleta de comandos",
  "Search for a command to run...": "Pesquise um comando para executar…",
  "Search agents": "Pesquisar agentes",
  "New Agent": "Novo agente",
  "Select an organization to view agents.": "Selecione uma organização para ver os agentes.",
  "Create your first agent to get started.": "Crie seu primeiro agente para começar.",
  "Set up": "Configurar",
  "Get Started": "Começar",
  "Recent Activity": "Atividade recente",
  "Recent Tasks": "Tarefas recentes",
  "No tasks yet.": "Ainda não há tarefas.",
  "Run Activity": "Atividade de execução",
  "Tasks by Priority": "Tarefas por prioridade",
  "Tasks by Status": "Tarefas por status",
  "Success Rate": "Taxa de sucesso",
  "Last 14 days": "Últimos 14 dias",
  "Month Spend": "Gasto no mês",
  "Tasks In Progress": "Tarefas em andamento",
  "Pending Approvals": "Aprovações pendentes",
  "Agents Enabled": "Agentes habilitados",
  "No organization selected": "Nenhuma organização selecionada",
  "Loading...": "Carregando…",
  "Loading…": "Carregando…",
  "Loading experimental settings...": "Carregando configurações experimentais…",
  "Loading experimental settings…": "Carregando configurações experimentais…",
  "Retry": "Tentar novamente",
  "Save": "Salvar",
  "Close": "Fechar",
  "Open": "Abrir",
  "Create": "Criar",
  "Delete": "Excluir",
  "Update": "Atualizar",
  "Apply": "Aplicar",
  "Clear": "Limpar",
  "Confirm": "Confirmar",
  "Continue": "Continuar",
  "Back": "Voltar",
  "Next": "Avançar",
};

const legacyDynamicFragments: Array<[string, string]> = [
  ["Default branch", "Branch padrão"],
  [" · Updated ", " · Atualizado "],
  [" · Project access", " · Acesso ao projeto"],
  [" · Importing skills…", " · Importando skills…"],
  ["More actions for ", "Mais ações para "],
  ["Installed skills from ", "Skills instaladas de "],
  ["Last attempt ", "Última tentativa "],
  ["Update ", "Atualizar "],
  ["Remove this repository from Sources. What should happen to its ", "Remover este repositório de Fontes. O que deve acontecer com suas "],
  [" imported ", " importadas "],
  ["Base image changed: ", "Imagem base alterada: "],
  ["The base image changed: ", "A imagem base mudou: "],
  [" · expires ", " · expira em "],
  ["Provider ", "Provedor "],
  [" ref ", " referência "],
  [" (Paperclip template ", " (modelo do Paperclip "],
  [" · captured ", " · capturada em "],
  [" · last used ", " · usada pela última vez em "],
  ["Not in use — ", "Não está em uso — "],
  ["Runs fall back to the base configuration until you relink this image or capture a new one.", "As execuções voltarão à configuração base até que você revincule esta imagem ou capture uma nova."],
  ["Capture a custom ", "Capturar imagem personalizada de "],
  [" image with your tools already logged in.", " com suas ferramentas já conectadas."],
  [" was deleted. Destroyed ", " foi excluído. Foram destruídos "],
  [" reusable sandboxes", " sandboxes reutilizáveis"],
  [" reusable sandbox", " sandbox reutilizável"],
  [" will be cleared.", " serão limpos."],
  [" selection will be cleared.", " seleção será limpa."],
  [" selections will be cleared.", " seleções serão limpas."],
  [" agent uses this environment as their default. Choose the environment those agents should be reassigned to.", " agente usa este ambiente como padrão. Escolha o ambiente para o qual esses agentes devem ser reatribuídos."],
  [" agents use this environment as their default. Choose the environment those agents should be reassigned to.", " agentes usam este ambiente como padrão. Escolha o ambiente para o qual esses agentes devem ser reatribuídos."],
  [" secret binding", " vínculo de segredo"],
  [" will be removed.", " serão removidos."],
  [" sandbox provider", " provedor de sandbox"],
  ["Vault: ", "Cofre: "],
  ["Reference: ", "Referência: "],
  ["Deployment default ", "Padrão da implantação "],
  [" is not configured.", " não está configurado."],
  [" health check failed: ", " falhou na verificação de saúde: "],
  ["Using selected provider vault. ", "Usando o cofre selecionado do provedor. "],
  [" · searching everywhere, not just ", " · pesquisando em todos os lugares, não apenas em "],
  ["Updated: ", "Atualizado: "],
  ["Last rotated: ", "Última rotação: "],
  ["Last resolved: ", "Última resolução: "],
  ["Usage (", "Uso ("],
  [" is referenced by ", " é referenciado por "],
  ["How ", "Como "],
  [" runs: harness, model and environment.", " executa: harness, modelo e ambiente."],
  [" may do without asking, and where.", " pode fazer sem pedir aprovação e onde."],
  [" did and everything done to ", " fez e tudo o que foi feito com "],
  ["Every execution of ", "Cada execução de "],
  [" spent, by model.", " gastou, por modelo."],
  ["Run was stopped, but updating the task failed: ", "A execução foi interrompida, mas a atualização da tarefa falhou: "],
  [" · via ", " · por meio de "],
  ["(in ", "(entrada "],
  [", out ", ", saída "],
  [", cached ", ", em cache "],
  [" run)", " execução)"],
  [" runs)", " execuções)"],
  ["Pause released, but ", "A pausa foi liberada, mas "],
  [" could not start. ", " não pôde começar. "],
  ["Pinned to ", "Fixada em "],
  [" · required", " · obrigatório"],
  [" · skills not supported", " · skills não suportadas"],
  ["Filed under ", "Arquivada em "],
  ["Save or discard your unsaved changes before you change the ", "Salve ou descarte suas alterações não salvas antes de mudar o "] ,
  ["No monthly budget set", "Nenhum orçamento mensal definido"],
  ["of ", "de "],
  ["Clear session for ", "Limpar sessão para "],
  [" issue touched by this run?", " tarefa afetada por esta execução?"],
  [" issues touched by this run?", " tarefas afetadas por esta execução?"],
  ["No assistants connected to ", "Nenhum assistente conectado a "],
  ["Connected as you · ", "Conectado como você · "],
  ["action is ", "ação está "],
  ["actions are ", "ações estão "],
  ["connection needs ", "conexão precisa de "],
  ["connections need ", "conexões precisam de "],
  [" connection?", " conexão?"],
  ["Read and write", "Leitura e escrita"],
  ["Read only", "Somente leitura"],
  ["Configure agents, projects and skills", "Configurar agentes, projetos e habilidades"],
  [" yet.", " ainda."],
  [" will inject the updated variables into future runs.", " injetará as variáveis atualizadas nas próximas execuções."],
  [" is ready for Skills Studio runs.", " está pronta para execuções do Skills Studio."],
  [" was removed from Skills Studio runs.", " foi removida das execuções do Skills Studio."],
  [" is now editable in the Paperclip workspace.", " agora pode ser editada no espaço de trabalho do Paperclip."],
  [" was removed from the organization skill library.", " foi removida da biblioteca de habilidades da organização."],
  [" was removed from Paperclip only.", " foi removido apenas do Paperclip."],
  [" — enabled for ", " — habilitada para "],
  [" is in the library but not enabled for any agent yet. Use \"Add to agent\" to enable it.", " está na biblioteca, mas ainda não foi habilitada para nenhum agente. Use \"Adicionar ao agente\" para habilitá-la."],
  ["Refresh ", "Atualizar "],
  ["Worktrees ·", "Worktrees ·"],
  ["Proposed a plan ·", "Propôs um plano ·"],
  ["Continued after steering ·", "Continuou após orientação ·"],
  ["failed to start:", "falhou ao iniciar:"],
  ["or drop/paste an image into the note", "ou solte/colei uma imagem na nota"],
  ["Couldn’t refresh ", "Não foi possível atualizar "],
  ["No connected apps found in ", "Nenhum app conectado foi encontrado em "],
  ["No connectors match", "Nenhum conector corresponde a"],
  ["No gateways match", "Nenhum gateway corresponde a"],
  ["No skills match", "Nenhuma habilidade corresponde a"],
  ["No tools match", "Nenhuma ferramenta corresponde a"],
  ["pending approval", "aprovação pendente"],
  ["join invite", "convite de entrada"],
  [" • default role ", " • função padrão "],
  ["Submitted ", "Enviado em "],
  ["Source IP ", "IP de origem "],
  ["made ", "fez "],
  [" updates to", " atualizações em"],
  ["Checking your connection status", "Verificando o status da sua conexão"],
  ["Couldn't load your connection status", "Não foi possível carregar o status da sua conexão"],
  ["Provider authorization uses ", "A autorização do provedor usa "],
  ["; credentials stay in this instance.", "; as credenciais permanecem nesta instância."],
  ["App and action permissions inside these tools are managed in ", "As permissões de aplicativos e ações dentro dessas ferramentas são gerenciadas em "],
  [" decides which tools are allowed", " define quais ferramentas são permitidas"],
  [" Change the profile under Advanced.", " Altere o perfil em Avançado."],
  [" is exposing its tools again.", " está expondo suas ferramentas novamente."],
  [" is off — every client goes silent.", " está desativado — todos os clientes ficam inativos."],
  ["click to copy", "clique para copiar"],
  ["action needs", "ação precisa"],
  ["actions need", "ações precisam"],
  ["new actions", "novas ações"],
  ["new action", "nova ação"],
  ["is active for all agents.", "está ativo para todos os agentes."],
  ["Refreshing apps…", "Atualizando apps…"],
  [" accounts", " contas"],
  [" of ", " de "],
  ["Connected ", "Conectados: "],
  ["Waiting for sign-in", "Aguardando login"],
  ["Needs sign-in", "Precisa de login"],
  ["Not verified", "Não verificado"],
  [" is back online.", " voltou a ficar online."],
  ["This action takes no inputs.", "Esta ação não recebe entradas."],
  ["Add the env key the process expects, for example ", "Adicione a chave de ambiente esperada pelo processo, por exemplo "],
  ["Refresh calls", "Atualizar chamadas"],
  ["Project access", "Acesso ao projeto"],
  ["Importing skills…", "Importando skills…"],
  ["No agents are available to test as.", "Não há agentes disponíveis para testar como."],
  ["Only agents you can assign tasks to are listed.", "Somente os agentes aos quais você pode atribuir tarefas são listados."],
  ["Search agents…", "Pesquisar agentes…"],
  ["No agents match.", "Nenhum agente corresponde."],
  ["Open the provider dashboard to complete this request.", "Abra o painel do provedor para concluir esta solicitação."],
  ["Execution:", "Execução:"],
  ["Request:", "Solicitação:"],
  ["Approval needed", "Aprovação necessária"],
  ["Authorization needed", "Autorização necessária"],
  ["Request declined", "Solicitação recusada"],
  ["Request cancelled", "Solicitação cancelada"],
  ["Resume permission", "Permissão para retomar"],
  ["Approve and resume", "Aprovar e retomar"],
  ["Decline", "Recusar"],
  ["Cancel request", "Cancelar solicitação"],
  ["This provider approval expired. Check the provider before starting a new action.", "A aprovação deste provedor expirou. Verifique o provedor antes de iniciar uma nova ação."],
  ["Preview", "Pré-visualização"],
  ["Open link", "Abrir link"],
  ["It didn't work.", "Não funcionou."],
  ["What to try", "O que tentar"],
  ["Sent for your OK.", "Enviado para sua aprovação."],
  ["Why this is off", "Por que está desativado"],
  ["Try as a different agent:", "Tentar como outro agente:"],
  ["Hide raw response", "Ocultar resposta bruta"],
  ["Show raw response", "Mostrar resposta bruta"],
  ["This action is new and hasn't been turned on yet.", "Esta ação é nova e ainda não foi ativada."],
  ["Approved · running", "Aprovada · em execução"],
  ["Denied — see Review for why", "Negada — veja a Revisão para saber o motivo"],
  ["Cancelled", "Cancelada"],
  ["Expired — send it again", "Expirada — envie novamente"],
  ["Cancel this request", "Cancelar esta solicitação"],
  ["This action is off and won't run.", "Esta ação está desativada e não será executada."],
  ["The app returned an error result.", "O app retornou um resultado de erro."],
  ["Worked. No data to show.", "Funcionou. Não há dados para exibir."],
  ["The original call was not repeated.", "A chamada original não foi repetida."],
  ["Paperclip allowed this call. The provider needs your input before it can continue.", "O Paperclip permitiu esta chamada. O provedor precisa da sua entrada antes de continuar."],
  ["After reconnecting, run this action again.", "Depois de reconectar, execute esta ação novamente."],
  ["Adjust the input above and try again.", "Ajuste a entrada acima e tente novamente."],
  ["Additional agent access", "Acesso adicional de agente"],
  ["These agents can use the listed actions in addition to the permissions above. Removing a grant restores their other permissions.", "Estes agentes podem usar as ações listadas além das permissões acima. Remover uma concessão restaura as outras permissões deles."],
  ["Removing…", "Removendo…"],
  ["Remove grant", "Remover concessão"],
  ["GitHub account", "Conta do GitHub"],
  ["Repositories", "Repositórios"],
  ["Add More Repos on GitHub", "Adicionar mais repositórios no GitHub"],
  ["Refresh access", "Atualizar acesso"],
  ["Accessible GitHub repositories", "Repositórios acessíveis do GitHub"],
  ["Private repository", "Repositório privado"],
  ["Which humans can use this credential?", "Quais pessoas podem usar esta credencial?"],
  ["Dedicated GitHub account", "Conta dedicada do GitHub"],
  ["Dedicated to one agent", "Dedicada a um agente"],
  ["Personal account", "Conta pessoal"],
  ["Personal identity", "Identidade pessoal"],
  ["Organization account", "Conta da organização"],
  ["Organization identity", "Identidade da organização"],
  ["All current and future repositories", "Todos os repositórios atuais e futuros"],
  ["Mixed access; scope varies by installation", "Acesso misto; o escopo varia conforme a instalação"],
  ["No repositories selected", "Nenhum repositório selecionado"],
  ["Just me", "Somente eu"],
  ["Only you can use this connection.", "Somente você pode usar esta conexão."],
  ["Humans I pick", "As pessoas que eu escolher"],
  ["Only selected people in your company.", "Somente as pessoas selecionadas na sua organização."],
  ["Any human in the company", "Qualquer pessoa da organização"],
  ["Anyone in your company can use this connection.", "Qualquer pessoa da sua organização pode usar esta conexão."],
  ["Choose people", "Escolher pessoas"],
  ["Who can use this identity", "Quem pode usar esta identidade"],
  ["All organization members", "Todos os membros da organização"],
  ["Anyone in this organization can have work use this identity.", "Qualquer pessoa desta organização pode usar esta identidade no trabalho."],
  ["Selected members", "Membros selecionados"],
  ["Only the people you choose.", "Somente as pessoas que você escolher."],
  ["PostHog access scope", "Escopo de acesso do PostHog"],
  ["PostHog uses its normal account defaults unless you narrow the optional controls below.", "O PostHog usa os padrões normais da conta, a menos que você restrinja os controles opcionais abaixo."],
  ["Sheets agents can use", "Planilhas que os agentes podem usar"],
  ["Agents can only use the sheets listed here.", "Os agentes só podem usar as planilhas listadas aqui."],
  ["No sheets are connected yet.", "Ainda não há planilhas conectadas."],
  ["Open sheet", "Abrir planilha"],
  ["Add another sheet before removing this one.", "Adicione outra planilha antes de remover esta."],
  ["Browser settings", "Configurações do navegador"],
  ["Allowed saved profiles", "Perfis salvos permitidos"],
  ["Loading profiles…", "Carregando perfis…"],
  ["Could not enable ", "Não foi possível habilitar "],
  [" now receives ", " agora recebe "],
  ["'s budget. Review the amount and try again.", " tem um orçamento inválido. Revise o valor e tente novamente."],
  ["Re-issue (isolated): ", "Reemitir (isolada): "],
  ["Pause the ", "Pausar "],
  ["Secret ", "Segredo "],
  ["User-provided secret ", "Segredo fornecido pelo usuário "],
  ["Service failed", "Falha no serviço"],
  ["An account already exists for ", "Já existe uma conta para "],
  [". Sign in below to continue with this invite.", ". Entre abaixo para continuar com este convite."],
  ["An account may already exist for ", "Talvez já exista uma conta para "],
  [". Try signing in instead.", ". Tente entrar."],
  ["Request to join ", "Solicitação para entrar em "],
  ["Your request is still awaiting approval. ", "Sua solicitação ainda aguarda aprovação. "],
  [" must approve your request to join.", " deve aprovar sua solicitação para entrar."],
  ["Ask them to visit ", "Peça que acesse "],
  ["Signed in as ", "Conectado como "],
  ["This account already belongs to ", "Esta conta já pertence a "],
  ["Granting your access to ", "Concedendo seu acesso a "],
  ["Join ", "Entrar em "],
  [" services running", " serviços em execução"],
  [" jobs available to run on demand.", " jobs disponíveis para execução sob demanda."],
  ["Proposed by ", "Proposto por "],
  ["while running", "durante a execução de"],
  [" · applies to ", " · aplica-se a "],
  ["view run", "ver execução"],
  [" changed since this was proposed", " mudou desde que isso foi proposto"],
  ["Options that require an unchanged target are disabled below.", "As opções que exigem um destino inalterado estão desativadas abaixo."],
  ["This cancels an entire issue tree", "Isso cancela uma árvore inteira de tarefas"],
  ["will be cancelled:", "serão canceladas:"],
  ["This issue and every sub-issue beneath it will be cancelled.", "Esta tarefa e todas as subtarefas abaixo dela serão canceladas."],
  ["Dismiss — no effects", "Dispensar — nenhuma ação será realizada"],
  ["The decision window closed", "A janela da decisão foi encerrada"],
  ["A target issue was cancelled before this was decided.", "Uma tarefa de destino foi cancelada antes que isso fosse decidido."],
  ["All target issues were completed before this was decided.", "Todas as tarefas de destino foram concluídas antes que isso fosse decidido."],
  ["No response before the expiry deadline.", "Nenhuma resposta antes do prazo de expiração."],
  ["The proposer was re-woken.", "O proponente foi reativado."],
  ["This decision was withdrawn by the proposer before a response.", "Esta decisão foi retirada pelo proponente antes de uma resposta."],
  ["Dismissed — no effects were run.", "Dispensada — nenhuma ação foi executada."],
  ["Some effects may already have been applied. Review the results before asking the proposer to re-propose.", "Alguns efeitos podem já ter sido aplicados. Revise os resultados antes de pedir que o proponente faça uma nova proposta."],
  ["Default: ", "Padrão: "],
  ["Affected: ", "Afetados: "],
  ["API alias ", "Alias da API "],
  [" · optional", " · opcional"],
  [" · Latest", " · Mais recente"],
  [" — operator only", " — somente operador"],
  [" log entries", " entradas de log"],
  ["Up to ", "Até "],
  ["Archive ", "Arquivar "],
  [" and move active assignments before hiding this user from assignment fields.", " e mova as atribuições ativas antes de ocultar este usuário dos campos de atribuição."],
  ["Plugin extensions unavailable: ", "Extensões de plugins indisponíveis: "],
  ["Env · ", "Ambiente · "],
  ["load the channels", "carregar os canais"],
  ["load the destinations", "carregar os destinos"],
  ["Confirm ", "Confirmar "],
  ["Categories: ", "Categorias: "],
];

export function translateLegacyPtBr(value: string): string {
  const trimmed = value.trim();
  const normalized = trimmed.replace(/\s+/g, " ");
  const direct =
    legacyPriorityPtBrMessages[trimmed] ??
    legacyPriorityPtBrMessages[normalized] ??
    legacyPtBrMessages[trimmed] ??
    legacyPtBrMessages[normalized] ??
    forkPtBrMessages[trimmed] ??
    forkPtBrMessages[normalized];
  if (direct) return direct;
  const connectionPurpose = normalized.match(/^What should this (.+) connection do\?$/);
  if (connectionPurpose) return `Qual é a finalidade da conexão ${connectionPurpose[1]}?`;
  const providerChat = normalized.match(/^People in (.+) can start and continue Paperclip tasks\.$/);
  if (providerChat) return `Pessoas no ${providerChat[1]} podem iniciar e continuar tarefas do Paperclip.`;
  const providerTool = normalized.match(/^Let agents use (.+) actions and data while they work\.$/);
  if (providerTool) return `Permita que os agentes usem as ações e os dados do ${providerTool[1]} durante o trabalho.`;
  const installedApps = normalized.match(/^Installed apps load tools into (.+)'s context on every run\. Permitted-only apps do not add context cost\.$/);
  if (installedApps) {
    return `Aplicativos instalados carregam ferramentas no contexto de ${installedApps[1]} em cada execução. Aplicativos apenas permitidos não adicionam custo de contexto.`;
  }
  const workerCrashes = normalized.match(/^(\d+) consecutive \/ (\d+) total$/);
  if (workerCrashes) return `${workerCrashes[1]} consecutivos / ${workerCrashes[2]} no total`;
  const quantity = normalized.match(/^(\d+) (day|days|week|weeks|month|months)$/);
  const sandboxCount = normalized.match(/^(\d+) sandbox$/);
  if (sandboxCount) return `${sandboxCount[1]} sandbox`;
  const bindingCount = normalized.match(/^(\d+) bindings?$/);
  if (bindingCount) return `${bindingCount[1]} vínculo${bindingCount[1] === "1" ? "" : "s"}`;
  const reassignAgents = normalized.match(/^Reassign (\d+) (agent|agents) to$/);
  if (reassignAgents) return `Reatribuir ${reassignAgents[1]} ${reassignAgents[2] === "agent" ? "agente" : "agentes"} a`;
  const destroySandboxes = normalized.match(/^Destroy (\d+) (sandbox|sandboxes) and delete$/);
  if (destroySandboxes) return `Destruir ${destroySandboxes[1]} ${destroySandboxes[2] === "sandbox" ? "sandbox" : "sandboxes"} e excluir`;
  const memberships = normalized.match(/^(\d+) active organization memberships$/);
  if (memberships) return `${memberships[1]} associações ativas em organizações`;
  const permissionGroup = normalized.match(/^(.+) permission$/);
  if (permissionGroup) return `${translateLegacyPtBr(permissionGroup[1])} — permissão`;
  const permissionOption = normalized.match(/^(.+): (Off|Ask|Allowed)$/);
  if (permissionOption) {
    const optionLabels: Record<string, string> = {
      Off: "Desativado",
      Ask: "Perguntar",
      Allowed: "Permitido",
    };
    return `${translateLegacyPtBr(permissionOption[1])}: ${optionLabels[permissionOption[2]]}`;
  }
  const budgetUtilization = normalized.match(/^Budget utilization: (\d+)% used$/);
  if (budgetUtilization) return `Uso do orçamento: ${budgetUtilization[1]}% utilizado`;
  const goalSubtree = normalized.match(/^(.+) subtree$/);
  if (goalSubtree) return `Subárvore de ${goalSubtree[1]}`;
  const selectColor = normalized.match(/^Select color (.+)$/);
  if (selectColor) return `Selecionar a cor ${selectColor[1]}`;
  const connectThrough = normalized.match(/^Connect (.+) through (.+)$/);
  if (connectThrough) return `Conectar ${connectThrough[1]} por meio de ${connectThrough[2]}`;
  const reconnectProvider = normalized.match(/^Reconnect (.+)$/);
  if (reconnectProvider) return `Reconectar ${reconnectProvider[1]}`;
  const connectProvider = normalized.match(/^Connect (.+)$/);
  if (connectProvider) return `Conectar ${connectProvider[1]}`;
  const manageProvider = normalized.match(/^Manage this (.+) connection\.$/);
  if (manageProvider) return `Gerenciar esta conexão de ${manageProvider[1]}.`;
  const useProvider = normalized.match(/^Paperclip will use (.+) on your behalf\.$/);
  if (useProvider) return `O Paperclip usará ${useProvider[1]} em seu nome.`;
  const resumeProvider = normalized.match(/^Your (.+) setup is ready to resume\.$/);
  if (resumeProvider) return `A configuração de ${resumeProvider[1]} está pronta para ser retomada.`;
  const finishProviderSignIn = normalized.match(/^Finish signing in to (.+)$/);
  if (finishProviderSignIn) return `Conclua o login em ${finishProviderSignIn[1]}`;
  const providerRejected = normalized.match(/^(.+) couldn’t connect$/);
  if (providerRejected) return `${providerRejected[1]} não conseguiu conectar`;
  const connectedActions = normalized.match(/^Connected(?: as (.+))? · (\d+) actions available$/);
  if (connectedActions) return `Conectado${connectedActions[1] ? ` como ${connectedActions[1]}` : ""} · ${connectedActions[2]} ações disponíveis`;
  const providerCredentialHelp = normalized.match(/^Check or replace the credentials from (.+), then reconnect\. Your agent access and tool choices are preserved\.$/);
  if (providerCredentialHelp) return `Verifique ou substitua as credenciais de ${providerCredentialHelp[1]} e reconecte. O acesso do agente e suas escolhas de ferramentas serão preservados.`;
  const selectedAgents = normalized.match(/^(\d+) (agent|agents) selected$/);
  if (selectedAgents) {
    return `${selectedAgents[1]} ${selectedAgents[2] === "agent" ? "agente" : "agentes"} selecionado${selectedAgents[2] === "agent" ? "" : "s"}`;
  }
  const resultSummary = normalized.match(/^(\d+) results$/);
  if (resultSummary) return `${resultSummary[1]} resultado${resultSummary[1] === "1" ? "" : "s"}`;
  const runReference = normalized.match(/^Run (.+)$/);
  if (runReference) return `Execução ${runReference[1]}`;
  const failedRecently = normalized.match(/^(\d+) failed in the last 2 days$/);
  if (failedRecently) return `${failedRecently[1]} falha${failedRecently[1] === "1" ? "" : "s"} nos últimos 2 dias`;
  const editFile = normalized.match(/^Edit (.+)$/);
  if (editFile) return `Editar ${editFile[1]}`;
  const stopEditingFile = normalized.match(/^Stop editing (.+)$/);
  if (stopEditingFile) return `Parar edição de ${stopEditingFile[1]}`;
  const deleteFile = normalized.match(/^Delete (.+)$/);
  if (deleteFile) return `Excluir ${deleteFile[1]}`;
  const installOnAgent = normalized.match(/^Install (.+) on (.+)$/);
  if (installOnAgent) return `Instalar ${installOnAgent[1]} em ${installOnAgent[2]}`;
  const changesToApply = normalized.match(/^(\d+) change\(s\) to apply$/);
  if (changesToApply) return `${changesToApply[1]} alteraç${changesToApply[1] === "1" ? "ão" : "ões"} para aplicar`;
  const savingProgress = normalized.match(/^Saving: (.+)…$/);
  if (savingProgress) return `Salvando: ${savingProgress[1]}…`;
  const activeFilterSummary = normalized.match(/^(\d+) filters active$/);
  if (activeFilterSummary) return `${activeFilterSummary[1]} filtro${activeFilterSummary[1] === "1" ? "" : "s"} ativo${activeFilterSummary[1] === "1" ? "" : "s"}`;
  const assignedOpenTasks = normalized.match(/^(\d+) open assigned tasks?$/);
  if (assignedOpenTasks) return `${assignedOpenTasks[1]} tarefa${assignedOpenTasks[1] === "1" ? "" : "s"} atribuída${assignedOpenTasks[1] === "1" ? "" : "s"} em aberto`;
  const moreTasks = normalized.match(/^(\d+) more tasks?$/);
  if (moreTasks) return `${moreTasks[1]} outra${moreTasks[1] === "1" ? " tarefa" : "s tarefas"}`;
  const lastLogEntries = normalized.match(/^Last (\d+) log entries$/);
  if (lastLogEntries) return `Últimas ${lastLogEntries[1]} entradas de log`;
  const runningSubtasks = normalized.match(/^(\d+) sub-task\(s\) running below$/);
  if (runningSubtasks) return `${runningSubtasks[1]} subtarefa(s) em execução abaixo`;
  const expiring = normalized.match(/^Expires in (.+)$/);
  if (expiring) return `Expira em ${expiring[1]}`;
  const attentionCount = normalized.match(/^(\d+) needs attention$/);
  if (attentionCount) return `${attentionCount[1]} ${attentionCount[1] === "1" ? "precisa" : "precisam"} de atenção`;
  const changedTargets = normalized.match(/^(\d+) target(?:s)? changed since this was proposed$/);
  if (changedTargets) return `${changedTargets[1]} destino${changedTargets[1] === "1" ? "" : "s"} mudou${changedTargets[1] === "1" ? "" : "ram"} desde que isso foi proposto`;
  const setDecisionStatus = normalized.match(/^Set (.+) to (.+)$/);
  if (setDecisionStatus) return `Definir ${setDecisionStatus[1]} como ${translateLegacyPtBr(setDecisionStatus[2])}`;
  const skippedExecution = normalized.match(/^Skipped (.+) — target changed since proposal$/);
  if (skippedExecution) return `${skippedExecution[1]} ignorado — o destino mudou desde a proposta`;
  const failedExecution = normalized.match(/^Failed on (.+) — (.+)$/);
  if (failedExecution) return `Falha em ${failedExecution[1]} — ${translateLegacyPtBr(failedExecution[2])}`;
  const runningExecution = normalized.match(/^Running on (.+)…$/);
  if (runningExecution) return `Em execução em ${runningExecution[1]}…`;
  const commentedExecution = normalized.match(/^Commented on (.+)$/);
  if (commentedExecution) return `Comentou em ${commentedExecution[1]}`;
  const createdExecution = normalized.match(/^Created (.+)$/);
  if (createdExecution) return `Criou ${createdExecution[1]}`;
  const reassignedExecution = normalized.match(/^Reassigned (.+)$/);
  if (reassignedExecution) return `Reatribuiu ${reassignedExecution[1]}`;
  const removedBlockers = normalized.match(/^Removed (\d+) blockers? from (.+)$/);
  if (removedBlockers) return `Removeu ${removedBlockers[1]} bloqueador${removedBlockers[1] === "1" ? "" : "es"} de ${removedBlockers[2]}`;
  const cancelledIssues = normalized.match(/^Cancelled (\d+) issues? under (.+)$/);
  if (cancelledIssues) return `Cancelou ${cancelledIssues[1]} tarefa${cancelledIssues[1] === "1" ? "" : "s"} em ${cancelledIssues[2]}`;
  const appliedEffect = normalized.match(/^Applied effect on (.+)$/);
  if (appliedEffect) return `Aplicou efeito em ${appliedEffect[1]}`;
  const commentOn = normalized.match(/^Comment on (.+)$/);
  if (commentOn) return `Comentar em ${commentOn[1]}`;
  const createIssue = normalized.match(/^Create issue “(.+)” under (.+)$/);
  if (createIssue) return `Criar tarefa “${createIssue[1]}” em ${createIssue[2]}`;
  const reassign = normalized.match(/^Reassign (.+)$/);
  if (reassign) return `Reatribuir ${reassign[1]}`;
  const unblock = normalized.match(/^Unblock (.+) — remove (\d+) blockers?$/);
  if (unblock) return `Desbloquear ${unblock[1]} — remover ${unblock[2]} bloqueador${unblock[2] === "1" ? "" : "es"}`;
  const cancelTree = normalized.match(/^Cancel (.+) and its sub-tree \((\d+) issues?\)$/);
  if (cancelTree) return `Cancelar ${cancelTree[1]} e sua subárvore (${cancelTree[2]} tarefa${cancelTree[2] === "1" ? "" : "s"})`;
  const pendingCount = normalized.match(/^(\d+) pending$/);
  if (pendingCount) return `${pendingCount[1]} pendente${pendingCount[1] === "1" ? "" : "s"}`;
  const reassignedTasks = normalized.match(/^(\d+) assigned tasks? cleaned up\.$/);
  if (reassignedTasks) return `${reassignedTasks[1]} tarefa${reassignedTasks[1] === "1" ? "" : "s"} atribuída${reassignedTasks[1] === "1" ? "" : "s"} reorganizada${reassignedTasks[1] === "1" ? "" : "s"}.`;
  const foundActions = normalized.match(/^Found (\d+) (action|actions)$/);
  if (foundActions) {
    return foundActions[2] === "action"
      ? `Encontrada ${foundActions[1]} ação`
      : `Encontradas ${foundActions[1]} ações`;
  }
  const reviewActions = normalized.match(/^Review (\d+) new (action|actions)$/);
  if (reviewActions) {
    return reviewActions[2] === "action"
      ? `Revisar ${reviewActions[1]} nova ação`
      : `Revisar ${reviewActions[1]} novas ações`;
  }
  const actionsNeedApproval = normalized.match(/^(\d+) new (action|actions) need your OK\.$/);
  if (actionsNeedApproval) {
    return actionsNeedApproval[2] === "action"
      ? `${actionsNeedApproval[1]} nova ação precisa da sua aprovação.`
      : `${actionsNeedApproval[1]} novas ações precisam da sua aprovação.`;
  }
  const newSkills = normalized.match(/^(\d+) new (skill|skills) available$/);
  if (newSkills) {
    return newSkills[2] === "skill"
      ? `${newSkills[1]} nova habilidade disponível`
      : `${newSkills[1]} novas habilidades disponíveis`;
  }
  const importSkills = normalized.match(/^Import (\d+) (skill|skills)$/);
  if (importSkills) {
    return `Importar ${importSkills[1]} habilidade${importSkills[2] === "skill" ? "" : "s"}`;
  }
  const importingSkills = normalized.match(/^Importing (\d+) skill\(s\)$/);
  if (importingSkills) return `Importando ${importingSkills[1]} habilidade(s)`;
  const skillsFound = normalized.match(/^(\d+) skill\(s\) found$/);
  if (skillsFound) return `${skillsFound[1]} habilidade(s) encontrada(s)`;
  const checkedSkills = normalized.match(/^(\d+) of (\d+) checked$/);
  if (checkedSkills) return `${checkedSkills[1]} de ${checkedSkills[2]} verificadas`;
  const selectedOrChecked = normalized.match(/^(\d+) (selected|checked)$/);
  if (selectedOrChecked) return `${selectedOrChecked[1]} ${selectedOrChecked[2] === "selected" ? "selecionadas" : "verificadas"}`;
  const importWarnings = normalized.match(/^(\d+) import warning\(s\)$/);
  if (importWarnings) return `${importWarnings[1]} aviso(s) de importação`;
  const secretSummary = normalized.match(/^(\d+) (secret|secrets)(?: · (\d+) (folder|folders))?$/);
  if (secretSummary) {
    const secrets = `${secretSummary[1]} segredo${secretSummary[2] === "secret" ? "" : "s"}`;
    if (!secretSummary[3]) return secrets;
    return `${secrets} · ${secretSummary[3]} pasta${secretSummary[4] === "folder" ? "" : "s"}`;
  }
  const reusableSandboxDestruction = normalized.match(/^(\d+) reusable (sandbox|sandboxes) will be destroyed; the workspaces holding them stay open and provision a fresh sandbox on their next run\.$/);
  if (reusableSandboxDestruction) {
    return reusableSandboxDestruction[2] === "sandbox"
      ? `${reusableSandboxDestruction[1]} sandbox reutilizável será destruído; os espaços de trabalho que o contêm permanecerão abertos e provisionarão um sandbox novo na próxima execução.`
      : `${reusableSandboxDestruction[1]} sandboxes reutilizáveis serão destruídos; os espaços de trabalho que os contêm permanecerão abertos e provisionarão um sandbox novo na próxima execução.`;
  }
  const sandboxLeases = normalized.match(/^(\d+) sandbox (lease|leases)$/);
  if (sandboxLeases) {
    return `${sandboxLeases[1]} concessão${sandboxLeases[2] === "lease" ? "" : "ões"} de sandbox`;
  }
  const draftSummary = normalized.match(/^Accepted (\d+) drafts? and skipped (\d+)$/);
  if (draftSummary) {
    return `Aceitos ${draftSummary[1]} rascunho${draftSummary[1] === "1" ? "" : "s"} e ignorados ${draftSummary[2]}`;
  }
  const decisionSummary = normalized.match(/^Applied (\d+) decisions?$/);
  if (decisionSummary) {
    return `Aplicada${decisionSummary[1] === "1" ? "" : "s"} ${decisionSummary[1]} decisão${decisionSummary[1] === "1" ? "" : "ões"}`;
  }
  const skillsAdded = normalized.match(/^(\d+) skills? added\.$/);
  if (skillsAdded) return `${skillsAdded[1]} habilidade${skillsAdded[1] === "1" ? " adicionada" : "s adicionadas"}.`;
  const skillsFiled = normalized.match(/^(\d+) skills? filed\.$/);
  if (skillsFiled) return `${skillsFiled[1]} habilidade${skillsFiled[1] === "1" ? " arquivada" : "s arquivadas"}.`;
  const agentsAttached = normalized.match(/^(\d+) agent\(s\) attached\.$/);
  if (agentsAttached) return `${agentsAttached[1]} agente(s) anexado(s).`;
  const routineCount = normalized.match(/^(\d+) routine(?:s)?$/);
  if (routineCount) return `${routineCount[1]} rotina${routineCount[1] === "1" ? "" : "s"}`;
  const secretStatus = normalized.match(/^(Secret|User-provided secret) (active|inactive|revoked|paused|pending)$/);
  if (secretStatus) {
    const statusLabels: Record<string, string> = {
      active: "ativo",
      inactive: "inativo",
      revoked: "revogado",
      paused: "pausado",
      pending: "pendente",
    };
    const prefix = secretStatus[1] === "Secret" ? "Segredo" : "Segredo fornecido pelo usuário";
    return `${prefix} ${statusLabels[secretStatus[2]]}`;
  }
  let dynamicTranslation = normalized;
  for (const [source, target] of legacyDynamicFragments) {
    if (dynamicTranslation.includes(source)) dynamicTranslation = dynamicTranslation.split(source).join(target);
  }
  if (dynamicTranslation !== normalized) return dynamicTranslation;
  if (!quantity) return value;
  const [, count, unit] = quantity;
  const units: Record<string, string> = {
    day: "dia",
    days: "dias",
    week: "semana",
    weeks: "semanas",
    month: "mês",
    months: "meses",
  };
  return `${count} ${units[unit]}`;
}

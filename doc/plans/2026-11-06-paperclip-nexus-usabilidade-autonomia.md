# Plano: Paperclip + Nexus para a UltraHub

**Data:** 2026-11-06  
**Estado:** plano ampliado; a frente de marketing, criação e comercial foi configurada em 2026-11-06, enquanto a ponte Nexus e os conectores externos permanecem etapas planejadas.  
**Objetivo:** permitir que o Maestro descreva uma missão uma vez, acompanhe decisões e resultados em português e obtenha execução elástica, verificável e recuperável dentro da autoridade já concedida. O mesmo fluxo deve atender desenvolvimento, operação de produção, marketing, criação e comercial.

## Diagnóstico observado

- A API local do Paperclip 0.3.1 respondeu com saúde `ok` em 2026-11-06. A empresa `ULT` tinha 16 identidades no início: Autopilot e 15 especialistas. Após a ampliação, tem 25: Autopilot e 24 especialistas. Os nove novos perfis estão pausados. O teste de ambiente de `uh-marketing` retornou `ai_connection_default_missing` e “Connect an account and choose your personal default”; esse é um bloqueio confirmado para o perfil testado. O estado `verifying` dos antigos ainda pode ter causas adicionais e precisa de diagnóstico próprio.
- A UltraHub tinha zero conexões e zero pools de IA salvos. Os agentes usam `paperclip_runner`, provedor `codex`, modelo `gpt-5.6-sol`, sem `aiConnectionId`. Isso mostra ausência de roteamento Nexus nessa configuração; não prova sozinho a causa do erro de verificação.
- A galeria da instalação expõe 81 apps, mas não havia conector de ferramentas, endpoint de chat ou plugin instalado para a UltraHub; apenas o ambiente local estava ativo. Catálogo não significa integração operacional.
- Foram importadas 13 skills públicas de marketing com fonte GitHub presa ao commit `88c79f6528a9347420e57ceb1fff9a60de651768`, mais sete procedimentos locais já existentes; criadas três skills UltraHub; configurados os nove agentes e registrado o teste sintético `ULT-12` com MP4 exportado. Essa prova confirma configuração e produção local de mídia, mas não execução autônoma por agente nem publicação.
- O Nexus local listou seis perfis em quatro provedores (`codex`, `deepseek`, `opencode`, `openrouter`). Perfil cadastrado não prova disponibilidade, quota ou edição efetiva.
- O preflight do Orquestrador marcou o checkout como `BLOCKED`: o mandato remoto estava ativo até 2026-12-05, mas a inspeção por nome considerou cinco caminhos sensíveis e gerou `sensitive-workspace-entry`/`remote-provider-not-authorized`. A classificação precisa permitir pacotes de contexto comprovadamente seguros sem abrir o acesso a segredos.
- A busca no código de `server/src`, `packages/adapters`, `packages/paperclip-runner/src` e `ui/src` não encontrou integração explícita com `Nexus`. O dashboard já detecta todos os agentes pausados, mas encaminha genericamente à lista de agentes (`ui/src/pages/Dashboard.tsx:67`, `ui/src/pages/Dashboard.tsx:366`). A camada PT-BR em andamento cobre inicialmente navegação, dashboard e agentes (`docs/pt-br-fork.md`).
- O repositório local tem apenas o remoto `upstream` de `paperclipai/paperclip`; nenhum envio faz parte deste plano. Mudanças locais de tradução preexistentes devem ser preservadas.

## Decisão de arquitetura

**Paperclip** guarda empresa, missão, tarefas, dependências, pareceres, aprovações e auditoria. **Autopilot** continua o único coordenador da missão. **Nexus** escolhe e executa rotas de modelos em unidades curtas; não cria outra fila de missões. **Plugins/adaptadores** transportam execução com política; **MCP/conectores** expõem ferramentas com credenciais e escopos próprios; **CI/CD** decide a publicação real. Cada edição acontece em uma worktree Git com arquivos atribuídos. As revisões pertencem a identidades diferentes do autor. O Maestro só recebe decisões que ultrapassem o mandato vigente.

Uma tarefa do Paperclip tem um responsável principal (`AGENTS.md:115`; `doc/SPEC-implementation.md:44`). Paralelismo de edição deve usar subtarefas vinculadas, com ownership disjunto, em vez de múltiplos escritores no mesmo arquivo. O integrador valida o diff e consolida o resultado antes das revisões. Nos projetos sujeitos ao PUE-UH, a ponte respeita o Execution Envelope da unidade; o Nexus não o substitui.

**Escolha da ponte:** fazer uma prova curta da topologia real. Se o processo Paperclip alcança o binário Nexus e as worktrees de forma isolada, usar um adaptador externo versionado. Se não alcança, usar um executor local controlado por HTTP com autenticação e escopo de tarefa, mantendo a lógica de Nexus fora do servidor Paperclip. O adaptador `process` serve para protótipo limitado, pois seu retorno é texto simples. Não ativar `opencode_local` em modo irrestrito para simular a política de arquivos do `nexus headless`; a configuração padrão de permissões precisa ser verificada antes de qualquer uso autônomo. A documentação do Paperclip confirma os adaptadores externos e a diferença de fidelidade de eventos entre runner e `process`.

## Sequência de implementação

### P0 — Recuperar uma execução real e o mandato persistente

1. Registrar uma linha de base de um agente: configuração não secreta, teste de runtime, mensagem de falha, disponibilidade do CLI no ambiente efetivo, acesso ao workspace e vínculo de conta. O novo `uh-marketing` falhou por `ai_connection_default_missing`; verificar se a mesma causa atinge os 16 perfis anteriores antes de alterá-los (`server/src/services/agent-harness-verification.ts`; `server/src/modules/agent-lifecycle/application/failure.ts`; `ui/src/pages/AgentDetail.tsx:925`).
2. Conectar ou vincular uma conta já autorizada pelo fluxo suportado do Paperclip, ou corrigir o ambiente de execução, conforme o diagnóstico. Comprovar resposta e comentário em uma tarefa sintética antes de replicar a configuração. Não copiar tokens entre homes Nexus/Paperclip nem contratar rota paga (`server/src/routes/ai-connections.ts:221`; `ui/src/components/ai-connections/AiConnectionManagement.tsx`).
3. Ajustar o preflight/context pack para separar nomes de pastas de conteúdo sensível. Testar que código e testes permitidos podem ser empacotados e que `.env`, credenciais e dados reais continuam excluídos. Mostrar o motivo exato do bloqueio e o próximo passo. Manter a validade/revogação do mandato como autoridade; não solicitar nova autorização enquanto ativo e aplicável (`/home/matheusmuniz/.orquestrador/rules.md`, seção “Mandato persistente”; `/home/matheusmuniz/.orquestrador/PERSISTENCE.md`).

**Aceite P0:** um agente atinge `ready` e conclui uma tarefa sintética com recibo; o preflight aprova um pacote seguro e rejeita um arquivo sensível real; nenhuma repetição de autorização ocorre dentro do mandato; nenhuma rota paga é usada. Só então ampliar para os demais perfis necessários.

### P1 — Ponte Paperclip ↔ Nexus com provas de execução

4. Implementar a ponte escolhida com contrato mínimo: `companyId`, tarefa, execução, versão do contexto, perfil/provedor/modelo, worktree, ownership, política de ferramentas, custo permitido e chave de idempotência. Propagar cancelamento, timeout e resultados sem incluir prompt, segredo ou transcrição bruta no recibo. Manter autorização, isolamento entre empresas, orçamento e locks sob os serviços atuais do Paperclip (`packages/adapters/AUTHORING.md`; `server/src/services/heartbeat.ts`; `server/src/services/issues.ts`).
5. Executar `nexus headless`/manifesto por subtarefa, e aceitar um editor somente após resposta, evento de edição e diff contido no ownership. Integrador confere alterações e validações; pareceres ficam em tarefas/revisões separadas. Definir fallback apenas entre rotas gratuitas já autorizadas; em 429 ou quota esgotada, aguardar ou reduzir o roster sem consumir uma rota paga (`/home/matheusmuniz/.orquestrador/NEXUS_MULTI_API_ORCHESTRATION.md`).
6. Registrar estado legível no Paperclip: planejado, em fila, executando, aguardando quota, bloqueado, em revisão, correção e concluído; cada estado aponta para a tarefa, recibo, diff/artefato e próxima ação. Não contar um perfil conectado como agente produtivo.

**Aceite P1:** uma tarefa sintética com duas lanes disjuntas produz dois diffs atribuíveis, integra sem conflito de ownership e continua rastreável após reinício; uma tentativa 429 usa somente fallback permitido ou fica em espera; cancelamento não produz escrita tardia. A ponte desabilitada preserva o fluxo atual do Paperclip.

### P2 — Uma entrada de missão e verificações por impacto

7. Criar uma entrada única em PT-BR para objetivo, projeto, restrições, entregável, critérios de aceite, limite de custo e alçadas. Antes de iniciar, apresentar a decomposição proposta, os responsáveis, as verificações aplicáveis e o que exigirá decisão humana. Autopilot transforma a missão em tarefas e dependências, sem iniciar trabalho fora da autorização (`ui/src/pages/Issues.tsx`; `ui/src/pages/IssueDetail.tsx`; `server/src/routes/issues.ts`).
8. Usar os 15 contratos existentes para selecionar apenas as áreas afetadas. Para interface: PO/UX e verificações de acessibilidade, responsividade e visual conforme impacto. Para educação: Pedagogo, Editorial, Linguagem Inclusiva e Avaliador conforme escopo. Produção e revisão da mesma versão usam identidades distintas. Parecer registra versão, critério, evidência, resultado e responsável.
9. Configurar **etapas de revisão distintas ou tarefas dependentes** para cada parecer obrigatório. A versão atual do schema usa `approvalsNeeded: 1` por etapa (`packages/shared/src/validators/issue.ts:401`), então vários participantes na mesma etapa não exigem todos os pareceres. Uma falha fundamentada retorna ao autor e revalida só as dimensões afetadas; não fixar `maxReviewRounds: 1`, pois isso escalaria a primeira correção ao humano. Paperclip já registra decisões e bloqueia o fechamento quando a etapa de revisão vigente falta (`server/src/services/issue-review-policy.ts`; `server/src/services/required-quality-review.ts`).

**Aceite P2:** uma missão de interface e uma unidade educacional sintéticas percorrem autoria e revisões pertinentes; uma falha volta ao responsável; a tarefa não fecha sem qualquer parecer obrigatório; um parecer anterior continua vinculado à versão examinada, e só as dimensões alteradas são revalidadas.

### P3 — Operação clara, recuperação e melhoria contínua

10. Transformar o dashboard em visão de missão: “o que está em andamento”, “o que foi entregue”, “o que está impedido”, “o que preciso decidir” e “quanto custou”. O estado “todos pausados” deve abrir o diagnóstico da conexão/execução e oferecer a ação correta, em vez de somente abrir a lista de agentes. Uma gaveta de operação mostra saúde e quota observadas das rotas Nexus, fallback escolhido, recibo e diff, sem obrigar troca de interface. Detalhes de provider, logs e IDs ficam nessa camada avançada (`ui/src/pages/Dashboard.tsx`; `ui/src/pages/Agents.tsx`; `ui/src/components/ai-connections/`).
11. Concluir em PT-BR o percurso crítico: criar missão, conectar conta, entender bloqueio, acompanhar execução, ler parecer, pedir correção e aceitar. Usar as chaves de i18n existentes, preservar o fallback e verificar legibilidade, teclado e layout móvel (`ui/src/i18n/`; `docs/pt-br-fork.md`; `DESIGN.md`).
12. Recuperar automaticamente apenas falhas transitórias dentro do mandato: reconexão, quota, retry com backoff, lease, retomada idempotente e limpeza de temporários próprios. Falhas de autenticação, custo desconhecido, dado sensível e decisões reservadas ficam visíveis com uma ação clara. Guardar recibos, evidências e histórico; não manter agentes permanentemente ativos (`server/src/services/heartbeat/`; `server/src/services/recovery/`).

**Aceite P3:** o Maestro identifica em uma tela o estado e a próxima ação de uma missão; o percurso crítico é PT-BR; uma falha transitória retoma sem duplicar trabalho; falha material fica explicitamente bloqueada; limpeza não remove evidências nem código.

## Extensão: plataforma de integrações e crescimento da UltraHub

### Estado real e ordem de adoção

| Camada | Estado em 2026-11-06 | Próximo passo concreto | Critério de funcionamento |
|---|---|---|---|
| Coordenação e especialistas | 24 especialistas + Autopilot; nove novos cadastrados, pausados | Diagnosticar/verificar o runtime e testar uma tarefa pequena | Agente responde, produz artefato/parecer versionado e não depende de sessão permanente |
| Modelos e Nexus | Seis perfis locais cadastrados; Paperclip ainda roteia para Codex | Prova de topologia e ponte P1 com adaptador versionado | Recibo associa tarefa, perfil, custo, diff e resultado; fallback obedece ao mandato |
| Sandbox | Apenas ambiente local; nenhum plugin instalado | Testar isolamento local por tarefa e plugin gratuito compatível, se houver | Bloqueio real de rede/arquivos fora do escopo, limpeza e retomada testados |
| MCP e ferramentas | Galeria com 81 apps; zero conexões ativas | Habilitar gateway por tarefa, com escopos e recibos | Uma ação de leitura e uma escrita sintética autorizada, ambas rastreáveis |
| Skills | Catálogo original de 117 entradas preservado; 13 skills externas, sete locais e três próprias acrescentadas | Testar dependências de cada caso e definir seleção por impacto | Skills instaladas e materializadas; nenhuma permissão inferida do título |
| Cloudflare/produção | App de galeria, sem conexão; pipeline não vinculado | Conectar conta e projeto autorizados, staging e gate de deploy | Artefato publicado somente por pipeline autorizado, com rollback exercitado |
| Slack/colaboração | Sem conector ativo nem ingresso HTTPS público | Autenticação e endpoint seguro antes do app Slack | Mensagem de teste em canal autorizado, com vínculo de identidade e auditoria |
| CRM, campanhas e BI | Estrutura e campanha sintética `ULT-12`; nenhum CRM/canal ativo | Vincular CRM/canais existentes por campanha, depois testar handoff | Oportunidade de teste entra no funil e devolve indicador a BI sem contato externo |

### P4 — Núcleo de integrações, sandbox e adaptadores

1. Definir uma ficha de conector com finalidade, proprietário, empresa/projeto, escopos mínimos, tipo de dado, credencial no cofre, política de escrita, custo máximo, revogação e teste. Exibir no Paperclip `disponível na galeria`, `instalado`, `autenticado`, `testado` e `autorizado para esta missão` como estados distintos. Sem vínculo válido, a tarefa fica `BLOCKED` com ação concreta.
2. Criar uma camada de adaptadores de modelos com contrato único para Codex/OpenAI, OpenCode, OpenRouter, DeepSeek e Claude CLI **somente quando o perfil e o direito de uso estiverem realmente disponíveis**. O Nexus informa disponibilidade, contexto, limite de custo, quota, timeout e capacidade de ferramentas; o Autopilot decide a missão e o Paperclip guarda o recibo. A seleção usa capacidade e custo, não um teto fixo de quatro agentes. Concorrência cresce por subtarefa com ownership disjunto e volta a zero quando não há trabalho.
3. Isolar o executor por tarefa. Primeiro medir o ambiente local/Docker já disponível: montagem somente do worktree necessário, sem homes de credenciais, rede restrita, usuário sem privilégio, CPU/memória/tempo limitados, artefatos exportados por caminho controlado. Avaliar o plugin de sandbox do Paperclip e provedores externos em prova fechada. **Cloudflare Sandbox é tarifado por Containers/Workers/Durable Objects**, portanto não ativar sob o limite atual de R$0. Isolamento precisa ser verificado por tentativas de leitura/escrita/rede fora do escopo; uma regra no prompt não basta.
4. Introduzir MCP como gateway de ferramentas por domínio: GitHub para código/revisão, Cloudflare para implantação/DNS, observabilidade para operação, Slack para aviso, Google Workspace para documentos, CRM para comercial e analytics para BI. Descobrir ferramentas reais, schemas e permissões antes de ligar cada uma. Tokens ficam no serviço de conexão, nunca em instruções, logs ou skills. Escritas exigem escopo da tarefa e autorização da ação; leitura pode seguir permissões vigentes.
5. Usar o repositório **do próprio Maestro** para mudanças e PRs. Conferir URL do remoto antes de qualquer push; `upstream` do Paperclip é referência, não destino de envio. Não automatizar commit, push ou merge por presença do conector.

**Aceite P4:** um agente em sandbox lê só o contexto autorizado, uma tentativa fora do worktree falha, uma ferramenta MCP de leitura retorna dado não sensível com recibo, uma escrita sintética autorizada é rastreável, e o Nexus alterna entre perfis gratuitos autorizados sem disparar serviço pago. O teste inclui revogação de conexão e reinício.

### P5 — Entrega de aplicações com disponibilidade real

1. Para cada aplicação, registrar ambiente de desenvolvimento, staging e produção; repositório proprietário, dono do deploy, domínio, dependências, dados e mecanismo de rollback. Integrar GitHub/CI e Cloudflare ou provedor já adotado conforme produto, sem assumir que todo app será hospedado no mesmo serviço.
2. Criar um caminho de release: mudança → build/lint/typecheck/testes aplicáveis → revisão independente → artefato imutável → staging → verificação funcional/responsiva/acessível/visual conforme impacto → autorização de produção → deploy pelo pipeline. Paperclip guarda tarefas e pareceres; o CI/CD precisa impor o bloqueio técnico. Não chamar um status `done` de proteção do deploy.
3. Acrescentar health checks, logs e alertas, métricas de disponibilidade, backup/restauração quando houver dados persistentes, gestão de segredos, migrações reversíveis ou com plano de recuperação, feature flags quando necessárias e roteiro de incidente. O DevOps responde pelo pipeline e rollback, Infra pelo ambiente, DBA pela integridade e BI pelas definições de indicadores. SLOs e prazos só serão fixados com dados do produto e alçada competente.
4. Fechar o ciclo com telemetria de uso e defeitos: BI informa Produto; Produto prioriza; Autopilot abre nova missão quando autorizada. Resultado de produção não reabre automaticamente tarefa encerrada.

**Aceite P5:** uma alteração pequena atravessa staging e produção com recibos de build e pareceres aplicáveis; falha simulada aciona rollback e mostra a versão saudável; backup/restauração é exercitado se houver banco; a autoridade de publicação no pipeline é comprovada, não presumida.

### P6 — Marketing, criação e operação comercial do Warley

1. Preservar os 15 especialistas e o Autopilot. Os nove perfis criados são `uh-marketing`, `uh-growth`, `uh-social-media`, `uh-copy-scripts`, `uh-creative`, `uh-video`, `uh-sdr`, `uh-sales` e `uh-revops`, agrupados em Marketing e Growth, Produção Criativa, Vendas e Operação Comercial. Cada um responde formalmente ao Autopilot; Warley é referência humana dentro das alçadas. Os contratos persistem nas instruções de perfil e no charter v3.
2. Usar o brief de `uh-campaign-governance` como entrada de uma missão: Produto valida oferta; Marketing define mensagem; Copy e Criativos produzem; Vídeo exporta; Social prepara distribuição; Growth define experimento com BI; SDR/Vendas/RevOps cuidam da oportunidade e passagem. Acionar Jurídico, UX, QA, Acessibilidade e Educação apenas pelo impacto. Pareceres independentes não podem ser alterados por autores.
3. O catálogo original de 117 entradas permanece como referência histórica; ele não significa 117 skills instaladas. Agora há 77 registros de skill na UltraHub, dos quais 13 vieram do GitHub, sete de fontes locais e três foram criados nesta ampliação. As 13 skills selecionadas de [marketingskills](https://github.com/coreyhaines31/marketingskills/tree/88c79f6528a9347420e57ceb1fff9a60de651768) foram importadas com proveniência GitHub e `lastScanCommit` fixo; atualização e importação automáticas ficaram desligadas: `product-marketing`, `marketing-plan`, `customer-research`, `ab-testing`, `cro`, `content-strategy`, `social`, `copywriting`, `ad-creative`, `video`, `prospecting`, `sales-enablement` e `revops`. Os pacotes selecionados contêm instruções/referências, sem scripts executáveis. Também foram importados, como instruções locais, `skill-optimize-images`, `skill-smart-clip-detection`, `skill-manual-video-processing`, `skill-elevenlabs-voice-cloning`, `skill-whatsapp-meta-ads-leads`, `skill-evolution-api` e `skill-google-workspace-sync`; voz, Evolution API e Workspace continuam dependentes de conexão/autorização real. As três skills próprias são `uh-campaign-governance`, `uh-audiovisual-delivery` e `uh-commercial-handoff`. `imagegen` está disponível neste host Codex, mas seu script e ferramenta não foram comprovados no runtime Paperclip; por isso não foi associado como capacidade operacional do agente. Documentos, PDF, apresentações e planilhas já constavam como skills da empresa e foram associados aos perfis pertinentes. Um título de skill não prova execução.
4. Três caminhos de vídeo: **edição de material fornecido** com FFmpeg quando houver arquivos e direito de uso; **composição programática** com PIL/FFmpeg ou runtime licenciado, provada pelo MP4 sintético em `ULT-12`; **geração de cenas** somente após motor existente, direitos, custo e autorização verificados. O MP4 foi produzido no host local e anexado ao Paperclip; o runtime do agente Paperclip ainda não executou esse caminho. O pacote [remotion-best-practices](https://github.com/remotion-dev/skills/tree/a2824c67f8b4585c294a8101db9f9f0ad3c643f8) foi avaliado como candidato, mas não importado: runtime ausente e elegibilidade de licença comercial não comprovada. Sob custo incremental zero, manter FFmpeg para o caso simples e reavaliar Remotion apenas quando o caso pedir composição avançada e a licença estiver resolvida.
5. Conectar canais por estágio: primeiro CRM e analytics existentes em modo de teste; depois conta de distribuição/WhatsApp/Meta e Google Workspace com escopo; por fim Slack para alertas e handoffs. O conector Slack do Paperclip exige ingresso HTTPS público e configuração de app/identidade; a instalação local atual ainda não fornece isso. Não enviar mensagens nem publicar no teste de estrutura. Diferenciar rascunho, publicação, oportunidade qualificada, proposta enviada, receita contratada e recebida.

**Aceite P6:** `ULT-12` já comprova brief, roteiro, criativos, vídeo H.264 de 9 s decodificado, rascunho de distribuição, oportunidade e proposta fictícias, registro e retorno sintético para BI. Falta a prova de execução autônoma dos agentes, de CRM/canais reais e de revisão independente, pois estão pausados e não há conexões. Após P0/P4, repetir esse mesmo caso com tarefas filhas, pareceres versionados, uma falha devolvida ao autor e ausência de encerramento normal quando faltar revisão obrigatória. Publicação e contato exigem autorização específica.

### Governança de evolução

- Manter um registro único de capacidades com versão, origem, licença, dependências, custo, dono e última prova; skill, plugin, conector e modelo só entram no roteador se o estado for `testado` e o escopo cobrir a tarefa. Revisar em lotes quando houver demanda, sem auditoria geral recorrente de todos os projetos.
- Promover padrões que se repetirem em templates de missão, skills e adaptadores versionados. Reutilizar revisões e evidências válidas; correção faz revalidação direcionada. Medir tempo até artefato verificável, taxa de bloqueios explicados, intervenções humanas por missão, custo, tempo de recuperação, defeitos pós-release e conversão comercial **apenas quando houver dados reais e fonte**.
- Automatizar limpeza só de worktrees, containers, caches e temporários próprios após retenção/recibos. Preservar diff, parecer, decisão e artefato versionado. Nenhuma sessão de agente fica ativa apenas para simular presença.
- Avançar por marcos: P0 desbloqueia um agente; P1 prova Nexus; P4 prova isolamento e ferramentas; P5 prova deploy; P6 prova operação comercial com conexões. A expansão de concorrência vem depois de evidência de qualidade, custo e recuperação, não de um número de agentes cadastrado.

## Prova e métricas

- Prova técnica em ambiente controlado: tarefa de interface e unidade educacional sintéticas, autor e revisor distintos, reprovação e correção, ausência de um parecer obrigatório, 429, reinício e cancelamento. Verificar o bloqueio real de encerramento e distinguir isso da permissão efetiva de deploy.
- Medir antes/depois: tempo do pedido até a primeira entrega verificável, número de intervenções humanas por missão, solicitações repetidas de autorização, tarefas bloqueadas sem próxima ação, tempo de recuperação, editores efetivos simultâneos, custo incremental, revisões sem evidência e tarefas concluídas com verificação pendente. Comparar a mesma classe de missão; não transformar quantidade de agentes ativos em indicador isolado de eficácia.
- Metas de controle: zero uso de rota paga; zero autorização repetida enquanto o mandato vigente cobre a ação; zero encerramento normal com verificação obrigatória pendente; todo resultado de edição com diff e recibo atribuíveis; todas as falhas materiais visíveis. Medir o tempo de primeiro sucesso após uma conta pronta, usando a meta de produto de cinco minutos apenas como referência.

## Limites e riscos

- O teste do novo `uh-marketing` identificou falta de conexão pessoal padrão de IA; isso não prova que todo erro `verifying` anterior tenha a mesma causa. A ordem P0 impede que uma nova UI mascare esse bloqueio.
- O processo Paperclip pode não compartilhar o host e o binário do Nexus; a prova de topologia decide entre adaptador local e ponte HTTP restrita. Não montar homes ou copiar credenciais para contornar essa diferença.
- Roteamento por pools de contas do Paperclip é experimental e requer flag e plugin; avaliar como complemento após a ponte, sem confundi-lo com perfis Nexus nem ativá-lo antes de uma prova (`server/src/routes/ai-connections.ts:158`).
- Permissões de ferramentas OpenCode não provam isolamento de rede do processo. A aceitação deve testar leitura/edição fora do ownership e considerar isolamento adicional quando o projeto exigir.
- Custo incremental autorizado: R$ 0,00 até decisão expressa do Maestro. Sem commit, push, deploy ou publicação automáticos. Se houver push futuro, configurar e conferir um remoto do próprio usuário; o único remoto atual é `upstream`.
- O orçamento do Paperclip é controle operacional de melhor esforço e não substitui a negativa prévia de uma rota paga pelo Nexus/mandato. Custo desconhecido também impede o despacho automático.

## Referências públicas consultadas

- [Paperclip — Execution Policy](https://docs.paperclip.ing/guides/power/execution-policy/)
- [Paperclip — Adapters Overview](https://docs.paperclip.ing/reference/adapters/overview/)
- [Paperclip — External Adapters](https://docs.paperclip.ing/reference/adapters/external-adapters/)
- [Paperclip — Task-Pinned AI Connection Pools](https://docs.paperclip.ing/experimental/task-pinned-ai-routing/)
- [OpenCode v2 — Permissions](https://dev.opencode.ai/v2/docs/permissions/)
- [Paperclip — Plugins](https://docs.paperclip.ing/administration/plugins/)
- [Paperclip — Sandbox Providers](https://docs.paperclip.ing/reference/adapters/sandbox-providers/)
- [Paperclip — Slack connector](https://docs.paperclip.ing/connectors/slack/)
- [Cloudflare — Sandbox pricing](https://developers.cloudflare.com/sandbox/platform/pricing/)
- [Remotion — Terms](https://www.remotion.dev/docs/terms)

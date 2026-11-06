# Fork Paperclip PT-BR

Este checkout mantém o Paperclip upstream como referência e adiciona uma camada
local de português do Brasil.

## Estado atual

- upstream: `https://github.com/paperclipai/paperclip.git`
- branch de trabalho: `codex/pt-br`
- idioma padrão: `pt-BR`
- idioma escolhido: salvo em `localStorage` pela chave `paperclip.locale`
- idiomas disponíveis no seletor: Português (Brasil) e English
- cobertura atual: navegação principal, dashboard, agentes e a área de Configurações
  (Geral, Perfil, Membros, Conexões, Acesso, Ambientes, Experimental e Plugins),
  além da primeira rodada de páginas de tarefas, projetos, rotinas, casos, apps,
  MCP, gateways, habilidades e perfis avançados

O inglês continua como fallback para telas que ainda não foram migradas para
chaves de tradução. Para componentes antigos que ainda renderizam frases fixas,
`ui/src/components/LegacyLocaleBridge.tsx` aplica correspondências exatas em
PT-BR. O catálogo inicial fica em `ui/src/i18n/legacy-pt-br.ts` e o catálogo da
primeira rodada em `ui/src/i18n/legacy-priority-pt-br.ts`, com 8541 frases,
complementada por 620 entradas reaproveitadas do fork público de
PauloHenriqueJr (`94f20695a091ec692aa4c85487c3ade0000bbedc`) em
`ui/src/i18n/fork-pt-br.ts`.
Fonte reaproveitada: [branch de tradução PT-BR do fork público](https://github.com/PauloHenriqueJr/paperclip/tree/feat/i18n-portuguese-support).
Nomes, IDs, títulos de tarefas, logs e conteúdo escrito pelo usuário
não são traduzidos intencionalmente.

## Como continuar a tradução

1. Adicionar a chave em `ui/src/i18n/product-messages.ts` para English e PT-BR.
2. Substituir o texto fixo do componente por `useTranslation()` e `t("...")`.
3. Manter `ui/src/i18n/locales/*.json` compatível com o contrato upstream.
4. Rodar a validação de locales e o typecheck da UI.

Enquanto a migração estrutural não chega a todos os componentes do upstream,
adicione frases estáticas recorrentes a `ui/src/i18n/legacy-pt-br.ts`. Prefira
migrar o componente para `useTranslation()` quando houver edição funcional ou
texto dinâmico.

A validação exige que os locales upstream tenham as mesmas árvores e preserva
placeholders como `{{count}}`. O catálogo de produto é mesclado no runtime
somente para English e PT-BR, evitando alterar dezenas de traduções parciais.

## Atualização do upstream

As alterações locais ficam na branch `codex/pt-br`; o repositório remoto é
mantido como `upstream`, sem push automático. Para sincronizar uma atualização,
revisar o diff do upstream antes de incorporá-lo:

```bash
git fetch upstream
git log --oneline --decorate --max-count=10 upstream/master
```

Não há relação com o repositório do Fernando Bolzan.

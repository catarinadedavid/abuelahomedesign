# catarinadedavid.com.br

Site publicado automaticamente pelo Cloudflare Pages a cada alteração neste repositório.

## Como adicionar um projeto novo

1. **Foto** — entre na pasta `img/` → *Add file* → *Upload files* → arraste a foto
   (quadrada, sem texto, mínimo 640×640). Anote o nome do arquivo.
2. **Dados** — abra `dados/projetos.js` → ícone de lápis → copie um bloco `{ ... }`
   inteiro, cole no topo da lista e edite:
   - `id`: apelido sem espaço nem acento (ex.: `vaso-texturizado`)
   - `nome`, `categoria` (Mesa posta, Sala de estar, Cozinha...), `tag` (a técnica)
   - `foto`: `"img/nome-do-arquivo.jpg"`
   - `video`: link do reel ou do YouTube (`""` esconde o botão)
   - `materiais`: cada item com `nome`, `obs` e `link` de afiliado
3. **Commit changes** (botão verde). O site republica sozinho em cerca de 30 segundos.

## Links configuráveis

No topo de `dados/projetos.js`, o bloco `CONFIG` guarda o link do formulário da Brevo,
do YouTube e do Instagram. A caixa de inscrição só aparece no site quando
`formulario` estiver preenchido.

## Se algo quebrar

Erro de vírgula ou aspas deixa a página em branco. No Cloudflare Pages →
*Deployments* → escolha o deploy anterior → **Rollback**. Nada se perde.

# Cítara Marketing — Site institucional + propostas

Site institucional e biblioteca de propostas comerciais da **Cítara Marketing**.

Vanilla HTML, CSS e JavaScript. Sem build, sem dependências. Pode ser servido em qualquer CDN ou hospedagem estática.

## Estrutura

```
/
├── index.html                       Landing principal (cópia da Citara Landing.html)
├── Citara Landing.html              Landing principal
├── sobre.html                       Página Sobre
├── portfolio.html                   Página Portfólio
├── servicos/                        Páginas de cada serviço
│   ├── midia-de-performance.html
│   ├── seo.html
│   ├── crm-automacao.html
│   ├── gestao-de-redes.html
│   ├── branding.html
│   └── analytics-bi.html
├── Proposta Joao Prudential.html    Propostas comerciais
├── hero-parallax.html               Experimento de parallax
├── brand-kit/                       Brand kit (CLAUDE.md + tokens + logos)
├── assets/                          Logos, fotos, vídeos
├── ds/                              Tokens do design system (cores, tipografia)
├── site.css, brand.css, ...         Stylesheets globais
└── megamenu.js, page-shell.js, ...  Scripts globais
```

## Identidade visual

- **Cor de marca:** `#E5348B` (magenta)
- **Fundo padrão:** `#010012` (dark mode é o default)
- **Tipografia:** Poppins (heading), Montserrat (body), Fraunces (acentos editoriais)
- **Slogan:** *Comunicação que ressoa, performance que se prova.*

Detalhes completos em [`brand-kit/CLAUDE.md`](brand-kit/CLAUDE.md).

## Desenvolvimento local

```bash
# Qualquer servidor estático funciona, ex:
npx serve .
# ou
python3 -m http.server 8000
```

## Deploy na Vercel

1. Importe este repositório em [vercel.com/new](https://vercel.com/new)
2. Framework Preset: **Other** (Vercel detecta como estático automaticamente)
3. Build Command: deixe em branco
4. Output Directory: deixe em branco (raiz)
5. Deploy

O `vercel.json` já está configurado com `cleanUrls: true` — assim `/sobre` resolve `/sobre.html` automaticamente.

## Licença

Material proprietário da Cítara Marketing. Todos os direitos reservados.

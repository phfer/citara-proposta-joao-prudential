# Cítara — Brand Kit (instruções para Claude)

Este pacote contém a identidade completa da **Cítara Marketing**. Qualquer arquivo, slide, relatório ou site que você criar para a Cítara deve seguir 100% deste sistema. Não invente cores, fontes ou logos — use só o que está aqui.

## Como aplicar (sempre, em qualquer entrega)

1. **Linke os CSS na ordem:**
   ```html
   <link rel="stylesheet" href="brand-kit/colors_and_type.css">
   <link rel="stylesheet" href="brand-kit/tokens.css">
   <link rel="stylesheet" href="brand-kit/brand.css">
   ```
2. **Adicione `data-theme="dark"` no `<html>`** (default da marca):
   ```html
   <html lang="pt-BR" data-theme="dark">
   ```
3. **Use as variáveis CSS** (`var(--bg-page)`, `var(--fg-1)`, `var(--accent)` etc.) em vez de hex literais.
4. **Use a logo correta** (ver tabela abaixo).

---

## Identidade visual

### Cores principais

| Token | Hex | Uso |
|---|---|---|
| `--accent` | `#E5348B` | Magenta Cítara — destaques, CTAs, links |
| `--accent-2` | `#FF4A9C` | Magenta claro — hover, gradientes |
| `--accent-3` | `#CC3366` | Magenta profundo — sombras, estados ativos |
| `--bg-page` (dark) | `#010012` | Fundo principal (preto-azulado da marca) |
| `--bg-surface` (dark) | `#0A0A1F` | Superfícies, cards |
| `--fg-1` (dark) | `#FFFFFF` | Texto primário |
| `--fg-2` (dark) | `rgba(255,255,255,0.65)` | Texto secundário |

**Regra de ouro:** dark mode é o padrão. Light mode existe mas é exceção.

### Tipografia

| Família | Onde usar |
|---|---|
| **Poppins** (600/700/800) | Títulos, headings, números grandes |
| **Montserrat** (500/600/700) | Body, parágrafos, UI |
| **Fraunces** italic | Acentos editoriais (uma palavra ou letra dentro de um título) |

Carregue do Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700&family=Fraunces:ital,wght@1,400;1,500&display=swap" rel="stylesheet">
```

### Logos (em `brand-kit/assets/`)

| Arquivo | Quando usar |
|---|---|
| `logo-horizontal-branco.png` | Topo de página em fundo escuro |
| `logo-horizontal-preto.png` | Topo de página em fundo claro |
| `logo-vertical-branco.png` | Footer, capas, abertura de relatórios |
| `simbolo-citara.png` | Favicon, avatares, miniaturas |
| `citara-mark.svg` | Símbolo vetorial (escalável) |
| `citara-wordmark.svg` | Wordmark vetorial |

**Nunca:**
- Mudar a cor da logo (use a versão correta de cada fundo)
- Distorcer, rotacionar ou aplicar efeitos
- Colocar em fundo conflitante (ex: branca em fundo magenta)

---

## Voz e tom

A Cítara é uma agência de marketing **sênior, direta, confiante**. Sem hype, sem clichê, sem "vamos juntos transformar". Slogan oficial: **"Comunicação que ressoa, performance que se prova."**

- **Sim:** "Operamos performance ponta a ponta." / "Números na mesa." / "Cada hipótese é validada antes de escalar orçamento."
- **Não:** "Levamos sua marca a outro nível!" / "Inovação disruptiva." / "Soluções 360°."

---

## Padrões para entregas

### Relatórios
Use `brand-kit/templates/relatorio.html` como ponto de partida. Estrutura mínima:
1. **Capa** — logo vertical + título + cliente + período
2. **Sumário executivo** — 3 KPIs, 1 parágrafo
3. **Resultados por canal** — tabelas/charts
4. **Hipóteses validadas e descartadas**
5. **Próximos passos** — bullets, dono, prazo

### Cronogramas
Use `brand-kit/templates/cronograma.html`. Estrutura:
- Linha do tempo horizontal por sprint/semana
- Marcos (milestones) destacados em magenta
- Entregáveis por fase (auditoria, plano, go-live, otimização)

### Slides
- Fundo `#010012`
- Title em Poppins 600/700
- Body em Montserrat
- Magenta `#E5348B` só em destaques (1–2 elementos por slide, no máximo)
- Use a wordmark/símbolo discretamente no canto

### Web (sites e landing pages)
Veja a landing principal `Citara Landing.html` e as páginas de serviço em `servicos/` para referência de componentes. Use `spotlight.css`, `cinematic.css`, `megamenu.css` quando relevante.

---

## Componentes de UI prontos

Já existem no projeto principal (referencie ou copie):

- **Topbar** com logo + nav + CTA
- **Megamenu** dropdown (`megamenu.css` + `megamenu.js`)
- **Spotlight cards** (`spotlight.css` — cards com glow magenta no cursor)
- **Charts** animados (`charts.css`)
- **CTA cinematográfico** (`cinematic.css`)
- **Footer** com logo vertical + colunas de links

---

## Checklist antes de entregar qualquer coisa

- [ ] Dark mode (`data-theme="dark"`) está aplicado?
- [ ] Cores vêm das variáveis CSS, não de hex literais?
- [ ] Tipografia: Poppins (heading), Montserrat (body), Fraunces (acento)?
- [ ] Logo na versão correta para o fundo?
- [ ] Magenta `#E5348B` usado com parcimônia (destaque, não decoração)?
- [ ] Tom direto, números na mesa, sem hype?
- [ ] Slogan respeitado: "Comunicação que ressoa, performance que se prova"?

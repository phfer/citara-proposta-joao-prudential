# Cítara Brand Kit

Pacote único com a identidade visual completa da **Cítara Marketing** para usar em qualquer projeto Claude.

## Como usar

1. Faça upload desta pasta inteira (`brand-kit/`) em um novo projeto Claude (ou inclua no zip do projeto atual).
2. Mencione no primeiro prompt: *"Use o brand-kit anexado para qualquer artefato visual."*
3. Pronto — Claude vai ler o `CLAUDE.md` e seguir o sistema (cores, fontes, logos, tom de voz).

## O que tem dentro

```
brand-kit/
├── CLAUDE.md              ← instruções principais (Claude lê isso)
├── README.md              ← este arquivo (você lê isso)
├── colors_and_type.css    ← variáveis de cor + @font-face
├── tokens.css             ← tokens semânticos (radius, spacing, shadows)
├── brand.css              ← overrides com a paleta real Cítara
├── assets/
│   ├── logo-horizontal-branco.png
│   ├── logo-horizontal-preto.png
│   ├── logo-vertical-branco.png
│   ├── simbolo-citara.png
│   ├── citara-mark.svg
│   └── citara-wordmark.svg
└── templates/
    ├── relatorio.html     ← template pronto de relatório
    └── cronograma.html    ← template pronto de cronograma
```

## Quick links

- **Cor de marca:** `#E5348B` (magenta)
- **Fundo padrão:** `#010012` (dark mode é default)
- **Fonte heading:** Poppins
- **Fonte body:** Montserrat
- **Slogan:** "Comunicação que ressoa, performance que se prova."

Para detalhes completos, leia o `CLAUDE.md`.

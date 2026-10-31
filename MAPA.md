# Mapa do projeto — Andrea Flores

## Estrutura
```
andrea-flores/
├── index.html                 SEO, título, descrição, Open Graph, fontes
├── MAPA.md                    este arquivo
├── public/
│   ├── logo.png               logo (não alterar)
│   └── images/                ← COLOQUE AS FOTOS AQUI
└── src/
    ├── config.js              ★ DADOS DA LOJA (WhatsApp, endereço, horários, fotos)
    ├── data/products.js       ★ PRODUTOS e categorias do catálogo
    ├── lib.js                 links e mensagens do WhatsApp
    ├── index.css              cores e fontes (tema Tailwind)
    ├── main.jsx               entrada do app
    ├── App.jsx                ordem das seções na página
    └── components/
        ├── Header.jsx         menu, botão WhatsApp, menu mobile (array `nav`)
        ├── Hero.jsx           topo com título e botões
        ├── Catalog.jsx        filtros, busca, cards e modal do produto
        ├── Sections.jsx       Ocasiões, Galeria, Sobre, Instagram
        ├── Contact.jsx        Localização/mapa, Rodapé, botão flutuante WhatsApp
        └── Petal.jsx          pétalas decorativas e componente de imagem
```

## O que alterar (busque por `[EDITAR]` no projeto)
| O que | Onde |
|---|---|
| Número do WhatsApp | `src/config.js` → `SITE.whatsapp` |
| Telefone, endereço, horários, entrega | `src/config.js` → `SITE.phone/address/hours/delivery` |
| Mapa e botão "Abrir rota" | automáticos quando `SITE.address` estiver preenchido |
| Foto do topo | `src/config.js` → `SITE.heroImage` |
| Galeria | `src/config.js` → `gallery` |
| Posts do Instagram | `src/config.js` → `instagramPosts` |
| Produtos, preços, categorias | `src/data/products.js` |
| Texto "Sobre nós" e foto | `src/components/Sections.jsx` → `About` |
| Cards de Ocasiões | `src/components/Sections.jsx` → `occ` |
| Mensagens do WhatsApp | `src/lib.js` |
| Cores e fontes | `src/index.css` (`@theme`) e `index.html` (Google Fonts) |
| Título/descrição/compartilhamento | `index.html` |
| Itens do menu | `src/components/Header.jsx` → `nav` |

## Comandos
`npm install` · `npm run dev` · `npm run build` · `npm run preview`

# Plano de Implementação: Landing Page Expertise

Criação de uma landing page institucional premium e de alta conversão para a **Expertise — Especialista em Material de Construção**, focada em autoridade, profissionalismo e conexão entre lojistas e indústrias.

## Design e Estética
- **Paleta de Cores:** Base em preto, grafite e branco (Premium B2B).
- **Tipografia:** Inter ou Plus Jakarta Sans (foco em legibilidade e presença corporativa).
- **Modos:** Suporte total a Light e Dark Mode com transição suave.
- **Estilo:** Grid organizado, muito respiro (white space), cards sofisticados e detalhes técnicos inspirados em arquitetura/construção.

## Componentes a Desenvolver
1.  **Header:** Sticky, transparente sobre o hero, com alternância de tema e CTA "Seja um Lojista".
2.  **Hero Section:** Composição editorial de alto impacto com headline focada em "RESULTADO".
3.  **Stats (Métricas):** Números animados (50+ lojas, 35+ indústrias, 600+ treinados).
4.  **About (Sobre):** Layout editorial com foco na experiência de 20 anos.
5.  **Benefits (Vantagens):** Cards comparativos entre "Lojista Rede" e "Lojista Assessoria".
6.  **Partners (Parceiros):** Grade de logos (grayscale com hover colorido) e destaque para "Acelera Sell Out".
7.  **Solutions (Soluções):** Cards visuais para Campanhas, Vende Mais e Antes/Depois.
8.  **Process (Diferencial):** Linha do tempo visual (Diagnóstico -> Resultado).
9.  **Testimonials (Depoimentos):** Carrossel sofisticado com depoimentos reais.
10. **CTA Section:** Seção de fechamento com alto contraste.
11. **Contact (Contato):** Formulário completo com validação e cards de contato direto.
12. **Footer:** Rodapé corporativo premium.
13. **WhatsApp:** Botão flutuante discreto.

## Detalhes Técnicos
- **Stack:** React, Tailwind CSS (v4), Lucide Icons, Framer Motion (para animações suaves).
- **SEO:** Metatags otimizadas para "Expertise | Especialista em Material de Construção".
- **Acessibilidade:** HTML semântico e contraste adequado em ambos os modos.
- **Imagens:** Seleção de fotografias realistas do setor de varejo de construção brasileiro.

## Próximos Passos
1.  Configuração do sistema de temas (Light/Dark) no `src/styles.css` e `__root.tsx`.
2.  Desenvolvimento modular dos componentes em `src/components/`.
3.  Montagem da página principal em `src/routes/index.tsx`.
4.  Otimização de performance e responsividade mobile.

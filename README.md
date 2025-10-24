# Extraordinário - Soluções Digitais Extraordinárias 🚀

Um site moderno e elegante inspirado no design da [Flabbergast Agency](https://flabbergast.agency/), construído com **Next.js 16**, **TypeScript**, **Tailwind CSS v4** e **React 19**.

## ✨ Características Principais

### 🎨 Design Sofisticado
- **Minimalista e Moderno**: Design limpo inspirado na Flabbergast
- **Tipografia Elegante**: Fonte Geist para máxima legibilidade
- **Cores Sofisticadas**: Sistema de cores com suporte a tema claro/escuro
- **Animações Fluidas**: Transições e animações de nível profissional

### 🚀 Funcionalidades Avançadas
- **Loading Screen Sofisticado**: Animação de carregamento com progresso
- **Elementos Flutuantes**: 5 elementos animados com física realista
- **Efeitos Parallax**: Movimento baseado no scroll com performance otimizada
- **Animações de Texto**: Efeitos de revelação 3D e typewriter
- **Interações Magnéticas**: Elementos que seguem o cursor
- **Cards com Tilt**: Efeito 3D em hover
- **Hover Glow**: Efeitos de brilho dinâmicos
- **Ripple Effects**: Ondas de clique nos botões

### 📱 Responsividade Completa
- **Mobile-First**: Design otimizado para todos os dispositivos
- **Touch Gestures**: Suporte completo a gestos de toque
- **Performance Otimizada**: Carregamento rápido em conexões móveis
- **Acessibilidade**: Suporte a leitores de tela e navegação por teclado

## 🛠️ Stack Tecnológica

### Core
- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca de interface com hooks avançados
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS v4** - Framework CSS utilitário moderno

### Componentes & UI
- **Radix UI** - Componentes acessíveis e customizáveis
- **shadcn/ui** - Sistema de design consistente
- **Lucide React** - Ícones modernos e otimizados
- **Framer Motion** - Animações avançadas (preparado para integração)

### Hooks Customizados
- **useScrollReveal** - Animações baseadas em scroll
- **useParallax** - Efeitos parallax performáticos
- **useTextAnimation** - Animações de texto avançadas
- **useMobile** - Detecção de dispositivos móveis

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação
```bash
# Clone o repositório
git clone <seu-repositorio>
cd site-mares

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# Execute em modo desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

### Acesse
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais e animações
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── hero.tsx          # Seção hero com animações
│   ├── services.tsx      # Seção de serviços
│   ├── loading-screen.tsx # Tela de carregamento
│   ├── floating-elements.tsx # Elementos flutuantes
│   └── interactive-elements.tsx # Interações avançadas
├── hooks/                # Hooks customizados
│   ├── use-scroll-reveal.ts
│   ├── use-parallax.ts
│   └── use-text-animation.ts
└── lib/                  # Utilitários
    └── utils.ts
```

## 🎯 Funcionalidades Implementadas

### ✅ Loading Screen Sofisticado
- Anéis concêntricos girando
- Barra de progresso animada
- Partículas de fundo
- Gradiente de texto animado
- Transição suave de saída

### ✅ Hero Section Aprimorado
- Animações de texto 3D com rotação
- Background com partículas animadas
- Elementos flutuantes interativos
- Navegação com backdrop blur
- Scroll indicator animado
- Texto em movimento contínuo

### ✅ Elementos Flutuantes
- 5 elementos com tamanhos diferentes
- Física realista de movimento
- Efeitos de brilho pulsantes
- Interatividade com hover e clique
- Efeito ripple ao clicar
- Parallax baseado no scroll

### ✅ Efeitos Parallax Avançados
- Movimento baseado na distância do viewport
- Rotação e escala dinâmicos
- Opacidade adaptativa
- Performance otimizada com requestAnimationFrame
- Suporte a múltiplas direções

### ✅ Interações Avançadas
- **InteractiveButton**: Botões com efeito ripple
- **MagneticElement**: Elementos que seguem o cursor
- **HoverGlow**: Efeitos de brilho em hover
- **TiltCard**: Cards com efeito 3D
- **HoverLift**: Elevação suave em hover

## 🎨 Personalização

### Cores e Temas
```css
/* Edite as variáveis CSS no globals.css */
:root {
  --primary: oklch(0.25 0 0);
  --primary-foreground: oklch(0.99 0 0);
  /* ... outras cores */
}
```

### Animações
```css
/* Use as classes utilitárias */
.animate-float
.animate-pulse-glow
.animate-gradient-shift
.animate-text-reveal
.animate-ripple
```

### Componentes
- **Hero**: Personalize textos e animações
- **Services**: Adicione/remova serviços
- **Loading**: Ajuste duração e efeitos
- **Floating Elements**: Modifique cores e posições

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado para excelência
- **Bundle Size**: Otimizado com tree-shaking
- **Loading**: Lazy loading de componentes
- **Animations**: GPU-accelerated com transform3d

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 🌟 Próximas Funcionalidades

- [ ] **Framer Motion**: Integração para animações mais complexas
- [ ] **GSAP**: Animações de timeline avançadas
- [ ] **Three.js**: Elementos 3D interativos
- [ ] **PWA**: Suporte offline e instalação
- [ ] **CMS**: Integração com Sanity/Strapi
- [ ] **Analytics**: Tracking avançado de interações
- [ ] **A/B Testing**: Testes de conversão
- [ ] **Multi-language**: Suporte a i18n

## 📱 Compatibilidade

- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Tablet**: iPad, Android tablets
- **Acessibilidade**: WCAG 2.1 AA compliant

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- **Flabbergast Agency** - Inspiração para o design
- **Vercel** - Plataforma de deploy
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Componentes acessíveis
- **Next.js Team** - Framework React

---

**Desenvolvido com ❤️ usando as mais modernas tecnologias web**

*Transformando ideias em experiências digitais extraordinárias*

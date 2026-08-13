import React from "react";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, LayoutPanelTop, ArrowRight } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      id: "eventos",
      eyebrow: "Ações Exclusivas",
      title: "Vem fazer muitos gols com a gente!",
      description: "Campanhas e eventos focados em geração de fluxo e movimento na loja.",
      items: [
        "Maior engajamento da equipe e clientes",
        "Aumento das oportunidades de venda",
        "Destaque da loja durante a Copa do Mundo",
        "Fortalecimento da marca e experiência no PDV",
      ],
      icon: <Trophy className="text-primary" size={32} />,
      cta: "Ver Eventos",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: "vende-mais",
      eyebrow: "Alta Performance",
      title: "Vende Mais Expertise",
      description: "Assessoria técnica para elevar o ticket médio e a conversão da sua equipe.",
      items: [
        "Argumentos de upgrade de venda",
        "Estratégias para venda complementar",
        "Técnicas de fechamento de venda",
        "Como vender produtos de maior valor agregado",
      ],
      icon: <TrendingUp className="text-primary" size={32} />,
      cta: "Ver Mais",
      image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "antes-depois",
      eyebrow: "Transformação",
      title: "Antes e Depois",
      description: "Consultoria de layout e organização estratégica de fornecedores.",
      items: [
        "Organização estratégica do PDV",
        "Seleção de fornecedores estratégicos",
        "Layout focado em conversão",
        "Performance de vendas otimizada",
      ],
      icon: <LayoutPanelTop className="text-primary" size={32} />,
      cta: "Ver Resultados",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  return (
    <section id="solucoes" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Soluções Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Estratégias inteligentes para desenvolver sua loja</h2>
          <p className="text-lg text-muted-foreground">
            Ações exclusivas e assessoria para gerar mais resultados.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-sm overflow-hidden shadow-2xl aspect-[16/10]">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="mb-6">{solution.icon}</div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{solution.eyebrow}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{solution.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {solution.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold hover:opacity-90 transition-opacity"
                >
                  {solution.cta} <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { number: "01", title: "Diagnóstico", desc: "Análise profunda da realidade da loja." },
    { number: "02", title: "Estratégia", desc: "Planejamento focado em objetivos claros." },
    { number: "03", title: "Negociação", desc: "Melhores condições com indústrias." },
    { number: "04", title: "Execução", desc: "Implementação prática no ponto de venda." },
    { number: "05", title: "Resultado", desc: "Crescimento consistente e performance." },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Da negociação à performance no ponto de venda</h2>
          <p className="text-muted-foreground">
            A Expertise conecta estratégia, fornecedores, equipe e execução para ajudar o lojista a transformar oportunidades em resultados.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-border -z-1" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-24 h-24 bg-card border border-border flex items-center justify-center mb-6 shadow-lg group hover:border-primary transition-colors">
                  <span className="text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">{step.number}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

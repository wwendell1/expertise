import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function Benefits() {
  const lojistaRede = [
    "Suporte em Cotações e Orçamentos",
    "Condições comerciais competitivas",
    "Conteúdos para Redes Sociais",
    "Treinamentos para Equipe",
    "Ações no Ponto de Venda",
    "Campanhas de Venda",
    "Ativações de Marca",
    "Negociações Personalizadas",
  ];

  const lojistaAssessoria = [
    "Argumentos de upgrade de venda",
    "Venda complementar",
    "Objeção de preço",
    "Fechamento de venda",
    "Como vender produtos de maior valor agregado",
    "Cases prontos para usar no atendimento",
  ];

  return (
    <section id="vantagens" className="py-24 bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Para Lojistas</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Vantagens de ser um Lojista Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Soluções estratégicas para impulsionar os resultados da sua loja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Lojista Rede */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 md:p-12 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Shield size={120} />
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">Plano Essencial</span>
              <h3 className="text-3xl font-bold mb-2">Lojista Rede</h3>
              <p className="text-muted-foreground mb-8">Central de Apoio ao Lojista</p>
              
              <ul className="space-y-4 mb-10">
                {lojistaRede.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Quero fazer parte da Rede <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Lojista Assessoria */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-8 md:p-12 shadow-lg relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <TrendingUp size={120} />
            </div>

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider mb-4">Plano Estratégico</span>
              <h3 className="text-3xl font-bold mb-2">Lojista Assessoria</h3>
              <p className="text-primary-foreground/70 mb-8">Assessoria de Gestão Estratégica</p>
              
              <ul className="space-y-4 mb-10">
                {lojistaAssessoria.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all"
              >
                Conhecer a Assessoria <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  const partners = [
    "AJ RORATO", "ALESSI", "ANGELGRES", "ATLAS", "ASTRA", "BRASILIT", "CEJATEL", "COLAFIX",
    "CORTAG", "FIBERBLU", "GRADDUS", "HYDRONORTH", "ILUMI", "KRONA", "LEÃO METAIS", "LORENZETTI",
    "MGM", "MOR", "NEW TINTAS", "PARABONI", "QUIBENNE", "QUARTZOLIT", "RCM", "STAM",
    "TASCHIBRA", "TINSUL", "TRAMONTINA", "VENTISOL", "VITESSE", "VONDER"
  ];

  const sellOutPartners = [
    "LORENZETTI", "PARABONI", "CORTAG", "QUARTZOLIT", "BRASILIT", "TRAMONTINA", "VONDER"
  ];

  return (
    <section id="parceiros" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Parceiros</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Parcerias estratégicas com líderes de mercado</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
          {partners.map((partner) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="h-24 bg-card border border-border flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/10 p-8 md:p-12 rounded-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Parceiros Acelera Sell Out</h3>
              <p className="text-muted-foreground text-sm">
                Marcas com foco exclusivo em acelerar as vendas no seu ponto de venda.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {sellOutPartners.map((partner) => (
                <div key={partner} className="text-primary font-black tracking-tighter opacity-80 hover:opacity-100 transition-opacity">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

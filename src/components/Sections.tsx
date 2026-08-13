import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    if (isInView) {
      let start = 0;
      const end = value;
      const totalMiliseconds = duration * 1000;
      const incrementTime = totalMiliseconds / end;

      timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const stats = [
    { label: "Lojas Atendidas", value: 50, suffix: "+" },
    { label: "Indústrias Parceiras", value: 35, suffix: "+" },
    { label: "Colaboradores Treinados", value: 600, suffix: "+" },
  ];

  return (
    <section className="py-20 border-y border-border bg-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-2 flex justify-center md:justify-start">
                <Counter value={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="text-2xl font-bold mb-2 text-center md:text-left leading-tight">
              ATUAMOS EM TODO O BRASIL
            </div>
            <div className="w-12 h-1 bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const highlights = [
    "+20 anos de experiência",
    "Especialistas no varejo de materiais de construção",
    "Atuação nacional",
    "Estratégia aplicada à realidade da loja",
  ];

  return (
    <section id="sobre" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe de assessoria Expertise" 
                className="w-full aspect-square object-cover"
              />
            </div>
            {/* Decorative construction lines */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-primary/20 -z-1" />
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-3xl -z-1" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Quem Somos</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Sobre Nós</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground mb-10">
              <p>
                Somos especialistas em varejo de material de construção e falamos a sua língua. Há mais de 20 anos, vivemos a rotina da loja de perto: do balcão ao estoque, da negociação com fornecedores às estratégias de venda que realmente geram resultado.
              </p>
              <p>
                Atuamos com lojas de diferentes tamanhos, sempre com foco em performance, organização e crescimento consistente. Nossa matriz está no Rio Grande do Sul, mas nossa experiência e atuação chegam a lojistas em todo o Brasil.
              </p>
              <p className="text-foreground font-semibold italic border-l-4 border-primary pl-6">
                "Aqui, a prática vem antes da teoria porque, no fim do dia, o que importa é vender melhor, crescer com consistência e gerar resultado."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary flex-shrink-0" />
                  <span className="text-sm font-bold uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

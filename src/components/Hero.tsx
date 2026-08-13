import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-accent/20 dark:bg-accent/5 -skew-x-12 transform translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-primary">
                Expertise · Especialista em Material de Construção
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Soluções em negócios com foco em{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">RESULTADO.</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/10 -z-1"
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-4">
              Rede Expertise e Assessoria Estratégica em um único lugar.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Estratégia, negociação, suporte comercial e desenvolvimento para lojas de materiais de construção em todo o Brasil.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contato"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-bold text-lg hover:translate-y-[-2px] transition-all shadow-lg shadow-primary/20"
              >
                Seja um Lojista Expertise
              </a>
              <a
                href="#contato"
                className="bg-background text-foreground border border-border px-8 py-4 rounded-sm font-bold text-lg hover:bg-accent transition-colors"
              >
                Seja um Fornecedor
              </a>
            </div>

            <motion.a
              href="#sobre"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="inline-flex items-center gap-2 mt-12 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Conheça nossas soluções <ArrowDown size={16} className="animate-bounce" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl z-10 aspect-[4/5] md:aspect-auto">
               <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" 
                alt="Operação de varejo de construção" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 md:-left-12 z-20 bg-card border border-border p-6 shadow-xl rounded-sm max-w-[200px]"
            >
              <span className="block text-3xl font-bold text-primary mb-1">50+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Lojas Atendidas</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-6 -right-6 z-20 bg-card border border-border p-6 shadow-xl rounded-sm max-w-[200px]"
            >
              <span className="block text-3xl font-bold text-primary mb-1">35+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Indústrias Parceiras</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

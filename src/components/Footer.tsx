import React from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/__l5e/assets-v1/81abcb1a-8658-45bf-a077-cffcd4393e39/expertise-full-logo.jpg" 
                alt="Expertise Logo" 
                className="h-12 w-auto object-contain rounded-sm bg-white p-1"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Conectando lojas de materiais de construção a grandes oportunidades de crescimento. 20 anos de experiência no mercado.
            </p>
            <div className="pt-2">
               <p className="text-sm font-bold italic opacity-80">
                Soluções em negócios com foco em RESULTADO.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#vantagens" className="hover:text-white transition-colors">Vantagens</a></li>
              <li><a href="#parceiros" className="hover:text-white transition-colors">Parceiros</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Para Lojistas</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li><a href="#contato" className="hover:text-white transition-colors">Seja um Lojista</a></li>
              <li><a href="#vantagens" className="hover:text-white transition-colors">Lojista Rede</a></li>
              <li><a href="#vantagens" className="hover:text-white transition-colors">Lojista Assessoria</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Vende Mais Expertise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-sm mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span>(51) 98964-6840</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span>contato@redeexpertise.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Porto Alegre, RS – Brasil</span>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={18} className="mt-0.5 flex-shrink-0" />
                <a href="https://instagram.com/expertise_oficial" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @expertise_oficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© {currentYear} Expertise. Todos os direitos reservados. Expertise — Especialista no Material de Construção.</p>
          <div className="flex items-center gap-4">
             <a href="#" className="hover:text-white">Política de Privacidade</a>
             <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

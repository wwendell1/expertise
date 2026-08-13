import { createFileRoute } from "@tanstack/react-router";
import { Header, WhatsAppButton } from "../components/Header";
import { Hero } from "../components/Hero";
import { Stats, About } from "../components/Sections";
import { Benefits, Partners } from "../components/Partners";
import { Solutions, Process } from "../components/Solutions";
import { Testimonials, Contact, CTASection } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Expertise | Especialista em Material de Construção" },
      { name: "description", content: "Expertise: Consultoria e assessoria estratégica para lojas de materiais de construção. Aumente seus resultados com quem entende do varejo." },
      { property: "og:title", content: "Expertise | Especialista em Material de Construção" },
      { property: "og:description", content: "Estratégia, negociação e performance para o varejo de construção em todo o Brasil." },
      { property: "og:image", content: "https://id-preview--bebbdd43-34e1-4c72-8776-8b0954e24cc4.lovable.app/__l5e/assets-v1/81abcb1a-8658-45bf-a077-cffcd4393e39/expertise-full-logo.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Expertise | Especialista em Material de Construção" },
      { name: "twitter:description", content: "Soluções em negócios com foco em RESULTADO para lojistas de construção." },
      { name: "twitter:image", content: "https://id-preview--bebbdd43-34e1-4c72-8776-8b0954e24cc4.lovable.app/__l5e/assets-v1/81abcb1a-8658-45bf-a077-cffcd4393e39/expertise-full-logo.jpg" },
      { name: "keywords", content: "material de construção, consultoria varejo, expertise, assessoria lojista, gestão de vendas construção" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://redeexpertise.com.br" }
    ]
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Header />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Benefits />
        <Partners />
        <Solutions />
        <Process />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

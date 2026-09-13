import { MessageSquareText, Compass, FileCheck, Sparkles, ArrowRight } from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      icon: MessageSquareText,
      title: "Contato & Ideias",
      desc: "Você nos envia a metragem, planta ou fotos de inspiração pelo WhatsApp. Tiramos suas dúvidas de imediato.",
    },
    {
      step: "02",
      icon: Compass,
      title: "Visita Técnica Gratuita",
      desc: "Vamos até seu imóvel para medição precisa a laser, avaliação de pontos de luz e consultoria técnica sem compromisso.",
    },
    {
      step: "03",
      icon: FileCheck,
      title: "Proposta Transparente",
      desc: "Você recebe o orçamento com todos os materiais normatizados, escopo completo e cronograma detalhado com data de entrega.",
    },
    {
      step: "04",
      icon: Sparkles,
      title: "Execução & Obra Limpa",
      desc: "Instalação rápida com pisos e móveis protegidos, lixamento técnico com mínima poeira e vistoria final de qualidade.",
    },
  ];

  return (
    <section id="processo" className="py-20 md:py-28 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            Metodologia Sem Dor de Cabeça
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Como Funciona o <span className="text-gold-gradient">Seu Projeto</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Do primeiro contato até a entrega das chaves com o teto pronto, você conta com um processo claro, pontual e profissional.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700 group-hover:scale-105 group-hover:bg-gold-gradient group-hover:text-stone-950 transition-all">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-amber-200 group-hover:text-amber-400/80 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center text-xs font-bold text-amber-700">
                  <span>Passo {item.step} de 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20t%C3%A9cnica%20gratuita%20para%20minha%20obra."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-stone-950 font-bold text-base shadow-gold hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Agendar Minha Visita Técnica Gratuita</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}

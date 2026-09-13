"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: "Qual a diferença entre gesso convencional e drywall?",
    answer:
      "São sistemas diferentes, e trabalhamos com os dois. O gesso convencional faz parte dos nossos serviços de forros e acabamentos decorativos. O drywall também atende projetos de forros e divisórias. Na visita técnica, avaliamos o ambiente, o desenho e as necessidades da obra para orientar a escolha.",
  },
  {
    question: "Vocês fazem forros e acabamentos em gesso convencional?",
    answer:
      "Sim! Trabalhamos com forros rebaixados, sancas, molduras e cortineiros em gesso convencional. Você pode enviar fotos de referência e a metragem do ambiente para conversar com a equipe sobre o acabamento desejado.",
  },
  {
    question: "Quanto tempo dura a instalação de forro e sancas em um apartamento?",
    answer:
      "O prazo depende da metragem, do sistema escolhido — gesso convencional ou drywall — e dos detalhes de sancas, molduras e iluminação. Após avaliar o local, apresentamos o cronograma com as etapas de montagem e acabamento.",
  },
  {
    question: "Uma parede de drywall aguenta o peso de suporte de TV e móveis planejados?",
    answer:
      "Sim! Paredes em drywall suportam com facilidade suportes de TVs grandes, armários de cozinha e espelhos pesados. Para isso, utilizamos buchas basculantes especiais para drywall ou instalamos reforços de madeira/aço na estrutura interna na fase de montagem.",
  },
  {
    question: "A visita técnica e o orçamento têm algum custo?",
    answer:
      "Não! Nossa visita técnica com medição a laser e avaliação das necessidades da sua obra é 100% gratuita e sem compromisso para toda a região atendida.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-stone-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Perguntas <span className="text-gold-gradient">Frequentes</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Reunimos as respostas para as perguntas mais comuns de quem vai reformar ou construir com gesso e drywall.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-amber-200/70 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 hover:bg-amber-50/40 transition-colors"
                >
                  <span className="font-bold text-stone-900 text-base sm:text-lg pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500 text-white" : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-amber-100/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Question Box */}
        <div className="mt-12 text-center bg-white rounded-3xl p-8 border border-amber-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-stone-900">Ainda ficou com alguma dúvida sobre seu projeto?</h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            Fale diretamente com nosso encarregado técnico no WhatsApp para uma orientação personalizada.
          </p>
          <a
            href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20gesso%20para%20minha%20obra."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-stone-950 font-bold text-sm shadow-gold"
          >
            <MessageCircle className="w-4 h-4 fill-stone-950" />
            <span>Conversar no WhatsApp Agora</span>
          </a>
        </div>

      </div>
    </section>
  );
}

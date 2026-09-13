import Image from "next/image";
import { Check, ArrowUpRight, Sparkles, MessageCircle } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
  benefits: string[];
  waQuery: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    id: "sancas-led",
    title: "Sancas, Molduras & Iluminação",
    badge: "Mais Pedido",
    desc: "Sancas e molduras em gesso convencional para valorizar o encontro entre teto e paredes. Opções com iluminação indireta e rasgos de luz, em gesso ou drywall conforme o projeto.",
    image: "/images/referencia-sanca-v2.png",
    benefits: [
      "Iluminação cênica indireta que valoriza o ambiente",
      "Perfeita para salas de estar, jantar e suítes",
      "Embutimento seguro de reatores e fiação",
      "Acabamento com bordas vivas e corte a laser",
    ],
    waQuery: "Gostaria de um orçamento para Sanca Iluminada com LED.",
  },
  {
    id: "forro-drywall",
    title: "Forros em Gesso Convencional & Drywall",
    badge: "Alto Padrão",
    desc: "Forros em gesso convencional ou drywall para salas, quartos e espaços comerciais. Avaliamos o ambiente e o projeto para orientar a escolha do sistema.",
    image: "/images/referencia-hero-v2.png",
    benefits: [
      "Gesso convencional para forros e rebaixamentos",
      "Drywall para forros conforme o projeto",
      "Integração com sancas, cortineiros e iluminação",
      "Nivelamento e cuidado no acabamento das juntas",
    ],
    waQuery: "Gostaria de um orçamento para Forro em Gesso Convencional ou Drywall.",
  },
  {
    id: "paredes-drywall",
    title: "Divisórias & Paredes Acústicas em Drywall",
    badge: "Rapidez & Limpeza",
    desc: "Criação de novos cômodos, closets, escritórios e salas de reuniões com estrutura de aço galvanizado e enchimento em lã mineral.",
    image: "/images/referencia-nichos-v2.png",
    benefits: [
      "Até 4x mais rápido que alvenaria tradicional",
      "Excelente atenuação acústica e isolamento térmico",
      "Suporte a TVs, quadros e marcenaria pesada",
      "Ambiente entregue pronto para pintura final",
    ],
    waQuery: "Gostaria de um orçamento para Divisórias / Paredes em Drywall.",
  },
  {
    id: "revestimento-3d",
    title: "Painéis e Revestimentos 3D em Gesso",
    badge: "Efeito Uau",
    desc: "Placas com desenhos volumétricos e geométricos modernos que transformam qualquer parede em uma obra de arte com luz e sombra.",
    image: "/images/referencia-parede-3d-v2.png",
    benefits: [
      "Destaque espetacular para painéis de TV e recepções",
      "Variedade de modelos (diamante, pétalas, mosaico)",
      "Aplicação direta com cola especial de alta aderência",
      "Acabamento acetinado ou fosco de longa durabilidade",
    ],
    waQuery: "Gostaria de um orçamento para Revestimento 3D em Gesso.",
  },
  {
    id: "cortineiros-nichos",
    title: "Cortineiros Iluminados & Nichos Embutidos",
    badge: "Design de Interiores",
    desc: "Cortineiros em gesso convencional ou drywall para esconder os trilhos e valorizar as cortinas, com opção de iluminação. Nichos sob medida para complementar o ambiente.",
    image: "/images/referencia-cortineiro-v2.png",
    benefits: [
      "Efeito cascata de luz suave sobre o tecido",
      "Nichos de apoio sem ocupar espaço de circulação",
      "Integração harmônica com a marcenaria do quarto",
      "Detalhes refinados pensados com arquitetos",
    ],
    waQuery: "Gostaria de um orçamento para Cortineiro Iluminado e Nichos.",
  },
  {
    id: "comercial-corporativo",
    title: "Soluções Comerciais e Corporativas",
    badge: "Empresarial",
    desc: "Forros acústicos, sancas lineares e divisórias com placas resistentes ao fogo (RF) para escritórios, clínicas, consultórios e lojas.",
    image: "/images/referencia-comercial-v2.png",
    benefits: [
      "Conformidade total com normas dos Bombeiros (AVCB)",
      "Atendimento a horários especiais noturnos/fins de semana",
      "Rigoroso cumprimento de cronograma para não atrasar a abertura",
      "Nota fiscal, ART e contratos corporativos",
    ],
    waQuery: "Gostaria de um orçamento para Projeto Corporativo / Comercial.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Portfólio de Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Nossos Serviços de <span className="text-gold-gradient">Gesso & Drywall</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Do gesso convencional ao drywall: forros, sancas, molduras e soluções sob medida para ambientes residenciais e comerciais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-amber-200/60 shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-800 border border-amber-300/80 shadow-sm">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Benefit list */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href={`https://wa.me/5547992098224?text=${encodeURIComponent(
                    `Olá! Tenho interesse no serviço: ${service.title}. Poderia me passar mais detalhes e um orçamento?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-50 hover:bg-gold-gradient text-amber-900 hover:text-stone-950 border border-amber-300/80 font-bold text-xs sm:text-sm transition-all duration-200 group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-amber-700 group-hover/btn:text-stone-950" />
                  <span>Solicitar Orçamento deste Serviço</span>
                  <ArrowUpRight className="w-4 h-4 text-amber-700 group-hover/btn:text-stone-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Box */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-3xl p-8 sm:p-10 border border-amber-300 shadow-gold-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
              Tem um projeto de arquitetura ou planta personalizada?
            </h4>
            <p className="text-stone-600 text-sm max-w-xl">
              Nossa equipe faz a leitura completa de projetos executivos de arquitetura e iluminação, assegurando fidelidade milimétrica.
            </p>
          </div>
          <a
            href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Tenho%20um%20projeto%20de%20arquitetura%20e%20gostaria%20que%20a%20Gesso%20Ouro%20Branco%20avaliasse%20as%20plantas."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-300 font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Enviar Planta pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}

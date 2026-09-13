import { Star, Quote, CheckCircle, ThumbsUp } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Alcantara",
    role: "Proprietária",
    location: "Balneário Camboriú, SC",
    rating: 5,
    text: "Fiz o rebaixamento de todo o meu apartamento e uma sanca invertida maravilhosa na sala. O que mais me impressionou foi a limpeza! Não deixaram um grão de poeira nos pisos e terminaram um dia antes do prazo!",
    project: "Forro Drywall Completo + Sanca LED",
  },
  {
    name: "Carlos Eduardo Vieira",
    role: "Arquiteto de Interiores",
    location: "Camboriú, SC",
    rating: 5,
    text: "Trabalho com a Gesso Ouro Branco há mais de 3 anos em projetos residenciais de alto padrão. O alinhamento dos rasgos de luz e a precisão do nivelamento a laser deles é incomparável. Recomendo de olhos fechados.",
    project: "Projetos de Arquitetura Contínuos",
  },
  {
    name: "Fernanda & Rodrigo Mello",
    role: "Proprietários",
    location: "Balneário Camboriú, SC",
    rating: 5,
    text: "Fizemos a parede 3D na sala de jantar e os cortineiros iluminados nos quartos. A sensação quando acendemos as luzes à noite é espetacular! Preço justo, contrato transparente e profissionais muito educados.",
    project: "Parede 3D + Cortineiros Iluminados",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
            Depoimentos Reais
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            O Que Diz Quem Já <span className="text-gold-gradient">Transformou a Casa</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Mais de 1.800 clientes satisfeitos em apartamentos, casas e empreendimentos comerciais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="bg-stone-50/70 rounded-3xl p-8 border border-amber-200/70 shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200/60 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
                    <span className="text-xs text-stone-500">{item.role} • {item.location}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <CheckCircle className="w-5 h-5 text-amber-600" />
                  </div>
                </div>

                <div className="inline-block bg-white px-2.5 py-1 rounded-md text-[11px] font-semibold text-amber-800 border border-amber-200">
                  {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge Banner */}
        <div className="mt-14 max-w-xl mx-auto bg-amber-50/60 rounded-2xl p-4 border border-amber-300/80 flex items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <span className="text-stone-800 font-bold text-sm">
            4.8 de 5.0 estrelas
          </span>
          <span className="text-stone-400">|</span>
          <span className="text-stone-600 text-xs">
            Mais de 350 avaliações verificadas
          </span>
        </div>

      </div>
    </section>
  );
}


import { MessageCircle, Calculator, ShieldCheck, Sparkles, Star, Award, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-56 pb-20 md:pt-60 md:pb-28 overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-stone-50">
      {/* Decorative Golden Light Halo Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-200/25 via-amber-100/35 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          
          {/* Left Column: Persuasive Headline & CTAs */}
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.15]">
              Transforme seus Ambientes com a Elegância do{" "}
              <span className="text-gold-gradient block sm:inline">Gesso & Drywall</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-stone-600 max-w-2xl font-normal leading-relaxed">
              Gesso convencional e drywall para transformar sua casa ou empresa. Forros rebaixados, sancas, molduras, cortineiros e divisórias. 
              <strong className="text-stone-900 font-semibold"> Cuidado em cada detalhe, do nivelamento ao acabamento.</strong>
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-stone-700 text-sm font-medium w-full max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Obra limpa sem poeira excessiva</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Gesso convencional e drywall</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Cumprimento rigoroso de prazos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Atendimento técnico personalizado</span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20gratuito%20com%20a%20Gesso%20Ouro%20Branco."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-stone-950 font-bold text-base shadow-gold-lg hover:shadow-gold transition-all transform hover:-translate-y-0.5 animate-pulse-gold"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950" />
                <span>Orçamento Grátis no WhatsApp</span>
              </a>

              <a
                href="#galeria"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-amber-50/60 text-stone-800 font-semibold text-base border border-amber-300/80 shadow-sm transition-all hover:border-amber-400"
              >
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span>Ver Galeria de Projetos</span>
              </a>
            </div>

            {/* Credibility Counter Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-0 gap-y-6 pt-6 border-t border-stone-200/80 w-full">
              <div className="min-w-0 px-2 text-center">
                <div className="text-2xl sm:text-3xl font-black text-stone-900">+11</div>
                <div className="text-xs text-stone-500 font-medium">Anos no mercado</div>
              </div>
              <div className="min-w-0 px-2 text-center">
                <div className="text-2xl sm:text-3xl font-black text-stone-900">+900</div>
                <div className="text-xs text-stone-500 font-medium">Obras entregues</div>
              </div>
              <div className="min-w-0 px-2 text-center">
                <div className="text-2xl sm:text-3xl font-black text-stone-900">100%</div>
                <div className="text-xs text-stone-500 font-medium">Entrega no prazo</div>
              </div>
              <div className="min-w-0 px-2 text-center">
                <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl font-black text-stone-900">
                  4.8
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <div className="text-xs text-stone-500 font-medium">Nota no Google</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

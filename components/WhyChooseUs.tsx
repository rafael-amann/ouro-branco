import { Sparkles, Clock, Hammer, Award, Headphones, CheckCircle2, Target } from "lucide-react";

export default function WhyChooseUs() {
  const differentials = [
    {
      icon: Sparkles,
      title: "Obra Limpa & Organizada",
      desc: "Protegemos pisos, rodapés e móveis com lonas e papelão ondulado. Lixamento com tecnologia de baixa poeira e descarte ecológico em caçambas credenciadas.",
    },
    {
      icon: Target,
      title: "Alinhamento a Laser & Precisão",
      desc: "Utilizamos nível a laser multilinear em todos os ambientes para assegurar esquadro perfeito, superfícies 100% planas e juntas totalmente invisíveis.",
    },
    {
      icon: Clock,
      title: "Compromisso com os Prazos",
      desc: "Planejamos cada etapa com você e trabalhamos para cumprir os prazos combinados, mantendo uma comunicação clara durante toda a obra.",
    },
    {
      icon: Award,
      title: "Materiais Adequados ao Projeto",
      desc: "Trabalhamos com gesso convencional e sistemas em drywall. A escolha dos materiais considera o ambiente, o acabamento desejado e as necessidades da obra.",
    },
    {
      icon: Hammer,
      title: "Equipe Própria & Uniformizada",
      desc: "Gesseiros profissionais altamente capacitados, com conduta impecável dentro do seu imóvel ou condomínio fechado.",
    },
    {
      icon: Headphones,
      title: "Atendimento Personalizado",
      desc: "Orientamos a escolha entre gesso convencional e drywall, além dos formatos de sancas, molduras e cortineiros para seu imóvel.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-gradient-to-b from-stone-50 via-white to-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            Compromisso com a Qualidade
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Por Que Escolher a <span className="text-gold-gradient">Ouro Branco</span>?
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Sabemos que uma reforma exige confiança. Por isso, aliamos técnicas avançadas de instalação com atendimento transparente do início ao fim.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-amber-200/70 shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-300/80 flex items-center justify-center text-amber-700 group-hover:scale-110 group-hover:bg-gold-gradient group-hover:text-stone-950 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-bold text-amber-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Padrão Ouro Branco Comprovado</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Box: Gesso Ouro Branco vs Gesso Comum */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 text-center mb-8">
            Compare o Padrão Ouro Branco com o Mercado Comum
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-xs uppercase tracking-wider text-stone-500">
                  <th className="pb-4 font-semibold">Critério</th>
                  <th className="pb-4 font-bold text-amber-700">Gesso Ouro Branco</th>
                  <th className="pb-4 font-normal text-stone-400">Serviço Amador</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr>
                  <td className="py-3.5 font-medium">Nivelamento do Teto</td>
                  <td className="py-3.5 font-bold text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" /> Nivelamento a laser 360°
                  </td>
                  <td className="py-3.5 text-stone-400">Nível manual com risco de ondulações</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Limpeza na Obra</td>
                  <td className="py-3.5 font-bold text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" /> Proteção total de piso e descarte ecológico
                  </td>
                  <td className="py-3.5 text-stone-400">Poeira espalhada e entulho abandonado</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Escolha dos Materiais</td>
                  <td className="py-3.5 font-bold text-stone-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" /> Sistema escolhido conforme o ambiente
                  </td>
                  <td className="py-3.5 text-stone-400">Material escolhido sem avaliar o ambiente</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

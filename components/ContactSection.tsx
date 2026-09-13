"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Forro em Gesso Convencional",
    neighborhood: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n` +
      `• Telefone: ${formData.phone}\n` +
      `• Interesse: ${formData.service}\n` +
      `• Região/Bairro: ${formData.neighborhood || "Não informado"}\n` +
      `• Detalhes: ${formData.message || "Gostaria de agendar uma visita técnica gratuita."}`
    );

    window.open(`https://wa.me/5547992098224?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info & Coverage */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <MessageCircle className="w-3.5 h-3.5 text-amber-600" />
                Fale com a Ouro Branco
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Pronto para Iniciar <span className="text-gold-gradient">Sua Obra</span>?
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Entre em contato hoje mesmo e agende uma visita técnica gratuita no seu imóvel. Retornamos seu contato em menos de 1 hora!
              </p>
            </div>

            {/* Direct Info Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20de%20gesso."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80 hover:border-amber-400 hover:bg-amber-50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-gradient text-stone-950 flex items-center justify-center shrink-0 shadow-gold-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-amber-800 font-bold uppercase">Telefone / WhatsApp</div>
                  <div className="text-stone-900 font-extrabold text-lg group-hover:text-amber-700 transition-colors">
                    (47) 99209-8224
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-bold uppercase">Horário de Atendimento</div>
                  <div className="text-stone-900 font-semibold text-sm">
                    Segunda a Sexta: 08h às 17h30
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-bold uppercase">Localização</div>
                  <div className="text-stone-900 font-semibold text-sm">
                    Camboriú, Santa Catarina
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-bold uppercase">E-mail Profissional</div>
                  <div className="text-stone-900 font-semibold text-sm">
                    contato@gessoourobranco.com.br
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-amber-300/80 shadow-gold">
            <h3 className="text-2xl font-bold text-stone-900 mb-2">
              Solicite seu Orçamento Gratuito
            </h3>
            <p className="text-stone-600 text-sm mb-6">
              Preencha os campos abaixo e receba atendimento exclusivo com nossa equipe técnica:
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Ana Paula Ferreira"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (11) 98765-4321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1.5">
                    Bairro / Cidade do Imóvel
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Centro, Camboriú"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Serviço Principal de Interesse
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all bg-white"
                >
                  <option value="Forro em Gesso Convencional">Forro em Gesso Convencional</option>
                  <option value="Molduras em Gesso Convencional">Molduras em Gesso Convencional</option>
                  <option value="Forro Drywall Rebaixado">Forro Drywall Rebaixado</option>
                  <option value="Sanca Iluminada com LED">Sanca Iluminada com LED</option>
                  <option value="Divisória / Parede Acústica">Divisória / Parede Acústica em Drywall</option>
                  <option value="Revestimento 3D em Gesso">Revestimento 3D em Gesso</option>
                  <option value="Cortineiro Iluminado & Nichos">Cortineiro Iluminado & Nichos</option>
                  <option value="Projeto Comercial / Corporativo">Projeto Comercial / Corporativo</option>
                  <option value="Outros Serviços / Reforma Geral">Outros Serviços / Reforma Geral</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1.5">
                  Detalhes ou Metragem Estimada (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Conte-nos um pouco sobre seu imóvel ou deixe suas principais dúvidas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-sm outline-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-stone-950 font-bold text-base shadow-gold hover:shadow-gold-lg transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Enviar e Iniciar no WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600" />
                <span>Seus dados estão protegidos. Não enviamos spam.</span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

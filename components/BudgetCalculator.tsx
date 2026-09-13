"use client";

import { useState } from "react";
import { 
  Calculator, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Layers, 
  Sun, 
  Columns, 
  Box, 
  ShieldCheck, 
  Clock,
  ChevronRight
} from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  desc: string;
  icon: typeof Layers;
  minRate: number;
  maxRate: number;
  daysEstimate: (area: number) => string;
}

const SERVICES: ServiceOption[] = [
  {
    id: "forro-drywall",
    name: "Forro Drywall Rebaixado",
    desc: "Nivelamento liso, isolamento termoacústico e embutimento de spots",
    icon: Layers,
    minRate: 85,
    maxRate: 115,
    daysEstimate: (area) => (area <= 35 ? "1 a 2 dias úteis" : area <= 80 ? "2 a 3 dias úteis" : "3 a 5 dias úteis"),
  },
  {
    id: "sanca-iluminada",
    name: "Sanca com Iluminação LED",
    desc: "Sanca aberta, invertida ou rasgo de luz com efeito de iluminação cênica",
    icon: Sun,
    minRate: 110,
    maxRate: 155,
    daysEstimate: (area) => (area <= 35 ? "1 a 2 dias úteis" : area <= 80 ? "3 a 4 dias úteis" : "4 a 6 dias úteis"),
  },
  {
    id: "parede-drywall",
    name: "Divisória / Parede Drywall",
    desc: "Montagem rápida e limpa com opção de isolamento acústico em lã de vidro",
    icon: Columns,
    minRate: 125,
    maxRate: 175,
    daysEstimate: (area) => (area <= 35 ? "1 a 2 dias úteis" : area <= 80 ? "2 a 4 dias úteis" : "4 a 5 dias úteis"),
  },
  {
    id: "painel-3d",
    name: "Revestimento em Gesso 3D",
    desc: "Placas decorativas geométricas com relevo moderno e iluminação rasante",
    icon: Box,
    minRate: 140,
    maxRate: 195,
    daysEstimate: (area) => (area <= 20 ? "1 a 2 dias úteis" : area <= 50 ? "2 a 3 dias úteis" : "3 a 4 dias úteis"),
  },
];

const PROPERTY_TYPES = [
  { id: "apartamento", label: "Apartamento" },
  { id: "casa", label: "Casa / Sobrado" },
  { id: "comercial", label: "Escritório / Loja" },
];

export default function BudgetCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("sanca-iluminada");
  const [area, setArea] = useState<number>(35);
  const [propertyType, setPropertyType] = useState<string>("apartamento");

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const minTotal = Math.round(area * activeService.minRate);
  const maxTotal = Math.round(area * activeService.maxRate);
  const timeline = activeService.daysEstimate(area);
  const selectedProperty = PROPERTY_TYPES.find((p) => p.id === propertyType)?.label || "Imóvel";

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz uma simulação no site da Gesso Ouro Branco:\n\n` +
    `• Serviço: ${activeService.name}\n` +
    `• Metragem aproximada: ${area} m²\n` +
    `• Tipo de Imóvel: ${selectedProperty}\n` +
    `• Estimativa Preliminar: ${formatCurrency(minTotal)} a ${formatCurrency(maxTotal)}\n\n` +
    `Gostaria de tirar dúvidas e agendar uma visita técnica gratuita para validação no local!`
  );

  const whatsappUrl = `https://wa.me/5547992098224?text=${whatsappMessage}`;

  return (
    <section id="calculadora" className="py-20 md:py-28 bg-stone-50 relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            Transparência & Rapidez
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Simule seu Orçamento em <span className="text-gold-gradient">Tempo Real</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Personalize o tipo de serviço e metragem para ter uma estimativa preliminar transparente. 
            Sem surpresas ou letras miúdas.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-200/70 overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="flex items-center justify-between text-sm font-bold text-stone-900 mb-3">
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold">1</span>
                    Selecione o Serviço Desejado:
                  </span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((srv) => {
                    const Icon = srv.icon;
                    const isSelected = srv.id === selectedServiceId;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedServiceId(srv.id)}
                        className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                          isSelected
                            ? "bg-amber-50/70 border-amber-500 shadow-gold-sm ring-1 ring-amber-400"
                            : "bg-white border-stone-200 hover:border-amber-300 hover:bg-stone-50/50"
                        }`}
                      >
                        <div className="flex items-center justify-between w-full mb-2">
                          <div className={`p-2 rounded-xl ${isSelected ? "bg-amber-500 text-white" : "bg-stone-100 text-stone-700"}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-amber-700 font-bold" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-stone-900 leading-tight">{srv.name}</div>
                          <div className="text-[12px] text-stone-500 line-clamp-2 mt-1">{srv.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Area Slider ($m^2$) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-stone-900">
                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold">2</span>
                    Metragem Aproximada:
                  </label>
                  <span className="text-xl font-extrabold text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
                    {area} m²
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min={10}
                  max={150}
                  step={5}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />

                {/* Quick Area Preset Buttons */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
                  <span className="text-stone-500 font-medium">Atalhos comuns:</span>
                  {[15, 25, 35, 50, 80, 120].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setArea(preset)}
                      className={`px-3 py-1 rounded-full font-semibold transition-colors ${
                        area === preset
                          ? "bg-amber-600 text-white shadow-sm"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {preset} m²
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Property Type */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-stone-900 mb-3">
                  <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xs font-bold">3</span>
                  Tipo de Imóvel:
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {PROPERTY_TYPES.map((prop) => {
                    const isSelected = prop.id === propertyType;
                    return (
                      <button
                        key={prop.id}
                        type="button"
                        onClick={() => setPropertyType(prop.id)}
                        className={`py-2.5 px-3 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all border ${
                          isSelected
                            ? "bg-stone-900 text-amber-300 border-stone-900 shadow-sm"
                            : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                        }`}
                      >
                        {prop.label}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Live Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-amber-50/60 via-stone-50 to-white p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-amber-200/60 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-800 font-bold mb-1">
                    Estimativa Preliminar
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900">
                    {activeService.name}
                  </h3>
                  <div className="text-xs text-stone-500 mt-0.5">
                    {area} m² no total • {selectedProperty}
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-white p-5 rounded-2xl border border-amber-300/80 shadow-gold-sm">
                  <span className="text-xs text-stone-500 font-medium block mb-1">
                    Faixa de valor estimada:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-stone-900">
                    <span className="text-amber-700">{formatCurrency(minTotal)}</span>
                    <span className="text-stone-400 text-lg font-normal mx-1.5">a</span>
                    <span className="text-amber-800">{formatCurrency(maxTotal)}</span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-2">
                    *Valor estimado com materiais de 1ª linha e mão de obra inclusos. Sujeito a confirmação após medição a laser no local.
                  </p>
                </div>

                {/* Benefits included */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                    O que está incluso neste valor:
                  </div>
                  <ul className="space-y-2 text-xs text-stone-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Placas drywall e perfis de aço galvanizado ABNT</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Emassamento com fita e lixamento técnico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Tempo médio de obra: <strong>{timeline}</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Acabamento fino com alinhamento a laser</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button: Send to WhatsApp */}
              <div className="pt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-stone-950 font-bold text-sm sm:text-base shadow-gold-lg hover:shadow-gold transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-stone-950" />
                  <span>Enviar Este Projeto para o WhatsApp</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <p className="text-center text-[11px] text-stone-500 mt-2">
                  Você será atendido por um especialista técnico da Ouro Branco.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

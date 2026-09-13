"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, X, ZoomIn } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  categoryKey: "salas" | "sancas" | "paredes" | "dormitorios" | "comercial";
  materials: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 7,
    title: "Sala com Sanca de Gesso e Luz Indireta",
    category: "Salas de Estar",
    categoryKey: "salas",
    materials: "Inspiração: forro de gesso, sanca com luz indireta e spots embutidos",
    image: "/images/referencia-sala-gesso.png",
  },
  {
    id: 8,
    title: "Quarto com Cortineiro de Gesso Iluminado",
    category: "Dormitórios",
    categoryKey: "dormitorios",
    materials: "Inspiração: teto de drywall e cortineiro embutido com iluminação quente",
    image: "/images/referencia-quarto-gesso.png",
  },
  {
    id: 1,
    title: "Sala de Estar com Sanca Invertida & Iluminação Quente",
    category: "Salas de Estar",
    categoryKey: "salas",
    materials: "Drywall estruturado, fita de LED 3000K, spots dicroica",
    image: "/images/referencia-hero-v2.png",
  },
  {
    id: 2,
    title: "Sanca de Gesso Aberta com Iluminação Linear",
    category: "Sancas & Iluminação",
    categoryKey: "sancas",
    materials: "Gesso acartonado, perfil de alumínio para fita LED, pintura laca branca",
    image: "/images/referencia-sanca-v2.png",
  },
  {
    id: 3,
    title: "Parede 3D Geométrica com Luz Rasante",
    category: "Paredes 3D & Nichos",
    categoryKey: "paredes",
    materials: "Placas 3D em gesso diamante, rasgo de luz superior com LED",
    image: "/images/referencia-parede-3d-v2.png",
  },
  {
    id: 4,
    title: "Divisória com Nichos Decorativos Iluminados",
    category: "Paredes 3D & Nichos",
    categoryKey: "paredes",
    materials: "Parede drywall com lã de vidro, nichos sob medida com LED",
    image: "/images/referencia-nichos-v2.png",
  },
  {
    id: 5,
    title: "Suíte Master com Cortineiro Iluminado",
    category: "Dormitórios",
    categoryKey: "dormitorios",
    materials: "Forro rebaixado com cortineiro de 15cm e fita LED indireta",
    image: "/images/referencia-cortineiro-v2.png",
  },
  {
    id: 6,
    title: "Escritório Corporativo com Iluminação Linear",
    category: "Comercial",
    categoryKey: "comercial",
    materials: "Forro drywall antichamas (RF), perfil de embutir LED contínuo",
    image: "/images/referencia-comercial-v2.png",
  },
];

const CATEGORIES = [
  { key: "todos", label: "Todos os Projetos" },
  { key: "salas", label: "Salas de Estar" },
  { key: "sancas", label: "Sancas & LED" },
  { key: "paredes", label: "Paredes 3D & Nichos" },
  { key: "dormitorios", label: "Dormitórios" },
  { key: "comercial", label: "Comercial" },
];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("todos");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedFilter === "todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryKey === selectedFilter);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Galeria de Inspirações
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight">
            Ideias para <span className="text-gold-gradient">Seu Projeto</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Explore referências de forros, sancas e cortineiros para projetos em gesso convencional ou drywall. A escolha do sistema é feita conforme o ambiente.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedFilter === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedFilter(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? "bg-gold-gradient text-stone-950 border-amber-400 shadow-gold font-bold"
                    : "bg-white text-stone-700 border-stone-200 hover:border-amber-300 hover:bg-stone-50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-amber-200/70 shadow-sm hover:shadow-gold transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 text-stone-900 px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-amber-600" />
                    Ver Detalhes do Projeto
                  </span>
                </div>
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-800 border border-amber-300 shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-bold text-base sm:text-lg text-stone-900 group-hover:text-amber-800 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-1">
                  {project.materials}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal View for Project */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-300 relative animate-scaleUp">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 flex items-center justify-center shadow-md hover:scale-105 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase">
                  <span>{activeModalProject.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-stone-900">
                  {activeModalProject.title}
                </h3>

                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs sm:text-sm text-stone-700 space-y-1">
                  <div className="font-bold text-stone-900">Sugestões para um projeto semelhante:</div>
                  <div>{activeModalProject.materials}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/5547992098224?text=${encodeURIComponent(
                      `Olá! Gostei muito do projeto "${activeModalProject.title}" que vi na galeria da Gesso Ouro Branco. Gostaria de um orçamento semelhante para o meu espaço!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-gradient hover:bg-gold-gradient-hover text-stone-950 font-bold text-sm shadow-gold"
                  >
                    <MessageCircle className="w-4 h-4 fill-stone-950" />
                    <span>Quero um Projeto Como Este</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-sm transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

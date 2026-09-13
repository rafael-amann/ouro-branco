import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t-2 border-amber-500/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="#inicio" aria-label="Gesso Ouro Branco — início" className="inline-block rounded-lg focus-visible:outline-2 focus-visible:outline-amber-500"><BrandLogo className="w-[260px] max-w-full" dark /></Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Gesso convencional e drywall, com cuidado em cada acabamento. Forros, sancas, molduras, cortineiros e divisórias para sua casa ou empresa.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/80 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Acabamento Fino de Alto Padrão</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-stone-800 pb-2">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors">Serviços Especializados</a>
              </li>
              <li>
                <a href="#processo" className="hover:text-amber-400 transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-amber-400 transition-colors">Diferenciais de Qualidade</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">Galeria de Obras</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos de Clientes</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-stone-800 pb-2">
              Serviços Populares
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>Sancas Abertas & Invertidas com LED</li>
              <li>Forros em Gesso Convencional</li>
              <li>Forros Rebaixados em Drywall</li>
              <li>Paredes Divisórias Acústicas</li>
              <li>Revestimento Decorativo 3D em Gesso</li>
              <li>Cortineiros Embutidos Iluminados</li>
              <li>Nichos de Gesso sob Medida</li>
            </ul>
          </div>

          {/* Col 4: Contact & Schedule */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-stone-800 pb-2">
              Central de Atendimento
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(47) 99209-8224 (WhatsApp)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contato@gessoourobranco.com.br</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendendo todo o Vale do Itajaí — SC</span>
              </p>
              <p className="text-xs text-stone-400 pt-2">
                Horário: Segunda a Sexta das 08h às 17h30
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Gesso Ouro Branco. Todos os direitos reservados.
            <div className="text-[11px] text-stone-400 mt-0.5">
              CNPJ: 61.738.041/0001-74 • Acabamentos Normatizados ABNT NBR 15758
            </div>
          </div>

          <a
            href="#inicio"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-amber-400 transition-colors border border-stone-700"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
}

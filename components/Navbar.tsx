"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { Phone, MessageCircle, Menu, X, Shield, Clock, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    setIsScrolled(previousY > 20);
    const handleScroll = () => {
      const currentY = Math.max(0, window.scrollY);
      setIsScrolled(currentY > 20);
      if (currentY <= 20) {
        setIsHidden(false);
        previousY = currentY;
        return;
      }
      if (Math.abs(currentY - previousY) < 8) return;
      setIsHidden(currentY > previousY && currentY > 120);
      previousY = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Projetos", href: "#galeria" },
    { label: "Como Funciona", href: "#processo" },
    { label: "Avaliações", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ];

  return (
    <header onFocusCapture={() => setIsHidden(false)} className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 motion-reduce:transition-none ${isHidden && !mobileMenuOpen ? "-translate-y-full focus-within:translate-y-0" : "translate-y-0"}`}>
      {/* Top Notification Bar */}
      <div className={`${isScrolled ? "hidden" : "block"} bg-stone-900 text-stone-200 text-xs py-2 px-4 border-b border-amber-500/20`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-amber-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              Gesso Ouro Branco:
            </span>
            <span className="text-stone-300">
              Acabamentos de Alto Padrão em Gesso & Drywall
            </span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <span className="hidden md:flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Seg a Sex: 08h às 17h30
            </span>
            <a
              href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Gesso%20Ouro%20Branco."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              (47) 99209-8224
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBFBFB] backdrop-blur-md shadow-[0_2px_10px_rgba(91,72,39,0.06)] border-b border-[#c8b58e]/30 py-1"
            : "bg-[#FBFBFB] backdrop-blur-sm border-b border-[#c8b58e]/25 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" aria-label="Gesso Ouro Branco — início" className="shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-amber-500"><BrandLogo className={isScrolled ? "w-[140px] sm:w-[160px]" : "w-[230px] sm:w-[280px]"} preload /></Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-[18px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-amber-700 font-[Georgia,serif] font-medium text-[17px] whitespace-nowrap transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-gradient hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Gesso%20Ouro%20Branco%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-3 whitespace-nowrap rounded-[10px] border border-[#a97927] bg-[#c38d2b] px-5 py-3 text-[#211a0e] font-semibold text-[14px] tracking-[0.015em] shadow-[0_3px_10px_rgba(111,87,40,0.09)] transition-[background-color,border-color,box-shadow] duration-200 hover:bg-[#d39d3b] hover:border-[#a97927] hover:shadow-[0_5px_14px_rgba(111,87,40,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a88336]"
            >
              <span className="flex items-center border-r border-[#211a0e]/20 pr-3"><MessageCircle className="w-[18px] h-[18px] text-[#211a0e]" strokeWidth={1.7} aria-hidden="true" /></span>
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-stone-700 hover:text-amber-700 hover:bg-amber-50/50 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FBFBFB] backdrop-blur-md border-b border-amber-200/60 px-4 pt-3 pb-6 space-y-3 shadow-xl transition-all">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-stone-800 hover:text-amber-700 hover:bg-amber-50 font-[Georgia,serif] font-medium text-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-stone-100">
              <a
                href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20obra."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gold-gradient text-stone-950 font-semibold text-base shadow-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5 fill-stone-950" />
                <span>Pedir Orçamento Grátis</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Pulsing Floating Button */}
      <a
        href="https://wa.me/5547992098224?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Gesso%20Ouro%20Branco%20e%20gostaria%20de%20um%20or%C3%A7amento%20r%C3%A1pido."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >
        {/* Golden / Green Ambient Pulse */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" />

        {/* Hover Tooltip */}
        <span className="sr-only">WhatsApp Gesso Ouro Branco</span>
      </a>
    </div>
  );
}

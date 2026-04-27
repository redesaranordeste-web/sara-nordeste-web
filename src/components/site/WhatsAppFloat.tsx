import { MessageCircle } from "lucide-react";

const WHATS_URL =
  "https://wa.me/5581988541655?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rede%20Sara%20Nordeste.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="group fixed bottom-6 right-4 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 font-bold text-white shadow-elegant transition-smooth hover:scale-105 sm:bottom-8 sm:right-6"
      style={{ boxShadow: "0 10px 30px -10px rgba(37,211,102,0.55)" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40"
      />
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm transition-all duration-300 group-hover:max-w-[140px] group-hover:pl-1">
        Fale conosco
      </span>
    </a>
  );
}

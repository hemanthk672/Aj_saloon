import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const message = 'Hi! I would like to book an appointment at AJ Unisex & Family Salon.';
    window.open(`https://wa.me/919014147727?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:bg-green-400 transition-all duration-200 hover:scale-105 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 flex-shrink-0" />
      <span className="text-sm font-semibold hidden sm:block">WhatsApp Us</span>
    </button>
  );
}

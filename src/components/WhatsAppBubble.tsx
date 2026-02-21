import { MessageCircle } from "lucide-react";

const WhatsAppBubble = () => {
  const whatsappUrl = `https://web.whatsapp.com/send?phone=917420807577&text=${encodeURIComponent("Hi, I am interested in Wagholi High Street. Please share more details.")}`;
  const mobileUrl = `https://api.whatsapp.com/send?phone=917420807577&text=${encodeURIComponent("Hi, I am interested in Wagholi High Street. Please share more details.")}`;

  const handleClick = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    window.open(isMobile ? mobileUrl : whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-success flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-popover" />
    </button>
  );
};

export default WhatsAppBubble;

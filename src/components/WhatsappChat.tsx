import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const WhatsappChat = () => {
  const phoneNumber = "919868495901";
  const [stopAboveFooter, setStopAboveFooter] = useState<boolean>(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStopAboveFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Omega Tutorials on WhatsApp" className={`fixed ${stopAboveFooter ? 'bottom-15' : 'bottom-6'} right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] font-semibold hover:scale-105 transition duration-300`}>
      <MessageCircle className="h-5 w-5" /> Chat with us
    </a>
  )
}

export default WhatsappChat
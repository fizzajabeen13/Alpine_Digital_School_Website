import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  phoneNumber: string;
  message?: string;
};

export default function FloatingWhatsApp({
  message = "Hello, I want to know more about admissions.",
}: FloatingWhatsAppProps) {
  const url = `https://wa.me/${+923336302249}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl hover:bg-green-700"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
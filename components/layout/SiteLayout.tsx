import ChatWidget from "@/components/shared/ChatWidget";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />

      <FloatingWhatsApp phoneNumber="+923336302249" />
      <ChatWidget />
    </>
  );
}
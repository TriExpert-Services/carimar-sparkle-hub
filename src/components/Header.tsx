import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/18138027696", "_blank");
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">Carimar Services LLC</h1>
            <span className="text-sm text-muted-foreground">Tampa, FL</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span>support@carimarservices.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>(813) 802-7696</span>
            </div>
            <Button variant="whatsapp" size="sm" onClick={handleWhatsAppClick}>
              WhatsApp
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="whatsapp" size="sm" onClick={handleWhatsAppClick}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
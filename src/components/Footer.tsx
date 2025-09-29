import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Carimar Services LLC</h3>
            <p className="mb-4 text-primary-foreground/80">
              Professional cleaning services in Tampa, Florida. 
              We're committed to making your space spotless and your life easier.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/18138027696" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                WhatsApp
              </a>
              <a 
                href="mailto:support@carimarservices.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move-in/Move-out</li>
              <li>Post-Construction</li>
              <li>Carpet Cleaning</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tampa, Florida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:8138027696" className="hover:text-primary-foreground transition-colors">
                  (813) 802-7696
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:support@carimarservices.com" className="hover:text-primary-foreground transition-colors">
                  support@carimarservices.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>carimarservices.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Carimar Services LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
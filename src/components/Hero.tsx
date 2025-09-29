import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  const handleBookNow = () => {
    window.open("https://wa.me/18138027696?text=Hi! I'd like to book a cleaning service.", "_blank");
  };

  const handleGetQuote = () => {
    window.open("https://wa.me/18138027696?text=Hi! I'd like to get a quote for cleaning services.", "_blank");
  };

  return (
    <section className="relative min-h-[600px] bg-gradient-hero flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Cleaning Services in Tampa
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Reliable, thorough, and affordable cleaning services for your home and business. 
            We make your space sparkle with attention to detail you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" onClick={handleBookNow}>
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary" onClick={handleGetQuote}>
              Get Free Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Sparkles className="h-6 w-6 text-secondary" />
              <span className="font-medium">100% Satisfaction</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-secondary" />
              <span className="font-medium">Insured & Bonded</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-6 w-6 text-secondary" />
              <span className="font-medium">Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
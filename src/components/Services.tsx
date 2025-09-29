import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, Waves, ShowerHead, Trash2 } from "lucide-react";
import teamImage from "@/assets/team-cleaning.jpg";
import commercialImage from "@/assets/commercial-cleaning.jpg";

const Services = () => {
  const handleWhatsAppContact = (service: string) => {
    const message = `Hi! I'm interested in ${service}. Can you provide more information?`;
    window.open(`https://wa.me/18138027696?text=${encodeURIComponent(message)}`, "_blank");
  };

  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.",
      features: ["Deep cleaning", "Regular maintenance", "Move-in/out cleaning", "Post-construction cleanup"],
      image: teamImage
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional office and commercial space cleaning to maintain a healthy work environment.",
      features: ["Office buildings", "Retail spaces", "Medical facilities", "Educational institutions"],
      image: commercialImage
    }
  ];

  const additionalServices = [
    { icon: Sparkles, title: "Deep Cleaning", description: "Thorough top-to-bottom cleaning" },
    { icon: Waves, title: "Carpet Cleaning", description: "Professional carpet and upholstery care" },
    { icon: ShowerHead, title: "Disinfection", description: "EPA-approved sanitization services" },
    { icon: Trash2, title: "Post-Event Cleanup", description: "After party and event cleaning" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive cleaning solutions 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}></div>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <service.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 mb-6 text-sm text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button 
                  variant="default" 
                  onClick={() => handleWhatsAppContact(service.title)}
                  className="w-full"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
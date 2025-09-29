import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: MapPin,
      title: "Local Tampa Business",
      description: "Proudly serving the Tampa Bay area with personalized service and local expertise."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our trained professionals bring years of experience and attention to detail."
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee on all services."
    },
    {
      icon: Heart,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We tailor our services to meet your specific needs."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Carimar Services LLC?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Based in Tampa, Florida, we're committed to providing exceptional cleaning services 
            that exceed expectations. Our local team understands the unique needs of Tampa residents and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-0 shadow-sm hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="pt-8">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in Tampa who trust Carimar Services LLC 
            for their cleaning needs. Contact us today for a free quote!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@carimarservices.com"
              className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="https://wa.me/18138027696"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
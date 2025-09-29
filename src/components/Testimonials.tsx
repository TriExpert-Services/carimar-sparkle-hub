import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Westchase, Tampa",
      text: "Carimar Services has been cleaning our home for over a year now. They're always punctual, thorough, and professional. Highly recommend!",
      rating: 5
    },
    {
      name: "David Thompson",
      location: "Downtown Tampa",
      text: "Outstanding commercial cleaning service! Our office has never looked better. The team is reliable and pays attention to every detail.",
      rating: 5
    },
    {
      name: "Jennifer Martinez",
      location: "Hyde Park, Tampa",
      text: "I was impressed by their deep cleaning service when we moved into our new home. They made it spotless and ready for our family.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers across Tampa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-sm hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
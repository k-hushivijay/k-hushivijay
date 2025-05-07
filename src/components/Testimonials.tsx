
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "TechNova Solutions",
      image: "/placeholder.svg",
      content: "SoftSell helped us recover nearly $50,000 from unused enterprise licenses that would have otherwise gone to waste. Their valuation was fair and the payment was processed quickly. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Finance Manager",
      company: "Quantum Industries",
      image: "/placeholder.svg",
      content: "As we transitioned to cloud services, we had several on-premise licenses that were no longer needed. SoftSell made the process of selling them incredibly simple and transparent. The ROI on this decision was significant.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-container bg-muted/30">      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-0">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg italic">&ldquo;{testimonial.content}&rdquo;</p>
            </CardHeader>
            <CardFooter className="pt-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}{testimonial.company.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock,
  DollarSign,
  ShieldCheck,
  Award
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Maximize Value",
      description: "Get up to 70% of the original license value, significantly higher than industry standard.",
      highlight: "70%"
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Fast Turnaround",
      description: "Complete the entire process from submission to payment in as little as 48 hours.",
      highlight: "48hrs"
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Compliance Guaranteed",
      description: "Our legal team handles all compliance and transfer requirements to protect all parties.",
      highlight: "100%"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Trusted By Leaders",
      description: "Over 500 companies from startups to Fortune 500s have successfully used our platform.",
      highlight: "500+"
    }
  ];

  return (
    <section id="why-choose-us" className="section-container">
      <h2 className="section-title">Why Choose SoftSell</h2>
      <p className="section-subtitle">
        We've created the most efficient, secure, and profitable way to sell your unused software licenses.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border overflow-hidden animate-hover">
            <div className="h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <CardContent className="p-6">
              <Badge variant="outline" className="absolute top-3 right-3 font-bold text-primary">
                {benefit.highlight}
              </Badge>
              <div className="flex flex-col">
                <div className="mb-4 p-2 rounded-full bg-primary/10 w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

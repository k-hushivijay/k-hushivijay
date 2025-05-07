
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Banknote, 
  FileText,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Upload License",
      description: "Submit your software license details through our secure portal for a quick review and valuation."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-primary" />,
      title: "Get Valuation",
      description: "Our experts determine the fair market value of your licenses based on current demand and pricing trends."
    },
    {
      icon: <Banknote className="h-12 w-12 text-primary" />,
      title: "Get Paid",
      description: "Once approved, receive payment directly to your account within 48 hours, no hidden fees or delays."
    }
  ];

  return (
    <section id="how-it-works" className="section-container bg-muted/30">
      <h2 className="section-title">How It Works</h2>
      <p className="section-subtitle">
        Our streamlined process makes selling unused software licenses quick, transparent, and profitable.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {steps.map((step, index) => (
          <Card key={index} className="border bg-card shadow-sm hover:shadow-md transition-all animate-hover">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-3 rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

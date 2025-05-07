
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Transform Unused Software into <span className="text-primary">Immediate Revenue</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-lg">
                SoftSell helps businesses recover value from unused software licenses through our secure, efficient, and transparent resale marketplace.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base animate-hover">
                Sell My Licenses
              </Button>
              <Button size="lg" variant="outline" className="text-base animate-hover">
                Get a Free Valuation
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No upfront fees</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Fast payments</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Secure process</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] bg-secondary/20 rounded-full blur-xl"></div>
            </div>
            <div className="relative bg-white dark:bg-slate-800 border rounded-xl shadow-lg p-6 w-full max-w-md">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded-md"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded-md w-5/6"></div>
                  <div className="h-4 bg-muted rounded-md w-4/6"></div>
                </div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-primary rounded-md w-1/4"></div>
                  <div className="h-8 bg-secondary rounded-md w-1/4"></div>
                </div>
                <div className="h-32 bg-muted rounded-md"></div>
                <div className="flex justify-end">
                  <div className="h-8 bg-primary rounded-md w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="hidden md:block absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;

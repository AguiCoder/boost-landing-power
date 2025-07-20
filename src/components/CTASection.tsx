import { ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Urgency Indicator */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full mb-8">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Limited Time: 50% Off First 3 Months</span>
          </div>

          {/* Headlines */}
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Start growing your business{" "}
            <span className="italic">today</span>
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join 50,000+ businesses that have transformed their operations with our platform. 
            Start your free trial now and see results within 24 hours.
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <CheckCircle className="h-5 w-5 text-primary-foreground" />
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 font-semibold group shadow-medium"
            >
              Start Your Free Trial
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              size="xl" 
              className="text-primary-foreground hover:bg-white/10 border border-white/20 font-semibold"
            >
              Talk to Sales
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-primary-foreground/70 text-sm mb-4">
              Trusted by teams at leading companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {["Microsoft", "Google", "Apple", "Amazon", "Meta"].map((company, index) => (
                <div key={index} className="text-primary-foreground font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
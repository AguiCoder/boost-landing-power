import { ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-16">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>Trusted by 50,000+ businesses worldwide</span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Transform Your Business with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smart Analytics
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Stop guessing, start growing. Our AI-powered platform helps you make data-driven decisions 
                that increase revenue by 40% on average within the first 90 days.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta-secondary" size="xl" className="group">
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-foreground">2.5M+</div>
                <div className="text-sm text-muted-foreground">Data Points</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-first animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl animate-pulse" />
              <img
                src={heroDashboard}
                alt="Analytics Dashboard Interface"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-border/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
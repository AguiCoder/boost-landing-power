import { BarChart3, Zap, Shield, Users, TrendingUp, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Get instant insights with live data visualization that updates in real-time as your business grows.",
    benefit: "Increase decision speed by 70%"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms automatically identify trends, anomalies, and opportunities in your data.",
    benefit: "Discover 3x more opportunities"
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Process millions of data points in seconds with our optimized infrastructure and smart caching.",
    benefit: "10x faster than competitors"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, SOC 2 compliance, and advanced access controls keep your data safe.",
    benefit: "99.9% security uptime"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights, create custom dashboards, and collaborate seamlessly with your entire team.",
    benefit: "Improve team efficiency by 50%"
  },
  {
    icon: TrendingUp,
    title: "Predictive Forecasting",
    description: "Advanced forecasting models help you predict trends and plan for the future with confidence.",
    benefit: "95% forecast accuracy"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              scale your business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to help you make better decisions, move faster, 
            and stay ahead of the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-background/50 backdrop-blur-sm hover:bg-background/80 hover:shadow-medium transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {feature.benefit}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-2xl p-8 shadow-soft animate-scale-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to transform your business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of businesses that have already increased their revenue by 40% 
            using our platform. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Start Free Trial
            </Button>
            <Button variant="cta-ghost" size="xl">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
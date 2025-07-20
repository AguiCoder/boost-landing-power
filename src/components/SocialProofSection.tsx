import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechFlow Inc",
    avatar: "SC",
    rating: 5,
    quote: "This platform transformed our decision-making process. We saw a 45% increase in conversion rates within 2 months.",
    metric: "45% increase in conversions"
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "Growth Labs",
    avatar: "MR",
    rating: 5,
    quote: "The AI insights are incredible. It's like having a team of data scientists at your fingertips 24/7.",
    metric: "300% ROI in 6 months"
  },
  {
    name: "Emily Thompson",
    role: "Data Director",
    company: "Scale Dynamics",
    avatar: "ET",
    rating: 5,
    quote: "Implementation was seamless, and the results were immediate. Our team productivity increased by 60%.",
    metric: "60% productivity increase"
  }
];

const companyLogos = [
  "TechFlow", "Growth Labs", "Scale Dynamics", "InnovateCorp", "DataVision", "Future Systems"
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="h-12 w-24 bg-muted rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-xs font-semibold text-muted-foreground">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-gradient-feature rounded-lg">
                  <div className="text-sm font-semibold text-primary">{testimonial.metric}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="animate-counter">
            <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
            <div className="text-muted-foreground">Active Users</div>
          </div>
          <div className="animate-counter" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-foreground mb-2">1.2B+</div>
            <div className="text-muted-foreground">Data Points Analyzed</div>
          </div>
          <div className="animate-counter" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-foreground mb-2">40%</div>
            <div className="text-muted-foreground">Average ROI Increase</div>
          </div>
          <div className="animate-counter" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};
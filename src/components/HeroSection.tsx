import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Award, Shield } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Award className="h-4 w-4 mr-2" />
                Premium Automotive Dealer
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Find Your
                <span className="bg-gradient-accent bg-clip-text text-transparent"> Dream Car</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover luxury, performance, and elegance in our carefully curated collection 
                of 300+ premium vehicles. From sports cars to luxury SUVs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow">
                Browse Inventory
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Test Drive
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">300+</p>
                <p className="text-sm text-muted-foreground">Premium Cars</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={heroImage} 
                alt="Luxury Car" 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-card animate-hover-glow">
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="text-2xl font-bold text-primary">$25,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
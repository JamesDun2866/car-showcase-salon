import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Car, Search, Menu, Phone, MapPin } from "lucide-react";

interface HeaderProps {
  onSearch: (query: string) => void;
  totalCars: number;
}

export const Header = ({ onSearch, totalCars }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-hero backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-accent rounded-lg">
                <Car className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">AutoLux</h1>
                <p className="text-xs text-muted-foreground">Premium Car Sales</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cars..."
                className="pl-10 bg-background/80 backdrop-blur-sm"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <Badge variant="secondary" className="hidden lg:flex">
              {totalCars} Cars Available
            </Badge>
          </div>

          {/* Contact Info & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(555) 123-AUTO</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Auto Blvd</span>
              </div>
            </div>
            
            <Button variant="outline" className="hidden md:flex">
              Schedule Test Drive
            </Button>
            
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cars..."
              className="pl-10 bg-background/80 backdrop-blur-sm"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
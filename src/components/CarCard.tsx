import { Car } from "@/data/cars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Fuel, Gauge, Users } from "lucide-react";

interface CarCardProps {
  car: Car;
  onViewDetails: (car: Car) => void;
}

export const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-slide-up">
      <div className="relative overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge variant={car.condition === 'new' ? 'default' : car.condition === 'certified' ? 'secondary' : 'outline'}>
            {car.condition.toUpperCase()}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-muted-foreground">{car.color} • {car.mileage.toLocaleString()} miles</p>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Fuel className="h-4 w-4" />
              <span>{car.fuel === 'electric' ? 'Electric' : `${car.mpg.city}/${car.mpg.highway} MPG`}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Gauge className="h-4 w-4" />
              <span>{car.horsepower} HP</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{car.seating} seats</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">
                ${car.price.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">
                Est. ${Math.round(car.price / 60).toLocaleString()}/mo
              </p>
            </div>
            <Button 
              onClick={() => onViewDetails(car)}
              className="bg-gradient-accent text-accent-foreground hover:shadow-glow"
            >
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
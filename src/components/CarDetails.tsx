import { Car } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { 
  Car as CarIcon, 
  Fuel, 
  Gauge, 
  Users, 
  Calendar, 
  MapPin, 
  Zap, 
  Settings, 
  Award,
  Phone,
  MessageCircle,
  Heart,
  Share2
} from "lucide-react";

interface CarDetailsProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CarDetails = ({ car, isOpen, onClose }: CarDetailsProps) => {
  if (!car) return null;

  const specs = [
    { label: "Engine", value: car.engine, icon: Settings },
    { label: "Horsepower", value: `${car.horsepower} HP`, icon: Zap },
    { label: "Torque", value: `${car.torque} lb-ft`, icon: Gauge },
    { label: "0-60 mph", value: `${car.acceleration}s`, icon: Zap },
    { label: "Top Speed", value: `${car.topSpeed} mph`, icon: Gauge },
    { label: "Drivetrain", value: car.drivetrain.toUpperCase(), icon: Settings },
    { label: "Transmission", value: car.transmission.charAt(0).toUpperCase() + car.transmission.slice(1), icon: Settings },
    { label: "Fuel Economy", value: car.fuel === 'electric' ? 'Electric' : `${car.mpg.city}/${car.mpg.highway} MPG`, icon: Fuel },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {car.year} {car.make} {car.model}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Car Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={car.image} 
                alt={`${car.year} ${car.make} ${car.model}`}
                className="w-full h-64 lg:h-80 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant={car.condition === 'new' ? 'default' : car.condition === 'certified' ? 'secondary' : 'outline'}>
                  {car.condition.toUpperCase()}
                </Badge>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-2">
              <Button className="flex-1 bg-gradient-accent text-accent-foreground">
                <Phone className="h-4 w-4 mr-2" />
                Call Dealer
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Car Information */}
          <div className="space-y-6">
            {/* Price */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-primary">
                      ${car.price.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground">
                      Est. ${Math.round(car.price / 60).toLocaleString()}/month
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">VIN</p>
                    <p className="font-mono text-sm">{car.vin}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CarIcon className="h-5 w-5" />
                  <span>Vehicle Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Year:</span>
                    <span className="font-medium">{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Mileage:</span>
                    <span className="font-medium">{car.mileage.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{car.type.charAt(0).toUpperCase() + car.type.slice(1)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Seating:</span>
                    <span className="font-medium">{car.seating}</span>
                  </div>
                </div>
                <Separator />
                <div>
                  <p className="text-muted-foreground mb-2">Color</p>
                  <p className="font-medium">{car.color}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specs.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <spec.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">{spec.label}</p>
                    <p className="font-medium">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {car.features.map((feature, index) => (
                <Badge key={index} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              {car.description}
            </p>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
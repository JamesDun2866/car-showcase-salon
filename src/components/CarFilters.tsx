import { Car } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";

export interface CarFilters {
  search: string;
  make: string;
  type: string;
  fuel: string;
  condition: string;
  priceRange: [number, number];
  yearRange: [number, number];
}

interface CarFiltersProps {
  filters: CarFilters;
  onChange: (filters: CarFilters) => void;
  onReset: () => void;
  totalResults: number;
}

export const CarFilters = ({ filters, onChange, onReset, totalResults }: CarFiltersProps) => {
  const makes = Array.from(new Set(["BMW", "Mercedes-Benz", "Audi", "Toyota", "Honda", "Ford", "Chevrolet", "Porsche", "Ferrari", "Lamborghini"])).sort();
  const types = ["sedan", "suv", "coupe", "convertible", "hatchback", "truck", "sports"];
  const fuels = ["gasoline", "hybrid", "electric", "diesel"];
  const conditions = ["new", "used", "certified"];

  const hasActiveFilters = filters.search || filters.make || filters.type || filters.fuel || filters.condition || 
    filters.priceRange[0] > 0 || filters.priceRange[1] < 500000 || 
    filters.yearRange[0] > 2019 || filters.yearRange[1] < 2023;

  return (
    <div className="bg-gradient-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Filters</h3>
          <Badge variant="secondary">{totalResults} cars</Badge>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onReset}>
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search cars..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label>Make</Label>
          <Select value={filters.make} onValueChange={(value) => onChange({ ...filters, make: value })}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="All Makes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Makes</SelectItem>
              {makes.map((make) => (
                <SelectItem key={make} value={make}>{make}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Type</Label>
          <Select value={filters.type} onValueChange={(value) => onChange({ ...filters, type: value })}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              {types.map((type) => (
                <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Fuel</Label>
          <Select value={filters.fuel} onValueChange={(value) => onChange({ ...filters, fuel: value })}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="All Fuel Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Fuel Types</SelectItem>
              {fuels.map((fuel) => (
                <SelectItem key={fuel} value={fuel}>{fuel.charAt(0).toUpperCase() + fuel.slice(1)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Condition</Label>
          <Select value={filters.condition} onValueChange={(value) => onChange({ ...filters, condition: value })}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="All Conditions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Conditions</SelectItem>
              {conditions.map((condition) => (
                <SelectItem key={condition} value={condition}>{condition.charAt(0).toUpperCase() + condition.slice(1)}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Price Range</Label>
          <div className="px-3 py-2 bg-background/50 rounded-md border">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => onChange({ ...filters, priceRange: value as [number, number] })}
              max={500000}
              min={0}
              step={5000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>${filters.priceRange[0].toLocaleString()}</span>
              <span>${filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
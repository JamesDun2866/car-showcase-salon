import { useState, useMemo } from "react";
import { cars, Car } from "@/data/cars";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CarFilters, CarFilters as CarFiltersType } from "@/components/CarFilters";
import { CarCard } from "@/components/CarCard";
import { CarDetails } from "@/components/CarDetails";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Grid, List } from "lucide-react";

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<CarFiltersType>({
    search: "",
    make: "",
    type: "",
    fuel: "",
    condition: "",
    priceRange: [0, 500000],
    yearRange: [2019, 2023],
  });

  const itemsPerPage = 12;

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let filtered = cars.filter((car) => {
      const matchesSearch = 
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
        filters.search === "" || 
        car.make.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase());

      const matchesMake = !filters.make || car.make === filters.make;
      const matchesType = !filters.type || car.type === filters.type;
      const matchesFuel = !filters.fuel || car.fuel === filters.fuel;
      const matchesCondition = !filters.condition || car.condition === filters.condition;
      const matchesPrice = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      const matchesYear = car.year >= filters.yearRange[0] && car.year <= filters.yearRange[1];

      return matchesSearch && matchesMake && matchesType && matchesFuel && 
             matchesCondition && matchesPrice && matchesYear;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "year-desc":
          return b.year - a.year;
        case "year-asc":
          return a.year - b.year;
        case "mileage-asc":
          return a.mileage - b.mileage;
        case "mileage-desc":
          return b.mileage - a.mileage;
        default:
          return 0;
      }
    });

    return filtered;
  }, [cars, searchQuery, filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedCars.length / itemsPerPage);
  const paginatedCars = filteredAndSortedCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFiltersChange = (newFilters: CarFiltersType) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleFiltersReset = () => {
    setFilters({
      search: "",
      make: "",
      type: "",
      fuel: "",
      condition: "",
      priceRange: [0, 500000],
      yearRange: [2019, 2023],
    });
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header onSearch={handleSearch} totalCars={cars.length} />
      
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        {/* Filters */}
        <CarFilters
          filters={filters}
          onChange={handleFiltersChange}
          onReset={handleFiltersReset}
          totalResults={filteredAndSortedCars.length}
        />

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-background/80">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="year-desc">Year: Newest First</SelectItem>
                  <SelectItem value="year-asc">Year: Oldest First</SelectItem>
                  <SelectItem value="mileage-asc">Mileage: Low to High</SelectItem>
                  <SelectItem value="mileage-desc">Mileage: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Cars Grid */}
        {paginatedCars.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {paginatedCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onViewDetails={setSelectedCar}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">No cars found matching your criteria</p>
            <Button onClick={handleFiltersReset} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const page = i + 1;
              return (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              );
            })}
            
            <Button
              variant="outline"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>

      {/* Car Details Modal */}
      <CarDetails
        car={selectedCar}
        isOpen={!!selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </div>
  );
};

export default Index;

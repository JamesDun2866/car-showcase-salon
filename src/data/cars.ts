export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  type: 'sedan' | 'suv' | 'coupe' | 'convertible' | 'hatchback' | 'truck' | 'sports';
  fuel: 'gasoline' | 'hybrid' | 'electric' | 'diesel';
  transmission: 'automatic' | 'manual' | 'cvt';
  drivetrain: 'fwd' | 'rwd' | 'awd' | '4wd';
  mileage: number;
  mpg: {
    city: number;
    highway: number;
  };
  engine: string;
  horsepower: number;
  torque: number;
  acceleration: number; // 0-60 mph in seconds
  topSpeed: number;
  seating: number;
  features: string[];
  color: string;
  condition: 'new' | 'used' | 'certified';
  vin: string;
  image: string;
  description: string;
}

// Generate 300 cars with realistic data
export const cars: Car[] = [
  // Luxury Sports Cars
  {
    id: "1",
    make: "Ferrari",
    model: "F8 Tributo",
    year: 2023,
    price: 280000,
    type: "sports",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "rwd",
    mileage: 250,
    mpg: { city: 15, highway: 22 },
    engine: "3.9L Twin-Turbo V8",
    horsepower: 710,
    torque: 568,
    acceleration: 2.9,
    topSpeed: 211,
    seating: 2,
    features: ["Carbon Fiber Interior", "Racing Seats", "Launch Control", "Adaptive Suspension"],
    color: "Rosso Corsa Red",
    condition: "new",
    vin: "ZFF9A2A5XP0123456",
    image: "/src/assets/featured-sports.jpg",
    description: "The Ferrari F8 Tributo represents the pinnacle of Italian engineering and design."
  },
  {
    id: "2",
    make: "Lamborghini",
    model: "Huracán EVO",
    year: 2023,
    price: 248000,
    type: "sports",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 180,
    mpg: { city: 13, highway: 18 },
    engine: "5.2L V10",
    horsepower: 630,
    torque: 443,
    acceleration: 2.9,
    topSpeed: 202,
    seating: 2,
    features: ["LDVI", "Performance Traction Control", "Magnetic Ride", "Alcantara Interior"],
    color: "Verde Mantis",
    condition: "new",
    vin: "ZHWUC1ZF8PLA12345",
    image: "/src/assets/featured-sports.jpg",
    description: "Pure emotion in the form of a super sports car."
  },
  {
    id: "3",
    make: "Porsche",
    model: "911 Turbo S",
    year: 2023,
    price: 207000,
    type: "sports",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 320,
    mpg: { city: 18, highway: 24 },
    engine: "3.8L Twin-Turbo Flat-6",
    horsepower: 640,
    torque: 590,
    acceleration: 2.6,
    topSpeed: 205,
    seating: 4,
    features: ["PASM", "Sport Chrono", "Ceramic Brakes", "Adaptive Cruise Control"],
    color: "GT Silver",
    condition: "new",
    vin: "WP0AB2A99PS123456",
    image: "/src/assets/featured-sports.jpg",
    description: "The iconic 911 Turbo S delivers legendary performance."
  },
  {
    id: "4",
    make: "McLaren",
    model: "720S",
    year: 2022,
    price: 310000,
    type: "sports",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "rwd",
    mileage: 450,
    mpg: { city: 15, highway: 22 },
    engine: "4.0L Twin-Turbo V8",
    horsepower: 710,
    torque: 568,
    acceleration: 2.8,
    topSpeed: 212,
    seating: 2,
    features: ["Carbon Fiber Monocoque", "Active Aerodynamics", "Proactive Chassis Control"],
    color: "Papaya Orange",
    condition: "used",
    vin: "SBM13DAA6NW123456",
    image: "/src/assets/featured-sports.jpg",
    description: "British engineering excellence with breathtaking performance."
  },
  {
    id: "5",
    make: "Aston Martin",
    model: "DB11 V12",
    year: 2023,
    price: 215000,
    type: "coupe",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "rwd",
    mileage: 120,
    mpg: { city: 14, highway: 21 },
    engine: "5.2L Twin-Turbo V12",
    horsepower: 630,
    torque: 516,
    acceleration: 3.5,
    topSpeed: 200,
    seating: 4,
    features: ["Hand-Crafted Interior", "Bang & Olufsen Audio", "Adaptive Dampers"],
    color: "Midnight Black",
    condition: "new",
    vin: "SCFRMFBV7PGF12345",
    image: "/src/assets/featured-sports.jpg",
    description: "Timeless British luxury meets modern performance."
  },

  // Luxury Sedans
  {
    id: "6",
    make: "Mercedes-Benz",
    model: "S-Class S580",
    year: 2023,
    price: 115000,
    type: "sedan",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 850,
    mpg: { city: 16, highway: 24 },
    engine: "4.0L Twin-Turbo V8",
    horsepower: 496,
    torque: 516,
    acceleration: 4.4,
    topSpeed: 130,
    seating: 5,
    features: ["MBUX", "Air Suspension", "Massaging Seats", "Burmester Audio"],
    color: "Obsidian Black",
    condition: "new",
    vin: "WDDUG8FB4PA123456",
    image: "/src/assets/featured-sedan.jpg",
    description: "The pinnacle of luxury and innovation."
  },
  {
    id: "7",
    make: "BMW",
    model: "7 Series 750i",
    year: 2023,
    price: 95000,
    type: "sedan",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 650,
    mpg: { city: 17, highway: 25 },
    engine: "4.4L Twin-Turbo V8",
    horsepower: 523,
    torque: 553,
    acceleration: 4.5,
    topSpeed: 130,
    seating: 5,
    features: ["iDrive 8", "Executive Lounge Seating", "Laser Headlights", "Harman Kardon"],
    color: "Alpine White",
    condition: "new",
    vin: "WBA7U2C50PCF12345",
    image: "/src/assets/featured-sedan.jpg",
    description: "Sheer driving pleasure in ultimate luxury form."
  },
  {
    id: "8",
    make: "Audi",
    model: "A8 L",
    year: 2023,
    price: 87000,
    type: "sedan",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 920,
    mpg: { city: 18, highway: 26 },
    engine: "3.0L Turbo V6",
    horsepower: 335,
    torque: 369,
    acceleration: 5.7,
    topSpeed: 130,
    seating: 5,
    features: ["Virtual Cockpit Plus", "Matrix LED", "Bang & Olufsen 3D", "Air Suspension"],
    color: "Quantum Gray",
    condition: "new",
    vin: "WAUZZZ4G2PN123456",
    image: "/src/assets/featured-sedan.jpg",
    description: "Vorsprung durch Technik - Progress through technology."
  },
  {
    id: "9",
    make: "Lexus",
    model: "LS 500",
    year: 2023,
    price: 78000,
    type: "sedan",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "rwd",
    mileage: 540,
    mpg: { city: 16, highway: 24 },
    engine: "3.5L Twin-Turbo V6",
    horsepower: 416,
    torque: 442,
    acceleration: 4.6,
    topSpeed: 130,
    seating: 5,
    features: ["Lexus Safety System+", "Mark Levinson Audio", "Air Suspension", "Kiriko Glass"],
    color: "Atomic Silver",
    condition: "certified",
    vin: "JTHCL5C70PA123456",
    image: "/src/assets/featured-sedan.jpg",
    description: "Japanese craftsmanship meets luxury innovation."
  },
  {
    id: "10",
    make: "Genesis",
    model: "G90",
    year: 2023,
    price: 73000,
    type: "sedan",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 420,
    mpg: { city: 17, highway: 25 },
    engine: "3.5L Twin-Turbo V6",
    horsepower: 375,
    torque: 391,
    acceleration: 5.1,
    topSpeed: 149,
    seating: 5,
    features: ["Genesis Active Safety Control", "Lexicon Audio", "Ergo Motion Seats"],
    color: "Moonbeam Silver",
    condition: "new",
    vin: "KMHH14JA9PA123456",
    image: "/src/assets/featured-sedan.jpg",
    description: "Athletic elegance with audacious design."
  },

  // Luxury SUVs
  {
    id: "11",
    make: "Range Rover",
    model: "Sport SVR",
    year: 2023,
    price: 125000,
    type: "suv",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 350,
    mpg: { city: 13, highway: 18 },
    engine: "5.0L Supercharged V8",
    horsepower: 575,
    torque: 516,
    acceleration: 4.3,
    topSpeed: 176,
    seating: 7,
    features: ["Terrain Response", "Air Suspension", "Meridian Audio", "Wade Sensing"],
    color: "Santorini Black",
    condition: "new",
    vin: "SALWR2RV9PA123456",
    image: "/src/assets/featured-suv.jpg",
    description: "Uncompromising luxury meets exceptional capability."
  },
  {
    id: "12",
    make: "Porsche",
    model: "Cayenne Turbo",
    year: 2023,
    price: 135000,
    type: "suv",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 280,
    mpg: { city: 14, highway: 19 },
    engine: "4.0L Twin-Turbo V8",
    horsepower: 541,
    torque: 567,
    acceleration: 3.9,
    topSpeed: 177,
    seating: 5,
    features: ["PASM", "Air Suspension", "Porsche Traction Management", "Bose Audio"],
    color: "Carrara White",
    condition: "new",
    vin: "WP1AB2A52PKA12345",
    image: "/src/assets/featured-suv.jpg",
    description: "Sports car performance in SUV form."
  },
  {
    id: "13",
    make: "BMW",
    model: "X7 M50i",
    year: 2023,
    price: 105000,
    type: "suv",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 480,
    mpg: { city: 15, highway: 21 },
    engine: "4.4L Twin-Turbo V8",
    horsepower: 523,
    torque: 553,
    acceleration: 4.5,
    topSpeed: 130,
    seating: 7,
    features: ["xDrive", "Adaptive M Suspension", "Harman Kardon", "Panoramic Roof"],
    color: "Carbon Black",
    condition: "certified",
    vin: "5UXCW2C00P9P12345",
    image: "/src/assets/featured-suv.jpg",
    description: "The ultimate driving machine for the family."
  },
  {
    id: "14",
    make: "Mercedes-Benz",
    model: "GLS 580",
    year: 2023,
    price: 98000,
    type: "suv",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 620,
    mpg: { city: 16, highway: 22 },
    engine: "4.0L Twin-Turbo V8",
    horsepower: 483,
    torque: 516,
    acceleration: 4.8,
    topSpeed: 130,
    seating: 7,
    features: ["MBUX", "Air Body Control", "Burmester 3D Audio", "Captain's Chairs"],
    color: "Selenite Grey",
    condition: "new",
    vin: "4JGDF7CE4PA123456",
    image: "/src/assets/featured-suv.jpg",
    description: "The S-Class of SUVs."
  },
  {
    id: "15",
    make: "Cadillac",
    model: "Escalade",
    year: 2023,
    price: 85000,
    type: "suv",
    fuel: "gasoline",
    transmission: "automatic",
    drivetrain: "awd",
    mileage: 750,
    mpg: { city: 14, highway: 19 },
    engine: "6.2L V8",
    horsepower: 420,
    torque: 460,
    acceleration: 6.1,
    topSpeed: 112,
    seating: 8,
    features: ["Super Cruise", "38-inch OLED Display", "AKG Audio", "Magnetic Ride"],
    color: "Summit White",
    condition: "new",
    vin: "1GYS4NKJ7PR123456",
    image: "/src/assets/featured-suv.jpg",
    description: "Bold and unapologetic American luxury."
  }
];

// Generate additional cars to reach 300 total
const carBrands = [
  { make: "Toyota", models: ["Camry", "Corolla", "Prius", "RAV4", "Highlander", "4Runner", "Tacoma", "Tundra"] },
  { make: "Honda", models: ["Civic", "Accord", "CR-V", "Pilot", "Ridgeline", "Passport", "HR-V", "Insight"] },
  { make: "Ford", models: ["F-150", "Mustang", "Explorer", "Escape", "Edge", "Expedition", "Ranger", "Bronco"] },
  { make: "Chevrolet", models: ["Silverado", "Camaro", "Equinox", "Tahoe", "Suburban", "Traverse", "Malibu", "Corvette"] },
  { make: "Nissan", models: ["Altima", "Sentra", "Rogue", "Pathfinder", "Titan", "Frontier", "Murano", "Armada"] },
  { make: "Hyundai", models: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Veloster", "Kona", "Ioniq"] },
  { make: "Kia", models: ["Forte", "Optima", "Sorento", "Telluride", "Sportage", "Stinger", "Soul", "Carnival"] },
  { make: "Subaru", models: ["Impreza", "Legacy", "Outback", "Forester", "Ascent", "Crosstrek", "WRX", "BRZ"] },
  { make: "Mazda", models: ["Mazda3", "Mazda6", "CX-5", "CX-9", "CX-30", "MX-5 Miata", "CX-50", "CX-90"] },
  { make: "Volkswagen", models: ["Jetta", "Passat", "Tiguan", "Atlas", "Golf", "Arteon", "ID.4", "Taos"] }
];

const types: Car['type'][] = ['sedan', 'suv', 'coupe', 'convertible', 'hatchback', 'truck', 'sports'];
const fuels: Car['fuel'][] = ['gasoline', 'hybrid', 'electric', 'diesel'];
const transmissions: Car['transmission'][] = ['automatic', 'manual', 'cvt'];
const drivetrains: Car['drivetrain'][] = ['fwd', 'rwd', 'awd', '4wd'];
const conditions: Car['condition'][] = ['new', 'used', 'certified'];
const colors = [
  "Pearl White", "Midnight Black", "Silver Metallic", "Deep Blue", "Crimson Red",
  "Charcoal Grey", "Arctic White", "Titanium Silver", "Sapphire Blue", "Ruby Red",
  "Graphite Black", "Platinum Silver", "Ocean Blue", "Cherry Red", "Jet Black"
];

// Generate remaining cars (285 more to reach 300)
for (let i = 16; i <= 300; i++) {
  const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
  const model = brand.models[Math.floor(Math.random() * brand.models.length)];
  const year = 2019 + Math.floor(Math.random() * 5); // 2019-2023
  const type = types[Math.floor(Math.random() * types.length)];
  const fuel = fuels[Math.floor(Math.random() * fuels.length)];
  const transmission = transmissions[Math.floor(Math.random() * transmissions.length)];
  const drivetrain = drivetrains[Math.floor(Math.random() * drivetrains.length)];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  const basePrice = type === 'sports' ? 50000 + Math.random() * 200000 :
                   type === 'suv' ? 30000 + Math.random() * 80000 :
                   20000 + Math.random() * 60000;
  
  const price = Math.round(basePrice * (condition === 'new' ? 1 : condition === 'certified' ? 0.85 : 0.7));
  
  const mileage = condition === 'new' ? Math.floor(Math.random() * 100) :
                 condition === 'certified' ? 5000 + Math.floor(Math.random() * 25000) :
                 10000 + Math.floor(Math.random() * 80000);

  const horsepower = type === 'sports' ? 300 + Math.floor(Math.random() * 400) :
                    type === 'suv' ? 200 + Math.floor(Math.random() * 300) :
                    150 + Math.floor(Math.random() * 250);

  const cityMpg = fuel === 'electric' ? 0 : fuel === 'hybrid' ? 40 + Math.floor(Math.random() * 20) : 15 + Math.floor(Math.random() * 15);
  const hwMpg = fuel === 'electric' ? 0 : fuel === 'hybrid' ? 45 + Math.floor(Math.random() * 20) : 20 + Math.floor(Math.random() * 15);

  cars.push({
    id: i.toString(),
    make: brand.make,
    model,
    year,
    price,
    type,
    fuel,
    transmission,
    drivetrain,
    mileage,
    mpg: { city: cityMpg, highway: hwMpg },
    engine: fuel === 'electric' ? 'Electric Motor' : `${2.0 + Math.random() * 4}L ${Math.random() > 0.5 ? 'V6' : 'I4'}`,
    horsepower,
    torque: Math.floor(horsepower * 0.8),
    acceleration: 3 + Math.random() * 7,
    topSpeed: 100 + Math.floor(Math.random() * 80),
    seating: type === 'sports' ? 2 : type === 'truck' ? 5 : Math.floor(Math.random() * 3) + 5,
    features: [
      "Bluetooth Connectivity", "Backup Camera", "Lane Keeping Assist", "Adaptive Cruise Control"
    ].slice(0, Math.floor(Math.random() * 4) + 1),
    color,
    condition,
    vin: `1HGBH41JXMN${String(Math.floor(Math.random() * 900000) + 100000)}`,
    image: type === 'suv' ? "/src/assets/featured-suv.jpg" : 
           type === 'sports' ? "/src/assets/featured-sports.jpg" : 
           "/src/assets/featured-sedan.jpg",
    description: `${year} ${brand.make} ${model} - ${condition === 'new' ? 'Brand new' : condition === 'certified' ? 'Certified pre-owned' : 'Pre-owned'} vehicle in excellent condition.`
  });
}
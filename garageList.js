const cars = [
  {
    "name": "Tesla Model S Plaid",
    "year": 2022,
    "mileage": 12000,
    "price": 129990,
    "description": "The Tesla Model S Plaid is an all-electric luxury sedan with a mind-bending 0-60 mph time of under 2 seconds. It's known for its long-range, cutting-edge technology, and futuristic design.",
    "engine_type": "Electric",
    "horsepower": 1020,
    "top_speed": 200,
    "range": 390,
    "color": "Midnight Silver Metallic",
    "features": ["Autopilot", "Premium Interior", "20” wheels", "Adaptive Air Suspension", "HEPA filtration"],
    "image_url": "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg"
  },
  {
    "name": "Porsche 911 Turbo S",
    "year": 2021,
    "mileage": 8000,
    "price": 204000,
    "description": "The Porsche 911 Turbo S combines everyday usability with exhilarating performance. A legendary sports car that offers a balanced blend of power, luxury, and comfort.",
    "engine_type": "3.8L Twin-Turbocharged Flat-6",
    "horsepower": 640,
    "top_speed": 205,
    "acceleration_0_60": 2.6,
    "color": "Crayon",
    "features": ["PDK Transmission", "Carbon Fiber Interior", "Sport Chrono Package", "LED Headlights", "Adaptive Cruise Control"],
    "image_url": "https://www.porsche.com/images/motorsport/911_turbo_s_overview.jpg"
  },
  {
    "name": "Ford Mustang Shelby GT500",
    "year": 2020,
    "mileage": 15000,
    "price": 71500,
    "description": "The Shelby GT500 is a high-performance muscle car that brings American raw power to the forefront. With a supercharged V8 engine, it delivers heart-pounding speed and handling.",
    "engine_type": "5.2L Supercharged V8",
    "horsepower": 760,
    "top_speed": 180,
    "acceleration_0_60": 3.3,
    "color": "Grabber Lime",
    "features": ["Track Pack", "Magnetic Ride Suspension", "Recaro Racing Seats", "Apple CarPlay", "BLIS (Blind Spot Information System)"],
    "image_url": "https://www.ford.com/is/image/Ford/ford-shelby-gt500-2020.jpg"
  },
  {
    "name": "Chevrolet Corvette C8 Stingray",
    "year": 2021,
    "mileage": 6000,
    "price": 60900,
    "description": "The Chevrolet Corvette C8 Stingray brings a mid-engine layout to America's iconic sports car for the first time. A stunning design paired with exhilarating performance.",
    "engine_type": "6.2L V8",
    "horsepower": 495,
    "top_speed": 194,
    "acceleration_0_60": 2.9,
    "color": "Torch Red",
    "features": ["8-speed Dual-Clutch Transmission", "Bose Premium Audio", "Front Lift", "Magnetic Ride Control", "Heated and Ventilated Seats"],
    "image_url": "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2021/performance/corvette/mov/01-images/2021-corvette-stingray.jpg"
  },
  {
    "name": "BMW M4 G82",
    "year": 2021,
    "mileage": 4000,
    "price": 74000,
    "description": "The BMW M4 G82 is a high-performance coupe that boasts precision handling, aggressive design, and exceptional performance. It offers both thrill and luxury in a single package.",
    "engine_type": "3.0L Inline-6 Twin-Turbocharged",
    "horsepower": 473,
    "top_speed": 180,
    "acceleration_0_60": 3.8,
    "color": "Toronto Red",
    "features": ["Adaptive M Suspension", "iDrive 7 System", "M Carbon Roof", "Wireless Charging", "Apple CarPlay/Android Auto"],
    "image_url": "https://www.bmwusa.com/content/dam/bmwusa/M-Series/2021/bmw-m4-exterior-hero.jpg"
  },
  {
    "name": "Lamborghini Huracán EVO",
    "year": 2020,
    "mileage": 3000,
    "price": 261000,
    "description": "The Lamborghini Huracán EVO is a supercar designed for maximum thrill, featuring stunning looks, incredible acceleration, and a spine-tingling V10 engine that delivers unmatched performance.",
    "engine_type": "5.2L V10",
    "horsepower": 631,
    "top_speed": 202,
    "acceleration_0_60": 2.9,
    "color": "Arancio Xanto",
    "features": ["Lamborghini Dynamic Steering", "Adaptive Suspension", "Sport Exhaust", "Carbon Fiber Interior", "Advanced Infotainment"],
    "image_url": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/huracan/huracan-evo-sedan-hero.jpg"
  },
  {
    "name": "Aston Martin DB11 V8",
    "year": 2020,
    "mileage": 4500,
    "price": 155000,
    "description": "The Aston Martin DB11 V8 offers a luxurious, refined driving experience combined with incredible performance. A grand tourer that balances power, comfort, and timeless elegance.",
    "engine_type": "4.0L Twin-Turbocharged V8",
    "horsepower": 503,
    "top_speed": 187,
    "acceleration_0_60": 4.0,
    "color": "Quantum Silver",
    "features": ["Infotainment System with Navigation", "Leather Upholstery", "Adaptive Headlights", "Carbon Fiber Trim", "Apple CarPlay"],
    "image_url": "https://www.astonmartin.com/sites/astonmartin.com/files/DB11_V8_hero.jpg"
  },
  {
    "name": "Ferrari F8 Tributo",
    "year": 2021,
    "mileage": 2000,
    "price": 280000,
    "description": "The Ferrari F8 Tributo is a perfect blend of extreme performance and breathtaking design. A V8 engine with insane horsepower and the signature Ferrari handling make this car a masterpiece.",
    "engine_type": "3.9L Twin-Turbo V8",
    "horsepower": 710,
    "top_speed": 211,
    "acceleration_0_60": 2.9,
    "color": "Rosso Corsa",
    "features": ["Ferrari Infotainment System", "Advanced Safety Features", "Leather Racing Seats", "Carbon Fiber Exterior Details", "Adaptive Suspension"],
    "image_url": "https://www.ferrari.com/images/ferrari_world/ferrari-f8-tributo.jpg"
  }
];

const garageList = document.getElementById('garageList');

cars.forEach(car => {
  const card = document.createElement('div');
  card.className = 'car-card';
  card.innerHTML = `
    <img src="${car.image_url}" alt="${car.name}">
    <div class="car-details">
      <h2>${car.name} (${car.year})</h2>
      <p><strong>Engine:</strong> ${car.engine_type}</p>
      <p><strong>Horsepower:</strong> ${car.horsepower} HP</p>
      ${car.top_speed ? `<p><strong>Top Speed:</strong> ${car.top_speed} mph</p>` : ''}
      ${car.acceleration_0_60 ? `<p><strong>0–60 mph:</strong> ${car.acceleration_0_60}s</p>` : ''}
      ${car.range ? `<p><strong>Range:</strong> ${car.range} miles</p>` : ''}
      <p><strong>Color:</strong> ${car.color}</p>
      <p><strong>Mileage:</strong> ${car.mileage.toLocaleString()} miles</p>
      <p class="price">$${car.price.toLocaleString()}</p>
      <p>${car.description}</p>
      <div class="features">
        <strong>Features:</strong>
        <ul>${car.features.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
    </div>
  `;
  garageList.appendChild(card);
});


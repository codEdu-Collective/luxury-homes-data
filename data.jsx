const luxuryHomes = [
  {
    id: 1,
    rooms: "4+1",
    area: 220,
    type: "Apartment",
    price: 3500000,
    location: "Paris, France",
    listingDate: "05-01-2025",
    images: {
      exterior: "/public/img/paris-apartment-exterior.jpeg",
      interior: "/public/img/paris-apartment-interior.jpeg",
    },
  },
  {
    id: 2,
    rooms: "5+1",
    area: 300,
    type: "Detached House",
    price: 12500000,
    location: "Zurich, Switzerland",
    listingDate: "05-01-2025",
    images: {
      exterior: "/public/img/zurich-familyhouse-exterior.jpeg",
      interior: "/public/img/zurich-familyhouse-interior.jpeg",
    },
  },
  {
    id: 3,
    rooms: "6+2",
    area: 480,
    type: "Villa",
    price: 25000000,
    location: "Barcelona, Spain",
    listingDate: "04-01-2025",
    images: {
      exterior: "/public/img/barcelona-villa-exterior.jpeg",
      interior: "/public/img/barcelona-villa-interior.jpeg",
    },
  },
  {
    id: 4,
    rooms: "4+1",
    area: 195,
    type: "Apartment",
    price: 2349000,
    location: "Rome, Italy",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/rome-apartment-exterior.jpeg",
      interior: "/public/img/rome-apartment-interior.jpeg",
    },
  },
  {
    id: 5,
    rooms: "5+2",
    area: 350,
    type: "Castle",
    price: 75000000,
    location: "Bavaria, Germany",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/bavaria-castle-exterior.jpeg",
      interior: "/public/img/bavaria-castle-interior.jpeg",
    },
  },
  {
    id: 6,
    rooms: "5+3",
    area: 500,
    type: "Castle",
    price: 65000000,
    location: "Budapest, Hungary",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/budapest-castle-exterior.jpeg",
      interior: "/public/img/budapest-castle-interior.jpeg",
    },
  },
  {
    id: 7,
    rooms: "4+1",
    area: 220,
    type: "Apartment",
    price: 16800000,
    location: "Amsterdam, Netherlands",
    listingDate: "26-12-2024",
    images: {
      exterior: "/public/img/amsterdam-apartment-exterior.jpeg",
      interior: "/public/img/amsterdam-apartment-interior.jpeg",
    },
  },
  {
    id: 8,
    rooms: "6+1",
    area: 450,
    type: "Villa",
    price: 89000000,
    location: "Prague, Czech Republic",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/prague-villa-exterior.jpeg",
      interior: "/public/img/prague-villa-interior.jpeg",
    },
  },
  {
    id: 9,
    rooms: "4+1",
    area: 320,
    type: "Penthouse",
    price: 49000000,
    location: "Vienna, Austria",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/vienna-penthouse-exterior.jpeg",
      interior: "/public/img/vienna-penthouse-interior.jpeg",
    },
  },
  {
    id: 10,
    rooms: "5+1",
    area: 400,
    type: "Detached House",
    price: 20000000,
    location: "Brussels, Belgium",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/brussel-familyhouse-exterior.jpeg",
      interior: "/public/img/brussel-familyhouse-interior.jpeg",
    },
  },
  {
    id: 11,
    rooms: "4+1",
    area: 270,
    type: "Apartment",
    price: 4200000,
    location: "Copenhagen, Denmark",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/Copenhagen-apartment-exterior.jpeg",
      interior: "/public/img/Copenhagen-apartment-interior.jpeg",
    },
  },
  {
    id: 12,
    rooms: "6+2",
    area: 550,
    type: "Villa",
    price: 60000000,
    location: "Stockholm, Sweden",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/Stockholm-villa-exterior.jpeg",
      interior: "/public/img/Stockholm-villa-interior.jpeg",
    },
  },
  {
    id: 13,
    rooms: "5+1",
    area: 360,
    type: "Detached House",
    price: 18000000,
    location: "Lisbon, Portugal",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/Lisbon-familyhouse-exterior.jpeg",
      interior: "/public/img/Lisbon-familyhouse-interior.jpeg",
    },
  },
  {
    id: 14,
    rooms: "4+2",
    area: 290,
    type: "Apartment",
    price: 3200000,
    location: "Dublin, Ireland",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/dublin-apartment-exterior.jpeg",
      interior: "/public/img/dublin-apartment-interior.jpeg",
    },
  },
  {
    id: 15,
    rooms: "6+3",
    area: 680,
    type: "Castle",
    price: 95000000,
    location: "Lausanne, Switzerland",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/Lousanne-castle-exterior.jpeg",
      interior: "/public/img/Lousanne-castle-interior.jpeg",
    },
  },
  {
    id: 16,
    rooms: "5+1",
    area: 300,
    type: "Apartment",
    price: 15500000,
    location: "Helsinki, Finland",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/helsinki-apartment-exterior.jpeg",
      interior: "/public/img/helsinki-apartment-interior.jpeg",
    },
  },
  {
    id: 17,
    rooms: "4+1",
    area: 230,
    type: "Penthouse",
    price: 5500000,
    location: "Warsaw, Poland",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/warsaw-penthouse-exterior.jpeg",
      interior: "/public/img/warsaw-penthouse-interior.jpeg",
    },
  },
  {
    id: 18,
    rooms: "6+2",
    area: 500,
    type: "Villa",
    price: 48000000,
    location: "Oslo, Norway",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/oslo-villa-exterior.jpeg",
      interior: "/public/img/oslo-villa-interior.jpeg",
    },
  },
  {
    id: 19,
    rooms: "4+1",
    area: 200,
    type: "Apartment",
    price: 2500000,
    location: "Sofia, Bulgaria",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/sofia-apartment-exterior.jpeg",
      interior: "/public/img/sofia-apartment-interior.jpeg",
    },
  },
  {
    id: 20,
    rooms: "5+1",
    area: 330,
    type: "Detached House",
    price: 28000000,
    location: "Athens, Greece",
    listingDate: "06-01-2025",
    images: {
      exterior: "/public/img/athens-familyhouse-exterior.jpeg",
      interior: "/public/img/athens-familyhouse-interior.jpeg",
    },
  },
];

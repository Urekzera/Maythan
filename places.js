// All of the site's content lives here, separate from the code.
// To add a place, copy one block, paste it, and change the values.
// (These three are just EXAMPLES — replace them with your real trips.)
//
// To find lat/lng: right-click a spot in Google Maps and click the numbers.
//
// "spots" are the places we went inside a city (they show up when you zoom in).
// Put photos in the photos/ folder, e.g. "photos/osaka/aquarium-1.jpg".
// A city without spots shows its "itinerary" list instead.

const places = [
  {
    name: "Osaka, Japan",
    lat: 34.6937,
    lng: 135.5023,
    visited: true,
    dates: "1/31/2025 - 2/7/2025",
    notes: "Our first overseas trip together!",
    photos: [],                      // e.g. ["photos/tokyo/1.jpg", "photos/tokyo/2.jpg"]
    spots: [
      {
        name: "Osaka Aquarium Kaiyukan",
        lat: 34.6545,
        lng: 135.4290,
        date: "Day 1",
        notes: "",
        photos: []
      },
      {
        name: "Dotonbori",
        lat: 34.6687,
        lng: 135.5013,
        date: "Day 2",
        notes: "Chill and explore",
        photos: []
      },
      {
        name: "Universal Studios Japan",
        lat: 34.6654,
        lng: 135.4323,
        date: "Day 3",
        notes: "",
        photos: []
      },
      {
        name: "teamLab Botanical Garden",
        lat: 34.6115,
        lng: 135.5178,
        date: "Day 4",
        notes: "",
        photos: []
      },
      {
        name: "Nara Deer Park",
        lat: 34.6851,
        lng: 135.8430,
        date: "Day 5",
        notes: "",
        photos: []
      }
    ]
  },
  {
    name: "Seattle, USA",
    lat: 47.6105,
    lng: -122.3408,
    visited: true,
    dates: "8/8/2025 - 8/12/2025",
    notes: "Visiting Nathan's family and friends in Seattle",
    photos: [],
    itinerary: [
      "Day 1 – Pike Place",
      "Day 2 – Cafés",
      "Day 3 – Hiking",
      "Day 4 – Racing with Alberto"
    ]
  },
  {
    name: "New York, USA",
    lat: 40.8265,
    lng: -73.9440,
    visited: true,                  
    dates: "6/10/2026 - 7/3/2026",
    notes: "Exploring NYC and World Cup 2026!",
    photos: [],
    itinerary: []
  },
  {
    name: "Washington D.C., USA",
    lat: 38.9072,
    lng: -77.0369,
    visited: true,
    dates: "7/2/2026 - 7/5/2026",
    notes: "Visiting May's friend and exploring the capitol",
    photos: [],
    spots: [
      {
        name: "National Air and Space Museum",
        lat: 38.8882,
        lng: -77.0199,
        date: "Day 1",
        notes: "",
        photos: []
      },
      {
        name: "Planet Word",
        lat: 38.9017,
        lng: -77.0297,
        date: "Day 2",
        notes: "",
        photos: []
      },
      {
        name: "The People's House: A White House Experience",
        lat: 38.8990,
        lng: -77.0394,
        date: "Day 2",
        notes: "",
        photos: []
      },
      {
        name: "White House",
        lat: 38.8977,
        lng: -77.0365,
        date: "Day 2",
        notes: "",
        photos: []
      },
      {
        name: "Milken Center for Advancing the American Dream (MCAAD)",
        lat: 38.8984,
        lng: -77.0337,
        date: "Day 2",
        notes: "",
        photos: []
      },
      {
        name: "Capitol Hill",
        lat: 38.8899,
        lng: -77.0091,
        date: "Day 2",
        notes: "Concert celebrating the Fourth of July",
        photos: []
      },
      {
        name: "National Museum of Natural History",
        lat: 38.8913,
        lng: -77.0261,
        date: "Day 3",
        notes: "",
        photos: []
      },
      {
        name: "Glover Park Hotel Georgetown",
        lat: 38.9213,
        lng: -77.0727,
        date: "Day 3",
        notes: "Watched the Fourth of July fireworks from the hotel at night",
        photos: []
      },
      {
        name: "Lincoln Memorial",
        lat: 38.8893,
        lng: -77.0502,
        date: "Day 4",
        notes: "",
        photos: []
      },
      {
        name: "Washington Monument",
        lat: 38.8895,
        lng: -77.0353,
        date: "Day 4",
        notes: "",
        photos: []
      },
      {
        name: "World War II Memorial",
        lat: 38.8894,
        lng: -77.0405,
        date: "Day 4",
        notes: "",
        photos: []
      }
    ]
  },
  {
    name: "Hsinchu, Taiwan",
    lat: 24.8138,
    lng: 120.9675,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
  },
  {
    name: "Taipei, Taiwan",
    lat: 25.0330,
    lng: 121.5654,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
  },
  {
    name: "Taitung, Taiwan",
    lat: 22.7583,
    lng: 121.1444,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
  },
  {
    name: "Taichung, Taiwan",
    lat: 24.1477,
    lng: 120.6736,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
  },
  {
    name: "Tainan, Taiwan",
    lat: 22.9999,
    lng: 120.2270,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
  }
];

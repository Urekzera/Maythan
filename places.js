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
    name: "Portola Valley, USA",
    lat: 37.3841,
    lng: -122.2352,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
  },
  {
    name: "Washington D.C., USA",
    lat: 38.9072,
    lng: -77.0369,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    itinerary: []
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

// All of the site's content lives here, separate from the code.
// To add a place, copy one block, paste it, and change the values.
// (These three are just EXAMPLES — replace them with your real trips.)
//
// To find lat/lng: right-click a spot in Google Maps and click the numbers.

const places = [
  {
    name: "Tokyo, Japan",
    lat: 35.6945,
    lng: 135.4994,
    visited: true,
    dates: "1/31/2025 - 2/7/2025",
    notes: "Our first overseas trip together!",
    photos: [],                      // e.g. ["photos/tokyo/1.jpg", "photos/tokyo/2.jpg"]
    itinerary: [
      "Day 1 – Visit Osaka Aquarium",
      "Day 2 – Chill and explore Osaka Dotonbori",
      "Day 3 – Universal Studios Day",
      "Day 4 – Teamlabs Botanical Garden",
      "Day 5 – Nara Deer Park"
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
  }
];

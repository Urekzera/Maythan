// All of the site's content lives here, separate from the code.
// To add a place, copy one block, paste it, and change the values.
// (These three are just EXAMPLES — replace them with your real trips.)
//
// To find lat/lng: right-click a spot in Google Maps and click the numbers.
//
// "spots" are the places we went inside a city (they show up when you zoom in).
// Put photos in the photos/ folder, e.g. "photos/osaka/aquarium-1.jpg".
// A city without spots shows its "itinerary" list instead.
// Add  type: "food"  to a spot to make it a restaurant (yellow pin, 🍴 in the list).

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
    spots: [
      {
        name: "Vieshow Cinemas, FE21 Hsinchu (大遠百威秀影城)",
        lat: 24.8013,
        lng: 120.9650,
        date: "2023/08/06",
        notes: "Our first movie together – Oppenheimer",
        photos: []
      },
      {
        name: "Hsinchu City Art Gallery (新竹市美術館)",
        lat: 24.8040,
        lng: 120.9700,
        date: "2023/08/12",
        notes: "",
        photos: []
      },
      {
        name: "Nanliao (南寮)",
        lat: 24.8483,
        lng: 120.9254,
        date: "2023/08/12",
        notes: "Riding bikes",
        photos: []
      },
      {
        name: "Hanlin Tea House, Big City (翰林茶館 巨城店)",
        lat: 24.8093,
        lng: 120.9748,
        date: "2023/08/12",
        notes: "Lunch",
        type: "food",
        photos: []
      },
      {
        name: "Jin Fu Vietnamese Pho (金福越南河粉)",
        lat: 24.8085,
        lng: 120.9655,
        date: "2023/08/12",
        notes: "Dinner",
        type: "food",
        photos: []
      },
      {
        name: "THSR Hsinchu Station (新竹高鐵站)",
        lat: 24.8081,
        lng: 121.0403,
        date: "2023/08/13",
        notes: "Picking Nathan up",
        photos: []
      },
      {
        name: "My DIY Baking Club (自己做烘焙聚樂部 新竹文化店)",
        lat: 24.8045,
        lng: 120.9678,
        date: "2023/08/13",
        notes: "Made a cake together!",
        photos: []
      },
      {
        name: "Taco House",
        lat: 24.8040,
        lng: 120.9708,
        date: "2023/08/19",
        notes: "Lunch",
        type: "food",
        photos: []
      },
      {
        name: "The Secret 謐謐 x Cat Island (貓嶼)",
        lat: 24.8125,
        lng: 120.9620,
        date: "2023/08/19",
        notes: "Watched and played with the cats",
        photos: []
      },
      {
        name: "J.Piin Mall (晶品城)",
        lat: 24.8005,
        lng: 120.9688,
        date: "2023/08/29",
        notes: "Escape room with May's friends 芳琦 and 舒羚",
        photos: []
      },
      {
        name: "Lavender Cottage, Jianshi (尖石薰衣草森林)",
        lat: 24.7180,
        lng: 121.1970,
        date: "2023/10/14",
        notes: "With 芳琦 (it's closed now)",
        photos: []
      },
      {
        name: "Matai Historic Trail (馬胎古道)",
        lat: 24.7200,
        lng: 121.1700,
        date: "2023/10/14",
        notes: "Went for a walk",
        photos: []
      },
      {
        name: "Leofoo Village Theme Park (六福村)",
        lat: 24.7876,
        lng: 121.1745,
        date: "2023/10/21",
        notes: "",
        photos: []
      },
      {
        name: "Oia Greek Taverna (伊亞希臘小館)",
        lat: 24.8253,
        lng: 121.0145,
        date: "2023/10/21",
        notes: "Dinner",
        type: "food",
        photos: []
      },
      {
        name: "Eighter Food, Sanmin (八二親食 三民店)",
        lat: 24.8045,
        lng: 120.9795,
        date: "2023/11/11",
        notes: "Lunch",
        type: "food",
        photos: []
      },
      {
        name: "Fu Tang Stone Spa (福湯岩盤浴)",
        lat: 24.8180,
        lng: 120.9730,
        date: "2023/11/11",
        notes: "Stone spa in the late afternoon",
        photos: []
      },
      {
        name: "Jolly Brewery, Big City (金色三麥 巨城店)",
        lat: 24.8091,
        lng: 120.9744,
        date: "2023/11/11",
        notes: "Dinner",
        type: "food",
        photos: []
      },
      {
        name: "My DIY Baking Club (自己做烘焙聚樂部 新竹文化店)",
        lat: 24.8045,
        lng: 120.9678,
        date: "2023/11/17",
        notes: "Made cream puffs!",
        photos: []
      },
      {
        name: "Lady Nara, SOGO Hsinchu",
        lat: 24.8097,
        lng: 120.9755,
        date: "2023/11/18",
        notes: "Dinner",
        type: "food",
        photos: []
      }
    ]
  },
  {
    name: "Taipei, Taiwan",
    lat: 25.0330,
    lng: 121.5654,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    spots: [
      {
        name: "Lazertreks (六度空間)",
        lat: 25.0631,
        lng: 121.5226,
        date: "2023/07/29",
        notes: "Laser tag with May's lab members, plus an escape room (forgot where!)",
        photos: []
      },
      {
        name: "Hooters Taipei",
        lat: 25.0365,
        lng: 121.5677,
        date: "2023/07/29",
        notes: "Dinner",
        type: "food",
        photos: []
      },
      {
        name: "Taipei 101",
        lat: 25.0340,
        lng: 121.5645,
        date: "2023/08/05",
        notes: "",
        photos: []
      },
      {
        name: "Miacucina, Nanxi (Miacucina 南西店)",
        lat: 25.0523,
        lng: 121.5207,
        date: "2023/08/17",
        notes: "Lunch",
        type: "food",
        photos: []
      },
      {
        name: "Potions Magic Bar (魔藥學餐酒館)",
        lat: 25.0390,
        lng: 121.5522,
        date: "2023/08/17",
        notes: "Dinner",
        type: "food",
        photos: []
      },
      {
        name: "Taipei Zoo (台北市立動物園)",
        lat: 24.9983,
        lng: 121.5810,
        date: "2023/11/03",
        notes: "",
        photos: []
      },
      {
        name: "MixGene Jewelry Studio (混合基因)",
        lat: 25.0555,
        lng: 121.5108,
        date: "2023/11/25",
        notes: "Made rings!",
        photos: []
      }
    ]
  },
  {
    name: "New Taipei, Taiwan",
    lat: 25.0120,
    lng: 121.4655,
    visited: true,
    dates: "",
    notes: "",
    photos: [],
    spots: [
      {
        name: "Christmasland in New Taipei (板橋耶誕城)",
        lat: 25.0127,
        lng: 121.4636,
        date: "2023/11/29",
        notes: "",
        photos: []
      },
      {
        name: "New Taipei Metropolitan Park (新北大都會公園)",
        lat: 25.0600,
        lng: 121.4750,
        date: "2023/12/03",
        notes: "Kanahei fun run (卡納赫拉路跑)",
        photos: []
      }
    ]
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
    spots: [
      {
        name: "Chimei Museum (奇美博物館)",
        lat: 22.9347,
        lng: 120.2264,
        date: "2023/10/29",
        notes: "",
        photos: []
      }
    ]
  }
];

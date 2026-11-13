// ---------- Home page numbers ----------

// The day we got together (year, month, day)
const ANNIVERSARY = new Date(2023, 6, 31);   // careful: months start at 0, so 6 = July

// Days together (counting the first day as day 1)
const today = new Date();
today.setHours(0, 0, 0, 0);
const days = Math.round((today - ANNIVERSARY) / (1000 * 60 * 60 * 24)) + 1;
document.getElementById("days").textContent = days.toLocaleString();

// Countries and cities, counted from places.js (only places we've been)
const visited = places.filter(place => place.visited);
// The country is the part after the last comma, e.g. "Osaka, Japan" → "Japan"
const countries = new Set(visited.map(place => place.name.split(",").pop().trim()));

document.getElementById("countries").textContent = countries.size;
document.getElementById("cities").textContent = visited.length;

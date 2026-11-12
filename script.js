// ---------- 1. Create the globe ----------
const globeEl = document.getElementById("globe");

const map = new maplibregl.Map({
  container: globeEl,
  style: "https://tiles.openfreemap.org/styles/liberty",   // free map tiles, no key needed
  center: [135, 30],                                       // [lng, lat] to start at
  zoom: 1.5
});

// Show the map as a 3D globe instead of flat
map.on("style.load", () => {
  map.setProjection({ type: "globe" });
});

// Pins: one per entry in places.js
places.forEach(place => {
  const pin = document.createElement("div");
  pin.className = "pin";
  pin.style.background = place.visited ? "#ff4d6d" : "#ffd166";   // pink = been, yellow = wish list
  pin.title = place.name;                                          // hover tooltip

  // What happens when a pin is clicked
  pin.addEventListener("click", () => {
    showPlace(place);
    map.flyTo({ center: [place.lng, place.lat], zoom: 10 });      // fly there
  });

  new maplibregl.Marker({ element: pin })
    .setLngLat([place.lng, place.lat])
    .addTo(map);
});

// Slow auto-rotate, stops when you grab the globe
let spinning = true;

function spin() {
  if (!spinning) return;
  const center = map.getCenter();
  center.lng += 3;
  map.easeTo({ center, duration: 1000, easing: t => t });
}

map.on("load", spin);
map.on("moveend", spin);   // keep going after each small turn
["pointerdown", "wheel"].forEach(type => {
  globeEl.addEventListener(type, () => {
    if (!spinning) return;   // only stop once, or it would cancel zooming too
    spinning = false;
    map.stop();
  });
});


// ---------- 2. Side panel ----------
const panel = document.getElementById("panel");

function showPlace(place) {
  document.getElementById("place-name").textContent = place.name;
  document.getElementById("place-status").textContent =
    place.visited ? "✅ We've been here" : "⭐ On our wish list";
  document.getElementById("place-dates").textContent = place.dates;
  document.getElementById("place-notes").textContent = place.notes;

  // Photos
  const photosEl = document.getElementById("place-photos");
  photosEl.innerHTML = "";
  place.photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = place.name;
    photosEl.appendChild(img);
  });

  // Itinerary
  const listEl = document.getElementById("place-itinerary");
  listEl.innerHTML = "";
  place.itinerary.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    listEl.appendChild(li);
  });
  document.getElementById("itinerary-title").style.display =
    place.itinerary.length ? "block" : "none";

  panel.classList.remove("hidden");
}

document.getElementById("close-btn").addEventListener("click", () => {
  panel.classList.add("hidden");
});

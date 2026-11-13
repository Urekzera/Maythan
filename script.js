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

// Zoomed in past this, cities with spots swap their pin for their spots' pins
const SPOT_ZOOM = 8;

const cityPins = [];   // pins of cities that have spots
const spotPins = [];

// Pins: one per entry in places.js
places.forEach(place => {
  const pin = document.createElement("div");
  pin.className = "pin";
  pin.style.background = place.visited ? "#ff4d6d" : "#ffd166";   // pink = been, yellow = wish list
  pin.title = place.name;                                          // hover tooltip

  // What happens when a pin is clicked
  pin.addEventListener("click", () => {
    showPlace(place);
    flyToPlace(place);
  });

  new maplibregl.Marker({ element: pin })
    .setLngLat([place.lng, place.lat])
    .addTo(map);

  // Spot pins: a dot with the spot's name next to it
  const spots = place.spots || [];
  if (spots.length) cityPins.push(pin);

  spots.forEach(spot => {
    const spotPin = document.createElement("div");
    spotPin.className = "spot-pin";
    spotPin.innerHTML = '<span class="spot-dot"></span><span class="spot-label"></span>';
    spotPin.querySelector(".spot-label").textContent = spot.name;
    if (spot.type === "food") spotPin.classList.add("food");   // restaurants get a yellow dot

    spotPin.addEventListener("click", () => {
      showSpot(spot, place);
      map.flyTo({ center: [spot.lng, spot.lat], zoom: 15 });
    });

    new maplibregl.Marker({ element: spotPin, anchor: "left", offset: [-7, 0] })
      .setLngLat([spot.lng, spot.lat])
      .addTo(map);
    spotPins.push(spotPin);
  });
});

// Show city pins when zoomed out, spot pins when zoomed in
function updatePins() {
  const zoomedIn = map.getZoom() >= SPOT_ZOOM;
  cityPins.forEach(pin => (pin.style.display = zoomedIn ? "none" : ""));
  spotPins.forEach(pin => (pin.style.display = zoomedIn ? "" : "none"));
}
map.on("zoom", updatePins);
updatePins();

// Fly to a city, zooming out enough to see all of its spots
function flyToPlace(place) {
  const spots = place.spots || [];
  if (!spots.length) {
    map.flyTo({ center: [place.lng, place.lat], zoom: 10 });
    return;
  }
  const bounds = new maplibregl.LngLatBounds();
  spots.forEach(spot => bounds.extend([spot.lng, spot.lat]));
  // On wide screens, leave room on the right so the side panel doesn't cover any spots
  const panelWidth = window.innerWidth > 700 ? panel.offsetWidth : 0;
  map.fitBounds(bounds, {
    padding: { top: 60, bottom: 60, left: 60, right: 160 + panelWidth },   // extra room for the name labels
    maxZoom: 13
  });
}

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
const backBtn = document.getElementById("back-btn");

// Fill in the parts of the panel that cities and spots share
function fillPanel(name, status, dates, notes, photos) {
  document.getElementById("place-name").textContent = name;
  document.getElementById("place-status").textContent = status;
  document.getElementById("place-dates").textContent = dates;
  document.getElementById("place-notes").textContent = notes;

  // Photos
  const photosEl = document.getElementById("place-photos");
  photosEl.innerHTML = "";
  (photos || []).forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = name;
    photosEl.appendChild(img);
  });

  panel.classList.remove("hidden");
}

// Show a clickable list (spots) or a plain one (itinerary), or hide it if empty
function fillList(titleId, listId, items, makeItem) {
  const listEl = document.getElementById(listId);
  listEl.innerHTML = "";
  items.forEach(item => listEl.appendChild(makeItem(item)));
  document.getElementById(titleId).style.display = items.length ? "block" : "none";
}

function showPlace(place) {
  fillPanel(
    place.name,
    place.visited ? "✅ We've been here" : "⭐ On our wish list",
    place.dates,
    place.notes,
    place.photos
  );
  backBtn.style.display = "none";

  // Spots: click one to fly there and see its photos
  fillList("spots-title", "place-spots", place.spots || [], spot => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "spot-link";
    btn.textContent = `${spot.date} – ${spot.type === "food" ? "🍴 " : ""}${spot.name}`;
    btn.addEventListener("click", () => {
      showSpot(spot, place);
      map.flyTo({ center: [spot.lng, spot.lat], zoom: 15 });
    });
    li.appendChild(btn);
    return li;
  });

  // Itinerary (for cities that don't have spots yet)
  fillList("itinerary-title", "place-itinerary", place.itinerary || [], item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
  });
}

function showSpot(spot, place) {
  fillPanel(spot.name, `📍 ${place.name}`, spot.date, spot.notes, spot.photos);
  fillList("spots-title", "place-spots", [], null);
  fillList("itinerary-title", "place-itinerary", [], null);

  // Back button returns to the city
  backBtn.textContent = `← ${place.name}`;
  backBtn.style.display = "block";
  backBtn.onclick = () => {
    showPlace(place);
    flyToPlace(place);
  };
}

document.getElementById("close-btn").addEventListener("click", () => {
  panel.classList.add("hidden");
});


// ---------- 3. Open straight at one spot ----------
// e.g. map.html?spot=Taipei%20101  (the Food Map page links here)
const wantedSpot = new URLSearchParams(location.search).get("spot");
places.forEach(place => {
  (place.spots || []).forEach(spot => {
    if (spot.name !== wantedSpot) return;
    spinning = false;
    map.jumpTo({ center: [spot.lng, spot.lat], zoom: 15 });
    updatePins();
    showSpot(spot, place);
  });
});

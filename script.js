// ---------- 1. Create the globe ----------
const globeEl = document.getElementById("globe");

const world = Globe()(globeEl)
  .globeImageUrl("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
  .backgroundImageUrl("https://unpkg.com/three-globe/example/img/night-sky.png")

  // Pins: one per entry in places.js
  .pointsData(places)
  .pointLat("lat")
  .pointLng("lng")
  .pointAltitude(0.03)
  .pointRadius(0.6)
  .pointColor(p => (p.visited ? "#ff4d6d" : "#ffd166"))   // pink = been, yellow = wish list
  .pointLabel(p => `<b>${p.name}</b>`)                     // hover tooltip

  // What happens when a pin is clicked
  .onPointClick(place => {
    showPlace(place);
    world.pointOfView({ lat: place.lat, lng: place.lng, altitude: 1.6 }, 1000); // fly there
  });

// Slow auto-rotate, stops when you grab the globe
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.4;
globeEl.addEventListener("pointerdown", () => {
  world.controls().autoRotate = false;
});

// Keep the globe sized to the window
window.addEventListener("resize", () => {
  world.width(window.innerWidth).height(window.innerHeight);
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

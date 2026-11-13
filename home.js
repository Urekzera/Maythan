// ---------- Home page ----------

// The day we got together (year, month, day)
const ANNIVERSARY = new Date(2023, 6, 31);   // careful: months start at 0, so 6 = July
const DAY = 1000 * 60 * 60 * 24;

const today = new Date();
today.setHours(0, 0, 0, 0);


// ---------- 1. Our numbers ----------

// Days together (counting the first day as day 1)
const days = Math.round((today - ANNIVERSARY) / DAY) + 1;

// Countries and cities, counted from places.js (only places we've been)
const visited = places.filter(place => place.visited);
// The country is the part after the last comma, e.g. "Osaka, Japan" → "Japan"
const countries = new Set(visited.map(place => place.name.split(",").pop().trim()));

document.getElementById("days").textContent = days.toLocaleString();
document.getElementById("countries").textContent = countries.size;
document.getElementById("cities").textContent = visited.length;


// ---------- 2. Things the board tiles need ----------

// Every spot that has a real date like "2023/08/12", with its city
const datedSpots = [];
places.forEach(place => {
  (place.spots || []).forEach(spot => {
    const parts = (spot.date || "").split("/").map(Number);
    if (parts.length === 3 && parts.every(n => n > 0)) {
      datedSpots.push({ spot, place, date: new Date(parts[0], parts[1] - 1, parts[2]) });
    }
  });
});
datedSpots.sort((a, b) => a.date - b.date);   // oldest first

// Link that opens the map right at one spot
const spotLink = spot => "map.html?spot=" + encodeURIComponent(spot.name);

// Latest spot
const latest = datedSpots[datedSpots.length - 1];

// "On this day": spots from the same month and day in an earlier year
const onThisDay = datedSpots.filter(d =>
  d.date.getMonth() === today.getMonth() &&
  d.date.getDate() === today.getDate() &&
  d.date.getFullYear() < today.getFullYear()
);

// Next anniversary
let nextAnniv = new Date(today.getFullYear(), ANNIVERSARY.getMonth(), ANNIVERSARY.getDate());
if (nextAnniv < today) nextAnniv.setFullYear(today.getFullYear() + 1);
const daysToAnniv = Math.round((nextAnniv - today) / DAY);
const annivNumber = nextAnniv.getFullYear() - ANNIVERSARY.getFullYear();
const ordinal = n => n + (["th", "st", "nd", "rd"][(n % 100 - 20) % 10] || ["th", "st", "nd", "rd"][n % 100] || "th");


// ---------- 3. The 16 board tiles ----------
// Listed clockwise, starting at the top-left corner.
//   href  = where the tile goes when you click it (or land on it)
//   soon  = not built yet (shown faded)
//   land  = what to say when the dice token lands here

const tiles = [
  { corner: true, icon: "🏁", title: "Start", sub: "2023/07/31", land: "Back to where it all began 💕" },
  { num: days.toLocaleString(), sub: "days together", land: `${days.toLocaleString()} days together and counting 💕` },
  { num: countries.size, sub: "countries", land: `We've been to ${countries.size} countries together 🌏` },
  { num: visited.length, sub: "cities", land: `We've been to ${visited.length} cities together 📍` },
  { corner: true, icon: "🗺️", title: "Our Map", href: "map.html" },

  { icon: "📅", title: "On this day",
    sub: onThisDay.length ? onThisDay[0].spot.name : "Nothing yet",
    href: onThisDay.length ? spotLink(onThisDay[0].spot) : null,
    land: onThisDay.length ? `On this day in ${onThisDay[0].date.getFullYear()}: ${onThisDay[0].spot.name}` : "Nothing happened on this day… yet!" },
  { icon: "🎁", title: daysToAnniv === 0 ? "Happy anniversary!" : `${ordinal(annivNumber)} anniversary`,
    sub: daysToAnniv === 0 ? "Today! 🎉" : `in ${daysToAnniv} days`,
    land: daysToAnniv === 0 ? "Happy anniversary! 🎉" : `Our ${ordinal(annivNumber)} anniversary is in ${daysToAnniv} days 🎁` },
  { icon: "📍", title: "Latest spot", sub: latest ? latest.spot.name : "", href: latest ? spotLink(latest.spot) : null },

  { corner: true, icon: "🐱", title: "Our Cats", href: "cats.html" },
  { icon: "🎵", title: "Our song", sub: "Coming soon", soon: true },
  { icon: "📸", title: "Album", sub: "Coming soon", soon: true },
  { icon: "❓", title: "Random memory", sub: "Take me somewhere!", random: true },

  { corner: true, icon: "✅", title: "Bucket List", href: "bucket.html" },
  { icon: "✈️", title: "Next trip", sub: "Coming soon", soon: true },
  { icon: "📖", title: "Timeline", sub: "Coming soon", soon: true },
  { corner: true, icon: "🍴", title: "Food Map", href: "food.html" }
];

// Where each tile sits on the 5×5 grid, [column, row], clockwise from the top-left
const positions = [
  [1, 1], [2, 1], [3, 1], [4, 1], [5, 1],
  [5, 2], [5, 3], [5, 4],
  [5, 5], [4, 5], [3, 5], [2, 5],
  [1, 5], [1, 4], [1, 3], [1, 2]
];

// A random spot, for the "Random memory" tile
function randomSpotLink() {
  const pick = datedSpots[Math.floor(Math.random() * datedSpots.length)];
  return spotLink(pick.spot);
}

// Build the tiles
const board = document.getElementById("board");
const tileEls = tiles.map((tile, i) => {
  const el = document.createElement(tile.href || tile.random ? "a" : "div");
  el.className = "tile" + (tile.corner ? " corner" : "") + (tile.soon ? " soon" : "");
  el.style.gridColumn = positions[i][0];
  el.style.gridRow = positions[i][1];
  if (tile.href) el.href = tile.href;
  if (tile.random) {
    el.href = "#";
    el.addEventListener("click", e => { e.preventDefault(); location.href = randomSpotLink(); });
  }

  if (tile.icon)  el.insertAdjacentHTML("beforeend", `<span class="t-icon">${tile.icon}</span>`);
  if (tile.num !== undefined) el.insertAdjacentHTML("beforeend", `<span class="t-num">${tile.num}</span>`);
  if (tile.title) el.insertAdjacentHTML("beforeend", '<span class="t-title"></span>');
  if (tile.sub)   el.insertAdjacentHTML("beforeend", '<span class="t-sub"></span>');
  if (tile.title) el.querySelector(".t-title").textContent = tile.title;
  if (tile.sub)   el.querySelector(".t-sub").textContent = tile.sub;
  if (tile.sub)   el.querySelector(".t-sub").title = tile.sub;   // full text on hover

  board.appendChild(el);
  return el;
});


// ---------- 4. The dice ----------

const diceBtn = document.getElementById("dice-btn");
const diceFace = document.getElementById("dice-face");
const msg = document.getElementById("board-msg");
const faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Our game piece starts on "Start"
const token = document.createElement("span");
token.className = "token";
token.textContent = "♥";
let position = 0;
tileEls[0].appendChild(token);

function moveTo(i) {
  tileEls.forEach(el => el.classList.remove("landed"));
  position = i;
  tileEls[i].appendChild(token);
  tileEls[i].classList.add("landed");
}

diceBtn.addEventListener("click", () => {
  diceBtn.disabled = true;
  const roll = Math.floor(Math.random() * 6) + 1;
  diceFace.textContent = faces[roll - 1];
  msg.textContent = `You rolled a ${roll}!`;

  // Hop one tile at a time
  let steps = 0;
  const hop = setInterval(() => {
    moveTo((position + 1) % tiles.length);
    steps++;
    if (steps === roll) {
      clearInterval(hop);
      landOn(tiles[position]);
      diceBtn.disabled = false;
    }
  }, 280);
});

// Say what happened, with a link if the tile goes somewhere
function landOn(tile) {
  const name = tile.title || tile.sub;
  if (tile.soon) {
    msg.textContent = `${name} — coming soon!`;
  } else if (tile.random) {
    msg.innerHTML = 'Random memory! <a href="#" id="go">Take me there →</a>';
    document.getElementById("go").href = randomSpotLink();
  } else if (tile.href) {
    msg.textContent = (tile.land || `You landed on ${name}!`) + " ";
    const a = document.createElement("a");
    a.href = tile.href;
    a.textContent = "Go →";
    msg.appendChild(a);
  } else {
    msg.textContent = tile.land || `You landed on ${name}!`;
  }
}

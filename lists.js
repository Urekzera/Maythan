// ---------- Shared code for the Games, TV Shows and Movies pages ----------
// Each page loads its own data file first (games.js, tv.js or movies.js),
// which makes a list called  items . This code puts them on the page:
//   - things we've done, grouped by their  category
//   - things with  done: false  all together at the end, under  wantLabel

function showList(items, icon, doneWord, wantLabel) {
  const box = document.getElementById("list");

  const doneItems = items.filter(item => item.done !== false);
  const wantItems = items.filter(item => item.done === false);

  // Keep the categories in the order they first appear in the data file
  const categories = [...new Set(doneItems.map(item => item.category || "Other"))];

  categories.forEach(category => {
    addGroup(category, doneItems.filter(item => (item.category || "Other") === category), false);
  });
  if (wantItems.length) addGroup(wantLabel, wantItems, true);

  document.getElementById("count").textContent =
    `${doneItems.length} ${doneWord} · ${wantItems.length} to go`;

  function addGroup(title, groupItems, isWant) {
    const h2 = document.createElement("h2");
    h2.className = "group-title";
    h2.textContent = title;
    box.appendChild(h2);

    const ul = document.createElement("ul");
    ul.className = "list";
    groupItems.forEach(item => ul.appendChild(makeItem(item, isWant)));
    box.appendChild(ul);
  }

  function makeItem(item, isWant) {
    const li = document.createElement("li");
    li.className = "item icon-only" + (isWant ? " want" : "");
    li.innerHTML =
      '<span class="check"></span>' +
      '<span class="item-main"><span class="item-text"></span><span class="item-sub"></span></span>' +
      '<span class="item-side"><span class="score"></span><span class="item-date"></span></span>';

    li.querySelector(".check").textContent = icon;
    li.querySelector(".item-text").textContent = item.name;

    // small grey line: platform, comment, who won
    li.querySelector(".item-sub").textContent =
      [item.platform, item.notes, item.result && "🏆 " + item.result].filter(Boolean).join(" · ");

    // Right side: our ratings
    let score = "";
    if (item.fun !== undefined) {
      // games: fun × 2 + unique × 1 + bonding × 1.5
      score = (item.fun * 2 + item.unique + item.bonding * 1.5) + " pts";
    } else if (item.nathan !== undefined || item.may !== undefined) {
      // movies / shows: each of our ratings out of 10
      score = [item.nathan !== undefined && "N " + item.nathan,
               item.may !== undefined && "M " + item.may].filter(Boolean).join(" · ");
    }
    li.querySelector(".score").textContent = score;
    li.querySelector(".item-date").textContent = item.date || "";
    return li;
  }
}

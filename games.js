// Online games we've played together.
// To add one, copy a line and change it.
//   category: Co-op or Competition (or make up a new one)
//   done:     true = we played it, false = we want to play it (shows under "Want to Play")
//   result:   who won (optional)
//   fun / unique / bonding: our ratings out of 10 (optional)
//             the score is worked out automatically: fun × 2 + unique × 1 + bonding × 1.5

const items = [
  { name: "It Takes Two",          category: "Co-op",       done: true, notes: "Really fun split-screen story game", fun: 9,   unique: 10,  bonding: 9.5 },
  { name: "Stardew Valley",        category: "Co-op",       done: true, notes: "Livin' on a farm",                   fun: 9.5, unique: 9.5, bonding: 9.5 },
  { name: "Don't Starve Together", category: "Co-op",       done: true, notes: "Survival co-op game",                fun: 9.5, unique: 9,   bonding: 9 },
  { name: "Weplay",                category: "Co-op",       done: true, notes: "Multi-game phone app",               fun: 7.5, unique: 8,   bonding: 7 },
  { name: "Shitty Discord Games",  category: "Competition", done: true, notes: "Scrabble, Golf, Pictionary", result: "May always wins", fun: 6, unique: 7, bonding: 8 },
  { name: "KartRider Rush+",       category: "Competition", done: true, notes: "Racing phone app" },
  { name: "Town of Salem 2",       category: "Competition", done: true, notes: "Medieval lynching game" },
  { name: "Among Us",              category: "Competition", done: true, notes: "Find the imposter in space" },
  { name: "Lovers in a Dangerous Spacetime", category: "Competition", done: false },
  { name: "Castle Crashers",       category: "Competition", done: false },
  { name: "Minecraft",             category: "Competition", done: false }
];

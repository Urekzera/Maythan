// Recipes we cook together.
// To add one, copy a whole { ... } block (from { to },) and change it.
//   category: the group it shows under (e.g. Dessert, Dinner, Drinks...)
//   ingredients: one item per line, each in "quotes" with a comma after
//   steps: same, in order
// (The cream puffs are from our baking class; the pancakes are just an EXAMPLE.)

const recipes = [
  {
    name: "Cream Puffs",
    category: "Dessert",
    time: "1.5 hours",
    notes: "We made these at the baking club!",
    ingredients: [
      "100 g butter",
      "200 ml water",
      "120 g flour",
      "4 eggs",
      "300 ml whipping cream",
      "2 tbsp sugar"
    ],
    steps: [
      "Boil the water and butter, then stir in the flour until it forms a ball.",
      "Let it cool a little, then beat in the eggs one at a time.",
      "Pipe small balls onto a tray and bake at 200°C for 25 minutes.",
      "Whip the cream with the sugar and fill the puffs once they're cool."
    ]
  },
  {
    name: "Fluffy Pancakes",
    category: "Breakfast",
    time: "20 min",
    notes: "",
    ingredients: [
      "150 g flour",
      "1 tbsp sugar",
      "2 tsp baking powder",
      "1 egg",
      "180 ml milk",
      "1 tbsp melted butter"
    ],
    steps: [
      "Mix the flour, sugar and baking powder.",
      "Whisk in the egg, milk and butter until just smooth.",
      "Cook spoonfuls on a medium-hot pan, flip when bubbles appear."
    ]
  }
];

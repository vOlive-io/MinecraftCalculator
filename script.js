var items = await fetch("./data/pc/1.21.1/items.json").then(r => r.json());
var recipes = await fetch("./data/pc/1.21.1/recipes.json").then(r => r.json());

console.log("Items loaded:", items.length);
console.log("Recipes keys:", Object.keys(recipes).length);

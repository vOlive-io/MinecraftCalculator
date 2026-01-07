var items = await fetch("./data/pc/1.21.1/items.json").then(r => r.json());
var recipes = await fetch("./data/pc/1.21.1/recipes.json").then(r => r.json());
var conponents = [];
var builds = [];
console.log("Items loaded:", items.length);
console.log("Recipes keys:", Object.keys(recipes).length);

const itemsById = {};
const itemsByName = {};

for (const item of items) {
  itemsById[item.id] = item;
  itemsByName[item.name] = item;
}

function addComponet() {

}
function addBuild() {

} 
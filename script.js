async function testLoad() {
  const items = await fetch("./data/pc/1.21.1/items.json").then(r => r.json());
  const recipes = await fetch("./data/pc/1.21.1/recipes.json").then(r => r.json());

  console.log("Items loaded:", items.length);
  console.log("Recipes keys:", Object.keys(recipes).length);
}

testLoad();



var items = [];    
var defultItems = [
    ["Dirt", false, null, "dirt.png"], 
    ["Stone", false, null, "stone.png"], 
    ["Oak Logs", false, null, "wood.png"]
]
var recipes = [];

function addRecipe() {

}
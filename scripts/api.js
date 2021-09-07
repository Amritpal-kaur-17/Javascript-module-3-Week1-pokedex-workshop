async function getsomePokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=12";

  const response = await fetch(url);
  const { results } = await response.json();
  return results;

}
export {getsomePokemon};

async function getPokemonLink(url){
  const response = await fetch(url);
  const sprite = await response.json();
  console.log(sprite);
  return sprite.sprites.other.dream_world.front_default; 
}
export {getPokemonLink};

async function getPokemonid(url1){
  const response = await fetch(url1);
  const idlink = await response.json();
  console.log(idlink);
  return idlink.id; 
}
export {getPokemonid};

async function getSinglePokemon(nameOrId){
  const url = "https://pokeapi.co/api/v2/pokemon/" + nameOrId;
  const response = await fetch(url);
  const output = await response.json();
  console.log(output);
  return output; 
}
export {getSinglePokemon};

async function getPokemonColor(nameOrId){
  const url = "https://pokeapi.co/api/v2/pokemon-color/" + nameOrId;
  const response = await fetch(url);
  const output = await response.json();
  console.log(output);
  return output; 
}
export {getPokemonColor};

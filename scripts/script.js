 import { getsomePokemon, getPokemonLink, getPokemonid, getSinglePokemon, getPokemonColor} from "./api.js";

const section = document.getElementById("searchBar");
console.log(section);
const search_Bar = document.createElement("input");
search_Bar.id= "find";
search_Bar.type="text";
search_Bar.placeholder="procurar";
console.log(search_Bar.placeholder);
console.log(search_Bar);

document.getElementById('searchBar').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      searchPokemon();
  }
});
section.appendChild(search_Bar);


async function searchPokemon(){
    const searchValue = document.getElementById("find").value;
    console.log(searchValue);
    const singlePokemon= await getSinglePokemon(searchValue);
    console.log(singlePokemon);
    document.getElementById("container").remove();
    var main_div = document.createElement("div");
    main_div.id= "container";
    const sub_div = document.createElement("div");
    sub_div.id = "containerOfPokemon";
    const id_div = document.createElement("div");
    id_div.id = "idOfPokemon";
    const image_div = document.createElement("div");
    image_div.id = "ImageOfPokemon";
    const name_div = document.createElement("div");
    name_div.id="nameOfPokemon";

    const pokemonLink = document.createElement("a");
    pokemonLink.textContent = singlePokemon.name;
    name_div.appendChild(pokemonLink);
    console.log(pokemonLink);

    const pokemonImag = document.createElement("img");
    pokemonImag.src = singlePokemon.sprites.front_shiny;
    pokemonImag.id = "pokemonImage";
    image_div.appendChild(pokemonImag);

    const pokemonidlink = document.createElement("a");
    pokemonidlink.textContent =singlePokemon.id;
    console.log(pokemonidlink);


    id_div.appendChild(pokemonidlink);
    sub_div.appendChild(id_div);
    sub_div.appendChild(image_div);
    sub_div.appendChild(name_div);
    main_div.appendChild(sub_div);


    const rootDiv = document.getElementById("root");
    rootDiv.appendChild(main_div);
}


async function init() {
    const pokemon = await getsomePokemon();
    console.log(pokemon);
    console.log(pokemon[0]);
    var main_div = document.createElement("div");
    main_div.id= "container";
    for(let i=0; i<pokemon.length; i++){

    const sub_div = document.createElement("div");
    sub_div.id = "containerOfPokemon";
    const id_div = document.createElement("div");
    id_div.id = "idOfPokemon";
    const image_div = document.createElement("div");
    image_div.id = "ImageOfPokemon";
    const name_div = document.createElement("div");
    name_div.id="nameOfPokemon";
    const pokemonLink = document.createElement("a");
    pokemonLink.textContent = pokemon[i].name;
    name_div.appendChild(pokemonLink);



    const spriteUrl = await getPokemonLink(pokemon[i].url);
    console.log(spriteUrl);
    const pokemonImag = document.createElement("img");
    pokemonImag.src = spriteUrl;
    pokemonImag.id = "pokemonImage";
    image_div.appendChild(id_div);
    image_div.appendChild(pokemonImag); 

    const pokemonId = await getPokemonid(pokemon[i].url);
    console.log(pokemonId);
    const pokemonidlink = document.createElement("a");
    pokemonidlink.textContent =pokemonId;
    id_div.appendChild(pokemonidlink);


    //const pokemonColor = await getPokemonColor(pokemonId);
    //console.log(pokemonColor);
    


    
    sub_div.appendChild(image_div);
    sub_div.appendChild(name_div);
    main_div.appendChild(sub_div);
    //main_div.appendChild(image_div);
    //image_div.appendChild(name_div);   
  }
  const rootDiv = document.getElementById("root");
  rootDiv.appendChild(main_div);
}
init();
    
  
  



/*const searchBar = document.getElementById("searchBar");
console.log(searchBar);
searchBar.addEventListener('keyup', (e) => {
  console.log(e.target.value);
})
const pokemon = await getsomePokemon(){
  for(let i=0; i<pokemon.length; i++)
 {

 } 
}*/
/*
search_Bar.addEventListener(('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.text.value.trim();
  console.log(text);
}));
section.appendChild(search_Bar);

const searchBar = document.getElementById("searchBar");
search_Bar.addEventListener("keyup", e => { 
 const searchString = e.target.value; 
})*/
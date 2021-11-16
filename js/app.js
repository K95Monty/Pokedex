const namePokemon = document.getElementById("name");
const imageNormalPokemon = Array.from(document.getElementsByClassName("normal-image")); //array of images
const infoPokemon = document.getElementsByClassName("pokemon-info"); //array of extra info
const evolutionPokemon = document.getElementsByClassName("evolution");
const idPokemon = document.getElementById("id")


  // const getValueInput = () =>{
  //   let inputName = document.getElementById("search").value; 
  //   document.getElementById("search").innerHTML = inputName;
  //   console.log(inputName);
  //   return inputName;
  // }

  let id = "pikachu"
  
  const getPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => {
        return response.json();
      })
      .then(pokemon => {

        namePokemon.innerText = pokemon.name;
        idPokemon.innerText = "#" + pokemon.id.toString();
        
        document.getElementById("normal-male").src = pokemon.sprites.front_default; //src for img
          if (!pokemon.sprites.front_female) {
            document.getElementById("normal-female").style.display = "none";
          }
          else {
            document.getElementById("normal-female").style.display = "block";
            document.getElementById("normal-female").src = pokemon.sprites.front_female;
          }
        document.getElementById("shiny-male").src = pokemon.sprites.front_shiny; //src for img
          if (!pokemon.sprites.front_shiny_female) {
            document.getElementById("shiny-female").style.display = "none";
          }
          else {
            document.getElementById("shiny-female").style.display = "block";
            document.getElementById("shiny-female").src = pokemon.sprites.front_shiny_female;
          }
        }
      )
    }




  //console.log(pokemon.moves[0].move.name); //array for moves

  //console.log(pokemon.types[0].type.name); //array types 
 
  //console.log(pokemon.sprites.front_shiny); //src for img might
  //console.log(pokemon.sprites.front_shiny_female); //src for img might = null
//    console.log(pokemon.abilities[0].ability.name); //array for abilities





// evolution api request
// fetch("https://pokeapi.co/api/v2/evolution-chain/1/")
//   .then(response => {
//     return response.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon.chain.species.name); //next evolution

//   })

//   //console.log(pokemon.chain.species.name); //name of pokemon in evolve chain
// //console.log(pokemon.chain.evolves_to[0].evolves_to[0].species.name); //last evolution
// //console.log(pokemon.chain.species.name); //next evolution

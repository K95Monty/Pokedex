const search = document.querySelector('#search');
const pokemonInfo = document.querySelectorAll('.pokemon-info'); //array of all fields that will use API to change HTML
const typeList = document.querySelector("#pokemon-types")
const abilityList = document.querySelector("#pokemon-abilities")

//grab value from text input
const searchPokemon = () => {
  const pokemon = search.value;
  console.log(pokemon);
  return pokemon
}

//make sure function runs when enter key is pressed
search.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    searchPokemon();
  }
})

//assign id to the value obtained from searchPokemon function
const id = searchPokemon();

//send GET request to API for pokemon data - async function to write after searchpokemon is complete
const getPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => {
        return response.json();
      })
      .then(pokemon => {
        
        //iterate through array pokemonInfo and fill out the info.
        for (let i = 0; i <= pokemonInfo.length - 1; i++) {
          switch(pokemonInfo[i].attributes[1].nodeValue) {
            case 'id': 
              document.querySelector("h2[data-id='id']").innerHTML = `#${pokemon.id}`;
          break
            case 'name': 
              document.querySelector("h3[data-name='name']").innerHTML = pokemon.name;
          break
            case 'male': 
             document.querySelector("img[data-male='male']").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
             document.querySelector("img[data-male='male']").alt = pokemon.name;
          break
            case 'female': 
              if (pokemon.sprites.front_female) {
                document.querySelector("img[data-female='female']").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemon.id}.png`;
                document.querySelector("img[data-female='female']").alt = pokemon.name;
              }
          break
            case 'shiny-male':
              document.querySelector("img[data-shinyMale='shiny-male']").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`;
              document.querySelector("img[data-shinyMale='shiny-male']").alt = `shiny ${pokemon.name}`;
            break
            case 'shiny-female':
              if (pokemon.sprites.front_shiny_female) {
              document.querySelector("img[data-shinyFemale='shiny-female']").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokemon.id}.png`;
              document.querySelector("img[data-shinyFemale='shiny-female']").alt = `shiny ${pokemon.name}`;
            }
          break      
            case 'abilities':
              const abilitiesObject = pokemon.abilities
              for (let x = 0; x <= abilitiesObject.length-1; x ++) {
                const abilityItem = document.createElement('li');
                const abilityUrl = document.createElement('a');
                abilityItem.classList.add('pokemon-ability')
                abilityItem.innerHTML = abilitiesObject[x].ability.name;
                abilityUrl.innerHTML = ' - see ability';
                abilityUrl.href = abilitiesObject[x].ability.url;
                abilityList.appendChild(abilityItem); 
                abilityItem.appendChild(abilityUrl);                
              }
          break       
            case 'type':
              const typesObject = pokemon.types
              for (let x = 0; x <= typesObject.length-1; x ++) {
                const typeItem = document.createElement('li');
                typeItem.classList.add('pokemon-ability')
                typeItem.innerHTML = typesObject[x].type.name;
                typeList.appendChild(typeItem);                
              }
          break        
            default: console.log('hello')
          }
        }      
    })
  }

//create a stats case,
//if type = green backgroundcolor = green etc

// // evolution api request
// // fetch("https://pokeapi.co/api/v2/evolution-chain/1/")
// //   .then(response => {
// //     return response.json();
// //   })
// //   .then(pokemon => {
// //     console.log(pokemon.chain.species.name); //next evolution

// //   })

// //   //console.log(pokemon.chain.species.name); //name of pokemon in evolve chain
// // //console.log(pokemon.chain.evolves_to[0].evolves_to[0].species.name); //last evolution
// // //console.log(pokemon.chain.species.name); //next evolution

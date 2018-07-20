// audio player for hold music
var intro = document.getElementById("intro"); //the pokemon intro theme song from gen 1 games
var loadsound = document.getElementById("loaded"); //the little ding sound when the pokemon loads
var tv = document.getElementById("tv"); //tv static noise

//variables
var pokemon0called = false; //checks whether each pokemon has been called from API
var pokemon1called = false;
var pokemon2called = false;
var abilityLists = []; //a container for the abilities stored as strings
var i = 0; //the index of the pokemon

//show "loading" animations and sounds
function loadAnimation() {
  document.getElementById('pokeballimg').classList.remove('black');
  tv.play();
  document.getElementById('pokeballimg').src = 'images/load.gif';
  document.getElementById('pokeball').classList.remove('open');
  document.getElementById("displayStats").innerHTML = "Loading..."
  document.getElementById("title").innerHTML = "Loading...";
  intro.play();
}
//animation and sounds for when API is connected
function endLoadAnimation() {
  document.getElementById('pokeball').classList.add('open');
  intro.pause();
  loadsound.play();
}
//displays onnly the pokemon on TV
function displayPokemonOnTV() {
  document.getElementById('pokeballimg').classList.remove('black');
  document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
  document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
}
//displays only the stats
function displayStatsOnly() {
      document.getElementById('displayStats').classList.remove('nocaps');
  document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityLists[i]}</b></p>`);
}

//displays all info on a pokemon
function displayAllPokeInfo() {
  document.getElementById('pokeballimg').classList.remove('black');
    document.getElementById('displayStats').classList.remove('nocaps');
  document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityLists[i]}</b></p>`);
  document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
  document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
  document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
  document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
}
//show this if there are no stats loaded
function pleaseClickZed() {
      document.getElementById('displayStats').classList.add('nocaps');
  document.getElementById("displayStats").innerHTML = (`Stats not loaded yet. Click on Sean Connery from the 1974 film "Zardoz" to load data.`);
}
//trainer containting pokemon; makes 3 separate calls to API that push the pokemon into array one at a time: intentionally does not call them all at once to emphasize load animation and music
Zed = {
  pokemon: [],
  //returns an array containing all pokemon to the console
  all: function() {
    console.log(this.pokemon);
  },
  //returns each pokemon to the console when called by name
  get: function(name) {
    if (name == "ditto") {
      return this.pokemon[0];
      console.log(this.pokemon[0]);
    } else if (name == "mantyke") {
      return this.pokemon[1];
      console.log(this.pokemon[1]);
    } else if (name == "palossand") {
      return this.pokemon[2];
      console.log(this.pokemon[2]);
    } else {
      console.log("No Pokemon data found for this name");
    }
  },
  //calls API, plays sounds and changes images, adds pokemon data to object and displays that data, loads a different pokemon each time
  callAPI: function() {
    if (pokemon0called == false) {
      loadAnimation();
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var pokemon = JSON.parse(this.responseText);
          i = 0;
          endLoadAnimation();
          name = pokemon.forms[0].name;
          id = pokemon.id;
          hp = pokemon.stats[5].base_stat;
          atk = pokemon.stats[4].base_stat;
          def = pokemon.stats[3].base_stat;
          img = pokemon.sprites.front_default;
          //makes an array of the abilities
          abilities = [];
          abilityList = "";
          for (x = 0; x < pokemon.abilities.length; x++) {
            abilities.push(pokemon.abilities[x].ability.name);
          }
          addPokemon(name);
          console.log(Zed.pokemon);
          //prepares the list of abilities to be displayed as a string and stores that string in an array so they can be accessed by the same index number as the data inside the object
          for (y = 0; y < Zed.pokemon[i].abilities.length; y++) {
            abilityList += Zed.pokemon[i].abilities[y] + " ";
          }
          abilityLists.push(abilityList);
          displayAllPokeInfo();
        }
      };
      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/132/", true);
      xhttp.send();
      pokemon0called = true;
    } else if (pokemon0called == true && pokemon1called == false) {
      loadAnimation();
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var pokemon = JSON.parse(this.responseText);
          i = 1;
          endLoadAnimation();
          name = pokemon.forms[0].name;
          id = pokemon.id;
          hp = pokemon.stats[5].base_stat;
          atk = pokemon.stats[4].base_stat;
          def = pokemon.stats[3].base_stat;
          img = pokemon.sprites.front_default;
          abilities = [];
          abilityList = "";
          for (x = 0; x < pokemon.abilities.length; x++) {
            abilities.push(pokemon.abilities[x].ability.name);
          }
          addPokemon(name);
          console.log(Zed.pokemon);

          for (y = 0; y < Zed.pokemon[i].abilities.length; y++) {
            abilityList += Zed.pokemon[i].abilities[y] + " ";
          }
          abilityLists.push(abilityList);
          displayAllPokeInfo();
        }
      };
      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/458/", true);
      xhttp.send();
      pokemon1called = true;
    } else if (pokemon1called == true && pokemon2called == false) {
      loadAnimation();
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var pokemon = JSON.parse(this.responseText);
          i = 2;
          endLoadAnimation();
          name = pokemon.forms[0].name;
          id = pokemon.id;
          hp = pokemon.stats[5].base_stat;
          atk = pokemon.stats[4].base_stat;
          def = pokemon.stats[3].base_stat;
          img = pokemon.sprites.front_default;
          abilities = [];
          abilityList = "";
          for (x = 0; x < pokemon.abilities.length; x++) {
            abilities.push(pokemon.abilities[x].ability.name);
          }
          addPokemon(name);
          console.log(Zed.pokemon);

          for (y = 0; y < Zed.pokemon[i].abilities.length; y++) {
            abilityList += Zed.pokemon[i].abilities[y] + " ";
          }
          abilityLists.push(abilityList);
          displayAllPokeInfo();
        }
      };
      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/770/", true);
      xhttp.send();
      pokemon2called = true;
    } else {
      document.getElementById("displayStats").innerHTML = (`All Pok&eacutemon loaded.`);
    }
  }
};

class Pokemon {
  constructor() {
    this.name = name;
    this.id = id;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.img = img;
    this.abilities = abilities;
  }
}

function addPokemon(name) {
  newPokemon = new Pokemon(name);
  Zed.pokemon.push(newPokemon);
}

//animations on hover
function wobble() {
  document.getElementById('pokeballimg').classList.add('animated');
  document.getElementById('pokeballimg').classList.add('infinite');
  document.getElementById('pokeballimg').classList.add('shake');
}

function unWobble() {
  document.getElementById('pokeballimg').classList.remove('animated');
  document.getElementById('pokeballimg').classList.remove('infinite');
  document.getElementById('pokeballimg').classList.remove('shake');
}

function bounce() {
  document.getElementById('tz').classList.add('animated');
  document.getElementById('tz').classList.add('infinite');
  document.getElementById('tz').classList.add('bounce');
}

function unBounce() {
  document.getElementById('tz').classList.remove('animated');
  document.getElementById('tz').classList.remove('infinite');
  document.getElementById('tz').classList.remove('bounce');
}

//displays info already in pokemon object
function load0() {
  if (pokemon0called == false) {
    pleaseClickZed();
  } else {
    i = 0;
    displayStatsOnly();
    displayPokemonOnTV();
  }
}

function load1() {
  if (pokemon1called == false) {
    pleaseClickZed();
  } else {
    i = 1;
    displayStatsOnly();
    displayPokemonOnTV();
  }
}

function load2() {
  if (pokemon2called == false) {
    pleaseClickZed();
  } else {
    i = 2;
    displayStatsOnly();
    displayPokemonOnTV();
  }
}
//secret function to show any pokemon on the TV without connecting to the API: hotlinks from Nintendo and applies a 0% brightness filter to the image to create a silhouette. it will show zed's pokemon info if it has already been called
function pokeTV() {
  number = prompt("Please enter a 3 digit number");
  if (number === '132' && pokemon0called == true) {
    load0();
  } else if (number === '458' && pokemon1called == true) {
    load1();
  } else if (number === '770' && pokemon2called == true) {
    load2();
  } else {
    loadAnimation();
  intro.pause();
    document.getElementById('pokeballimg').classList.add('black');
    document.getElementById('pokeballimg').src = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`);
    document.getElementById("title").innerHTML = "#" + number + " ???";
    document.getElementById("displayStats").innerHTML = "No data available"
  }
}

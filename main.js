// audio player for hold music
var intro = document.getElementById("intro");
var loadsound = document.getElementById("loaded");
var tv = document.getElementById("tv");

class Pokemon {
constructor() {
  this.name = name;
  this.id = id;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.img = img;
}
}

Zed = {
  pokemon: []};
//trainer object containing pokemon
trainer = {
  name: "Trainer name",
  pokemon: {
    pokemon1: {
      name: "ditto",
      load: function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var pokemon = JSON.parse(this.responseText);
            document.getElementById('pokeball').classList.add('open');
            document.getElementById("displayStats").innerHTML = (`
        <p>HP: <b>${pokemon.stats[5].base_stat}</b> ATK: <b>${pokemon.stats[4].base_stat}</b> DEF: <b>${pokemon.stats[3].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</b></p>`);
            document.getElementById('pokeball1').src = pokemon.sprites.front_default;
            document.getElementById("title").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            document.getElementById('pokeballimg').src = 'images/132.png';
            document.getElementById("name1").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            intro.pause();
            loadsound.play();
            name = pokemon.forms[0].name;
            id = pokemon.id;
            hp = pokemon.stats[5].base_stat;
            atk = pokemon.stats[4].base_stat;
            def = pokemon.stats[3].base_stat;
            img = pokemon.sprites.front_default;
            console.log(name);

            function addPokemon(name) {
              newPokemon = new Pokemon(name);
Zed.pokemon.push(newPokemon);
            }
addPokemon(name);
console.log(Zed.pokemon);
          } else if (this.status == 504) {
            document.getElementById("displayStats").innerHTML = "Connection failed"
          }
        };
        xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/132/", true);
        xhttp.send();

      }
    },
    pokemon2: {
      name: "mantyke",
      load: function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var pokemon = JSON.parse(this.responseText);
            document.getElementById('pokeball').classList.add('open');
            document.getElementById("displayStats").innerHTML = (`
        <p>HP: <b>${pokemon.stats[5].base_stat}</b> ATK: <b>${pokemon.stats[4].base_stat}</b> DEF: <b>${pokemon.stats[3].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}, ${pokemon.abilities[2].ability.name}</b></p>`);
            document.getElementById('pokeball2').src = pokemon.sprites.front_default;
            document.getElementById("title").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            document.getElementById('pokeballimg').src = 'images/458.png';
            document.getElementById("name2").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            intro.pause();
            loadsound.play();
            name = pokemon.forms[0].name;
            id = pokemon.id;
            hp = pokemon.stats[5].base_stat;
            atk = pokemon.stats[4].base_stat;
            def = pokemon.stats[3].base_stat;
            img = pokemon.sprites.front_default;
            console.log(name);

            function addPokemon(name) {
              newPokemon = new Pokemon(name);
Zed.pokemon.push(newPokemon);
            }
addPokemon(name);
console.log(Zed.pokemon);
          } else if (this.status == 504) {
            document.getElementById("displayStats").innerHTML = "Connection failed"
          }
        };
        xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/458/", true);
        xhttp.send();

      }
    },
    pokemon3: {
      name: "palossand",
      load: function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var pokemon = JSON.parse(this.responseText);
            document.getElementById('pokeball').classList.add('open');

            intro.pause();
            loadsound.play();
            name = pokemon.forms[0].name;
            id = pokemon.id;
            hp = pokemon.stats[5].base_stat;
            atk = pokemon.stats[4].base_stat;
            def = pokemon.stats[3].base_stat;
            img = pokemon.sprites.front_default;
            console.log(name);

            function addPokemon(name) {
              newPokemon = new Pokemon(name);
Zed.pokemon.push(newPokemon);
            }
addPokemon(name);
console.log(Zed.pokemon);
var i = Zed.pokemon.length - 1;
document.getElementById("displayStats").innerHTML = (`
<p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${pokemon.stats[4].base_stat}</b> DEF: <b>${pokemon.stats[3].base_stat}</b></p>
<p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</b></p>`);
document.getElementById('pokeball3').src = pokemon.sprites.front_default;
document.getElementById("title").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
document.getElementById('pokeballimg').src = 'images/770.png';
document.getElementById("name3").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);

          } else if (this.status == 504) {
            document.getElementById("displayStats").innerHTML = "Connection failed"
          }
        };
        xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/770/", true);
        xhttp.send();

      }
    }
  }
}
//animation on hover
function wobble() {
  document.getElementById('pokeballimg').classList.add('animated');
  document.getElementById('pokeballimg').classList.add('shake');
}

function unWobble() {
  document.getElementById('pokeballimg').classList.remove('animated');
  document.getElementById('pokeballimg').classList.remove('shake');
}

//change images, display loading animation and load data
function openPokeball1() {
  tv.play();
  document.getElementById('pokeballimg').src = 'images/load.gif';
  document.getElementById('pokeball').classList.remove('open');
  document.getElementById("displayStats").innerHTML = "Loading..."
  document.getElementById("title").innerHTML = "Loading...";
  document.getElementById("name1").innerHTML = "Loading...";
  intro.play();
  trainer.pokemon.pokemon1.load();
}

function openPokeball2() {
  tv.play();
  document.getElementById('pokeballimg').src = 'images/load.gif';
  document.getElementById('pokeball').classList.remove('open');
  document.getElementById("displayStats").innerHTML = "Loading...";
  document.getElementById("title").innerHTML = "Loading...";
  document.getElementById("name2").innerHTML = "Loading...";
  intro.play();
  trainer.pokemon.pokemon2.load();
}

function openPokeball3() {
  tv.play();
  document.getElementById('pokeballimg').src = 'images/load.gif';
  document.getElementById('pokeball').classList.remove('open');
  document.getElementById("displayStats").innerHTML = "Loading...";
  document.getElementById("title").innerHTML = "Loading...";
  document.getElementById("name3").innerHTML = "Loading...";
  intro.play();
  trainer.pokemon.pokemon3.load();
}
//
// new trainer object with getters






// Zed = {
//   pokemon = [{
//       name = name;
//       hp = hp;
//       atk = atk;
//       def = def;
//       abilities = [1, 2, 3];
//       // get(name) {
//       //
//       // }
//     },
//     {
//       name = name;
//       hp = hp;
//       atk = atk;
//       def = def;
//       abilities = [1, 2, 3]
//     },
//     {
//       name = name;
//       hp = hp;
//       atk = atk;
//       def = def;
//       abilities = [1, 2, 3]
//     },
//   ]
// };

// audio player for hold music
var intro = document.getElementById("intro");
var loadsound = document.getElementById("loaded");

//trainer object containing pokemon
trainer = {
  name: "Milo",
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
          <p>ATK: <b>${pokemon.stats[5].base_stat}</b> DEF: <b>${pokemon.stats[4].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</b></p>`);
            document.getElementById('pokeball1').src = pokemon.sprites.front_default;
            document.getElementById("title").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            document.getElementById('pokeballimg').src = 'images/132.png';
            document.getElementById("name1").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            intro.pause();
            loadsound.play();
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
          <p>ATK: <b>${pokemon.stats[5].base_stat}</b> DEF: <b>${pokemon.stats[4].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}, ${pokemon.abilities[2].ability.name}</b></p>`);
            document.getElementById('pokeball2').src = pokemon.sprites.front_default;
            document.getElementById("title").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            document.getElementById('pokeballimg').src = 'images/458.png';
            document.getElementById("name2").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            intro.pause();
            loadsound.play();
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
            document.getElementById("displayStats").innerHTML = (`
          <p>ATK: <b>${pokemon.stats[5].base_stat}</b> DEF: <b>${pokemon.stats[4].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</b></p>`);
            document.getElementById('pokeball3').src = pokemon.sprites.front_default;
            document.getElementById("title").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            document.getElementById('pokeballimg').src = 'images/770.png';
            document.getElementById("name3").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);
            intro.pause();
            loadsound.play();
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

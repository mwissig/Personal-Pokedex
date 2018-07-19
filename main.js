// audio player for hold music
var intro = document.getElementById("intro");
var loadsound = document.getElementById("loaded");
var tv = document.getElementById("tv");
var pokemon0called = false;
var pokemon1called = false;
var pokemon2called = false;
var abilityList0 = "";
var abilityList1 = "";
var abilityList2 = "";

Zed = {
  pokemon: [],
  all: function() {
    console.log(Zed.pokemon);
  },
  get: function() {
    if (pokemon0called == false) {
      console.log('working');
      tv.play();
      document.getElementById('pokeballimg').src = 'images/load.gif';
      document.getElementById('pokeball').classList.remove('open');
      document.getElementById("displayStats").innerHTML = "Loading..."
      document.getElementById("title").innerHTML = "Loading...";
      intro.play();
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
          abilities = [];
          for (x = 0; x < pokemon.abilities.length; x++) {
            abilities.push(pokemon.abilities[x].ability.name);
          }
          addPokemon(name);
          console.log(Zed.pokemon);
          var i = Zed.pokemon.length - 1;
          for (y = 0; y < Zed.pokemon[i].abilities.length; y++) {
            abilityList0 += Zed.pokemon[i].abilities[y] + " ";

          }
          document.getElementById("displayStats").innerHTML = (`
              <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
              <p>Abilities: <b>${abilityList0}</b></p>`);
          document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
          document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
          document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
          document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
        }
      };
      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/132/", true);
      xhttp.send();
      pokemon0called = true;
    } else if (pokemon0called == true && pokemon1called == false) {
      console.log('working');
      tv.play();
      document.getElementById('pokeballimg').src = 'images/load.gif';
      document.getElementById('pokeball').classList.remove('open');
      document.getElementById("displayStats").innerHTML = "Loading..."
      document.getElementById("title").innerHTML = "Loading...";
      intro.play();
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
          abilities = [];
          for (x = 0; x < pokemon.abilities.length; x++) {
            abilities.push(pokemon.abilities[x].ability.name);
          }
          addPokemon(name);
          console.log(Zed.pokemon);
          var i = Zed.pokemon.length - 1;
          for (y = 0; y < Zed.pokemon[i].abilities.length; y++) {
            abilityList1 += Zed.pokemon[i].abilities[y] + " ";

          }
          document.getElementById("displayStats").innerHTML = (`
              <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
              <p>Abilities: <b>${abilityList1}</b></p>`);
          document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
          document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
          document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
          document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
        }
      };
      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/458/", true);
      xhttp.send();
      pokemon1called = true;
    } else if (pokemon1called == true && pokemon2called == false) {
      console.log('working');
      tv.play();
      document.getElementById('pokeballimg').src = 'images/load.gif';
      document.getElementById('pokeball').classList.remove('open');
      document.getElementById("displayStats").innerHTML = "Loading..."
      document.getElementById("title").innerHTML = "Loading...";
      intro.play();
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
          abilities = [];
          for (x = 0; x < pokemon.abilities.length; x++) {
            abilities.push(pokemon.abilities[x].ability.name);
          }
          addPokemon(name);
          console.log(Zed.pokemon);
          var i = Zed.pokemon.length - 1;
          for (y = 0; y < Zed.pokemon[i].abilities.length; y++) {
            abilityList2 += Zed.pokemon[i].abilities[y] + " ";

          }
          document.getElementById("displayStats").innerHTML = (`
              <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
              <p>Abilities: <b>${abilityList2}</b></p>`);
          document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
          document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
          document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
          document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
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

//animation on hover
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


function load0() {
  if (pokemon0called == false) {
    document.getElementById("displayStats").innerHTML = "Stats not loaded yet. Click on Sean Connery to load data.";
  } else {
    i = 0;
    document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityList0}</b></p>`);
    document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
    document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
    document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
    document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
  }
}

function load1() {
  if (pokemon1called == false) {
    document.getElementById("displayStats").innerHTML = "Stats not loaded yet. Click on Sean Connery to load data.";
  } else {
    i = 1;
    document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityList1}</b></p>`);
    document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
    document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
    document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
    document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
  }
}

function load2() {
  if (pokemon2called == false) {
    document.getElementById("displayStats").innerHTML = "Stats not loaded yet. Click on Sean Connery to load data.";
  } else {
    i = 2;
    document.getElementById("displayStats").innerHTML = (`
      <p>HP: <b>${Zed.pokemon[i].hp}</b> ATK: <b>${Zed.pokemon[i].atk}</b> DEF: <b>${Zed.pokemon[i].def}</b></p>
      <p>Abilities: <b>${abilityList2}</b></p>`);
    document.getElementById(`pokeball${i}`).src = Zed.pokemon[i].img;
    document.getElementById("title").innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
    document.getElementById('pokeballimg').src = (`images/${Zed.pokemon[i].id}.png`);
    document.getElementById(`name${i}`).innerHTML = (`#${Zed.pokemon[i].id}: ${Zed.pokemon[i].name}`);
  }
}

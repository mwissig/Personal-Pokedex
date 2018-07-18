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
              document.getElementById("displayStats").innerHTML = (`<p>Name: <b>${pokemon.forms[0].name}</b></p>
          <p>Pokemon No: ${pokemon.id}</p>
          <p>ATK: <b>${pokemon.stats[5].base_stat}</b> DEF: <b>${pokemon.stats[4].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</b>`);
              document.getElementById('pokeball1').src = pokemon.sprites.front_default;
              document.getElementById("title1").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);

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
              document.getElementById("displayStats").innerHTML = (`<p>Name: <b>${pokemon.forms[0].name}</b></p>
          <p>Pokemon No: ${pokemon.id}</p>
          <p>ATK: <b>${pokemon.stats[5].base_stat}</b> DEF: <b>${pokemon.stats[4].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}, ${pokemon.abilities[2].ability.name}</b>`);
              document.getElementById('pokeball2').src = pokemon.sprites.front_default;
              document.getElementById("title2").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);

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
              document.getElementById("displayStats").innerHTML = (`<p>Name: <b>${pokemon.forms[0].name}</b></p>
          <p>Pokemon No: ${pokemon.id}</p>
          <p>ATK: <b>${pokemon.stats[5].base_stat}</b> DEF: <b>${pokemon.stats[4].base_stat}</b></p>
          <p>Abilities: <b>${pokemon.abilities[0].ability.name}, ${pokemon.abilities[1].ability.name}</b>`);
              document.getElementById('pokeball3').src = pokemon.sprites.front_default;
              document.getElementById("title3").innerHTML = (`#${pokemon.id}: ${pokemon.forms[0].name}`);

            }
          };
          xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/770/", true);
          xhttp.send();

        }
      }
    }
}

    function wobble1() {
      document.getElementById('pokeball1').classList.add('animated');
      document.getElementById('pokeball1').classList.add('shake');
    }

    function unWobble1() {
      document.getElementById('pokeball1').classList.remove('animated');
      document.getElementById('pokeball1').classList.remove('shake');
    }

    function wobble2() {
      document.getElementById('pokeball2').classList.add('animated');
      document.getElementById('pokeball2').classList.add('shake');
    }

    function unWobble2() {
      document.getElementById('pokeball2').classList.remove('animated');
      document.getElementById('pokeball2').classList.remove('shake');
    }

    function wobble3() {
      document.getElementById('pokeball3').classList.add('animated');
      document.getElementById('pokeball3').classList.add('shake');
    }

    function unWobble3() {
      document.getElementById('pokeball3').classList.remove('animated');
      document.getElementById('pokeball3').classList.remove('shake');
    }

    function openPokeball1() {
      document.getElementById('pokeball1').src = 'images/load.gif';
      document.getElementById('pokeball2').src = 'images/pokeball2.png';
      document.getElementById('pokeball3').src = 'images/pokeball2.png';
      document.getElementById('col1').classList.add('open');
      document.getElementById('col2').classList.remove('open');
      document.getElementById('col3').classList.remove('open');
      document.getElementById("displayStats").innerHTML = "Loading..."
      trainer.pokemon.pokemon1.load();
    }

    function openPokeball2() {
      document.getElementById('pokeball2').src = 'images/load.gif';
      document.getElementById('pokeball1').src = 'images/pokeball2.png';
      document.getElementById('pokeball3').src = 'images/pokeball2.png';
      document.getElementById('col2').classList.add('open');
      document.getElementById('col1').classList.remove('open');
      document.getElementById('col3').classList.remove('open');
      document.getElementById("displayStats").innerHTML = "Loading..."
      trainer.pokemon.pokemon2.load();
    }

    function openPokeball3() {
      document.getElementById('pokeball3').src = 'images/load.gif';
      document.getElementById('pokeball1').src = 'images/pokeball2.png';
      document.getElementById('pokeball2').src = 'images/pokeball2.png';
      document.getElementById('col3').classList.add('open');
      document.getElementById('col1').classList.remove('open');
      document.getElementById('col2').classList.remove('open');
      document.getElementById("displayStats").innerHTML = "Loading..."
      trainer.pokemon.pokemon3.load();
    }

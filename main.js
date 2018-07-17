

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
  document.getElementById('pokeball1').src = 'images/test2.png';
  document.getElementById('pokeball2').src = 'images/pokeball.png';
  document.getElementById('pokeball3').src = 'images/pokeball.png';
  document.getElementById('col1').classList.add('open');
  document.getElementById('col2').classList.remove('open');
  document.getElementById('col3').classList.remove('open');
  loadPokemon();
}

function openPokeball2() {
  document.getElementById('pokeball2').src = 'images/test2.png';
  document.getElementById('pokeball1').src = 'images/pokeball.png';
  document.getElementById('pokeball3').src = 'images/pokeball.png';
  document.getElementById('col2').classList.add('open');
  document.getElementById('col1').classList.remove('open');
  document.getElementById('col3').classList.remove('open');
}

function openPokeball3() {
  document.getElementById('pokeball3').src = 'images/test2.png';
  document.getElementById('pokeball1').src = 'images/pokeball.png';
  document.getElementById('pokeball2').src = 'images/pokeball.png';
  document.getElementById('col3').classList.add('open');
  document.getElementById('col1').classList.remove('open');
  document.getElementById('col2').classList.remove('open');
}

function loadPokemon() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("displayStats").innerHTML =
      "test";
      // this.sprites.front_default;
    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/132/", true);
  xhttp.send();
  console.log(`working`);
  console.log(this);
  console.log(this.forms.name);
}

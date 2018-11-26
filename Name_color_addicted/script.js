// Il software deve chiedere all’utente il suo nome e il
// sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il
// colore del nome deve essere azzurro o rosa a
// seconda del sesso inserito


var username = prompt('Digita il tuo nome');
document.getElementById("username").innerHTML = "Ciao!" + username;
console.log(username);

var sesso = document.getElementById("utente");

var sesso_tipo = false;

while (sesso_tipo == false) {
  var sesso = prompt('maschio o femmina??');
  console.log(sesso);
  if (sesso == 'maschio') {
    utente.style.background = "lightblue";
    sesso_tipo = true;
  }
  else if (gender == 'femmina') {
    utente.style.background = "pink";
    sesso_tipo = true;
  }
  else {
    alert('!!ERRORE!!');
  }
}

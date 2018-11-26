// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

//funzione numero random compreso tra min e max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//array vuoto per i numeri creati random
var numeri = [];
console.log(numeri);

//ciclo per creazione di 5 numeri random da 1 a 100,
// ad ogni ciclo il nuovo numero va a popolare l'array numbers
for (var i = 0; i <= 4; i++) {
  numeri_random = getRandomNumber(1,100);
  console.log(numeri_random);
  numeri.push(numeri_random);
}
console.log(numeri);

//visualizzazione a schermo delle regole + numeri random
alert('Verranno mostrati cinque numeri.\nMemorizzali.....Pronto?');
for (var i = 0; i <= 4; i++) {
  numeri[i];
  alert(numeri);
}

var numeri_utente = [];

//time function per la gestione  prompt e la verifica dei numeri
setTimeout(askNumbers, 30000);
function askNumbers() {
  for (var i = 0; i <= 4; i++) {
    var utente = parseInt(prompt('Bene, ora digita uno dei numeri che ricordi.'));
    if (numeri.includes(utente)) {
      numeri_utente.push(utente);
    }
    console.log(utente);
  }

  //se l'utente non indovina nessun numero, creiamo un alert di comunicazione all'utente.
  if (numeri_utente < 1) {
    alert('Mi dispiace, hai la memoria corta!. Non hai memorizzato nessun numero!!!');
    console.log('nessun numero ricordato.');
  }
  // al contrario, se l'utente digita correttamente almeno un numero di quelli proposti dal computer,
  //creiamo un alert per comunicare all'utente il risultato finale.
  else {
    console.log('numeri digitati dall\'utente che corrispondono a quelli generati dal software: ' + numeri_utente);
    alert('Complimenti!\nNumeri corretti:' + (numeri_utente.length));
    alert('Ecco i numeri che hai indovinato:' + (numeri_utente));
  }
}

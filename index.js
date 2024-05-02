const Blockchain = require('./blockChain');
//Importamos nuestra clase blockchain para poderla usar

const blockchain = new Blockchain("Hola a mi cadena de bloques", "00");
//Blockchain desde su constructor necesita el bloque de origen para la cadena
blockchain.addBlock("datos del segundo bloque");
//Le vamos añadiendo bloques
blockchain.addBlock("datos del tercer bloque");

console.log(blockchain);
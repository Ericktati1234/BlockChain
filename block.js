const SHA256 = require('crypto-js/sha256'); 
// Importa la función SHA256 de la biblioteca crypto-js, que se utiliza para crear un hash del contenido del bloque.

class Block {
    // Block es una clase que representa un bloque de una cadena de bloques

    constructor(index, data, previousHash = '') {
        // El constructor inicializa un bloque con los siguiente parametros
        
        this.index = index; 
        this.data = data; 
        this.previousHash = previousHash; 
        this.nounce = 0; 
        this.hash = this.createHash(); 
    }

    createHash() {
        //La siguiente funcion calcula el hash del bloque utilizando los valores que ya definimos en el constructor
        // y nos retorna con ayuda de la funcion de SHA256 el hash como una cadena que podremos almacenar
        const originalChain = `${this.index}|${this.data}|${this.date}|${this.nounce}`;
        return SHA256(originalChain).toString(); 
    }

    mine(dif) {
        // Función de minería que ajusta el nonce hasta que el hash del bloque cumple con la dificultad dada (dif).
        // La dificultad (dif) se mide por el número de ceros al comienzo del hash.
        
        while (!this.hash.startsWith(dif)) {
            this.nounce++; 
            this.hash = this.createHash(); 
        }
    }
}
//Exportamos nuestro bloque para que pueda ser utilizado por otros archivos
module.exports = Block;



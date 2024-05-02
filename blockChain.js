const Block = require('./block');

class Blockchain {
    constructor(origin, diff='00'){
        this.chain = [this.createFirstBlock(origin)];
        this.diff = diff;
    }

    createFirstBlock(origin){
        return new Block(0, origin);
    }

    getLastBlock(){
        return this.chain[this.chain.length - 1];
    }

    addBlock(data){
        let previousBlock = this.getLastBlock();
        let newBlock = new Block(previousBlock.index + 1, data, previousBlock.hash);
        newBlock.mine(this.diff);
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;
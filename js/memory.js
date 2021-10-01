class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let finalArrayShuffled = [];
    let buffer = this.cards;
    if(this.cards.length === 0) return undefined;

    console.log(">>>>>>>>>>before boucle="+ buffer.length);
    for (let index = 0; index <= buffer.length; index++) { // <=buffer.length
      let newMixedPosition = Math.floor(Math.random() * buffer.length);

      finalArrayShuffled[newMixedPosition] = buffer[newMixedPosition];

      buffer.splice(newMixedPosition,1);

      console.log(">>>>>>>>>>after boucle="+ buffer.length);
    }
        
    console.log("fin boucle>>>>>>>>>>"+ buffer.length);
    console.log(">>>>>>>>>>TailleFinale"+finalArrayShuffled.length);
    return finalArrayShuffled;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked ++;
    if(card1.getAttribute('data-card-name') === card2.getAttribute('data-card-name')){
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    //return (this.pairsGuessed === this.cards.length/2); //return soit true soit false
    //Autre methode
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    } else {
      return false;
    }    
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;

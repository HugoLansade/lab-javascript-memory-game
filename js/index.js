//import { MemoryGame } from './memory.js';

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const pairsClicked = document.getElementById('pairs-clicked');
const pairsGuessed = document.getElementById('pairs-guessed');

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

   function cardCliked(card){
    card.classList.add("turned");
   }
   function cardReset(card){
     card.classList.remove("turned");
   }


  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {    
    card.addEventListener('click', () => {
      memoryGame.pickedCards.push(card);                                // on ajoute la carte à notre arret
      console.log("nbout= "+memoryGame.pairsClicked);
      //if(memoryGame.pickedCards.length === 3) clearTimeout(intervalId);
      if(memoryGame.pickedCards.length < 2){                             //si on a que une carte
        
        cardCliked(card);                                             // on la montre
        
        //console.log("nbin1= "+memoryGame.pairsClicked);
        //console.log("***dans le if")        
      } else if (memoryGame.pickedCards.length === 2){              //on a retourné deux cartes on empeche le mec de cliquer 3fois ou plus
        cardCliked(card);        
        
                                                                    //verification de si les cartes sont similaires
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])){
          
          memoryGame.pairsGuessed ++;
          pairsGuessed.textContent = `${memoryGame.pairsGuessed/2}`;
          memoryGame.pickedCards = [];                             //On réinitialise le tab
          //console.log("nbin2.1= "+memoryGame.pairsClicked);
                                                                  //on ecrit dans le html le nombre de pair guessed
        } else {// les cartes ne sont pas les m^mes on les retournes apres un délai
          //console.log("***dans le else2") 
          //console.log("nbin2.2= "+ memoryGame.pairsClicked);
          let intervalId = setTimeout(() => {            
            cardReset(memoryGame.pickedCards[0]);                   // on enleve la propriété turned
            cardReset(memoryGame.pickedCards[1]);                   // on enleve la propriété turned
            memoryGame.pickedCards = [];                            //vide le tableau          
                                                                    //on retourne les cartes
          },3000);
        }
        pairsClicked.textContent = `${memoryGame.pairsClicked}`;

      }

      console.log("dans la fonction")
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
    });
  });
  console.log("hors la fonction")
});

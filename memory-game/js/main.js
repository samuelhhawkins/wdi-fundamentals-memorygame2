
let cards = [{
    rank:"queen",
    suit:"Diamonds",
    cardImg:"images/queen-of-diamonds.png"
  },
  {
    rank:"queen",
    suit:"Hearts",
    cardImg:"images/queen-of-hearts.png"
  },
  {
    rank:"king",
    suit:"Diamonds",
    cardImg:"images/king-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"Hearts",
    cardImg:"images/king-of-hearts.png"
  }];

let cardsInPlay = [];
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png")
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImg);
  if(cardsInPlay.length == 2) {
    checkForMatch();
  }
  console.log(cards[cardId].cardImg);
  console.log(cards[cardId].suit);
}

function checkForMatch() {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");
  }
}



//flipCard();
createBoard();
//checkForMatch();

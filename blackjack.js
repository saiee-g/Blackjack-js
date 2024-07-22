let firstCard = 10;
let secondCard = 1;
let cards = [firstCard, secondCard];
let sum = firstCard +secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startBlackjack(){
    renderBlackjack();
}

function renderBlackjack(){
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of this game..";
        isAlive = false;
    }
    messageEl.textContent = message;

}

function newCard(){
    console.log("Drawing a new card from the deck...");
    let card = 1;
    sum += card;
    renderBlackjack();
}
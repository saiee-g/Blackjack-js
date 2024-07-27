let player = {
    name : "Player",
    chips: 0,
    incchips: function(hasBlackJack, sum){
        if(hasBlackJack == true){
            this.chips += 10
        }else if(sum > 21){
            this.chips -= 10
        }
        return this.chips
    }
}

let playerEl = document.getElementById('player-el');
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function updatePlayerChips(){
    playerEl.textContent = player.name + ": $" +player.chips;
}

function startBlackjack(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard +secondCard;
    renderBlackjack();
}

function renderBlackjack(){
    sumEl.textContent = "Sum: " + sum;
    
    cardsEl.textContent = "Cards: ";
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

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
    player.incchips(hasBlackJack, sum);
    updatePlayerChips();
}

function newCard(){

    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderBlackjack();
    }   
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1;
    if (randomCard === 1){
        randomCard = 11;
    }
    else if (randomCard > 10){
        randomCard = 10;
    }
    return randomCard
}

function quitGame(){
    cardsEl.textContent = "Cards:";
    cards = [];
    sumEl.textContent = "Sum: ";
    sum = 0;
}

updatePlayerChips();

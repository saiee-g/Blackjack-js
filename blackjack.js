let firstCard = 4;
let secondCard = 10;
let sum = firstCard +secondCard;

if(sum < 21){
    console.log("Do you want to draw another card?")
}else if(sum === 21){
    console.log("Yayy! You've got blackjack! ~^.^~")
}else if(sum > 21){
    console.log("You're out of this game.. >.<")
}
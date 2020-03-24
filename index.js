var dice1 = Math.floor(Math.random()*6)+1;
var dice2 = Math.floor(Math.random()*6)+1;
var title = "Player 1 Wins!";
if(dice1<dice2) {
  title = "Player 2 Wins!";
} else if(dice1 === dice2) {
  title = "Draw!";
}
document.querySelector("h1").innerHTML = title;
document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");

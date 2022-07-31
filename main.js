const button = document.querySelector("button");
const die = document.querySelectorAll(".dice");

let roll = () => {
  return Math.floor(Math.random()*6)+1;
};

button.addEventListener('click', () =>{
  die.forEach((dice) => {
    dice.textContent = roll();
  })
})
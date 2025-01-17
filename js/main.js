/*
  Name: Week 1 Assignment
  Author: Thomas Sanger
  Date: 01-17-2025
  Version: 1.0

  Instructions:
  Include main.js in an HTML document containing an element with the id "ball".
  The script will detect when the left or right arrow keys are pressed and move the ball accordingly.
*/

const ball = document.getElementById("ball"); //get the ball element
document.addEventListener("keydown", handleKeyPress); //listen for key presses
let position = 0; //set initial position of the ball

/*
    handleKeyPress: Function to handle key presses
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 20;
    console.log("ArrowLeft");
  }

  if (e.code === "ArrowRight") {
    position = position + 20;
    console.log("ArrowRight");
  }

  if (position < 0) {
    position = 0;
  }

  refresh(); //reposition the ball
}

/*
    refresh: Function to reposition the ball
*/
function refresh() {
  ball.style.left = position + "px";
}

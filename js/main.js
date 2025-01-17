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

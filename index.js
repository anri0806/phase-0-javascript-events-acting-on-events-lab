// Your code here

const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF99CC"

function moveDodgerLeft() {
  const leftNUmbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNUmbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
})

function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(rightNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 5}px`;
  }
}

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowRight") {
    moveDodgerRight();
  }
})

var numSquares = 9
var colors = []
var pickedColor
var squares = document.querySelectorAll(".square")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var colorDisplay = document.querySelector("#colorDisplay")

// Generates a random color

function generateRandomColor() {
  var red = Math.floor(Math.random() * 256)
  var green = Math.floor(Math.random() * 256)
  var blue = Math.floor(Math.random() * 256)
  return "rgb(" + red + ", " + green + ", " + blue + ")"
}

// Mode

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected')
      modeButtons[1].classList.remove('selected')
      modeButtons[2].classList.remove('selected')
      this.classList.add("selected")
      if (this.textContent === "Easy") {
        numSquares = 3;
      } else if (this.textContent === "Extreme") {
        numSquares = 9;
      } else {
        numSquares = 6;
      }
      reset();
    })
  }
}

// If you chose right or not

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      var clickedColor = this.style.backgroundColor

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Congrats you chose right!"
        resetButton.textContent = "Play again?"
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Wrong Choice!"
      }
    });
  }
}

// Reset button

resetButton.addEventListener('click', function() {
  reset();
});

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(generateRandomColor());
  }
  return arr;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Changes the background to the right color when choosing the right box

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Initialize the game

function init() {
  setupModeButtons()
  setupSquares()
  reset()
}
init();
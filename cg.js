console.log("Connected..!!");
var colors = generateRandomColors(6);
			   
			  
var squares = document.querySelectorAll(".squares");
var pickedColor = pickcolor();

var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares =6;

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickcolor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
resetButton.addEventListener("click", function() {
	//to fadeoff the message display
	messageDisplay.textContent="";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickcolor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent="New Colors"
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;
for(var i =0 ; i<squares.length;i++)
{
		//add Intial Colors
	squares[i].style.background = colors[i];
		//Adding eventListeners for clicked events
	squares[i].addEventListener("click",function(){

		// Grab the colors from the squares

		var clickedColor = this.style.background;



		//compare clicked Colors

		if(clickedColor === pickedColor){
			messageDisplay.textContent="correct... :)";
			resetButton.textContent ="Play Again !";
			changeColors(clickedColor);
			h1.style.background =clickedColor;
		}
		else{

			this.style.background = "#232323";

			messageDisplay.textContent ="Try Again >:(";
		}

	});
}


function changeColors(color)
{
	//loop through all squares
	for(var i =0 ; i<squares.length;i++)
	{
		//change each color to match the event color

		squares[i].style.background = color;

	}



}
function pickcolor()
{


	var random = Math.floor(Math.random() *colors.length);
	return colors[random];
}

function generateRandomColors(num)
{

//create an array
var arr =[];

// multiple n times
for(var i=0 ; i<num ; i++)
{
	arr.push(randomColor());

}
return arr;
// return the array


}

function randomColor()
{

//pick a red from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a green from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
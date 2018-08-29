var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var k = pickSquare();
var rgb = randomColor();
var mainColor = rgbToString(rgb);
var minorColor = closeColorEasy(rgb);
var message = document.querySelector("#message");
var newColor = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
easy.classList.toggle("selected");
var status = 0;
var coin = 0;

newColor.addEventListener("click",function() {
	if(status === 0){
		reset();
	}else{
		resetHard();
	}
});
easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	reset();
	status = 0;
})
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	resetHard();
	status = 1;
})


h1.style.backgroundColor = mainColor; 

for(var i = 0; i < squares.length; i++){
	if(i === k){
		squares[i].style.backgroundColor = minorColor;
	}else{
		squares[i].style.backgroundColor = mainColor;
	}

	squares[i].addEventListener("click",function(){
		var color = this.style.backgroundColor;
		if(color === minorColor){
			coin++;
			message.textContent = "COIN " + coin;
			if(status == 0){
				reset();
			}else{
				resetHard();
			}
			
		}else{
			message.textContent = "Game Over! ";
			coin = 0;
		}
		
	})
}

function pickSquare(){
	return Math.floor(Math.random() * squares.length);
}

function randomColor(){
	var r = Math.floor(Math.random() * 60 + 180);
	var g = Math.floor(Math.random() * 60 + 180);
	var b = Math.floor(Math.random() * 60 + 180);
	var rgb = [];
	rgb[0] = r;
	rgb[1] = g;
	rgb[2] = b;
	return rgb;
}
function rgbToString(rgb){
	var r = rgb[0];
	var b = rgb[1];
	var g = rgb[2];
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function closeColorEasy(rgb){
	var r = rgb[0] + 10;
	var b = rgb[1] - 10;
	var g = rgb[2] - 10;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function closeColorHard(rgb){
	var r = rgb[0] + 5;
	var b = rgb[1] - 1;
	var g = rgb[2] - 1;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	rgb = randomColor();
	mainColor = rgbToString(rgb);
	minorColor = closeColorEasy(rgb);
	k = pickSquare();
	h1.style.backgroundColor = mainColor; 
	for(var i = 0; i < squares.length; i++){
		if(i === k){
			squares[i].style.backgroundColor = minorColor;
		}else{
			squares[i].style.backgroundColor = mainColor;
		}
	}
}

function resetHard(){
	rgb = randomColor();
	mainColor = rgbToString(rgb);
	minorColor = closeColorHard(rgb);
	k = pickSquare();
	h1.style.backgroundColor = mainColor; 
	for(var i = 0; i < squares.length; i++){
		if(i === k){
			squares[i].style.backgroundColor = minorColor;
		}else{
			squares[i].style.backgroundColor = mainColor;
		}
	}
}

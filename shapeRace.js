let squareX = 75

let rsquarePos = squareX
let gsquarePos = squareX
let bsquarePos = squareX
let ysquarePos = squareX

let gambleBool = true
let raceBool = false
let redWinBool = false
let greenWinBool = false
let blueWinBool = false
let yellowWinBool = false

let betRed = false
let betGreen = false
let betBlue = false
let betYellow = false


//REMINDER: win with all and activate a hard mode to get "super wins", and add a third image to be loaded with all of those
//OTHER REMINDER: upload this how it is for code in progress 2. then add music and above for final.
let rVictory = false
let gVictory = false
let bVictory = false
let yVictory = false

let reset = false

let thumbsUp
let allWinner

function preload(){
	thumbsUp = loadImage('joyful.png')
	allWinner = loadImage('wowie.png')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	imageMode(CENTER)
	
}

function draw(){
	if(gambleBool == true){
		bet()
	}
	if(raceBool == true){
		race()
	}
	

	winCheck()

	if(key === 'r'){
		gambleBool = true
		raceBool = false
		redWinBool = false
		greenWinBool = false
		blueWinBool = false
		yellowWinBool = false

		rsquarePos = squareX
		gsquarePos = squareX
		bsquarePos = squareX
		ysquarePos = squareX
		betRed = false
		betGreen = false
		betBlue = false
		betYellow = false
	}
	

}

function bet(){
	background(0)
	fill(255)
	textSize(40)
	text('Welcome to the Great Shape Race!', windowWidth/2-325, 60)
	text('Click on a square to bet on that racer!', 420, 140)

	if(reset == true){
		text('Please press spacebar before selecting a racer.', 350, 220)
	}else{
		text('The race will start IMMEDIATELY upon betting.', 350, 220)
	}


	if(rVictory == true && gVictory == true && bVictory == true && yVictory == true){
		image(allWinner, windowWidth/2, windowHeight/2, 300,300)
	}else{
		image(thumbsUp, windowWidth/2, windowHeight/2, 300,300)
	}

	textSize(30)
	if(rVictory == true){
		text('Winner!', 250, 545)
	}if(gVictory == true){
		text('Winner!', 550, 545)
	}if(bVictory == true){
		text('Winner!', 850, 545)
	}if(yVictory == true){
		text('Winner!', 1150, 545)
	}

	textSize(20)
	text('When in a race, rapidly click the spacebar to move your racer faster.', 450, windowHeight-20)

	//red square
	fill(255, 0, 0)
	square(300, 600, 100)

	//green square
	fill(0, 255, 0)
	square(600, 600, 100)

	//blue square
	fill(0, 0, 255)
	square(900, 600, 100)

	//yellow square
	fill(255, 255, 0)
	square(1200, 600, 100)

	if(mouseIsPressed){
		if(dist(mouseX,mouseY, 300,600) < 100){
			raceBool = true
			betRed = true
			gambleBool = false
		}if(dist(mouseX,mouseY, 600,600) < 100){
			raceBool = true
			betGreen = true
			gambleBool = false
		}if(dist(mouseX,mouseY, 900,600) < 100){
			raceBool = true
			betBlue = true
			gambleBool = false
		}if(dist(mouseX,mouseY, 1200,600) < 100){
			raceBool = true
			betYellow = true
			gambleBool = false
		}
	}

}

function race(){
	background(180)

	let rsquareSpeed
	let gsquareSpeed
	let bsquareSpeed
	let ysquareSpeed

	if(betRed == true){
		rsquareSpeed = 0
		gsquareSpeed = random(6,7)
		bsquareSpeed = random(6,7)
		ysquareSpeed = random(6,7)
	}if(betGreen == true){
		rsquareSpeed = random(6,7)
		gsquareSpeed = 0
		bsquareSpeed = random(6,7)
		ysquareSpeed = random(6,7)
	}if(betBlue == true){
		rsquareSpeed = random(6,7)
		gsquareSpeed = random(6,7)
		bsquareSpeed = 0
		ysquareSpeed = random(6,7)
	}if(betYellow == true){
		rsquareSpeed = random(6,7)
		gsquareSpeed = random(6,7)
		bsquareSpeed = random(6,7)
		ysquareSpeed = 0
	}

	let y1 = 50
	let y2 = 50

	//finish line
	for(let i = 0; i <= 10; i++){
		if(i % 2 == 0){
			fill(255)
		}else{
			fill(0)
		}

		if(i < 5){
			square(windowWidth-200, y1, 155)
			y1 = y1+155
		}else{
			square(windowWidth-50, y2, 155)
			y2 = y2+155
		}
	}

	//red square
	fill(255, 0, 0)
	square(rsquarePos, 100, 100)

	//green square
	fill(0, 255, 0)
	square(gsquarePos, 250, 100)

	//blue square
	fill(0, 0, 255)
	square(bsquarePos, 400, 100)

	//yellow square
	fill(255, 255, 0)
	square(ysquarePos, 550, 100)


	rsquarePos = rsquarePos + rsquareSpeed
	gsquarePos = gsquarePos + gsquareSpeed
	bsquarePos = bsquarePos + bsquareSpeed
	ysquarePos = ysquarePos + ysquareSpeed

	keyPressed()

	if(rsquarePos >= windowWidth-200){
		redWinBool = true
		raceBool = false
	}if(gsquarePos >= windowWidth-200){
		greenWinBool = true
		raceBool = false
	}if(bsquarePos >= windowWidth-200){
		blueWinBool = true
		raceBool = false
	}if(ysquarePos >= windowWidth-200){
		yellowWinBool = true
		raceBool = false
	}
}

function redWin(){
	background(255, 0, 0)
	textSize(40)
	fill(0)
	if(betRed == true){
		text('You won as Red!', windowWidth/2-150, windowHeight/2)
		//rVictory = true
	}else{
		text('Red wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function greenWin(){
	background(0, 255, 0)
	textSize(40)
	fill(0)
	if(betGreen == true){
		text('You won as Green!', windowWidth/2-150, windowHeight/2)
		//gVictory = true
	}else{
		text('Green wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function blueWin(){
	background(0, 0, 255)
	textSize(40)
	fill(0)
	if(betBlue == true){
		text('You won as Blue!', windowWidth/2-150, windowHeight/2)
		//bVictory = true
	}else{
		text('Blue wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function yellowWin(){
	background(255, 255, 0)
	fill(0)
	textSize(40)
	if(betYellow == true){
		text('You won as Yellow!', windowWidth/2-150, windowHeight/2)
		//yVictory = true
	}else{
		text('Yellow wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function winCheck(){

	//tie bugfixes
	if(redWinBool == true && greenWinBool == true){
		redWin()
	}if(redWinBool == true && blueWinBool == true){
		redWin()
	}if(redWinBool == true && yellowWinBool == true){
		redWin()
	}if(blueWinBool == true && greenWinBool == true){
		blueWin()
	}if(blueWinBool == true && yellowWinBool == true){
		blueWin()
	}if(greenWinBool == true && yellowWinBool == true){
		greenWin()
	}

	//win screens

	if(redWinBool == true){
		redWin()
	}if(greenWinBool == true){
		greenWin()
	}if(blueWinBool == true){
		blueWin()
	}if(yellowWinBool == true){
		yellowWin()
	}
	
}

function keyPressed(){
	if(keyCode === 32){
		if(betRed == true){
			rsquarePos = rsquarePos+6
		}if(betGreen == true){
			gsquarePos = gsquarePos+6
		}if(betBlue == true){
			bsquarePos = bsquarePos+6
		}if(betYellow == true){
			ysquarePos = ysquarePos+6
		}
	}
}
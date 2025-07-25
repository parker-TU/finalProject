let squareX = 75

let rsquarePos = squareX
let gsquarePos = squareX
let bsquarePos = squareX
let ysquarePos = squareX

let rsquareY = 100
let gsquareY = 250
let bsquareY = 400
let ysquareY = 550

let jitter = 1
let soundCount = 0

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
//OTHER REMINDER: add music and maybe fonts for finals, along with more style in the race scene. ADD CROWD.
//maybe add glitch effects to racers in hard mode? add some chaos
let rVictory = false
let gVictory = false
let bVictory = false
let yVictory = false

let rSuper = false
let gSuper = false
let bSuper = false
let ySuper = false

let notWinner = true
let bigWinner = false
let ultWinner = false

let reset = false

let thumbsUp
let allWinner
let ultimateWin


let menuSong
let raceSong
let winSong

let amplitude

function preload(){
	thumbsUp = loadImage('joyful.png')
	allWinner = loadImage('wowie.png')
	ultimateWin = loadImage('star.png')

	menuSong = loadSound('smallerFurElise.mp3')
	raceSong = loadSound('odeToJoy.ogg')
	winSong = loadSound('charge.mp3')
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	imageMode(CENTER)

	amplitude = new p5.Amplitude()
	
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
	playMenu()
	background(0)
	fill(255)
	textSize(40)

	rsquareY = 100
	gsquareY = 250
	bsquareY = 400
	ysquareY = 550

	if(bigWinner == false && ultWinner == false){
		image(thumbsUp, windowWidth/2, windowHeight/2, 300,300)
	}if(rVictory == true && gVictory == true && bVictory == true && yVictory == true){
		image(allWinner, windowWidth/2, windowHeight/2, 300,300)
		bigWinner = true
		notWinner = false
	}if(rSuper == true && gSuper == true && bSuper == true && ySuper == true){
		background(0)
		image(ultimateWin, windowWidth/2, windowHeight/2, 300,300)
		ultWinner = true
		bigWinner = false
	}

	if(bigWinner == true){
		text('Great work winning with each color!', 420, 60)
		text('Same deal as before, but now with harder races!', 325, 140)
	}if(!bigWinner && !ultWinner){
		text('Welcome to the Great Shape Race!', windowWidth/2-325, 60)
		text('Click on a square to bet on that racer!', 420, 140)
	}if(ultWinner == true){
		text("Congratulations!", 600, 60)
		text("You've done everything this race has to offer!", 325, 140)
	}


	if(reset == true && ultWinner == false){
		text('Please press spacebar before selecting a racer.', 350, 220)
	}if(ultWinner == true){
		text('Continue racing if you want more fun races!', 360, 220)
	}if( reset != true){
		text('The race will start IMMEDIATELY upon betting.', 350, 220)
	}


	textSize(30)
	if(rVictory == true){
		text('Winner!', 250, 545)
		if(rSuper == true){
			text('Super', 260, 515)
		}
	}if(gVictory == true){
		text('Winner!', 550, 545)
		if(gSuper == true){
			text('Super', 560, 515)
		}
	}if(bVictory == true){
		text('Winner!', 850, 545)
		if(bSuper == true){
			text('Super', 860, 515)
		}
	}if(yVictory == true){
		text('Winner!', 1150, 545)
		if(ySuper == true){
			text('Super', 1160, 515)
		}
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

	playRace()
	//bg
	background(255, 186, 117)
	
	/*
	noStroke()
	fill(245, 117, 255)
	triangle(316,420, 373,300, 492,421)
	triangle(201,190, 251,271, 305,200)
	triangle(754,590, 657,690, 601,644)
	*/


	stroke(0)
	strokeWeight(10)
	line(squareX,675, windowWidth-400,675)
	line(windowWidth-450,650, windowWidth-400,675)
	line(windowWidth-450,700, windowWidth-400,675)

	strokeWeight(0)
	fill(0)
	textSize(50)
	let textX1 = 100
	let textX2 = 100
	for(let i = 0; i < 20; i++){
		if(i<10){
			text("go!", textX1, 650)
			textX1 = textX1+100
		}else{
			text("go!", textX2, 730)
			textX2 = textX2+100
		}
	}

	strokeWeight(1)
	let s1
	let s2

	if(bigWinner == true || ultWinner == true){
		s1 = 2
		s2 = 4.6
	}else{
		s1 = 1.25
		s2 = 5
	}

	let rsquareSpeed
	let gsquareSpeed
	let bsquareSpeed
	let ysquareSpeed

	if(betRed == true){
		rsquareSpeed = 0
		gsquareSpeed = random(s1,s2)
		bsquareSpeed = random(s1,s2)
		ysquareSpeed = random(s1,s2)
	}if(betGreen == true){
		rsquareSpeed = random(s1,s2)
		gsquareSpeed = 0
		bsquareSpeed = random(s1,s2)
		ysquareSpeed = random(s1,s2)
	}if(betBlue == true){
		rsquareSpeed = random(s1,s2)
		gsquareSpeed = random(s1,s2)
		bsquareSpeed = 0
		ysquareSpeed = random(s1,s2)
	}if(betYellow == true){
		rsquareSpeed = random(s1,s2)
		gsquareSpeed = random(s1,s2)
		bsquareSpeed = random(s1,s2)
		ysquareSpeed = 0
	}

	line(0,100, windowWidth,100)
	line(0,250, windowWidth,250)
	line(0,400, windowWidth,400)
	line(0,550, windowWidth,550)


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
	square(rsquarePos, rsquareY, 100)

	//green square
	fill(0, 255, 0)
	square(gsquarePos, gsquareY, 100)

	//blue square
	fill(0, 0, 255)
	square(bsquarePos, bsquareY, 100)

	//yellow square
	fill(255, 255, 0)
	square(ysquarePos, ysquareY, 100)


	rsquarePos = rsquarePos + rsquareSpeed
	gsquarePos = gsquarePos + gsquareSpeed
	bsquarePos = bsquarePos + bsquareSpeed
	ysquarePos = ysquarePos + ysquareSpeed

	if(bigWinner == true || ultWinner == true){
		if(jitter % 2 == 0){
			rsquareY = rsquareY+5
			gsquareY = gsquareY-5
			bsquareY = bsquareY+5
			ysquareY = ysquareY-5
		}if(jitter % 2 == 1){
			rsquareY = rsquareY-5
			gsquareY = gsquareY+5
			bsquareY = bsquareY-5
			ysquareY = ysquareY+5
		}
	}

	jitter++

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
	playWin()

	background(255, 0, 0)
	textSize(40)
	fill(0)
	if(betRed == true){
		text('You won as Red!', windowWidth/2-150, windowHeight/2)
		 rVictory = true
		 if(bigWinner == true){
		 	rSuper = true
		 }
	}else{
		text('Red wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function greenWin(){
	playWin()

	background(0, 255, 0)
	textSize(40)
	fill(0)
	if(betGreen == true){
		text('You won as Green!', windowWidth/2-150, windowHeight/2)
		gVictory = true
		if(bigWinner == true){
		 	gSuper = true
		 }
	}else{
		text('Green wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function blueWin(){
	playWin()

	background(0, 0, 255)
	textSize(40)
	fill(0)
	if(betBlue == true){
		text('You won as Blue!', windowWidth/2-150, windowHeight/2)
		bVictory = true
		if(bigWinner == true){
		 	bSuper = true
		 }
	}else{
		text('Blue wins!', windowWidth/2-100, windowHeight/2)
	}

	text('Press R to restart.', windowWidth/2-150, 600 )
	reset = true
}

function yellowWin(){
	playWin()

	background(255, 255, 0)
	fill(0)
	textSize(40)
	if(betYellow == true){
		text('You won as Yellow!', windowWidth/2-150, windowHeight/2)
		yVictory = true
		if(bigWinner == true){
		 	ySuper = true
		 }
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
	//change keycode back to 38 for testing (up arrow)
	if(keyCode === 32){
		if(betRed == true){
			rsquarePos = rsquarePos+3
		}
		if(betGreen == true){
			gsquarePos = gsquarePos+3
		}
		if(betBlue == true){
			bsquarePos = bsquarePos+3
		}
		if(betYellow == true){
			ysquarePos = ysquarePos+3
		}
	}
}


function playMenu(){
	winSong.stop()
	raceSong.stop()
	if(!menuSong.isPlaying()){
		menuSong.loop() //loops given sound file
	}
	soundCount = 0
}

function playRace(){
	menuSong.stop()
	if(!raceSong.isPlaying()){
		raceSong.loop() //loops given sound file
	}
}


function playWin(){
	raceSong.stop()
	if(soundCount == 0){
		winSong.play()
		winSong.setVolume(5.0)
	}
	soundCount++
}
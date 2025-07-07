//add opening screen for selection later

let squareX = 75

let possibleSpeeds = [2, 3, 4, 5]

let rsquarePos = squareX
let gsquarePos = squareX
let bsquarePos = squareX
let ysquarePos = squareX

let raceBool = true
let redWinBool = false
let greenWinBool = false
let blueWinBool = false
let yellowWinBool = false



function setup(){
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	imageMode(CENTER)
	
}

function draw(){
	//bet()
	if(raceBool == true){
		race()
	}
	
	winCheck()

	//temporary watermark
	textSize(20)
	fill(0)
	text('proof of concept', 5, windowHeight-10)

}

function bet(){
	background(0)
	fill(255)
	textSize(40)
	text('Place your bets!', windowWidth/2-150, windowHeight/2-200)

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

}

function race(){
	background(180)

	let rsquareSpeed = random(5)
	let gsquareSpeed = random(5)
	let bsquareSpeed = random(5)
	let ysquareSpeed = random(5)


	//ignore the following!

	/*

	let x = 0
	for(let i = 0; i < possibleSpeeds.length; i+0){
		if(x == 0){
			rsquareSpeed = possibleSpeeds[random(0,3)]
			possibleSpeeds.splice(rsquareSpeed)
			x++
		}if(x == 1){
			gsquareSpeed = possibleSpeeds[random(0,2)]
			possibleSpeeds.splice(gsquareSpeed)
			x++
		}if(x == 2){
			bsquareSpeed = possibleSpeeds[random(0,1)]
			possibleSpeeds.splice(bsquareSpeed)
			x++
		}else{
			ysquareSpeed = possibleSpeeds[0]
			possibleSpeeds.splice(ysquareSpeed)
			x++
		}
	}
	*/

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
		raceBool = fale
	}
}

function redWin(){
	background(255, 0, 0)
	textSize(40)
	fill(0)
	text('Red wins!', windowWidth/2-100, windowHeight/2)
}

function greenWin(){
	background(0, 255, 0)
	textSize(40)
	fill(0)
	text('Green wins!', windowWidth/2-100, windowHeight/2)
}

function blueWin(){
	background(0, 0, 255)
	textSize(40)
	fill(0)
	text('Blue wins!', windowWidth/2-100, windowHeight/2)
}

function yellowWin(){
	background(255, 255, 0)
	fill(0)
	textSize(40)
	text('Yellow wins!', windowWidth/2-100, windowHeight/2)
}

function winCheck(){
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
}
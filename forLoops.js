


function setup(){
	createCanvas(windowWidth, windowHeight)

	for(let i =0; i<windowWidth; i= i+10){
		line(i, 0, i, windowHeight)
	}

	for(let i = 0; i<windowHeight; i = i+20){
		line(0, i, windowWidth, i)
	}


}


function draw(){
for(let i = 0; i<100; i++){
	fill(random(255), random(255), random(255))
 ellipse(random(windowWidth), random(windowHeight), 20,20)
}

ellipse(windowWidth/2, windowHeight/2, 100, 100)
}
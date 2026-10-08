let flower;

let flowerX = []
let flowerY = []

async function setup(){
    createCanvas(windowWidth, windowHeight)
    imageMode(CENTER)

    flower = await loadImage('flower.png')
}

function draw(){
    background(150, 40, 100)
    for(let i = 0; i < flowerX.length; i++){
        image(flower, flowerX[i], flowerY[i], 60, 60)
    }
}

function mouseClicked(){
    flowerX.push(mouseX)
    flowerY.push(mouseY)

    print(flowerX)
}

function keyPressed(){
    if(key == 'x'){
        flowerX.splice(flowerX.length - 1, 1)
        flowerY.splice(flowerY.length - 1, 1)
    }
}
//board
let board
let boardWidth =360;
let boardHeight = 640;
let context;

///bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdImage;

let bird = {
    x: birdX,
    y: birdY,
    width: birdWidth,
    height: birdHeight
}

//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -1;

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    // console.log(typeof(board));
    context = board.getContext("2d"); // for drawing on the board

    //draw bird
    // context.fillStyle = "green";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height)

    //load images
    birdImage = new Image();
    birdImage.src = "./flappybird.png";
    birdImage.onload = function(){
        context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);
    }
    topPipeImg = new Image();
    topPipeImg.src = "./toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./bottompipe.png";

    requestAnimationFrame(update);
    setInterval(placePipes, 1500);

}

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //bird
    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    for(let i = 0; i < pipeArray.length; i++){
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
    }
}

function placePipes(){

    let randPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let bottomPipeY = randPipeY + pipeHeight + board.height/4;

    let topPipe ={
        img: topPipeImg,
        x: pipeX,
        y: randPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    let bottomPipe ={
        img: bottomPipeImg,
        x: pipeX,
        y: bottomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(topPipe);
    pipeArray.push(bottomPipe);
}
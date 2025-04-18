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
let velocityX = -1; //pipe movement
let velocityY = 0; //bird jump
let gravity = 0.1;

//game
let start = false;
let gameOver = false;
let score = 0;

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
    document.addEventListener("keydown", moveBird);

}

function update(){
    requestAnimationFrame(update);
    if(gameOver){
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //bird
    if(start){
        velocityY += gravity;
    }
    bird.y = Math.max(bird.y + velocityY, 0);
    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);

    if(bird.y > board.height){
        gameOver = true;
    }

    //pipes
    for(let i = 0; i < pipeArray.length; i++){
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width){
            score += 0.5; //0.5 because pipes come in pairs of 2
            pipe.passed = true;
        }

        if(detectCollision(bird, pipe)){
            gameOver= true;
        }
    }

    //delete offscrean pipes
    while(pipeArray.length > 0 && pipeArray[0].x < -pipeWidth){
        pipeArray.shift(); // removes first element
    }

    //score
    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    if(gameOver){
        context.fillText("GAME OVER", 5, 90);
    }
}

function placePipes(){
    if(gameOver || !start){
        return;
    }

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

function moveBird(e){
    if(e.code == "Space" || e.code == "ArrowUp"){
        start = true;
        velocityY = -4;

        //reset game
        if(gameOver){
            gameOver = false;
            bird.y = birdY;
            pipeArray = [];
            score = 0;
        }
    }

    
    
}

function detectCollision(a, b){
    return a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y;
}
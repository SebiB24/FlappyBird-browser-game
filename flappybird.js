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
    requestAnimationFrame(update);
}

function update(){
    requestAnimationFrame(update);
    context.clearRect(0, 0, board.width, board.height);

    //bird
    context.drawImage(birdImage, bird.x, bird.y, bird.width, bird.height);
}
let ballX = 200, ballY = 100, ballSize = 20;
let wallX = [], wallY = [], wallShir = 50, wallVis = 50, brSteni = 0;
// С колко се променя за 1 update X на топката
let ballDX = 2, ballDY = 2;
let cO = 5;
fwqelkfjweflkjf
for (let j = 0; j < 600 / wallVis; j++) {
    for (let i = 0; i < 800 / wallVis; i++) {
        wallX[brSteni] = j * wallShir;
        wallY[brSteni] = j * wallVis;
        brSteni++;
    }
}

function init() {}
function update() {
    ballX = ballX + ballDX;
    ballY = ballY + ballDY;
    if(ballY > 600 - ballSize || ballY < 0) {
        ballDY = -ballDY;
    }
    if(ballY > 800 - ballSize || ballY < 0) {
        ballDX = -ballDX;
    }
    for (let i = 0; i < brSteni; i++) {
        if (areColliding(ballX, ballY, ballSize, ballSize,
            wallX[i] + cO, wallY[i] - cO, wallShir - cO * 2, wallVis + cO * 2)) {
            ballDY = -ballDY;
            wallX[i] = Infinity;
        } else if (areColliding(ballX, ballY, ballSize, ballSize,
            wallX[i] - cO, wallY[i] + cO, wallShir + cO * 2, wallVis - cO * 2)) {
            ballDX = -ballDX;
            wallX[i] = Infinity;
        } else if (areColliding(ballX, ballY, ballSize, ballSize,
            wallX[i], wallY[i], wallShir, wallVis)) {
            ballDX = -ballDX;
            ballDY = -ballDY;
            wallX[i] = 200;
        }
    }
function draw() {
    drawImage(box, ballX, ballY, ballSize, ballSize);
    for(let i = 0; i < brSteni; i+=2) {
        drawImage(box, wallX[i], wallY[i], wallShir, wallVis);
    }
}

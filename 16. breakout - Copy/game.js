let ballX = [211, 200], ballY = [315, 111], brBall = 2, ballSize = 20;
let ballDX =[2,   2], ballDY = [ -2,  2];
let wallX = [], wallY = [], wallShir = 50, wallVis = 50, brSteni = 0;
// С колко се променя за 1 update X на топката
let cO = 5;
function rodiStena(x, y) {
    wallX[brSteni] = x;
    wallY[brSteni] = y;
    brSteni++;
}
function rodiTopka(x, y, dX, dY) {
    ballX[brBall] = x;
    ballY[brBall] = y;
    ballDX[brBall] = dX;
    ballDY[brBall] = dY;
    brBall++;
}
for (let j = 0; j < 600 / wallVis; j++) {
    for (let i = 0; i < 800 / wallVis; i++) {
        rodiStena(i*wallShir, j*wallVis);
    }
}
rodiTopka(400, 300, -3, 1);
function init() {}
function update() {
    for (let iBall = 0; iBall < brBall; iBall++) {
        ballX[iBall] = ballX[iBall] + ballDX[iBall];
        ballY[iBall] = ballY[iBall] + ballDY[iBall];
        if (ballY[iBall] > 600 - ballSize || ballY[iBall] < 0) {
            ballDY[iBall] = -ballDY[iBall];
        }
        if (ballX[iBall] > 800 - ballSize || ballX[iBall] < 0) {
            ballDX[iBall] = -ballDX[iBall];
        }
        for (let i = 0; i < brSteni; i++) {
            if (areColliding(ballX[iBall], ballY[iBall], ballSize, ballSize,
                wallX[i] + cO, wallY[i] - cO, wallShir - cO * 2, wallVis + cO * 2)) {
                ballDY[iBall] = -ballDY[iBall];
                wallX[i] = Infinity;
            } else if (areColliding(ballX[iBall], ballY[iBall], ballSize, ballSize,
                wallX[i] - cO, wallY[i] + cO, wallShir + cO * 2, wallVis - cO * 2)) {
                ballDX[iBall] = -ballDX[iBall];
                wallX[i] = Infinity;
            } else if (areColliding(ballX[iBall], ballY[iBall], ballSize, ballSize,
                wallX[i], wallY[i], wallShir, wallVis)) {
                ballDX[iBall] = -ballDX[iBall];
                ballDY[iBall] = -ballDY[iBall];
                wallX[i] = Infinity;
            }
        }

    }
}
function draw() {
    for(let iBall = 0; iBall < brBall; iBall++) {
        drawImage(box, ballX[iBall], ballY[iBall], ballSize, ballSize);
    }
    for(let i = 0; i < brSteni; i+=1) {
        drawImage(box, wallX[i], wallY[i], wallShir, wallVis);
    }
}
function keyup(key) {
    // SPACE
    if(key == 32) {
        for(let iBall = brBall-1; iBall >= 0; iBall--){
            // Клонирам топката с номер: iBall
            rodiTopka(ballX[iBall], ballY[iBall], -ballDX[iBall], -ballDY[iBall]);
        }
    }
}
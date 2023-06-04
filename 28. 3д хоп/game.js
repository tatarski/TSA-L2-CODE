let platX = [], platZ = [];
let xRazm = 300, zRazmer = 3, platY = 300;
let ballX = 0, ballY = 0, ballZ = 1, shir = 50, ballDY = 0;
function init() {
    for(let i = 0; i < 200; i++) {
        platX[i] = randomInteger(800 - xRazm) - 400;
        platZ[i] = i * (zRazmer + 1);
    }
}
function update() {
    for(let i = 0; i < platX.length; i++) {
        platZ[i] -= 0.05;
    }
    ballDY += 0.03;
    ballY += ballDY;
    ballX = mouseX-400;
    if(ballY > 300 - shir) {
        for(let i = 0; i < platX.length; i++) {
            if(areColliding(ballX, ballZ, shir, 1, platX[i], platZ[i], xRazm, zRazmer)) {
                ballDY = -ballDY;
            }
        }
    }
}
// от реални координати към екранен X
function ORKEX(x, y, z) {
    return x/z + 400;
}
// от реални координати към екранен Y
function ORKEY(x, y, z) {
    return y/z + 300;
}
// от реален размер към екранен размер
function ORRKER(realenRazmer, z) {
    return realenRazmer/z;
}
function drawPlatforma(platX, platY, platZ, xRazmer, zRazmer) {
    if (platZ > -zRazmer) {
        let x1, y1, z1,
            x2, y2, z2,
            x3, y3, z3,
            x4, y4, z4;
        // 1.1 Намиране на реалните координати на всеки ъгъл от платформата
        x1 = platX; y1 = platY; z1 = Math.max(platZ, 0.001);
        x2 = platX + xRazmer; y2 = platY; z2 = Math.max(platZ, 0.001);
        x3 = platX + xRazmer; y3 = platY; z3 = platZ + zRazmer;
        x4 = platX; y4 = platY; z4 = platZ + zRazmer;
        // 1.1 На всеки ъгъл от платформата - намиране на екранните координати
        let ex1, ey1, ex2, ey2, ex3, ey3, ex4, ey4
        ex1 = ORKEX(x1, y1, z1); ey1 = ORKEY(x1, y1, z1);
        ex2 = ORKEX(x2, y2, z2); ey2 = ORKEY(x2, y2, z2);
        ex3 = ORKEX(x3, y3, z3); ey3 = ORKEY(x3, y3, z3);
        ex4 = ORKEX(x4, y4, z4); ey4 = ORKEY(x4, y4, z4);
        // Рисуване на 2д многоъгълник
        context.beginPath();
        context.moveTo(ex1, ey1);
        context.lineTo(ex2, ey2);
        context.lineTo(ex3, ey3);
        context.lineTo(ex4, ey4);
        context.closePath();
        context.fillStyle = "red";
        context.fill();
        context.stroke();
    }
}
function draw() {
    for(let i = 0; i < platX.length; i++) {
        drawPlatforma(platX[i], platY, platZ[i], xRazm, zRazmer);
    }
    let eX, eY, eR;
    eX = ORKEX(ballX, ballY, ballZ);
    eY = ORKEY(ballX, ballY, ballZ);
    eR = ORRKER(shir, ballZ);
    drawImage(ballOrTree, eX, eY, eR, eR);
}
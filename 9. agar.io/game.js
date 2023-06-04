let myX = 0, myY = 0, myDebelina = 100;
let kufteX = [], kufteY = [], kufteRazmer = 51, brKufteta = 0;
let cameraX = 0, cameraY = 0;
function init() {
    for (let i = 0; i < 1000; i++) {
        kufteX[i] = randomInteger(3000);
        kufteY[i] = randomInteger(3000);
        brKufteta++;
    }
}
function drawImageCamera(kartinka, x, y, shir, vis) {
    drawImage(kartinka, x-cameraX, y-cameraY,shir, vis);
}
function update() {
    cameraX = myX-400;      
    cameraY = myY-300;
    myX = myX + (mouseX - 400)/100;
    myY = myY + (mouseY - 300)/100;
    for(let i = 0; i < brKufteta; i++) {
        if(areColliding(kufteX[i] - kufteRazmer / 2,
                        kufteY[i] - kufteRazmer / 2, kufteRazmer, kufteRazmer,
                        myX, myY, myDebelina, myDebelina)) {
                kufteX[i] = -Infinity;
                myDebelina += 2;
            }
    }
}
function draw() {
    for (let i = 0; i < brKufteta; i++) {
        drawImageCamera(kufte,
            kufteX[i] - kufteRazmer / 2,
            kufteY[i] - kufteRazmer / 2,
            kufteRazmer, kufteRazmer);
    }
    drawImageCamera(ballOrTree,
        myX, myY,
        myDebelina, myDebelina);
}
function mouseup() {
}
function keyup(key) {
}


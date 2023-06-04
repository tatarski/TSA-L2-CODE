let minerX, minerY, minerShir, kukaRadius, kukaUgul;
let kartinka = tryToLoad("AZ", "black");
let deltaUgul = 0.02, // с колко се променя kukaUgul
    deltaRadius = 0;  // с колко се променя kukaRadius
let zlatoX = [], zlatoY = [], brZlato = 0;
function init() {
    minerShir = 50;   minerX = 400;   minerY = 100;
    kukaRadius = 70;  kukaUgul = 0;
    for(let i = 0; i < 10; i++) {
        zlatoX[brZlato] = randomInteger(800);
        zlatoY[brZlato] = randomInteger(400) + 200;
        brZlato++;
    }
}
function update() {
    // Мандахерцане на куката
    kukaUgul = kukaUgul + deltaUgul;
    kukaRadius = kukaRadius + deltaRadius;
    if(kukaUgul > Math.PI || kukaUgul < 0) {
        deltaUgul = -deltaUgul;
    }
    let kukaX = kukaRadius * Math.cos(kukaUgul) + minerX,
        kukaY = kukaRadius * Math.sin(kukaUgul) + minerY;
    if(!areColliding(kukaX, kukaY, 30, 30,
                    0, 0, 800, 600)) {deltaRadius = -3;}
    if(kukaRadius < 70) {
        deltaRadius = 0;
        deltaUgul = 0.02;
        kukaRadius = 70;
    }
    for(let i = 0; i < brZlato; i++) {
        if(areColliding(kukaX, kukaY, 30, 30, zlatoX[i], zlatoY[i], 40, 40)) {
            deltaRadius = -3;
            zlatoX[i] = kukaX
            zlatoY[i] = kukaY
            if(kukaRadius <= 70) {
                zlatoX[i] = Infinity;
                // SCORE ++
            }
        }
    }
    

}
function keyup(key) {
    if(key == 32) {
        deltaUgul = 0;
        deltaRadius = 3;
    }
}


function draw() {
    drawImage(kartinka, minerX - minerShir/2, minerY - minerShir/2, minerShir, minerShir);
    drawImage(joystick, 
        minerX + kukaRadius*Math.cos(kukaUgul),
        minerY + kukaRadius*Math.sin(kukaUgul),
        30, 30);
    for(let i = 0; i < brZlato; i++) {
        drawImage(gem[23], zlatoX[i], zlatoY[i], 40, 40);
    }
    // Vrutnati kartinki
    context.save();
    context.translate(400, 300);
    context.rotate(mouseX/1000);
    drawImage(box, 0, 0, 60, 60);
    context.restore();
}
function mouseup() {
}

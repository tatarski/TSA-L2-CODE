let myUgul = 0, myRadius = 200, myX, myY, vurtqLiSe = true;
let planetiX = [], planetiY = [], planetiRazmer = [], brPlaneti = 0;
let tekPlanetaNomer = 0, cameraX = 0, cameraY = 0;
function init() {
    for (let i = 0; i < 50; i++) {
        planetiX[i] = randomInteger(2000);
        planetiY[i] = randomInteger(2000);
        planetiRazmer[i] = 100 + randomInteger(100);
        brPlaneti++;
    }
}
function update() {
    cameraX = myX - 400;
    cameraY = myY - 300;
    if (vurtqLiSe) {
        myUgul = myUgul + 0.01;
    } else {
        myRadius += 1; 
    }
    myX = myRadius * Math.cos(myUgul) + planetiX[tekPlanetaNomer];
    myY = myRadius * Math.sin(myUgul) + planetiY[tekPlanetaNomer];

}
function drawImageCamera(img, x, y, shir, vis) {
    drawImage(img, x - cameraX, y - cameraY, shir, vis);
}
function draw() {
    drawImageCamera(backStars, 0, 0, 2000, 2000);
    for (let i = 0; i < brPlaneti; i++) {
            drawImageCamera(kufte,
                planetiX[i] - planetiRazmer[i] / 2,
                planetiY[i] - planetiRazmer[i] / 2, 
                planetiRazmer[i], planetiRazmer[i]);
    }

    drawImageCamera(cat,
        myX - 75,
        myY - 75, 150, 150);

    let x = 300, y = 400, shir = 150, vis = 200;
    context.save();
    context.translate(x, y);
    context.rotate(myUgul);
    drawImage(cat, -shir/2, -vis/2, shir, vis);
    context.restore();

    // ГРЕШКА - drawImage приема X,Y, а ние сме му дали ugul и radius
    // drawImage(cat, myUgul, myRadius, 50, 50);
}
function mouseup() {
}
function keyup(key) {
    if (key == 32) {
        vurtqLiSe = false;
    }
}


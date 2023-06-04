let myUgul = 0, myRadius = 200, myX, myY, vurtqLiSe = true;
let planetiX = [], planetiY = [], planetiRazmer = [], brPlaneti = 0;
let nomerNaKartinkaZaPlaneta = [];
let tekPlanetaNomer = 0, cameraX = 0, cameraY = 0;
let kartinki = [];
let ufo = [];

function init() {
    for (let i = 1; i < 13; i++) {
        kartinki[i-1] = tryToLoad("planet-" + i, "red");
    }

    for (let i = 0; i < 20; i++) {
        planetiX[i] = randomInteger(2000);
        planetiY[i] = randomInteger(2000);
        planetiRazmer[i] = 100 + randomInteger(100);
        // Нов масив
nomerNaKartinkaZaPlaneta[i] = randomInteger(kartinki.length)
        brPlaneti++;
    }
    for (let i = 1; i < 16; i++) {
        ufo[i-1] = tryToLoad("alien" + i, "red");
    }
}
function areCirclesColliding(_0x5f1fca,_0x182755,_0x521fd8,_0x4da115,_0x123461,_0x3bb11a){return(_0x5f1fca-_0x4da115)*(_0x5f1fca-_0x4da115)+(_0x182755-_0x123461)*(_0x182755-_0x123461)<=(_0x521fd8+_0x3bb11a)*(_0x521fd8+_0x3bb11a);}
let t = 0;
function update() {
    t++;
    cameraX = myX - 400;
    cameraY = myY - 300;
    if (vurtqLiSe) {
        myUgul = myUgul + 0.01;
    } else {
        myRadius += 1; 
    }
    myX = myRadius * Math.cos(myUgul + 1)*2 + planetiX[tekPlanetaNomer];
    myY = myRadius * Math.sin(myUgul + 1) + planetiY[tekPlanetaNomer];
    for (let i = 0; i < brPlaneti; i++) {
        // Нова проверка
        if(areCirclesColliding(myX, myY, 75, planetiX[i], planetiY[i], planetiRazmer[i]/2) && !vurtqLiSe) {
            vurtqLiSe = true;

            myUgul = Math.atan2(planetiY[i]-myY,
                planetiX[i]-myX) + Math.PI;
            tekPlanetaNomer = i;
            myRadius = planetiRazmer[i]/2 + 150/2 + 20;
        }
    }
}
function draw() {
    drawImageCamera(backStars, 0, 0, 2000, 2000);
    for (let i = 0; i < brPlaneti; i++) {
        // Избор на картинка
        let tekNomerKartinka = nomerNaKartinkaZaPlaneta[i];
        let tekKartinka = kartinki[tekNomerKartinka];
            drawImageCamera(tekKartinka,
                planetiX[i] - planetiRazmer[i] / 2,
                planetiY[i] - planetiRazmer[i] / 2, 
                planetiRazmer[i], planetiRazmer[i]);
    }
    drawImageCamera(ufo[Math.floor(t/10)%15], myX - 75, myY - 75, 150, 150);
}
function drawImageCamera(img, x, y, shir, vis) {
    drawImage(img, x - cameraX, y - cameraY, shir, vis);
}
function mouseup() {
}
function keyup(key) {
    if (key == 32) {
        vurtqLiSe = false;
    }
}


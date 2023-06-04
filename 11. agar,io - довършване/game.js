let myX = 0, myY = 0, myDebelina = 100;
let kufteX = [], kufteY = [], kufteRazmer = 51, brKufteta = 0;
let cameraX = 0, cameraY = 0;
function init() {
    // Създавам 1000 кюфтета в масивите kufteX, kufteY
    for (let i = 0; i < 1000; i++) {
        kufteX[i] = randomInteger(3000);
        kufteY[i] = randomInteger(3000);
        brKufteta++;
    }
}
function drawImageCamera(kartinka, x, y, shir, vis) {
    drawImage(kartinka, x-cameraX, y-cameraY,shir, vis);
}
function distance(x1,y1,x2,y2) {
    let a = x2-x1, b = y2-y1;
    return Math.sqrt(a*a+b*b);
}
function areCirclesColliding(x1,y1,r1, x2,y2,r2) {
    // Ако кръгчетата се блъскат:
    if((r1+r2)*(r1+r2) > (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) {
        return true;
    } else {
        // ако кръгчетата не се блъскат:
        return false;
    }
}

function update() {
    // cameraX и cameraY определят коя част от ОГРОМНОТО игрално поле да се рисува
    // Нагласили сме ги така, че играчът да се намира точно в центъра
    cameraX = myX-400; 
    cameraY = myY-300;

    // Мърдаме играчът, в посоката, в която се намира мишката спрямо центъра на екрана
    myX = myX + (mouseX - 400)/100;
    myY = myY + (mouseY - 300)/100;


    for(let i = 0; i < brKufteta; i++) {
        // Проверка дали играчът се блъска в кюфте
        // areColliding изглежда бъгаво с кръгли играчи и кюфтета
        if(areCirclesColliding(myX, myY, myDebelina/2, kufteX[i], kufteY[i], kufteRazmer/2)) {
                kufteX[i] = -Infinity;
                myDebelina += 2;
            }
    }
}
function draw() {
    // Рисува кюфтетата
    for (let i = 0; i < brKufteta; i++) {
        drawImageCamera(kufte,
            kufteX[i] - kufteRazmer / 2,
            kufteY[i] - kufteRazmer / 2,
            kufteRazmer, kufteRazmer);
    }
    // Рисува играча
    drawImageCamera(ballOrTree,
        myX - myDebelina/2, myY - myDebelina/2,
        myDebelina, myDebelina);
    
    // Рисува minimap кюфтетата
    for (let i = 0; i < brKufteta; i++) {
        drawImage(kufte,
            700+kufteX[i]/30,
            kufteY[i]/30,
            2, 2);
    }
}
function mouseup() {
}
function keyup(key) {
}


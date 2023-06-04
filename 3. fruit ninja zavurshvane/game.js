
function narisuvaiQbalka(x, y) {
    // тялото на ябълката
    context.fillStyle = "red";
    context.strokeStyle = "black";
    context.beginPath();
    context.arc(x, y, 30, 0, 2*Math.PI);
    context.fill(); context.stroke();

    // стеблото на ябълката
    context.lineWidth = 3;
    context.strokeStyle = "brown";
    context.beginPath();
    context.moveTo(x, y-30);
    context.lineTo(x+10, y-60);
    context.stroke();
    context.lineWidth = 1;
}
function narisuvaiZvezdaPlod(x, y) {
    context.fillStyle = "yellow";
    context.strokeStyle = "orange";
    context.beginPath();
    context.moveTo(x - 40, y - 20);
    context.lineTo(x + 40, y - 20);
    context.lineTo(x - 30, y + 30);
    context.lineTo(x, y - 40);
    context.lineTo(x + 30, y + 30);
    context.closePath();
    context.fill();     context.stroke();
}
let plodX = [], plodY = [], plodVid = [], brPlodove = 0;
let dirqX = [], dirqY = [], brDiri = 0;
function init() {
    for(let nomerche = 0; nomerche < 50; nomerche++) {
        plodX[nomerche] = randomInteger(800);
        plodY[nomerche] = randomInteger(600);
        plodVid[nomerche] = randomInteger(2);
        brPlodove++;
    }
}
let brIzminaliUpdate = 0;
function update() {
    dirqX[brDiri]= mouseX;
    dirqY[brDiri] = mouseY;
    brDiri++;

    brIzminaliUpdate = brIzminaliUpdate + 1;
    if(brIzminaliUpdate % 50 == 0) {
        plodX[brPlodove] = randomInteger(800);
        plodY[brPlodove] = 0;
        plodVid[brPlodove] = randomInteger(2);
        brPlodove = brPlodove + 1;
    }

    // Добави нова диря в dirqX и dirqY
    for(let i = 0; i < brPlodove; i++) {
        plodY[i] = plodY[i] +  1;
    }
}
function draw() {
    // С for цикъл рисуваме картинка на всяка диря от мишката
    for (let i = 0; i < brPlodove; i++) {
        if (plodVid[i] == 0) {
            narisuvaiQbalka(plodX[i], plodY[i]);
        } else if (plodVid[i] == 1) {
            narisuvaiZvezdaPlod(plodX[i], plodY[i]);
        }
    }
    for(let i = brDiri - 20; i < brDiri; i++) {
        context.beginPath();
        context.moveTo(dirqX[i], dirqY[i]);
        context.lineTo(dirqX[i + 1], dirqY[i + 1]);
        context.stroke();
    }
}
function mouseup() {
}
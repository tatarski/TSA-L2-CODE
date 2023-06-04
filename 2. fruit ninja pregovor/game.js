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
let plodX = [], plodY = [], plodVid = [];
function init() {
    // слагам един плод в масивите, АМА
    // не се прави така! как се правеше ?
    plodX[100] = 250;
    plodY[102] = 300;
    plodVid[150] = 1; // 0 - ябълка, 1-звезда плод
}
function update() {}
function draw() {
    narisuvaiQbalka(200, 400);
    narisuvaiZvezdaPlod(mouseX, mouseY);
}
function mouseup() {
}
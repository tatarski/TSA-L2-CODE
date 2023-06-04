let minerX, minerY, minerShir,
    kukaRadius, kukaUgul;
let kartinka = tryToLoad("AZ", "black");
let uvelichavamLiUgula = true;
let bucaX = [], bucaY = [], brBuci = 0;
function init() {
    minerShir = 50;
    minerX = 400;
    minerY = 100;
    kukaRadius = 70;
    kukaUgul = 0;
}
let t = 0;
function update() {
    t++;
    kukaUgul = Math.sin(t/100)*Math.PI/2 + Math.PI/2
    // if(uvelichavamLiUgula) {
    //     kukaUgul += 0.02;
    //     if(kukaUgul > Math.PI) {
    //         uvelichavamLiUgula = false;
    //     }
    // } else {
    //     kukaUgul -= 0.02;
    //     if(kukaUgul < 0) {
    //         uvelichavamLiUgula = true;
    //     }
    // }
    console.log(kukaUgul)
    // kukaUgul+= 0.02;
    // if(kukaUgul > Math.PI) {
    //     kukaUgul = 0;
    // }        // Мърдане с телепорт
}
function draw() {
    drawImage(kartinka, minerX - minerShir/2, minerY - minerShir/2, minerShir, minerShir);
    drawImage(joystick, 
        minerX + kukaRadius*Math.cos(kukaUgul),
        minerY + kukaRadius*Math.sin(kukaUgul),
        30, 30)
}
function mouseup() {
}
function keyup(key) {
}


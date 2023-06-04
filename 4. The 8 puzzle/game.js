let tablica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
], praznoKolona = 2, praznoRed = 2;

// НОВО ЗНАНИЕ - ЗАРЕЖДАНЕ НА КАРТИНКА
let kartinka = new Image();
kartinka.src = './images/backSea.png';

function update() {}
function draw() {
    //context.drawImage(kartinka, 4 числа - какво да изрежем от оригинала,
    // 4 числа - къде да нарисуваме върху canvas-a)
    context.drawImage(kartinka, mouseX, mouseY, 200, 200, mouseX, mouseY, 200, 200);
    context.font = "80px Courier New";
    console.log("ZAPOCHVA DRAW")
    for (let i = 0;i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            console.log("RISUVAM j,i",j,i)
            let n = tablica[i][j] - 1
            let rez_x = (n%3)*300, rez_y = Math.floor(n/3)*300;
            context.drawImage(kartinka, rez_x, rez_y, 300, 300, j*100, i*100, 100, 100)
            context.fillText(tablica[i][j], j * 100, i*100);
        }
    }
}
function mouseup() {
    let kliknataKolona = Math.floor(mouseX/100),
        kliknatRed = Math.floor(mouseY/100);
    if ((kliknatRed == praznoRed - 1 && kliknataKolona == praznoKolona) ||
        (kliknatRed == praznoRed + 1 && kliknataKolona == praznoKolona) ||
        (kliknatRed == praznoRed && kliknataKolona == praznoKolona - 1) ||
        (kliknatRed == praznoRed && kliknataKolona == praznoKolona + 1)) {
        tablica[praznoRed][praznoKolona] =
            tablica[kliknatRed][kliknataKolona];
        tablica[kliknatRed][kliknataKolona] = 0;
        praznoRed = kliknatRed;
        praznoKolona = kliknataKolona;
    }
    if(Math.abs(kliknatRed - praznoRed) + Math.abs(kliknataKolona - praznoKolona) == 1) {

    }
}
let x1 = 300, y1 = 300, r1 = 100;
let x2, y2, r2 = 50;

function update() {
    x2 = mouseX;
    y2 = mouseY;
}
function draw() {
    let sbor_radiusi = r1+r2;
    let a = (x2-x1);
    let b = (y2-y1)
    let chervena_po_chervena = 
        a*a + b*b;
    if(sbor_radiusi*sbor_radiusi > chervena_po_chervena) {
        drawImage(backStars, 0, 0, 800, 600);
    }
    drawImage(ballOrTarget, x1-r1,y1-r1, r1*2, r1*2);
    drawImage(ballOrTree, x2-r2,y2-r2, r2*2, r2*2);
}
let razmerTablica = 15;
let imaLiStenaNa = [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,1,0,1,0,1,0,0,1,1,0,1],[1,0,1,0,1,1,0,0,1,0,0,1,0,0,1],[1,1,0,0,1,1,1,0,0,0,1,0,0,0,1],[1,1,1,0,0,1,0,0,0,1,1,0,1,0,1],[1,1,1,1,0,1,0,0,0,0,0,0,0,1,1],[1,0,1,1,0,1,0,0,1,1,0,1,1,0,1],[1,1,0,0,0,0,0,0,0,0,1,1,0,0,1],[1,1,0,0,0,1,1,0,0,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,1,0,0,0,1,1,0,1,0,0,0,1,1],[1,0,0,1,1,1,1,0,0,1,0,1,1,1,1],[1,1,1,0,0,1,0,0,0,0,0,1,0,0,1],[1,1,0,0,1,0,0,1,1,0,0,0,1,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]];
let kletkaShir = 600/razmerTablica;
let razstoqnieDo = [];
let vragKol = 13, vragRed = 6;
function init() {
    for(let x = 0; x < razmerTablica; x++) {
        razstoqnieDo[x] = [];
    	for(let y= 0; y < razmerTablica; y++) {
            razstoqnieDo[x][y] = -1;
    	}
    }

    razstoqnieDo[8][7]= 0;
}
function draw() {
    for(let x = 0; x < razmerTablica; x++) {
        for(let y = 0; y < razmerTablica; y++) {
            if(imaLiStenaNa[x][y] == 1){ 
                drawImage(box, x*kletkaShir, y*kletkaShir, kletkaShir, kletkaShir);
            } else {
                context.font = "20px Arial";
                context.strokeRect(x*kletkaShir, y*kletkaShir, kletkaShir, kletkaShir);
                context.fillText(razstoqnieDo[x][y],x*kletkaShir + 5,y*kletkaShir + 5);
            }
        }
    }

    drawImage(bird, vragKol*kletkaShir, vragRed*kletkaShir, kletkaShir, kletkaShir);
}
function BFS_STEP(tek_ch) {
    // За всяка клетка от таблицата
    for(let x = 0; x < razmerTablica; x++) {
        for(let y = 0; y < razmerTablica; y++) {
            // Ако тя е празна и в нея няма стена
            if(imaLiStenaNa[x][y] == 0 && razstoqnieDo[x][y] == -1) {
                // Ако е съседна на клетка, до която разстоянието == tek_ch
                if(razstoqnieDo[x][y-1] == tek_ch || razstoqnieDo[x][y+1]==tek_ch || razstoqnieDo[x+1][y] ==tek_ch || razstoqnieDo[x-1][y]==tek_ch) {
                    razstoqnieDo[x][y] = tek_ch+1;
                }
            }
        }
    }
}
function keyup(key) {

}
let brUpdates = 0;
function update() {
    brUpdates++;
    // Nulirame tablicata s razstoqniqta
    for(let x = 0; x < razmerTablica; x++) {
        razstoqnieDo[x] = [];
    	for(let y= 0; y < razmerTablica; y++) {
            razstoqnieDo[x][y] = -1;
    	}
    }
    // Izvikvame BFS_STEP mnogo puti
    razstoqnieDo[Math.floor(mouseX/kletkaShir)][Math.floor(mouseY/kletkaShir)]= 0;
    for(let i = 0; i < 225; i++) {
        BFS_STEP(i);
    }
    if (brUpdates % 30 == 0) {
        // Murdame vraga kym celta (kletkata s chisloto 0)
        if (razstoqnieDo[vragKol][vragRed] > razstoqnieDo[vragKol - 1][vragRed] &&
            imaLiStenaNa[vragKol - 1][vragRed] == 0) {
            vragKol = vragKol - 1;
            vragRed = vragRed;
        }
        if (razstoqnieDo[vragKol][vragRed] > razstoqnieDo[vragKol + 1][vragRed] &&
            imaLiStenaNa[vragKol + 1][vragRed] == 0) {
            vragKol = vragKol + 1;
            vragRed = vragRed;
        }
        if (razstoqnieDo[vragKol][vragRed] > razstoqnieDo[vragKol][vragRed + 1] &&
            imaLiStenaNa[vragKol][vragRed + 1] == 0) {
            vragKol = vragKol;
            vragRed = vragRed + 1;
        }
        if (razstoqnieDo[vragKol][vragRed] > razstoqnieDo[vragKol][vragRed - 1] &&
            imaLiStenaNa[vragKol][vragRed - 1] == 0) {
            vragKol = vragKol;
            vragRed = vragRed - 1;
        }
    }

}

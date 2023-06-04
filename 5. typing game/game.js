let kucheX = [], kucheY = [], t= 0, dumaNaKuche = [], zaspivaLi = [], sleepTimer = [];
let brKucheta = 3;
kucheX[0] = 0;      kucheX[1] = 0;      kucheX[2] = 0;
kucheY[0] = 100;    kucheY[1] = 200;    kucheY[2] = 300;
dumaNaKuche[0] = "ZELE";    dumaNaKuche[1] = "BANAN";    dumaNaKuche[2] = "IVAN";
zaspivaLi[0] = false;   zaspivaLi[1]= false; zaspivaLi[2] = false;
sleepTimer = [0, 0, 0]
function update() {
    for (let i = 0; i < brKucheta; i++) {
        if (zaspivaLi[i]) { sleepTimer[i]++; }
        if (dumaNaKuche[i].length == 0) {
            zaspivaLi[i] = true;
        }
        if (sleepTimer[i] == 40) {
            kucheY[i] = -99;
        }
        kucheX[i] = kucheX[i] + 1;
    }
    t++;
    if(t % 30 == 0) {
        kucheX[brKucheta] = 0;
        kucheY[brKucheta] = randomInteger(600);
        dumaNaKuche[brKucheta] = "ZELKA";
        zaspivaLi[brKucheta] = false;
        sleepTimer[brKucheta] = 0;
        brKucheta++;
    }
}
function draw() {
    for (let i = 0; i < brKucheta; i=i+1) {
        if (!zaspivaLi[i]) {
            let kartinka_nomer = Math.floor(t / 10) % 5;
            drawImage(dogWalk[kartinka_nomer], kucheX[i], kucheY[i], 100, 60);
            context.font = "50px Arial";
            context.fillText(dumaNaKuche[i], kucheX[i], kucheY[i]);
        } else {
            let kartinka_nomer = Math.floor(sleepTimer[i] / 10) % 4;
            drawImage(dogSleep[kartinka_nomer], kucheX[i], kucheY[i], 100, 60);
        }}}
function keyup(key) {
    for (let j = 0; j < brKucheta; j++) {
        if (String.fromCharCode(key) == dumaNaKuche[j][0]) {
            let novaDumaNaKuche = "";
            for (let i = 1; i < dumaNaKuche[j].length; i = i + 1) {
                novaDumaNaKuche = novaDumaNaKuche + dumaNaKuche[j][i];
            }
            dumaNaKuche[j] = novaDumaNaKuche;
            j = brKucheta;
        }
    }
}


function suzdai_tablica_za_plochka(br_redove, nachalna_stoinost) {
    let tablica = [];
    for(let i = 0; i < br_redove; i++) {
        tablica[i] = [];
        for(let j = 0; j < br_redove; j++) {
            tablica[i][j] = randomInteger(2);
        }
    }
    return tablica;
}
function narisuvai_plochka(x,y,plochka_shir, tablica_za_plochka) {
    let kletka_shir = plochka_shir/tablica_za_plochka.length;
    for(let i = 0; i < tablica_za_plochka.length; i++) {
        for(let j = 0; j < tablica_za_plochka.length; j++) {
            if(tablica_za_plochka[i][j] == 1) {
                drawImage(box,x+i*kletka_shir,y + j*kletka_shir, kletka_shir, kletka_shir);
            }
            context.strokeRect(x+i*kletka_shir,y+j*kletka_shir, kletka_shir, kletka_shir);
        }
    }
}
function suzdai_plochka_1(br_redove) {
    let tablica1 = suzdai_tablica_za_plochka(br_redove, 0);
    for(let i = 0; i < br_redove; i++) {
        tablica1[i][br_redove - 1] = 1;
    }
    return tablica1;
}

function update() {
    // С задържане isKeyPressed[??] проверяваме дали са задържани WASD
    // Мърдаме със задържане на WASD
    // ако се ударим в стена от плочка - мърдаме играча в обратната посока.
}

function suzdai_plochka_2(br_redove) {
    // Създава плочка, в която стените са сложени така както искате
}
function suzdai_nivo(br_redove_nivo) {
    let nivo = [];
    for(let i = 0; i < br_redove_nivo; i++) {
        nivo[i] = [];
        for(let j = 0; j < br_redove_nivo; j++) {
            nivo[i][j] = suzdai_tablica_za_plochka(10, 0);
        }
    }
    return nivo;
}
let nivo = suzdai_nivo(4);
function narisuvai_nivo(nivo) {
    let plochka_shir = 600/nivo.length;
    for(let i = 0; i < nivo.length; i++) {
        for(let j = 0; j < nivo.length; j++) {
            narisuvai_plochka(i*plochka_shir, j*plochka_shir, plochka_shir, nivo[i][j]);
            context.lineWidth = 5;
            context.strokeRect(i*plochka_shir, j*plochka_shir, plochka_shir, plochka_shir);
            context.lineWidth = 1;
        }
    }
}
function draw() {
    narisuvai_nivo(nivo);
}
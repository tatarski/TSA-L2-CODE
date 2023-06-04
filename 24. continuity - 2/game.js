let nivo;
let br_plochki = 3;
let br_kletki_v_plochka = 4;
// igrach_DX е с колко се премества играчът надясно за 1 update
// igrach_DY е с колко се премества играчът надолу за 1 update
let igrach_x= 50, igrach_y = 50, igrach_dX = 0, igrach_dY = 0, igrach_razmer = 50;
let kletka_shir = 600/(br_plochki*br_kletki_v_plochka);
function init() {
    nivo = suzdai_nivo(br_plochki);
    let plochka_1 = nivo[0][0];
    plochka_1[0][3] = 1;
    plochka_1[1][3] = 1;
    plochka_1[2][3] = 1;
    plochka_1[3][3] = 1;
    plochka_1[2][2] = 1;

    nivo[1][0][0][3] = 1;
    nivo[1][0][1][3] = 1;
    nivo[1][0][2][3] = 1;
    nivo[1][0][3][3] = 1;

    nivo[1][0][0][0] = 1;
    nivo[1][0][1][0] = 1;
    nivo[1][0][2][0] = 1;
    nivo[1][0][3][0] = 1;
}
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
function suzdai_nivo(br_redove_nivo) {
    let nivo = [];
    for(let i = 0; i < br_redove_nivo; i++) {
        nivo[i] = [];
        for(let j = 0; j < br_redove_nivo; j++) {
            nivo[i][j] = suzdai_tablica_za_plochka(br_kletki_v_plochka, 0);
        }
    }
    return nivo;
}
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
function blusni_s_plochka(plochka_kol, plochka_red) {
    // Кода за колизия между играч и плочка 1
    let plochka1 = nivo[plochka_kol][plochka_red];
    // За всяка клетка от плочката правим нещо
    let plochka_shir = 600/br_plochki;
    let plochka_x = plochka_shir*plochka_kol, plochka_y = plochka_shir*plochka_red;
    for(let kol = 0; kol < plochka1.length; kol++) {
        for(let red = 0; red < plochka1.length; red++) {

            let kletka_x = plochka_x + kol*kletka_shir,
                kletka_y = plochka_y + red*kletka_shir;
            // Ако има стена в текущата клетка
            if(plochka1[kol][red] == 1) {
                // Ако играчът се блъска с червената отсечка
                if(areColliding(
                    igrach_x, igrach_y, igrach_razmer, igrach_razmer, // играча
                    kletka_x + 4, kletka_y, kletka_shir - 2 * 4, 4 // червеното
                )) {
                    igrach_y = igrach_y - igrach_dY;
                    igrach_dY = 0;
                }
                // Ако играчът се блъска със зелената отсечка
                if(areColliding(
                    igrach_x, igrach_y, igrach_razmer, igrach_razmer, // играча
                    kletka_x + kletka_shir - 4, kletka_y+4, 4, kletka_shir - 2*4
                )) {
                    igrach_x = igrach_x - igrach_dX;
                    igrach_dX = 0;
                }
                if(areColliding(
                    igrach_x, igrach_y, igrach_razmer, igrach_razmer, // играча
                    kletka_x, kletka_y + 4, 4, kletka_shir - 2*4
                )) {
                    igrach_x = igrach_x - igrach_dX;
                    igrach_dX = 0;
                }
            }
        }
    }
}
function update() {
    // Мърдаме играча с неговата скорост
    igrach_x = igrach_x + igrach_dX;
    igrach_y = igrach_y + igrach_dY;
    // Гравитация
    igrach_dY = igrach_dY + 0.1;

    // Триене
    igrach_dX = igrach_dX/1.05;
    // Клавиша D
    if(isKeyPressed[68]) {
        igrach_dX = igrach_dX + 0.2;
    }
    // Клавиша A
    if(isKeyPressed[65]) {
        igrach_dX = igrach_dX - 0.2;
    }

    for(let i = 0; i < nivo.length; i++) {
        for(let j = 0; j < nivo.length; j++) {
            blusni_s_plochka(i, j);
        }
    }
}


function draw() {
    narisuvai_nivo(nivo);
    drawImage(bird, igrach_x, igrach_y, igrach_razmer, igrach_razmer);
}
function keyup(key) {
    console.log(key);
    // SPACE
    if(key == 32) {
        igrach_dY = -6;
    }
}
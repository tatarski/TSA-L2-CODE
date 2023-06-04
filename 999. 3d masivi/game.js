let arr = [];
let brEtaji = 15;
let brKoloni = 15;
let brRedove = 15;
let kletkaShir = 10;
let tekushtoNivo = 0;
for(let etaj = 0; etaj < brEtaji; etaj++) {
    arr[etaj] = []
    for (let kol = 0; kol < brKoloni; kol++) {
        arr[etaj][kol] = [];
        for (let red = 0; red < brRedove; red++) {
            arr[etaj][kol][red] = randomInteger(255);
        }
    }
}

function update() {
    
}
function draw() {
    for (let etaj = 0; etaj < brEtaji; etaj++) {
        for (let kol = 0; kol < brKoloni; kol++) {
            for (let red = 0; red < brRedove; red++) {
                context.fillStyle = "rgb(" + arr[etaj][kol][red] + ",255,255)"
                context.fillRect(etaj * 160 + kol * kletkaShir,
                    red * kletkaShir,
                    kletkaShir, kletkaShir);
            }
        }
    }
    for (let kol = 0; kol < brKoloni; kol++) {
        for (let red = 0; red < brRedove; red++) {
            context.fillStyle = "rgb(" + arr[tekushtoNivo][kol][red] + ",255,255)"
            context.fillRect(kol * kletkaShir*2,
                red * kletkaShir*2 + 200,
                kletkaShir*2, kletkaShir*2);
        }
    }


}


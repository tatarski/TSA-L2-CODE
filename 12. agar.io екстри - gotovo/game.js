let myX = [], myY = [], brIgrachi = 1, igrachRadius = 40;
myX = [ 100], myY = [100];
function rodiIgrach(x, y) {
    // Раждаме новия играч на ПЪРВАТА СВОБОДНА ПОЗИЦИЯ В МАСИВИТЕ
    myX[brIgrachi] = x;
    myY[brIgrachi] = y;
    brIgrachi++;   
}
function areCirclesColliding(x1,y1,r1, x2,y2,r2) {
    // Ако кръгчетата се блъскат:
    if((r1+r2)*(r1+r2) > (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2)) {
        return true;
    } else {
        // ако кръгчетата не се блъскат:
        return false;
    }
}
function init() {
    // Това е случайно генериране на играчи
    // for(let i = 0; i < 10; i++) {
    //     rodiIgrach(randomInteger(800), randomInteger(600));
    // }
    // rodiIgrach(100, 100);
    // rodiIgrach(130, 100);
}
function update() {
    // Движение на играчите
    for(let i = 0; i < brIgrachi; i++) {
        myX[i] = myX[i] + (mouseX - myX[i]) / 100;
        myY[i] = myY[i] + (mouseY - myY[i]) / 100;
    }
    for (let i = 0; i < brIgrachi; i++) {
        for (let j = 0; j < brIgrachi; j++) {
            //АЗ        АЗ      ЦЕЛ       АЗ
            if (i != j) {
                while (areCirclesColliding(myX[i], myY[i], igrachRadius, myX[j], myY[j], igrachRadius)) {
                    myX[i] = myX[i] - (myX[j] - myX[i]) / 100;
                    myY[i] = myY[i] - (myY[j] - myY[i]) / 100;
                    myX[j] = myX[j] - (myX[i] - myX[j]) / 100;
                    myY[j] = myY[j] - (myY[i] - myY[j]) / 100;
                }
            }
        }
    }
}
function draw() {
    for(let i = 0; i < brIgrachi; i++) {
        drawImage(ballOrTree,
            myX[i] - igrachRadius, myY[i] - igrachRadius, igrachRadius*2, igrachRadius*2);
    }
}
function keyup(key) {
    if(key == 32) {
        // Ако циклим от 0 до brIgrachi ще получим безкраен цикъл
        for(let i = brIgrachi-1; i >= 0; i--) {
            rodiIgrach(myX[i] + 20, myY[i] + 10);
            igrachRadius = igrachRadius/1.001;
        }
    }
}
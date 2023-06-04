let canvas, context, mouseX, mouseY;
function onBodyLoad() {
    canvas = document.getElementById("canvas-id");
    context = canvas.getContext("2d");
    requestAnimationFrame = window.requestAnimationFrame;
    redraw();
    setInterval(update, 10);
    init();
    canvas.onclick = function (e) { 
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        mouseup();
    }
    document.addEventListener("mousemove", function (e) { 
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        mouseup();
    });
}
function areColliding(x1, y1, shir1, vis1, x2, y2, shir2, vis2) {
    if(x2<=x1+shir1){
        if(x1<=+x2+shir2){
            if(y2<=y1+vis1){
                if(y1<=y2+vis2){
                    return 1;
                }
            }
        }
    }
}
function randomInteger(dokude) {
    return Math.floor(Math.random() * dokude);
}


function redraw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    draw();
    requestAnimationFrame(redraw);
}
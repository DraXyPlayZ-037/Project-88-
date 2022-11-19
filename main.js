const { fabric } = require("./fabric");

canvas = new fabric.Canvas("myCanvas");

By = 0;
Bx = 0;
Hy = 400;
Hx = 800;

function upload_hole() {
    fabric.Image.fromURL('aDS.jpg', function(Img) {
        bio = Img;

        bio.scaleToWidth(50);
        bio.scaleToHeight(50);
        bio.set({
            top: hy,
            left: hx
        });
        canvas.add(bio);
    });
    new_image();
}

function new_image() {
    fabric.Image.fromURL('e9ea1149359a3d087f5bd946372ab840.png', function(Img) {
        tio = Img;

        tio.scaleToWidth(50);
        tio.scaleToHeight(50);
        tio.set({
            top: by,
            left: bx
        });
        canvas.add(tio);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    kp = e.keyCode;
    console.log(kp)
    if (kp == "37") {
        Left();
        obx();
    }
    if (kp == "38") {
        Top();
        obx();
    }
    if (kp == "39") {
        Right();
        obx();
    }
    if (kp == "40") {
        Down();
        obx();
    }
}

function Left() {
    if (Bx >= 0) {
        Bx = Bx - 5;
        upload_hole();
        new_image();
    }
}

function Top() {
    if (By >= 0) {
        By = By - 5;
        upload_hole();
        new_image();
    }
}

function Right() {
    if (Bx <= 1245) {
        Bx = Bx + 5;
        upload_hole();
        new_image();
    }
}

function Down() {
    if (By <= 645) {
        By = By + 5;
        upload_hole();
        new_image();
    }
}

function obx() {
    if ((Bx == Hy) && (By == Hy)) {
        canvas.remove(ball_obj);
        document.getElementById("desc").innerHTML = "[: You Have Hit The Goal! :]";
        document.getElementById("myCanvas").style.borderColor = "red";
    }
}
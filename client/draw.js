const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");
draw();

function draw() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CTX.scale(1, 1);
    CTX.beginPath();
    CTX.fillStyle = "blue";
    CTX.moveTo(CANVAS.width / 2, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width / 2 + 30 * Math.cos(Math.PI), CANVAS.height / 2 + 30 * Math.sin(Math.PI));
    CTX.lineTo(CANVAS.width / 2 + 30 * Math.sin(1.5 * Math.PI), CANVAS.height / 2 + 30 * Math.cos(1.5 * Math.PI));
    CTX.arc(CANVAS.width / 2, CANVAS.height / 2, 30 * value_R / 5, Math.PI, 1.5 * Math.PI);
    CTX.fill();
    CTX.closePath();

    CTX.fillRect(CANVAS.width / 2, CANVAS.height / 2, 60 * value_R / 5, -60 * value_R / 5);

    CTX.moveTo(CANVAS.width / 2, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width / 2, CANVAS.height / 2 + 60 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 + 30 * value_R / 5, CANVAS.height / 2);
    CTX.fill();

    CTX.fillStyle = "black";
    CTX.beginPath();
    CTX.moveTo(0, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width, CANVAS.height / 2);
    CTX.closePath();
    CTX.stroke();

    CTX.beginPath();
    CTX.moveTo(CANVAS.width, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width - 10, CANVAS.height / 2 - 5);
    CTX.lineTo(CANVAS.width - 10, CANVAS.height / 2 + 5);
    CTX.fillText('x', CANVAS.width - 15, CANVAS.height / 2 + 15);
    CTX.closePath();
    CTX.fill();

    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 - 30 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 - 30 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 - 60 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 - 60 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 30 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 + 30 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();

    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2, 0);
    CTX.lineTo(CANVAS.width / 2, CANVAS.height);
    CTX.closePath();
    CTX.stroke();

    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2, 0);
    CTX.lineTo(CANVAS.width / 2 - 5, 10);
    CTX.lineTo(CANVAS.width / 2 + 5, 10);
    CTX.fillText('y', CANVAS.width / 2 + 15, 10);
    CTX.closePath();
    CTX.fill();

    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 - 60 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 - 60 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 - 30 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 - 30 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 + 30 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 + 30 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 + 60 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 + 60 * value_R / 5);
    CTX.fillText("R=" + value_R, 25, 25);
    CTX.closePath();
    CTX.stroke();
    if (value_R > 2) {
        CTX.fillText("-R/2", CANVAS.width / 2 - 30 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("-R", CANVAS.width / 2 - 60 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("R/2", CANVAS.width / 2 + 30 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("R", CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("-R", CANVAS.width / 2 + 10, CANVAS.height / 2 + 60 * value_R / 5);
        CTX.fillText("-R/2", CANVAS.width / 2 + 10, CANVAS.height / 2 + 30 * value_R / 5);
        CTX.fillText("R", CANVAS.width / 2 - 20, CANVAS.height / 2 - 60 * value_R / 5);
        CTX.fillText("R/2", CANVAS.width / 2 - 20, CANVAS.height / 2 - 30 * value_R / 5);
    }
}

function drawPoint(x, y, r) {
    if (x > r + 5 || x < -1 * r - 5) {
        x.setCustomValidity("Выход за пределы графика по оси X.\nНевозможно отобразить точку");
        draw();
    } else if (y > r + 5 || y < -1 * r - 5) {
        y.setCustomValidity("Выход за пределы графика по оси Y.\nНевозможно отобразить точку");
        draw();
    } else {
        CTX.fillStyle = "green";
        CTX.beginPath();
        CTX.moveTo(150, 150);
        CTX.arc(150 + 60 * x / r, 150 - 60 * y / r, 4, 0, 2 * Math.PI);
        CTX.closePath();
        CTX.fill();
    }
}




let x, y, r;
const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");
draw();

function setValueX(radio) {
    x = radio.value;
}

function setValueR(id) {
    r = document.getElementById(id).value;
    draw();
}

function draw() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CTX.scale(1, 1);
    CTX.beginPath();
    CTX.fillStyle = "blue";
    CTX.moveTo(CANVAS.width / 2, CANVAS.height / 2);
    CTX.arc(CANVAS.width / 2, CANVAS.height / 2, 15 * r, Math.PI, 1.5 * Math.PI);
    CTX.fill();
    CTX.closePath();

    CTX.fillRect(CANVAS.width / 2, CANVAS.height / 2, 30 * r, -30 * r);

    CTX.moveTo(CANVAS.width / 2, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width / 2, CANVAS.height / 2 + 30 * r);
    CTX.lineTo(CANVAS.width / 2 + 15 * r, CANVAS.height / 2);
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
    CTX.moveTo(CANVAS.width / 2 - 15 * r, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 - 15 * r, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 - 30 * r, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 - 30 * r, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 15 * r, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 + 15 * r, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 30 * r, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 + 30 * r, CANVAS.height / 2 - 5);
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
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 - 30 * r);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 - 30 * r);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 - 15 * r);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 - 15 * r);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 + 15 * r);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 + 15 * r);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 + 30 * r);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 + 30 * r);
    CTX.closePath();
    CTX.stroke();
    if (r > 2) {
        CTX.fillText("-R/2", CANVAS.width / 2 - 15 * r, CANVAS.height / 2 + 10);
        CTX.fillText("-R", CANVAS.width / 2 - 30 * r, CANVAS.height / 2 + 10);
        CTX.fillText("R/2", CANVAS.width / 2 + 15 * r, CANVAS.height / 2 + 10);
        CTX.fillText("R", CANVAS.width / 2 + 30 * r, CANVAS.height / 2 + 10);
        CTX.fillText("-R", CANVAS.width / 2 - 25, CANVAS.height / 2 + 30 * r);
        CTX.fillText("-R/2", CANVAS.width / 2 - 25, CANVAS.height / 2 + 15 * r);
        CTX.fillText("R", CANVAS.width / 2 - 25, CANVAS.height / 2 - 30 * r);
        CTX.fillText("R/2", CANVAS.width / 2 - 25, CANVAS.height / 2 - 15 * r);
    }
}

function drawPoint(x, y, r) {
    if(x > r + 5 || y > r + 5 || x < -1 * r - 5 || y < -1 * r - 5 ) {
        document.getElementById("result-text").innerText = "Выход за пределы видимости графика\nНевозможно отобразить точку.";
        document.getElementById("result-text").classList.add("warningStub");
        document.getElementById("result-text").style.display = "flex";
        setTimeout(() => {
                document.getElementById("result-text").style.display = "none";
                document.getElementById("result-text").classList.remove(...document.getElementById("result-text").classList);
            },
            1000);
        draw();
    } else {
        draw();
        CTX.fillStyle = "#d77d31";
        CTX.beginPath();
        CTX.moveTo(150, 150);
        CTX.arc(150 + 60 * x / r, 150 - 60 * y / r, 4, 0, 2 * Math.PI);
        CTX.closePath();
        CTX.fill();
    }
}

function validateX() {
    return x !== undefined;
}

function validateY() {
    const yRegexp = /-?\d+[.?\d+]*/i
    let input = document.querySelector("input[type=text]");
    if(yRegexp.test(input.value)) {
        y = input.value;
        if(y >= -3 && y <= 5){
            return true;
        } else {
            input.setCustomValidity("Выход за пределы отрезка [-3, 5]");
            return false;
        }
    } else {
        input.setCustomValidity("Значение Y не валидно");
        return false;
    }
}

function validateR() {
    return r !== undefined;
}

document.getElementById("check-button").onclick = manageData;

function manageData() {
    if (validateX() && validateY() && validateR() === true) {
        let params = `x=${encodeURIComponent(x)}&y=${encodeURIComponent(y)}&r=${encodeURIComponent(r)}`;
        fetch(`/server-application/?${params}`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                },
            }).then(function (response) {
                return response.json();
            }).then(function (json) {
                    let array = [];
                    let keys = Object.keys(json);
                    keys.forEach(function (key) {
                        array.push(json[key])
                    });
                    array.unshift(x, y, r);
                    array.push(Date.now().toLocaleString());
                    updateTable(array);
            }).catch((e) => {
            document.getElementById("result-text").innerText = "error: " + e.message;
            document.getElementById("result-text").classList.add("errorStub");
            document.getElementById("result-text").style.display = "flex";
            setTimeout(() => {
                    document.getElementById("result-text").style.display = "none";
                    document.getElementById("result-text").classList.remove(...document.getElementById("result-text").classList);
                },
                1000)});
    } else {
        document.getElementById("result-text").innerText = "Некоторые из параметров X, Y, R - невалидны.\nУбедитесь в корректности данных и попробуйте ещё раз.";
        document.getElementById("result-text").classList.add("errorStub");
        document.getElementById("result-text").style.display = "flex";
        setTimeout(() => {
                document.getElementById("result-text").style.display = "none";
                document.getElementById("result-text").classList.remove(...document.getElementById("result-text").classList);
            },
            1000);
    }
}

function updateTable(data) {
    let table = document.getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    data.forEach((element) => {
        let cell = row.insertCell();
        cell.innerText = element;
    });
    document.getElementById("result-text").innerText = "Данные были успешно обработаны.";
    document.getElementById("result-text").classList.add("outputStub");
    document.getElementById("result-text").style.display = "flex";
    setTimeout(() => {
            document.getElementById("result-text").style.display = "none";
            document.getElementById("result-text").classList.remove(...document.getElementById("result-text").classList);
            },
        1000);
    drawPoint(x, y, r);
}


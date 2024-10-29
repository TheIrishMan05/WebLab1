let value_X, value_Y, value_R;
const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");
draw();

function setValueX(radio) {
    value_X = parseInt(radio.value, 10);
}

function setValueR(id) {
    value_R = parseInt(document.getElementById(id).value, 10);
    draw();
}

function draw() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CTX.scale(1, 1);
    CTX.beginPath();
    CTX.fillStyle = "blue";
    CTX.moveTo(CANVAS.width / 2, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width / 2 + 60 * Math.cos(Math.PI), CANVAS.height / 2 + 60 * Math.sin(Math.PI));
    CTX.lineTo(CANVAS.width / 2 + 60 * Math.sin(1.5 * Math.PI), CANVAS.height / 2 + 60 * Math.cos(1.5 * Math.PI));
    CTX.arc(CANVAS.width / 2, CANVAS.height / 2, 60 * value_R / 5, Math.PI, 1.5 * Math.PI);
    CTX.fill();
    CTX.closePath();

    CTX.fillRect(CANVAS.width / 2, CANVAS.height / 2, 120 * value_R / 5, -120 * value_R / 5);

    CTX.moveTo(CANVAS.width / 2, CANVAS.height / 2);
    CTX.lineTo(CANVAS.width / 2, CANVAS.height / 2 + 120 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2);
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
    CTX.moveTo(CANVAS.width / 2 - 60 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 - 60 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 - 120 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 - 120 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2 - 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 120 * value_R / 5, CANVAS.height / 2 + 5);
    CTX.lineTo(CANVAS.width / 2 + 120 * value_R / 5, CANVAS.height / 2 - 5);
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
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 - 120 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 - 120 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 - 60 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 - 60 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 + 60 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 + 60 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    CTX.beginPath();
    CTX.moveTo(CANVAS.width / 2 + 5, CANVAS.height / 2 + 120 * value_R / 5);
    CTX.lineTo(CANVAS.width / 2 - 5, CANVAS.height / 2 + 120 * value_R / 5);
    CTX.closePath();
    CTX.stroke();
    if (value_R > 2) {
        CTX.fillText("-R/2", CANVAS.width / 2 - 60 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("-R", CANVAS.width / 2 - 120 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("R/2", CANVAS.width / 2 + 60 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("R", CANVAS.width / 2 + 120 * value_R / 5, CANVAS.height / 2 + 10);
        CTX.fillText("-R", CANVAS.width / 2 + 10, CANVAS.height / 2 + 120 * value_R / 5);
        CTX.fillText("-R/2", CANVAS.width / 2 + 10, CANVAS.height / 2 + 60 * value_R / 5);
        CTX.fillText("R", CANVAS.width / 2 - 20, CANVAS.height / 2 - 120 * value_R / 5);
        CTX.fillText("R/2", CANVAS.width / 2 - 20, CANVAS.height / 2 - 60 * value_R / 5);
    }
}

function drawPoint(x, y, r) {
    if (x > r + 5 || x < -1 * r - 5 || y > r + 5 || y < -1 * r - 5) {
        document.getElementById("result-text").innerText = "Выход за пределы графика.\nТочка не может быть отображена";
        document.getElementById("result-text").classList.add("errorStub");
        document.getElementById("result-text").style.display = "block";
        setTimeout(() => {
                document.getElementById("result-text").style.display = "none"},
            5000);
    } else {
        draw();
        CTX.fillStyle = "green";
        CTX.beginPath();
        CTX.moveTo(150, 150);
        CTX.arc(150 + 60 * x / r, 150 - 60 * y / r, 4, 0, 2 * Math.PI);
        CTX.closePath();
        CTX.fill();
    }
}

function validateX() {
    return value_X !== undefined;
}

function validateY() {
    const yRegexp = /-?\d+[.,?\d+]*/i
    let input = document.querySelector("input[type=text]");
    input.setAttribute('value', 'defaultValue');
    if(yRegexp.test(input.value)) {
        input.value.replaceAll(",", ".");
        value_Y = parseInt(input.value, 10);
        if(value_Y >= -3 && value_Y <= 5){
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
    return value_R !== undefined;
}

document.getElementById("check-button").onclick = manageData;

function manageData() {
    if (validateX() && validateY() && validateR() === true) {
        let params = `x=${encodeURIComponent(value_X)}&y=${encodeURIComponent(value_Y)}&r=${encodeURIComponent(value_R)}`;

        fetch(`https://localhost:8000/server-application?${params}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                let array = [];
                let keys = Object.keys(json);
                keys.forEach(function (key) {
                    array.push(json[key])
                });
                updateTable(array);
            }).catch((e) => {
            document.getElementById("result-text").innerText = "error: " + e.message;
            document.getElementById("result-text").classList.add("errorStub");
            document.getElementById("result-text").style.display = "block";
            setTimeout(() => {
                    document.getElementById("result-text").style.display = "none"},
                5000);
        });

    } else {
        document.getElementById("result-text").innerText = "Некоторые из параметров X, Y, R - невалидны.\nУбедитесь в корректности данных и попробуйте ещё раз.";
        document.getElementById("result-text").classList.add("errorStub");
        document.getElementById("result-text").style.display = "block";
        setTimeout(() => {
                document.getElementById("result-text").style.display = "none"},
            5000);
    }
}

function updateTable(data) {
    let table = document.getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    data.unshift(value_X, value_Y, value_R);
    data.push(new Date.now().toLocaleString());
    data.forEach((element) => {
        let cell = row.insertCell();
        cell.innerHTML = element;
        if(element === "true"){
            cell.classList.add("hit");
        } else if (element === "false"){
            cell.classList.add("miss");
        }
    });
    table.innerHTML += row;
    document.getElementById("result-text").innerText = "Данные были успешно обработаны.";
    document.getElementById("result-text").classList.add("outputStub");
    document.getElementById("result-text").style.display = "block";
    setTimeout(() => {
            document.getElementById("result-text").style.display = "none"},
        5000);
    drawPoint(value_X, value_Y, value_R);
}


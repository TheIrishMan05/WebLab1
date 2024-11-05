let x, y, r;
const CANVAS = document.getElementById("myCanvas");
const CTX = CANVAS.getContext("2d");
document.getElementById("check-button").onclick = manageData;
draw();

function setValueX(radio) {
    x = radio.value;
}

function setValueR(id) {
    let input = document.getElementById(id);
    r = input.value;
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

function validateX() {
    return x !== undefined;
}

function validateY() {
    const yRegexp = /-?\d+[.?\d+]*/i
    let input = document.querySelector("input[type=text]");
    if (yRegexp.test(input.value)) {
        y = input.value;
        return y >= -3 && y <= 5;
    } else {
        return false;
    }
}

function validateR() {
    return r !== undefined;
}


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
            const RAW_DATE = Date.now();
            const CURRENT_DATA = new Date(RAW_DATE);
            array.unshift(x, y, r);
            array.push(CURRENT_DATA.toLocaleString());
            updateTable(array);
        }).catch((e) => {
            document.getElementById("result-text").innerText = "error: " + e.message;
            document.getElementById("result-text").classList.add("errorStub");
            document.getElementById("result-text").style.display = "flex";
            setTimeout(() => {
                document.getElementById("result-text").style.display = "none";
                document.getElementById("result-text").classList
                    .remove(...document.getElementById("result-text").classList);
            }, 1000);
            });
    } else {
        document.getElementById("result-text").innerText = "Некоторые из параметров X, Y, R - невалидны." +
        "\nУбедитесь в корректности данных и попробуйте ещё раз.";
        document.getElementById("result-text").classList.add("warningStub");
        document.getElementById("result-text").style.display = "flex";
        setTimeout(() => {
            document.getElementById("result-text").style.display = "none";
            document.getElementById("result-text").classList
                .remove(...document.getElementById("result-text").classList);
        }, 1000);
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
    }
}
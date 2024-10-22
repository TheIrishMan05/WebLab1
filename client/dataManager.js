function manageData() {

    if (validateX() && validateY() && validateR() === true) {

        let params = `x=${encodeURIComponent(value_X)}&y=${encodeURIComponent(value_Y)}&r=${encodeURIComponent(value_R)}`;

        fetch(`https://localhost:8080/server-application?${params}`)
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


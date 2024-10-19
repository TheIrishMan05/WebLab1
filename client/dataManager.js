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
            setText("#result-text", "error: " + e.message);
            setClass("#result-text", "errorStub");
            setDisplay("#result-text", "block");
        });

    } else {
        setText("#result-text", "Некоторые из параметров X, Y, R - невалидны. Убедитесь в корректности данных и попробуйте ещё раз.");
        setClass("#result-text", "errorStub");
        setDisplay("#result-text", "block");
    }
}

function updateTable(data) {
    let table = document.getElementsByTagName('tbody')[0];


    let row = table.insertRow();
    data.forEach((element) => {
        if(element === "true"){
            let cell = row.insertCell();
            cell.innerHTML = element;
            cell.classList.add("hit");
        } else if (element === "false"){
            let cell = row.insertCell();
            cell.innerHTML = element;
            cell.classList.add("miss");
        }
        let cell = row.insertCell();
        cell.innerHTML = element;
    });
    table.innerHTML += row;
    setText("#result-text", "Данные были успешно обработаны.");
    setClass("#result-text", "outputStub");
    setDisplay("#result-text", "block");
}


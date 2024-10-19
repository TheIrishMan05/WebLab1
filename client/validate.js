let value_X, value_Y, value_R = 0;
let checkButton = document.getElementById("check-button");
let input_X = document.querySelector("input[name=X-radio]:checked");

function setValueX() {
    value_X = input_X.value;
}

function setValueR(id) {
    let input_R = document.getElementById(id);
    value_R = input_R.value;
    draw();
}

function validateX() {
    const validityStateX = input_X.validity;
    if (value_X == null) {
        validityStateX.setCustomValidity("Пожалуйста, выберите параметр X");
        return false;
    }
    return true;
}

function validateY() {
    const yRegexp = /-?\d+[,.?\d+]*/i
    let input = document.getElementById("label_y");
    const validityStateY = input.validity;
    if (yRegexp.test(input.value) && input.value.replace(",", ".") >= -3
        && input.value.replace(",", ".") <= 5) {
        value_Y = input.value.replace(",", ".");
        return true;
    } else if (!yRegexp.test(input.value)) {
        validityStateY.setCustomValidity("Значение Y не валидно");
        input.value = "";
        return false;
    } else {
        validityStateY.setCustomValidity("Выход за пределы отрезка [-3; 5]");
        return false;
    }
}

function validateR() {
    return value_R != null;

}

function setText(selector, value) {
    document.getElementById(selector).innerText = value;
}

function setDisplay(selector, value) {
    document.getElementById(selector).style.display = value;
}

function setClass(selector, value) {
    document.getElementById(selector).classList.add(value);
}

checkButton.onclick = function () {
    manageData();
}

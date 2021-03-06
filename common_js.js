const MATH_DEG = 'deg';
const MATH_RAD = 'rad';
const BLANK = '';

function isBlank(valStr) {
    if(valStr == undefined || valStr == null) return true;
    return valStr.trim() == '';
}
function isNotUndefined(valStr) {
    if(valStr == undefined || valStr == null) return false;
    return true;
}
function getValueOfInput(tagObj) {
    return tagObj.value;
}
function setValueOfInput(tagObj, value) {
    tagObj.value = value;
}
function getTextOfTag(tagObj) {
    return tagObj.innerText;
}
function setTextOfTag(tagObj, value) {
    tagObj.innerText = value;
}
function hideTag(tagObj) {
    tagObj.classList.add("hide");
}
function showTag(tagObj) {
    tagObj.classList.remove("hide");
}
// calculate function by browser js
function toDegree(degree) {
    return degree * Math.PI / 180;
}
function trimByNumberDigit(number, digit) {
    let fixedNumber = number.toFixed(6).toString();
    if(fixedNumber.endsWith('000')) return parseFloat(fixedNumber);
    let strNum = number.toString();
    let arrPart = strNum.split('.');
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function isInt(value) {
    return !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10));
}

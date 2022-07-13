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
// math js

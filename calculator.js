function display(val) {
    document.getElementById('result').value += val;

}
function solve() {
    let x = document.getElementById('result').value;
    document.getElementById('result').value = eval(x);

}
function clrscr() {
    document.getElementById('result').value = ""
}
function dlt() {
    let input = document.getElementById('result');
    input.value = input.value.toString().slice(0, -1);
}
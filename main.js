function getparagraph1() {
    var input = [];
    for (var i = 1; i <= 6; i++) {
        input.push(document.getElementById("para1_input_box_" + [i]).value);
    }

    document.getElementById("showparagraph1").innerHTML = input.join(". ")
}
function getparagraph2() {
    var inputday = [];
    for (var k = 7; k <= 12; k++) {
        inputday.push(document.getElementById("para2_input_box_" + [k]).value);
    }

    document.getElementById("showparagraph2").innerHTML = inputday.join(". ")}

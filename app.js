function calculate() {
    let amount = document.getElementById("amount").value;
    let percentage = document.getElementById("percentage").value;
    let people = document.getElementById("people").value;

    if (amount === "" || percentage == 0) {
        alert("Please enter values");
    }
    //amount of people should be equal to or more than 1
    if (people === "" || people <= 1) {
        people = 1;
    }

    let total = (amount * percentage) / people;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("savings").style.display = "block";
    document.getElementById("number").innerHTML = total;
}


document.getElementById("calculate").onclick = function() {
    calculate();

};

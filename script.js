
function result() {

    let name = document.getElementById("name").value;
    let eng = Number(document.getElementById("eng").value);
    let urdu = Number(document.getElementById("urdu").value);
    let comp = Number(document.getElementById("comp").value);
    let sci = Number(document.getElementById("sci").value);

    let total = eng + urdu + comp + sci;

    let percentage = total / 400 * 100;

    let high = Math.max(eng, urdu, comp, sci);
    let low = Math.min(eng, urdu, comp, sci);

    let grade;

    if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C";
    }
    else {
        grade = "Fail";
    }

    let pass;
    if (eng >= 40 && urdu >= 40 && comp >= 40 && sci >= 40) {
        pass = "Pass";
    }
    else {
        pass = "Fail";
    }

    document.getElementById("output").innerHTML =
    "Name: " + name + "<br><br>" +
    "Total: " + total + " / 400<br><br>" +
    "Percentage: " + percentage + "%<br><br>" +
    "Grade: " + grade + "<br><br>" +
    "Highest: " + high + "<br><br>" +
    "Lowest: " + low + "<br><br>" +
    "Result: " + pass;

}


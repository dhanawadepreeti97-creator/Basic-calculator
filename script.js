function appendValue(value)
{
    document.getElementById("display").value += value;
}

function clearDisplay()
{
    document.getElementById("display").value = "";
    document.getElementById("result").innerHTML = "";
}

function backspace()
{
    let text = document.getElementById("display").value;

    document.getElementById("display").value =
    text.substring(0, text.length - 1);
}

function calculate()
{
    let expression =
    document.getElementById("display").value;

    let answer = eval(expression);

    document.getElementById("result").innerHTML =
    answer;
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Numbers and operators
    if ("0123456789+-*/.%".includes(key)) {
        appendValue(key);
    }

    // Enter or = to calculate
    else if (key === "Enter" || key === "=") {
        calculate();
    }

    // Backspace to delete
    else if (key === "Backspace") {
        backspace();
    }

    // Escape to clear
    else if (key === "Escape") {
        clearDisplay();
    }
});
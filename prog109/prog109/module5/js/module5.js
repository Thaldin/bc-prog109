// First call for page load
doWork();

function doWork() {

    var input = document.getElementById('number'); // Unit of table
    var num = Number(input.value);

    if (num > 10 || num < 0) {
        document.getElementById("error").style.display = "block";
    }
    else {
        document.getElementById("error").style.display = "none";
        multiply(num);
    }
}

function multiply(table) {

    var i = 1;  // Counter
    var msg = '<h2>Multiplication Table</h2>'; // Message

    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }

    // Write the message into the page
    var el = document.getElementById('answer');
    el.innerHTML = msg;
}

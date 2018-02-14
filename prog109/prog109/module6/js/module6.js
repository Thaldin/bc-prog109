function createRhombus() {

    var outputElem = document.getElementById("output");

    var rows = document.getElementById("rows").value;
    var symbol = document.getElementById("symbol").value;

    var upperCount = Math.trunc(rows / 2) + (rows % 2); // Modulus will account for odd number of rows
    var lowerCount = Math.trunc(rows / 2);

    var innerHtml = "";

    // Top diamond
    for (var i = 0; i < upperCount; i++)
    {
        innerHtml = innerHtml + "<div class=\"row\">" + charRepeat(i, symbol) + "</div>";
    }

    // Bottom diamond
    for (var j = (lowerCount - 1); j >= 0; j--) {
        innerHtml = innerHtml + "<div class=\"row\">" + charRepeat(j, symbol) + "</div>";
    }
    
    outputElem.innerHTML = innerHtml;

    /* prevents the form from actually
       submitting and allows output to show */
    return false;
}

function charRepeat(count, sym) {
    var strOut = "";

    // Count of number of symbols in the row
    count = (count * 2) + 1;

    for (var i = 0; i < count; i++) {
        var colColor;

        // Determine column color
        if (i % 2) {
            colColor = document.getElementById("evenColor").value;
        }
        else {
            colColor = document.getElementById("oddColor").value;
        }

        strOut = strOut + "<div class=\"col\" style=\"color:" + colColor + "; \">" + sym + "</div>";
    }
    return strOut;
}
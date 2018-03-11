function validateContact() {

    var success = true;
    var errMsg = "";

    console.log("HI");

    var name = document.getElementById("contact-name");
    var email = document.getElementById("contact-email");
    var msg = document.getElementById("contact-msg");

    if (name.value.length === 0) {
        success = false;
        errMsg += "Must provide a name. <br />";
    }

    if (email.value.length === 0) {
        success = false;
        errMsg += "Must provide an email address. <br />";
    }

    if (msg.value.length === 0) {
        success = false;
        errMsg += "Must enter a message. <br />";
    }

    document.getElementById("contact-err").innerHTML = errMsg;

    return success;
}
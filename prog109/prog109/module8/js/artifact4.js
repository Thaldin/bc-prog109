// *******************
// Main Body
// *******************

// Setup event listener on countries to show zip code
function checkCountrySelection() {
    var country = document.getElementById("countries");
    if (country.options[country.selectedIndex].value === "United States") {
        if (document.getElementById("zipcodeDiv").classList.contains("hidden"))
            document.getElementById("zipcodeDiv").classList.remove("hidden");
    }
    else {
        if (!document.getElementById("zipcodeDiv").classList.contains("hidden"))
            document.getElementById("zipcodeDiv").classList.add("hidden");
    }
}

var elCountries = document.getElementById("countries");
elCountries.addEventListener("change", checkCountrySelection, false);

// Validation Code here
function validateInput() {

    var formValid = true;
    
    if (!validateFirstname())
        formValid = false;

    if (!validateLastname())
        formValid = false;

    if (!validateEmail())
        formValid = false;

    if (!validatePhone())
        formValid = false;

    if (!validateUsername())
        formValid = false;

    if (!validatePassword())
        formValid = false;

    if (!validateAddress())
        formValid = false;

    if (!validateCity())
        formValid = false;

    if (!validateCountry())
        formValid = false;

    // Check for visible zipcode
    if (!document.getElementById("zipcodeDiv").classList.contains("hidden")) {
        if (!validateZip())
            formValid = false;
    }

    return formValid;
}

function validateFirstname() {

    var fname = document.getElementById("firstname");
    var fnameLen = Number(fname.value.length);

    if ((fnameLen < 1) || (fnameLen > 20)) {
        document.getElementById("fnameError").innerText = "First name must be between 1 and 20 characters.";
        return false;
    }
    else {
        document.getElementById("fnameError").innerText = "";
        return true;
    }
}

function validateLastname() {

    var lname = document.getElementById("lastname");
    var lnameLen = Number(lname.value.length);

    if ((lnameLen < 1) || (lnameLen > 20)) {
        document.getElementById("lnameError").innerText = "Last name must be between 1 and 50 characters.";
        return false;
    }
    else {
        document.getElementById("lnameError").innerText = "";
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("emailError").innerText = "Not a valid e-mail address";
        return false;
    }
    else {
        document.getElementById("emailError").innerText = "";
        return true;
    }
}

function validatePhone() {

    var phoneValid = true;
    var phoneMsg = "";

    var phone = document.getElementById("phone");
    var phoneNum = phone.value;
    var phoneLen = Number(phoneNum.length);

    if ((phoneLen < 1) || (phoneLen > 15)) {


        phoneMsg += "Phone number must be between 1 and 15 numbers."
        phoneValid = false;
    }
    else {
        if (isNaN(phoneNum)) {
            phoneMsg = "Must be all numbers.";
            phoneValid = false;
        }
    }

    if (phoneValid) {
        document.getElementById("phoneError").innerText = "";
    }
    else {
        document.getElementById("phoneError").innerText = phoneMsg;
    }

    return phoneValid;
}

function validateUsername() {

    var uname = document.getElementById("username");
    var unameLen = Number(uname.value.length);

    if ((unameLen < 1) || (unameLen > 12)) {
        document.getElementById("userError").innerText = "Username must be between 1 and 12 characters.";
        return false;
    }
    else {
        document.getElementById("userError").innerText = "";
        return true;
    }
}

function validatePassword() {

    var pwd = document.getElementById("password");
    var pwdLen = Number(pwd.value.length);

    if ((pwdLen < 1) || (pwdLen > 7)) {
        document.getElementById("pwdError").innerText = "Password must be between 1 and 7 characters. So weak...";
        return false;
    }
    else {
        document.getElementById("pwdError").innerText = "";
        return true;
    }
}

function validateAddress() {

    var addr = document.getElementById("address");
    var addrLen = Number(addr.value.length);

    if (addrLen < 1) {
        document.getElementById("addrError").innerText = "Required field.";
        return false;
    }
    else {
        document.getElementById("addrError").innerText = "";
        return true;
    }
}

function validateCity() {

    var city = document.getElementById("city");
    var cityLen = Number(city.value.length);

    if (cityLen < 1) {
        document.getElementById("cityError").innerText = "Required field.";
        return false;
    }
    else {
        document.getElementById("cityError").innerText = "";
        return true;
    }
}

function validateCountry() {

    var country = document.getElementById("countries");

    if (country.selectedIndex === 0) {
        document.getElementById("countryError").innerText = "Required field.";
        return false;
    }
    else {
        document.getElementById("countryError").innerText = "";
        return true;
    }
}

function validateZip() {

    var zip = document.getElementById("zipcode");
    var zipLen = Number(zip.value.length);

    if (zipLen !== 5) {
        document.getElementById("zipError").innerText = "Zip Code is 5 digits long.";
        return false;
    }
    else {
        if (isNaN(zip.value)) {
            document.getElementById("zipError").innerText = "Must be all numbers.";
            return false;
        }
        else {
            document.getElementById("zipError").innerText = "";
            return true;
        }
    }
}
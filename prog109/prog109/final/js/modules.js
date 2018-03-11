
var modules = document.getElementsByClassName("module");

for (var i = 0; i < modules.length; i++) {

    modules[i].addEventListener("mouseover", enterModule, false);
    modules[i].addEventListener("mouseout", exitModule, false);
}

function enterModule() {
    var moduleNum = this.attributes["data-id"].value;
    var moduleDesc = document.getElementById(moduleNum).innerText;
    this.innerText = moduleDesc;
}

function exitModule() {
    var moduleNum = this.attributes["data-id"].value;
    var moduleDesc = document.getElementById(moduleNum).attributes["data-module"].value;
    this.innerText = moduleDesc;
}
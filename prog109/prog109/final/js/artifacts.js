var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");
var autoCheck = document.getElementById("auto");
var carouselList = document.getElementById("carouselList");
var timerFunction;
var maxCount = carouselList.getElementsByTagName("li").length;
var currentItem = 0;

getCarouselEntry(currentItem);

// Enable events
autoCheck.addEventListener("click", enableAutoCycle, false);

nextButton.addEventListener("click", function () {
    cycleCarousel(1);
});

prevButton.addEventListener("click", function () {
    cycleCarousel(-1);
});

// Event functions
function cycleCarousel(change) {

    console.log(currentItem);
    currentItem = currentItem + change;
    console.log(currentItem);

    if (currentItem >= maxCount) {
        currentItem = 0;
    }
    else if (currentItem < 0) {
        console.log("check 0");
        currentItem = maxCount - 1;
    }
    console.log(currentItem);
    getCarouselEntry(currentItem);
}

function enableAutoCycle() {
    if (this.checked === false) {
        clearInterval(timerFunction);
    }
    else {
        timerFunction = setInterval(function () {
            cycleCarousel(1);
        }, 2000);
    }
}

function getCarouselEntry(index) {

    var imgSrc = carouselList.getElementsByTagName("li")[index].attributes["data-img"].value;
    var imgDesc = carouselList.getElementsByTagName("li")[index].innerHTML;
    var imgCap = carouselList.getElementsByTagName("li")[index].attributes["data-cap"].value;
    var imgLink = carouselList.getElementsByTagName("li")[index].attributes["data-link"].value;
    
    var imgContainer = document.getElementById("img-container");
    imgContainer.setAttribute("src", imgSrc);
    imgContainer.setAttribute("alt", imgCap);
    document.getElementById("img-cap").innerHTML = imgCap;
    document.getElementById("art-desc").innerHTML = imgDesc;
    document.getElementById("carousel-link").setAttribute("href", imgLink);
}
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

    currentItem = currentItem + change;
    if (currentItem >= maxCount) {
        currentItem = 0;
    }
    else if (currentItem < 0) {
        currentItem = maxCount;
    }

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

    document.getElementById("img-container").setAttribute("src", imgSrc);
    document.getElementById("img-desc").innerHTML = imgDesc;
}
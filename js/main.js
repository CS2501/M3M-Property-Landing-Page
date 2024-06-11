// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("section-41-3096");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Fade in slider 
var sliderOptions = {
    type: "fade",
    rewind: true,
    perPage: 1,
    autoplay: true,
    interval: 2000,
    speed: 2500,
    arrows: true,
    pagination: false,
    drag: true,
    keyboard: true
};

var splides = document.querySelectorAll("#homeherosec-slider");
if (splides.length) {
    for (var i = 0; i < splides.length; i++) {
        var splide = new Splide(splides[i], sliderOptions);
        splide.mount();
    }
}

// Amenities Slider 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#amenities").forEach((carousel) =>
        new Splide(carousel, {
            type: "loop",
            perPage: 5,
            perMove: 1,
            gap: 10,
            duration: 5000,
            speed: 1500,
            arrows: true,
            pagination: false,
            breakpoints: {
                1500: {
                    perPage: 3
                },
                1200: {
                    perPage: 2
                },
                480: {
                    perPage: 1
                }
            }
        }).mount()
    );
});


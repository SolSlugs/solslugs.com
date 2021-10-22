import TextOnPath from "./textOnPath";
const imagesLoaded = require('imagesloaded');

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Preload images
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.grid__item-img, .bigimg'), resolve);
    });
};

// Preload fonts
const preloadFonts = () => {
    return new Promise((resolve, reject) => {
        WebFont.load({
            typekit: {
                id: 'rhw1vur'
            },
            active: resolve
        });
    });
};

//Timer function
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let future = new Date('2021-10-23T22:00:00+00:00');
    
    const countDown = new Date(future).getTime(),
        x = setInterval(function() {    
            
            const now = new Date().getTime(),
                distance = countDown - now;
            
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            
            if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
            }
        }, 0)
    }());

// Preload fonts and images
Promise.all([preloadImages(), preloadFonts()]).then(() => {
    // And then initialize the TextOnScroll instances
    [...document.querySelectorAll('svg.svgtext')].forEach(el => new TextOnPath(el));
    // Remove loader (loading class)
    document.body.classList.remove('loading');
});
function startJourney() {

    const firstChapter = document.querySelector(".chapter-one");

    if (firstChapter) {

        firstChapter.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   IMAGE FADE-IN
========================================= */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.style.opacity = "0";

    image.addEventListener("load", function () {

        image.style.transition = "opacity 1s ease";

        image.style.opacity = "1";

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const sections = document.querySelectorAll(
    ".chapter-heading, .story-box, .memory-section, .baby-section, .work-card, .car-story, .education-box, .final-content, .dream-box"
);


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(40px)";

    section.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(section);

});
// Pin first page
gsap.timeline({
    scrollTrigger: {
        trigger: ".first-page",
        start: "0%",
        end: "100%",
        pin: true,
        pinSpacing: false,
    },
});

// Hightlight text
const addTextHighlightTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        scrub: true,
        start: "-40%",
        end: "40%",
    },
});

const removeTextHighlightTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        scrub: true,
        start: "-20%",
        end: "60%",
    },
});

addTextHighlightTimeline.fromTo(
    ".highlight",
    {
        color: "rgba(255,255,255,0.4)",
    },
    {
        color: "rgba(255,255,255,1)",
        stagger: 1,
    }
);

removeTextHighlightTimeline.to(".highlight", {
    color: "rgba(255,255,255,0.4)",
    stagger: 1,
});

// split phone
const splitPhoneTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "-25%",
        end: "30%",
        scrub: true,
    },
});

splitPhoneTimeline.fromTo(
    ".large-phone",
    {
        x: "40%",
    },
    {
        x: "20%",
    }
);
splitPhoneTimeline.fromTo(
    ".small-phone",
    {
        x: "-40%",
    },
    {
        x: "-20%",
    },
    "<"
);
splitPhoneTimeline.fromTo(
    ".product-text-left",
    {
        x: 50,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
    },
    "<"
);
splitPhoneTimeline.fromTo(
    ".product-text-right",
    {
        x: -50,
        opacity: 0,
    },
    {
        x: 0,
        opacity: 1,
    },
    "<"
);
gsap.timeline({
    scrollTrigger: {
        trigger: ".third-page",
        start: "0",
        end: "100%",
        pin: true,
        pinSpacing: false,
    },
});

// Carousel
const swatches = document.querySelectorAll(".swatches img");
const gallery = document.querySelector(".phone-gallery");
const slides = document.querySelectorAll(".phone-gallery-container");

let currentSwatch = "blue";
let closeUpImageIndex = 2;

swatches.forEach((swatch, index) => {
    const coordLeft = slides[index].getBoundingClientRect().left;

    swatch.addEventListener("click", (e) => {
        const swatchName = e.target.getAttribute("swatch");
        const closeUpImage = document.querySelector("." + swatchName);

        if (swatchName === currentSwatch) {
            return;
        }

        // Gallery
        gsap.to(gallery, { x: -coordLeft, duration: 1, ease: "back.out(1)" });

        // CloseUp Image
        gsap.set(closeUpImage, { zIndex: closeUpImageIndex });
        gsap.fromTo(closeUpImage, { opacity: 0 }, { opacity: 1, duration: 1 });

        closeUpImageIndex++;
        currentSwatch = swatchName;
    });
});

// Video on scroll
const videoOnScrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".fifth-page",
        start: "0%",
        end: "150%",
        scrub: true,
        pin: true,
    },
});
videoOnScrollTimeline.fromTo(
    ".product-video",
    { currentTime: 0, },
    {
        currentTime: 3, // this video is 3s longer
        duration: 1,
    }
);
videoOnScrollTimeline.fromTo(
    ".product-info-container h3",
    { opacity: 0 },
    { opacity: 1, stagger: 0.25, duration: 0.5 },
    "<"
);


// Phone parallax
const phoneParallaxTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.sixth-page',
        start: '-40%',
        end: '50%',
        scrub: true
    }
})
phoneParallaxTimeline.fromTo('.photo-description', {
    y: 0
}, {
    y: -200
})
phoneParallaxTimeline.fromTo('.portrait-container', {
    y: 0
}, {
    y: 10
}, '<')
phoneParallaxTimeline.fromTo('.phone-video', {
    y: 0
}, {
    y: -250
}, '<')
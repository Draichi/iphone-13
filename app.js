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
        markers: {
            startColor: "blue",
            endColor: "red",
        },
        scrub: true,
        start: "-40%",
        end: "40%",
    },
});

const removeTextHighlightTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-page",
        markers: {
            startColor: "green",
            endColor: "pink",
        },
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
        markers: {
            startColor: "red",
            endColor: "black",
        },
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
    '<'
);


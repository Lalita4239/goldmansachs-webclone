gsap.to("#nav-bar, #nav-logo", {
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav-bar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})
gsap.from("#secn1", {
    scale: 0.9,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#secn1",
        scroller: "body",
        //markers: true,
        start: ("top 70%"),
        end: ("top 65%"),
        scrub: 2
    }
})
gsap.from("#secn2", {
    scale: 0.9,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#secn2",
        scroller: "body",
        //markers: true,
        start: ("top 70%"),
        end: ("top 65%"),
        scrub: 2
    }
})
gsap.from("#secn3", {
    scale: 0.9,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#secn3",
        scroller: "body",
        //markers: true,
        start: ("top 70%"),
        end: ("top 65%"),
        scrub: 2
    }
})
gsap.from("#last", {
    scale: 0.9,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#last",
        scroller: "body",
        //markers: true,
        start: ("top 70%"),
        end: ("top 65%"),
        scrub: 2
    }
})



gsap.from(".line",{
    scrollTrigger:{
trigger:".line",
scrub:true,
markers:true

    },
    width:500,
    duration:3,
    scaleX: 0,
    transformOrigin: "left center",
})
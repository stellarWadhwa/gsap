gsap.registerPlugin(ScrollTrigger);


// gsap.to(('.line'),{
//     scrollTrigger:{
//         trigger:".line",
//         toggleActions:"play none reverse none" , // onEnter onLeave onEnterBack onLeaveBack
//         //play pause resume reverse reset none complete,,,these are the properties that can be set to all of the toggleActions
//         start:"top 30%",
//         end:"bottom 70%",
//         markers:true
//     },
//     x:300,
//     duration:3
// })

//code snippet for toggle actions


gsap.to('.line', {
    scrollTrigger: {
        scrub: 2, //scrub can be either boolean, but if numeric value is used in it then the scrub process will become smoother.
        //scrub property allows to reverse the animation on scroll reverse.
        trigger: ".line",
        toggleActions: "play none reverse none",
        start: "top 50%", // Animation starts when the top of the trigger element hits 30% from the top of the viewport
        end: "bottom 20%", // Animation reverses when the bottom of the trigger element hits 70% from the top of the viewport
        markers: true // Display markers for debugging
    },
    x: 800, // Animate the x-position to 800
    duration: 7 // Animation duration is 7 seconds
});

//code snippet for scrub property



gsap.to('.line', {
    scrollTrigger: {
        scrub: 2, //scrub can be either boolean, but if numeric value is used in it then the scrub process will become smoother.
        //scrub property allows to reverse the animation on scroll reverse.
        trigger: ".line",
        toggleActions: "play none reverse none",
        pin:true,
        start: "top 50%", // Animation starts when the top of the trigger element hits 30% from the top of the viewport
        end: "bottom 20%", // Animation reverses when the bottom of the trigger element hits 70% from the top of the viewport
        markers: true // Display markers for debugging
    },
    x: 800, // Animate the x-position to 800
    duration: 7 // Animation duration is 7 seconds
});

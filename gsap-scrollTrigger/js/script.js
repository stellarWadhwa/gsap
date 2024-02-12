gsap.registerPlugin(ScrollTrigger); //have to initialize scrollTriggger Plugin before use.

gsap.to(".t3",{
    scrollTrigger:{
        trigger:".t3",
          },
    width:300,
    duration:3
})

gsap.to(".t2",{
    scrollTrigger:{
        trigger:".t2", //I can use another element here for trigger the scrolling of this particular animation
        markers:true,
        scrub:2,
        onUpdate:(self)=>{
            const progress = self.progress;
            animation.progress(progress);
        }
    },
    duration:2,
    height:"50vh",
    delay:1
})


gsap.to(".t1", { scrollTrigger: {trigger:".t1", //animation will start by default when this element will come into the viewport if no start and end value is defined.
markers:true,
start:"bottom bottom",   scrub: true, // Smoothly scrub through the animation
 // Display markers for debugging purposes
onUpdate: (self) => {
    // Adjust the animation's progress based on the scroll direction
    const progress = self.progress;
    animation.progress(progress);
}}, 
x:300, duration:3})
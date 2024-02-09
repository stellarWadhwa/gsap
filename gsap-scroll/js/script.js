function fromOpacityScale() {

    let elements = document.querySelectorAll('[data-gsap="fromOpacityScale"]');
  
    elements.forEach(ele => {
  
      // animation values
      let scaleVal = ele.getAttribute('data-gsap-scale') ?? 0;
  
      let opacityVal = ele.getAttribute('data-gsap-opacity') ?? 0;
  
      let easeVal = ele.getAttribute('data-gsap-ease') ?? "power1.out";
  
      let durationVal = ele.getAttribute('data-gsap-duration') ?? 3;
  
      let delayVal = ele.getAttribute('data-gsap-delay') ?? 0;
  
      // animation
      let anim = gsap.from(ele, {
        autoAlpha: opacityVal,
        scale: scaleVal,
        ease: easeVal,
        duration: durationVal,
        delay: delayVal,
      });
  
      // scroll values
      let startVal = ele.getAttribute('data-gsap-start') ?? "top bottom";
  
      let endVal = ele.getAttribute('data-gsap-end') ?? "center 70%";
  
      let scrubVal = ele.getAttribute('data-gsap-scrub') ?? 2;
  
      let onceVal = ele.getAttribute('data-gsap-once') ?? true;
  
      let immediateRenderVal = ele.getAttribute('data-gsap-immediaterender') ?? false;
  
      let markersVal = ele.getAttribute('data-gsap-markers') ?? false;
  
      // scroll
      ScrollTrigger.create({
        animation: anim,
        trigger: ele,
        start: startVal,
        end: endVal,
        scrub: scrubVal,
        once: onceVal,
        immediateRender: immediateRenderVal,
        markers: markersVal
      });
  
    });
  
  } // .function
  
  document.addEventListener("DOMContentLoaded", function (e) {
      fromOpacityScale();
  });
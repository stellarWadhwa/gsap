
// Select the HTML element you want to animate
const element = document.getElementById('myElement');
const element1 = document.getElementById('myElement1');

// Create a GSAP animation timeline
// const animation1 = gsap.timeline();

gsap.to(element, {
  opacity: 0.5,
  x: 200,
  duration: 2,
  ease: 'power2.inOut',
  onComplete: () => {
    console.log('First animation completed!');
  }
})
gsap.to(element1, {
    y: 600,
    duration: 5,
    onComplete: () => {
      console.log('Second animation completed!');
    }
});

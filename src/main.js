import './style.css';

const box = document.getElementById('box');

gsap.to(box, {
  x: 400,
  yoyo:true,
  scrollTrigger:{
    trigger: box,
    scrub:true,
    start:'top center'
  }
});

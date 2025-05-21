import './style.css';

const box = document.getElementById('box');

gsap.from(box, {
  x: -200,
  opacity: 0,
  duration: 1,
  ease: 'circ',
  delay: 1,
});



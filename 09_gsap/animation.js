

gsap.to('.first', {
  x: 200,
  duration: 2
})
gsap.to('.first', {
  y: 200,
  duration: 2,
  delay: 2
})

gsap.from('.second', {
  x: 600,
  duration: 1
})

gsap.fromTo('.third', {
  x: 900,
}, {
  x: 400,
  duration: 2
})

gsap.set('.fourth', {
  x: 900,
  y: 400,
  rotation: '45deg'
})

const tl = gsap.timeline()

tl.to('.circle', {
  x: 500,
  y: 200,
  duration: 2
}).to('.circle', {
  scale: 2,
  y: 250, 
  duration: 3
}).to('.circle', {
  scale: 1,
  y: 200, 
  duration: 2
}).to('.circle', {
  scale: 2,
  y: 300, 
  duration: 3
})
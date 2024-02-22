
const pageWidth = window.innerWidth
const pageHeight = window.innerHeight

const numberOfCols = 24

const squareSize = Math.floor(pageWidth/numberOfCols)
const numberOfRows = Math.floor(pageHeight/squareSize)
const numberOfSquares = numberOfCols * numberOfRows

const container = document.querySelector('.container')

for (let i = 0; i < numberOfSquares; i++) {
  const square = document.createElement('div')
  square.classList.add('box')
  square.setAttribute('style', `width: ${squareSize}px; height: ${squareSize}px;`)
  container.append(square)
}

gsap.to('.box', {
  opacity: 0,
  background: 'rgb(112, 0, 112)',
  borderRadius: '50%',
  scale: 0.1,
  ease: 'ease.inOut',
  y: 33,
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
  stagger: {
    amount: 2,
    from: 'center',
    grid: 'auto'
  }
})
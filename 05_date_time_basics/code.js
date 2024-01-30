
let currentDate = new Date()

setInterval( function () {
  if ( document.querySelector('.clock') ) { 
    document.querySelector('.clock').remove()
  }
  currentDate = new Date()
  const div = document.createElement('div')
  div.classList.add('clock')
  const template = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds() < 10 ? '0'+currentDate.getSeconds() : currentDate.getSeconds()}`
  div.innerText = template
  console.log(template)
  document.body.appendChild(div)

}, 1000)


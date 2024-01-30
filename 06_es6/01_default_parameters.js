
// Default Parameters

function logActivity (name = 'Princess Zelda', activity = 'Archery' ) {

  console.log(`${name} loves ${activity}`)
}

// logActivity('Martin', 'One Piece')
// logActivity()

logActivity('Martin')

let defaultPerson = {
  name: 'Lori',
  activity: 'Painting'
}

function logActivity2 ( p = defaultPerson) {
  console.log(`${p.name} loves ${p.activity}`)
}


document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click',  ( e ) => {
    console.log(this)
  })
})
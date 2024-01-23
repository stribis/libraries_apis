

async function getData () {
  const response =  await fetch('https://jsonplaceholder.typicode.com/users' )
  const data = await response.json()

  console.log(data)

  data.forEach(contact => {
    const contactCard = document.createElement('ul')
    contactCard.classList.add('contact-card')

    contactCard.innerHTML = `
      <img class="profile-picture" src="https://robohash.org/${contact.username}?set=set4">
      <li>Name: ${contact.name}</li>
      <li>Phone: ${contact.phone}</li>
      <li>Email: ${contact.email}</li>
      <li>Website: <a target="_blank" href="https://${contact.website}">${contact.website}</a></li>

        <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=${contact.address.geo.lng}%2C${contact.address.geo.lat}&amp;layer=mapnik" style="border: 1px solid black"></iframe>
  <br/><small><a href="https://www.openstreetmap.org/#map=14/47.4014/8.5730">View Larger Map</a></small>
    `
    document.querySelector('.container').appendChild(contactCard)
  });

}

getData()
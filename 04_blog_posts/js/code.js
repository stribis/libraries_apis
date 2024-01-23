getData ()
async function getData () {

  const response = await fetch('api/world_of_warcraft_blog_posts.json')
  const data = await response.json()

  displayPosts(data)
}

function displayPosts (data) {

  data.forEach(post => {

    const ul = document.createElement('ul')
    ul.classList.add('post')


    const template = `
      <li><img height="100" src="images/${post.thumbnail}"></li>
      <li>Title: ${post.title}</li>
      <li>Body: ${post.body}</li>
      <li>Tags</li>
      <li>Date: ${post.date}</li>
      <li>${ post.special ? 'I am Special :D' : 'I am LAME!'}</li>
      <li>${ testIfSpecial(post.special)}</li>
    `
    ul.innerHTML = template

    document.querySelector('.container').appendChild(ul)

  })

}

function testIfSpecial (value) {
  if (value) {
    return 'I am Special :D'
  } else {
    return 'I am Lame!'
  }
}
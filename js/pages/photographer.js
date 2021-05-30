//photographer.html page

document.getElementById("top").innerHTML = photographers
.map(photographer => 
`
  <div class="photographer">
    <img class="profile-img" src="${photographer.photo}" alt="Thumnail image of ${photographer.name}">
    <h2>${photographer.name}</h2>
    <h5>${photographer.city}, ${photographer.country}</h5>
    <p class="description">${photographer.tagline}</p>
    <p class="price-per-day">$${photographer.price}/day</p>
    ${generateTags(photographer.tags)}
  </div>
`)
.join('')
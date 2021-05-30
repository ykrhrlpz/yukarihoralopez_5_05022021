// document.getElementById("category-button").onclick = function(tag) {
//   photographers.filter(photographer => photographer.tags.includes("art"))
// };

// document.getElementById("photographers").innerHTML = photographers
// .filter(photographer => photographer.tags.includes("art"))
// .map(photographer => 
// `
// <h1>${photographer.name}</h1>
// <h2>${photographer.tagline}</h2>
// <p>${photographer.city}</p>
// `)
// .join('')

// document.getElementById("photographers").innerHTML = photographers
// .map(photographer => 
// `
// <div class="photographer">

// <h5>${photographer.city}</h5>
// <p class="description">Finding beauty in everyday things</p>
// <p class="price-per-day">$${photographer.price}/day</p>

// </div>
// `)
// .join('')

document.getElementById("photographers").innerHTML = photographers
.map(photographer => 
`
  <div class="photographer">
    <img class="profile-img" src="${photographer.photo}" alt="Thumnail image of Mimi Keel">
    <h2>${photographer.name}</h2>
    <h5>${photographer.city}, ${photographer.country}</h5>
    <p class="description">${photographer.tagline}</p>
    <p class="price-per-day">$${photographer.price}/day</p>
    <button class="category-button">#${photographer.tag}</button>
  </div>
`)
.join('')
 

const generateaTags = () => 
{
  photographers
  .filter(photographer => photographer.tags.includes("art"))
  .map(photographer => 
  `
    <button class="category-button">#${photographer.tag}</button>
  `)
  .join('')
  console.log(photographers.tag)
}

generateaTags();


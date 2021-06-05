// function to generate tags 
const generateTags = (tags) => 
{
  return tags.map(tag => `<button class="category-button mr-1">#${tag}</button>`).join('')
}

// const sortCategory = () =>
// {
//   photographers
//   .filter(photographers => photographer.tags.includes("art"))
//   .map(photographers => 
//   `
//     <div class="photographerHeader">
//     <div class="photographerHeaderLeft">
//         <div>
//             <h2>${photographers.name}</h2>
//             <h5>${photographers.city}, ${photographers.country}</h5>
//             <p class="description">${photographers.tagline}</p>
//             <p class="price-per-day">$${photographers.price}/day</p>
//         </div>
//     </div>
//     <div>
//         <button class="contact-button">Contact Me</button>
//     </div>
//     <div>
//         <img class="profile-img" src="${photographers.photo}" alt="Thumnail image of ${photographers.name}">
//     </div>
//   </div>
//   `)
//   .join('')
//   console.log(photographers.tag)
// }

// const generateTags = () => 
// {
//   photographers
//   .filter(photographer => photographer.tags.includes("art"))
//   .map(photographer => 
//   `
//     <button class="category-button">#${photographer.tag}</button>
//   `)
//   .join('')
//   console.log(photographers.tag)
// }

// function to sort photographers
// const getSortByCategory = (tag) =>
// {
//   document.getElementById("photographers").innerHTML = photographers
//   .filter(photographer => photographer.tags.includes(tag))
//   .map(photographer => 
//   `
//     <div class="photographer">
//     <img class="profile-img" src="${photographer.photo}" alt="Thumnail image of ${photographer.name}">
//     <h2>${photographer.name}</h2>
//     <h5>${photographer.city}, ${photographer.country}</h5>
//     <p class="description">${photographer.tagline}</p>
//     <p class="price-per-day">$${photographer.price}/day</p>
//     ${generateTags(photographer.tags)}
//     </div>
//   `)
//   .join('')
// }

// one : sorting array return the new array

// function to sort photographers by tag
const filterPhotographerByTag = (tag) =>
{
  return photographers.filter(photographer => photographer.tags.includes(tag))
}

function showHomePageHeader()
{
  document.getElementById("body").innerHTML = 
  `
  <header>
        <a href="./index.html"><img src="./img/logo.svg" alt="FishEye Home Page"></a>
        <nav>
            <button id="category-portrait" class="category-button" onclick="renderProfiles('portrait')">#Portrait</button>
            <button id="category-art" class="category-button" onclick="renderProfiles('art')">#Art</button>
            <button id="category-fashion" class="category-button" onclick="renderProfiles('fashion')">#Fashion</button>
            <button id="category-architecture" class="category-button" onclick="renderProfiles('architecture')">#Architecture</button>
            <button id="category-travel" class="category-button" onclick="renderProfiles('travel')">#Travel</button>
            <button id="category-sport" class="category-button" onclick="renderProfiles('sport')">#Sport</button>
            <button id="category-animals" class="category-button" onclick="renderProfiles('animals')">#Animals</button>
            <button id="category-events" class="category-button" onclick="renderProfiles('events')">#Events</button>
        </nav>
        <h1>Our Photographer</h1>
    </header>
    <main id="photographers"></main>
  `
  
}


//another : chnaging inner html

// function to render photographers. When it has a  parameter, it will call the filterPhotographerByTag funtion to filter photographers. When there is no parameter, it will map directly photographers to render all of them.
const renderProfiles = (tagFilter) =>
{
  
  // check if funtion has a parameter
  let photographersToDisplay = tagFilter ? filterPhotographerByTag(tagFilter) : photographers
  document.getElementById("photographers").innerHTML = photographersToDisplay
  .map(photographer => 
  `
    <article class="photographer">
    <img class="profile-img" src="${photographer.photo}" alt="Thumnail image of ${photographer.name}">
    <h2>${photographer.name}</h2>
    <h5>${photographer.city}, ${photographer.country}</h5>
    <p class="description">${photographer.tagline}</p>
    <p class="price-per-day">$${photographer.price}/day</p>
    ${generateTags(photographer.tags)}
    </article>
  `)
  .join('')
}

// function showHomePage()
// {
//   
//   renderProfiles();

// }


function renderHomePage()
{
  showHomePageHeader();
  renderProfiles()
}
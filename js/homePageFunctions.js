
class Photographer
{
    constructor(photographer)
    {
        this.photographer = photographer;
    }
  
    showProfileInMain()
    {
        return ` <article class="photographer">
        <img class="profile-img" src="${this.photographer.photo}" alt="Thumnail image of ${this.photographer.name}">
        <h2 onclick="showProfilePage()">${this.photographer.name}</h2>
        <h5>${this.photographer.city}, ${this.photographer.country}</h5>
        <p class="description">${this.photographer.tagline}</p>
        <p class="price-per-day">$${this.photographer.price}/day</p>
        ${generateTags(this.photographer.tags)}
        </article>
        `
    }
}

// Creating array of photographers
const photographersGroup = []
for (let photographer of photographers)
{
    const pt = new Photographer(photographer);
    photographersGroup.push(pt)
}

// function to generate tags 
const generateTags = (tags) => 
{
  return tags.map(tag => `<button class="category-button mr-1">#${tag}</button>`).join('')
}

// function to sort photographers by tag
const filterPhotographersByTag = (tag) =>
{
  let filtedPhotographers = [];
  photographer = photographersGroup.filter(photographer => photographer.photographer.tags.includes(tag))
  filtedPhotographers.push(photographer)
  return filtedPhotographers[0]
  // Qestion : Why [0] have to be there?
}

// function to show Header of the Home page
function showHomePageHeader()
{
  document.getElementById("body").innerHTML = 
  `
  <header>
        <a href="./index.html"><img src="./img/logo.svg" alt="FishEye Home Page"></a>
        <nav>
            <button id="category-portrait" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('portrait'))">#Portrait</button>
            <button id="category-art" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('art'))">#Art</button>
            <button id="category-fashion" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('fashion'))">#Fashion</button>
            <button id="category-architecture" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('architecture'))">#Architecture</button>
            <button id="category-travel" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('travel'))">#Travel</button>
            <button id="category-sport" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('sport'))">#Sport</button>
            <button id="category-animals" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('animals'))"">#Animals</button>
            <button id="category-events" class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('events'))">#Events</button>
        </nav>
        <h1>Our Photographer</h1>
    </header>
    <main id="photographers"></main>
  `
}

// function to show the main section of Home page which displays photographers info
function showHomeMainSection (array)
{
    const group = [];
    for (i = 0; i < array.length; i++) 
    {
        let select = array[i].showProfileInMain(); 
        group.push(select)
    }
    document.getElementById("photographers").innerHTML = group;
}

// Function to render Home page
const renderHomePage = () =>
{
  showHomePageHeader();
  showHomeMainSection(photographersGroup); 
}

renderHomePage()



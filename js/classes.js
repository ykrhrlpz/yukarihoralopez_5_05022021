
// function to generate tags 
// const generateTags4 = (tags) => 
// {
//   return tags.map(tag => `<button class="category-button mr-1">#${tag}</button>`).join('')
// }

// function to sort photographers by tag
// const filterPhotographerByTag2 = (tag) =>
// {
//   return photographers.filter(photographer => photographer.tags.includes(tag))
// }

// function showHomePhotoHeader()
// {
//   document.getElementById("body").innerHTML = 
//   `
//   <header>
//         <a href="./index.html"><img src="./img/logo.svg" alt="FishEye Home Page"></a>
//         <nav>
//             <button id="category-portrait" class="category-button" onclick="renderProfiles('portrait')">#Portrait</button>
//             <button id="category-art" class="category-button" onclick="renderProfiles('art')">#Art</button>
//             <button id="category-fashion" class="category-button" onclick="renderProfiles('fashion')">#Fashion</button>
//             <button id="category-architecture" class="category-button" onclick="renderProfiles('architecture')">#Architecture</button>
//             <button id="category-travel" class="category-button" onclick="renderProfiles('travel')">#Travel</button>
//             <button id="category-sport" class="category-button" onclick="renderProfiles('sport')">#Sport</button>
//             <button id="category-animals" class="category-button" onclick="renderProfiles('animals')">#Animals</button>
//             <button id="category-events" class="category-button" onclick="renderProfiles('events')">#Events</button>
//         </nav>
//         <h1>Our Photographer</h1>
//     </header>
//     <main id="photographers"></main>
//   `
  
// }




class Photographer
{
    constructor(name, id, city, country, tags, tagline, price, portrait, photo, altDescription)
    {
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
        this.photo = photo;
        this.altDescription = altDescription;
    }

    showPage(tagFilter)
    {
        let photographersToDisplay = tagFilter ? filterPhotographerByTag(tagFilter) : photographers
        document.getElementById("photographers").innerHTML = photographersToDisplay
        .map(photographer => 
        ` <article class="photographer">
        <img class="profile-img" src="${photographer.photo}" alt="Thumnail image of ${photographer.name}">
        <h2  onclick="showProfilePage()">${photographer.name}</h2>
        <h5>${photographer.city}, ${photographer.country}</h5>
        <p class="description">${photographer.tagline}</p>
        <p class="price-per-day">$${photographer.price}/day</p>
        ${generateTags(photographer.tags)}
        </article>`
       
        )
    
      
    }
}

const photographersGroup = 
[
    new Photographer(`${photographers[0].name}`, `${photographers[0].id}`, `${photographers[0].city}`, `${photographers[0].country}`, `${photographers[0].tags}`, `${photographers[0].tagline}`, `${photographers[0].price}`, `${photographers[0].portrait}`, `${photographers[0].photo}`, `${photographers[0].altDescription}`),

    new Photographer(`${photographers[1].name}`, `${photographers[1].id}`, `${photographers[1].city}`, `${photographers[1].country}`, `${photographers[1].tags}`, `${photographers[1].tagline}`, `${photographers[1].price}`, `${photographers[1].portrait}`, `${photographers[1].photo}`, `${photographers[1].altDescription}`),

    new Photographer(`${photographers[2].name}`, `${photographers[2].id}`, `${photographers[2].city}`, `${photographers[2].country}`, `${photographers[2].tags}`, `${photographers[2].tagline}`, `${photographers[2].price}`, `${photographers[2].portrait}`, `${photographers[2].photo}`, `${photographers[2].altDescription}`),

    new Photographer(`${photographers[3].name}`, `${photographers[3].id}`, `${photographers[3].city}`, `${photographers[3].country}`, `${photographers[3].tags}`, `${photographers[3].tagline}`, `${photographers[3].price}`, `${photographers[3].portrait}`, `${photographers[3].photo}`, `${photographers[3].altDescription}`),

    new Photographer(`${photographers[4].name}`, `${photographers[4].id}`, `${photographers[4].city}`, `${photographers[4].country}`, `${photographers[4].tags}`, `${photographers[4].tagline}`, `${photographers[4].price}`, `${photographers[4].portrait}`, `${photographers[4].photo}`, `${photographers[4].altDescription}`),

    new Photographer(`${photographers[5].name}`, `${photographers[5].id}`, `${photographers[5].city}`, `${photographers[5].country}`, `${photographers[5].tags}`, `${photographers[5].tagline}`, `${photographers[5].price}`, `${photographers[5].portrait}`, `${photographers[5].photo}`, `${photographers[5].altDescription}`)
]


const displayProfilesInHome = (photographers) =>
{
    for (let photographer of photographers)
    {
        photographer.showPage()
    }
   
}

// function renderPhotoPage()
// {
//     showHomePhotoHeader();
//   displayProfilesInHome(photographersGroup)
// }


// renderPhotoPage()

// ------------------------------------------------------------------------------

class Media
{
    constructor(id, photographerId, title, image, tags, likes, date, price, altDescription)
    {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.tags = tags;
        this.likes = likes;
        this.date = date;
        this.price = price;
        this.altDescription = altDescription;
    }

    // showTitle()
    // {
    //     console.log(`showing the image of ${this.title}.`);
    // }
}

const mediaGroup = 
[
    new Media(`${media[0].id}`, `${media[0].photographerId}`, `${media[0].title}`, `${media[0].image}`, `${media[0].tags}`, `${media[0].likes}`, `${media[0].date}`, `${media[0].price}`, `${media[0].altDescription}`),

    new Media(`${media[1].id}`, `${media[1].photographerId}`, `${media[1].title}`, `${media[1].image}`, `${media[1].tags}`, `${media[1].likes}`, `${media[1].date}`, `${media[1].price}`, `${media[1].altDescription}`),

    new Media(`${media[2].id}`, `${media[2].photographerId}`, `${media[2].title}`, `${media[2].image}`, `${media[2].tags}`, `${media[2].likes}`, `${media[2].date}`, `${media[2].price}`, `${media[2].altDescription}`),

    new Media(`${media[3].id}`, `${media[3].photographerId}`, `${media[3].title}`, `${media[3].image}`, `${media[3].tags}`, `${media[3].likes}`, `${media[3].date}`, `${media[3].price}`, `${media[3].altDescription}`),

    new Media(`${media[4].id}`, `${media[4].photographerId}`, `${media[4].title}`, `${media[4].image}`, `${media[4].tags}`, `${media[4].likes}`, `${media[4].date}`, `${media[4].price}`, `${media[4].altDescription}`),

    new Media(`${media[5].id}`, `${media[5].photographerId}`, `${media[5].title}`, `${media[5].image}`, `${media[5].tags}`, `${media[5].likes}`, `${media[5].date}`, `${media[5].price}`, `${media[5].altDescription}`)
]


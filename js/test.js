function showTestPageHeader()
{
  document.getElementById("test").innerHTML = 
  `
    <header id="header-photographer">
        <a href="./index.html"><img src="./img/logo.svg" alt="FishEye Home Page"></a>
    </header>
    <main id="testphotographers"></main>
  `
}




// ----------------------------------------
class Media
{
    constructor(media)
    {
        this.media = media;
    }
    
}

const MediaGallery = []
for (let item of media)
{
    const mda = new Media(item);
    MediaGallery.push(mda)
}

function showPhotographerHeaderSection(array, ptIndex)
{
    document.getElementById("testphotographers").innerHTML = array[ptIndex].showIndividualProfile();
}


// const filterPhotographersByTag = (tag) =>
// {
//   let filteredPhotographers = [];
//   photographer = photographersGroup.filter(photographer => photographer.photographer.tags.includes(tag))
//   filteredPhotographers.push(photographer)
//   return filteredPhotographers[0]
//   // Qestion : Why [0] have to be there?
// }

// fucntion to make an array of a photographer
const createMediaArrayOfPhotographer = (ptId) =>
{
    let mediaGroupByPhotographers = [];
    md = MediaGallery.filter(media => media.media.photographerId === ptId)
    mediaGroupByPhotographers.push(md)
    return mediaGroupByPhotographers[0]
}

let test2 = createMediaArrayOfPhotographer(82)
// console.log(test[0].media.image);

// function to generate gallery of photographers
const generateGallery = (array) => 
{
    // need to have a filter or if statement to check if its image or video
  return array.map(media => `
    <article class="image-item">
        <img src="./img/Tracy/${media.media.image}"/>
        <div class="img-title">
            <p>${media.media.title}</p>
            <div class="rating">
                <p>${media.media.likes}</p>
                <i class="fas fa-heart"></i>
            </div>
        </div>
    </article>
  `).join('')
}


const renderTestPage = () =>
{
    showTestPageHeader();
    showPhotographerHeaderSection(photographersGroup, 1)
}

renderTestPage()




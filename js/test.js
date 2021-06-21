function showTestPageHeader()
{
  document.getElementById("body").innerHTML = 
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
    getPhotographerID()
    {
        return this.media.photographerId
    }

    createGallery()
    {
        if (this.media.video)
        {  
            return `
                <article class="image-item">        
                        <video width="350" height="300" controls="controls" preload="metadata" poster="./img/PhotographersIDPhotos/${getPhotographerFullNameById(this.media.photographerId)}.jpg">
                            <source src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.video}" type="video/mp4">
                        </video>

                    <div class="img-title">
                        <p>${this.media.title}</p>
                        <div class="rating">
                            <p>${this.media.likes}</p>
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                </article>
            `

        }
      

        return `
            <article class="image-item">
             
                
                <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}"/>
                <div class="img-title">
                    <p>${this.media.title}</p>
                    <div class="rating">
                        <p>${this.media.likes}</p>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </article>
        `
    }

}

const MediaGalleryOfAllPhotographers = []
for (let item of media)
{
    const mda = new Media(item);
    MediaGalleryOfAllPhotographers.push(mda)
}

function createMediaGroup (array)
{
    return array.map(media => media.createGallery())
}

const MediaGalleryByPhotographer = []
for (let item of MediaGalleryOfAllPhotographers)
{
    const mda = new Media(item);
    MediaGalleryByPhotographer.push(mda)
}

// fucntion to make an gallery of a photographer
function createMediaArrayOfPhotographer(ID) 
{
    let mediaGroupByPhotographers = [];
    md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ID)
    mediaGroupByPhotographers.push(md)
    return mediaGroupByPhotographers[0]
}

function showPhotographerMainSection(array, id)
{
    document.getElementById("testphotographers").innerHTML = array.find(photographer => photographer.photographer.id === id).showIndividualProfile(id);
}

function getPhotographerNameById(ID)
{
    let photographerName = []
    photographer = photographersGroup.filter(photographer => photographer.photographer.id == ID)
    photographerName.push(photographer)
    return photographerName[0][0].photographer.name.split(" ")[0]
}


function getPhotographerFullNameById(ID)
{
    let photographerName = []
    photographer = photographersGroup.filter(photographer => photographer.photographer.id == ID)
    photographerName.push(photographer)
    return photographerName[0][0].photographer.name.split(' ').join('').replace('-', '')
}

console.log(getPhotographerFullNameById(82));

function renderTestPage(id)
{
    showTestPageHeader();
    showPhotographerMainSection(photographersGroup, id)
}








//---------------------------------------------------------


// function showPhotographerMainSection(array, ptIndex, id)
// {
//     document.getElementById("testphotographers").innerHTML = array[ptIndex].showIndividualProfile(ptIndex);
//     // createMediaArrayOfPhotographer(id)
//     // createMediaArrayOfPhotographer(ptIndex)
// }

// console.log(photographersGroup[0].getID());

// console.log(createMediaArrayOfPhotographer(243));
// function createMediaArrayOfPhotographer(id) 
// {
//     let ptID = photographersGroup[id].getID()
//     let mediaGroupByPhotographers = [];
//     md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ptID)
//     mediaGroupByPhotographers.push(md)
//     return mediaGroupByPhotographers[0]
// }

// let test10 = createMediaArrayOfPhotographer(1)

// console.log(createMediaGroup(test10));

// renderTestPage(195)
// function renderTestPage(index, id)
// {
//     showTestPageHeader();
//     showPhotographerMainSection(photographersGroup, index, id)
// }

// renderTestPage(1,243)


// let test2 = createMediaArrayOfPhotographer(2)

// function makeGallery(index)
// {
//     return MediaGallery[13].createGallery()
// }



// console.log(photographersGroup[0].photographer.id);
// getPhotographerNameById(82)
// console.log(dispTotal(5, 1));

// function dispTotal(x, y){
//   return x + y;
// }

// const renderTestPage = (photographerIndex, photographerID) =>
// {
//     showTestPageHeader();
//     showPhotographerMainSection(photographersGroup, photographerIndex)
// }

// renderTestPage()


// function showPhotographerMainSection(array, ptIndex, value1)
// {
//     document.getElementById("testphotographers").innerHTML = array[ptIndex].showIndividualProfile();
//     let Test = createMediaArrayOfPhotographer(value1)
//     return Test
// }


// const filterPhotographersByTag = (tag) =>
// {
//   let filteredPhotographers = [];
//   photographer = photographersGroup.filter(photographer => photographer.photographer.tags.includes(tag))
//   filteredPhotographers.push(photographer)
//   return filteredPhotographers[0]
//   // Qestion : Why [0] have to be there?
// }



// function createMediaArrayOfPhotographer() 
// {
//     let ptID = photographersGroup[0].getID()
//     let mediaGroupByPhotographers = [];
//     md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ptID)
//     mediaGroupByPhotographers.push(md)
//     return mediaGroupByPhotographers[0]
// }
// function createMediaArrayOfPhotographer(ptId) 
// {
//     let mediaGroupByPhotographers = [];
//     md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ptId)
//     mediaGroupByPhotographers.push(md)
//     return mediaGroupByPhotographers[0]
// }

// console.log(test2);

// console.log(MediaGalleryOfAllPhotographers[1].createGallery(test2));
// let test2 = createMediaArrayOfPhotographer(MediaGalleryOfAllPhotographers[1].getPhotographerID())

// function to generate gallery of photographers
// function generateGallery(array, id)
// {
//     // need to have a filter or if statement to check if its image or video
//   return array.map(media => `
//     <article class="image-item">
//         <img src="./img/${getPhotographerNameById(id)}/${media.media.image}"/>
//         <div class="img-title">
//             <p>${media.media.title}</p>
//             <div class="rating">
//                 <p>${media.media.likes}</p>
//                 <i class="fas fa-heart"></i>
//             </div>
//         </div>
//     </article>
//   `).join('')
// }


// function generateGallery(array)
// {
//     // need to have a filter or if statement to check if its image or video
//   return array.map(media => `
//     <article class="image-item">
//         <img src="./img/Tracy/${media.media.image}"/>
//         <div class="img-title">
//             <p>${media.media.title}</p>
//             <div class="rating">
//                 <p>${media.media.likes}</p>
//                 <i class="fas fa-heart"></i>
//             </div>
//         </div>
//     </article>
//   `).join('')
// }


// function showPhotographerMainSection(array, ptIndex)
// {
//     document.getElementById("testphotographers").innerHTML = array[ptIndex].showIndividualProfile();
//     // return MediaGalleryOfAllPhotographers[ptIndex].getPhotographerID()
// }


// method



    // createMediaArray(index)
    // {
    //     let ptID = photographersGroup[index].getID()
    //     let mediaGroupByPhotographers = [];
    //     let md
    //     md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ptID)
    //     mediaGroupByPhotographers.push(md)
    //     return mediaGroupByPhotographers[0]
    // }


    // createGallery(array)
    // {
    //       return array.map(media => `
    //         <article class="image-item">
    //             <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}"/>
    //             <div class="img-title">
    //                 <p>${this.media.title}</p>
    //                 <div class="rating">
    //                     <p>${this.media.likes}</p>
    //                     <i class="fas fa-heart"></i>
    //                 </div>
    //             </div>
    //         </article>
    //     `).join('')
    // }


    // createGallery()
    // {
    //     return　`
    //         <article class="image-item">
    //             <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}"/>
    //             <div class="img-title">
    //                 <p>${this.media.title}</p>
    //                 <div class="rating">
    //                     <p>${this.media.likes}</p>
    //                     <i class="fas fa-heart"></i>
    //                 </div>
    //             </div>
    //         </article>
    //     `
    // }

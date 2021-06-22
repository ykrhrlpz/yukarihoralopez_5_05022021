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

function renderTestPage(id)
{
    showTestPageHeader();
    showPhotographerMainSection(photographersGroup, id)
}








//---------------------------------------------------------

{/* <article class="image-item">        
                    <video width="350" height="300" controls="controls" preload="metadata" poster="./img/PhotographersIDPhotos/${getPhotographerFullNameById(this.media.photographerId)}.jpg">
                        <source src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.video}" type="video/mp4">
                    </video>

                    <div class="img-title">
                        <p>${this.media.title}</p>
                        <div class="rating">
                            <p>${this.media.likes}</p>
                            <svg id="rating-img" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path class="rating-img-color" d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"/></svg>
                        </div>
                    </div>
                </article> */}

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

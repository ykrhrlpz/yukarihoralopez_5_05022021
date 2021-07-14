function showTestPageHeader()
{
  document.getElementById("body").innerHTML = 
  `
    <header id="header-photographer" role="banner">
        <a aria-label="Fish Eye" href="./index.html">
            <img src="./img/logo.svg" alt="Fisheye home"/>
        </a>
    </header>
    <main id="photographer-indivisual-main"></main>
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
                    <video controls="controls" preload="metadata" poster="./img/PhotographersIDPhotos/${getPhotographerFullNameById(this.media.photographerId)}.jpg">
                        <source src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.video}" type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                    </video>

                    <div class="img-title">
                        <p>${this.media.title}</p>
                        <div class="rating">
                            <p id="number-likes-${this.media.id}">${this.media.likes}</p>
                            <i id="add-${this.media.id}" class="fas fa-heart" aria-hidden="true"></i>
                        </div>
                    </div>
                </article>
                
            `   
        }

        return `
            <article class="image-item">
             
                <div>
                    <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}" alt="${this.media.altDescription}" tabindex="0"/>
                </div>
                <div class="img-title">
                    <p>${this.media.title}</p>
                    <div class="rating">
                        <p id="number-likes-${this.media.id}">${this.media.likes}</p>
                        <i id="add-${this.media.id}" class="fas fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            </article> 
        `   
    }
    getLikes()
    {
        return this.media.likes
    }
}



 
//make an array of all the media from every photographer
const MediaGalleryOfAllPhotographers = []
for (let item of media)
{
    const mda = new Media(item);
    MediaGalleryOfAllPhotographers.push(mda)
}

//Function to create an array of media group
function createMediaGroup (array)
{
    return array.map((media, index) => media.createGallery(index))
}

// /make an array of all the media from a photographer
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

// fucntion to sort gallery of a photographer by date
function createMediaArrayOfPhotographerByDate(ID) 
{
    let mediaGroupByPhotographers = [];
    md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ID)
    mediaGroupByPhotographers.push(md)
     mediaGroupByPhotographers[0].sort(function(a,b){
        // Turn the strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.media.date) - new Date(b.media.date)
    })
    return mediaGroupByPhotographers[0]
}

//function to sort gallaery by title
function compare_to_sort(x,y) 
{
    if (x.media.title < y.media.title)
    return -1;

    if (x.media.title > y.media.title)
    return 1;

    return 0;
}

// fucntion to sort gallery of a photographer by title
function createMediaArrayOfPhotographerByTitle(ID) 
{
    let mediaGroupByPhotographers = [];
    md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ID)
    mediaGroupByPhotographers.push(md)
     mediaGroupByPhotographers[0].sort(compare_to_sort)
    return mediaGroupByPhotographers[0]
}

// fucntion to sort gallery of a photographer by title
function createMediaArrayOfPhotographerByPopularity(ID) 
{
    let mediaGroupByPhotographers = [];
    md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ID)
    mediaGroupByPhotographers.push(md)
     mediaGroupByPhotographers[0].sort((a, b) => b.media.likes - a.media.likes)
    return mediaGroupByPhotographers[0]
}

// function to insert sorted gallery to DOM 
function showGallerySortedByDate(ID)
{
    let content = createMediaGroup(createMediaArrayOfPhotographerByDate(ID)).join("")
    document.getElementById("photo-gallery").innerHTML = content
}

// function to insert sorted gallery to DOM 
function showGallerySortedByTitle(ID)
{
    let content = createMediaGroup(createMediaArrayOfPhotographerByTitle(ID)).join("")
    document.getElementById("photo-gallery").innerHTML = content
}

// function to insert sorted gallery to DOM 
function showGallerySortedBypopularity(ID)
{
    let content = createMediaGroup(createMediaArrayOfPhotographerByPopularity(ID)).join("")
    document.getElementById("photo-gallery").innerHTML = content
}

//function to show the main secton of each photographer page
function showPhotographerMainSection(array, id)
{
    document.getElementById("photographer-indivisual-main").innerHTML = array.find(photographer => photographer.photographer.id === id).showIndividualProfile(id);
}




//function to get photographer name from their ID
function getPhotographerNameById(ID)
{
    let photographerName = []
    photographer = photographersGroup.filter(photographer => photographer.photographer.id == ID)
    photographerName.push(photographer)
    return photographerName[0][0].photographer.name.split(" ")[0]
}

//function to get photographer fullname from their ID
function getPhotographerFullNameById(ID)
{
    let photographerName = []
    photographer = photographersGroup.filter(photographer => photographer.photographer.id == ID)
    photographerName.push(photographer)
    return photographerName[0][0].photographer.name.split(' ').join('').replace('-', '')
}

// Create an array of likes from photographer gallery
function getArrayOfLikes(array)
{
    // console.log(array.map(media => media.getLikes())) 
   return array.map(media => media.getLikes())
}

// function to get a sum of all the likes a photograher has
function showSumOfLikes(id)
{
    let totalLikes = 0
    createMediaArrayOfPhotographer(id).forEach(item =>
    {
        totalLikes = totalLikes + parseInt(document.getElementById(`number-likes-${item.media.id}`).textContent)
    })
    return totalLikes
}

function showTotalLikes(id)
{
    document.getElementById("total-likes").textContent = showSumOfLikes(id)
}

// function to render photographer's page
function renderPhotographerIndividualPage(id)
{

    showTestPageHeader();
    showPhotographerMainSection(photographersGroup, id)

    

    // initCarousel();

    createMediaArrayOfPhotographer(id).forEach(item =>
    {
        document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
        { 
            let numberLike = document.getElementById(`number-likes-${item.media.id}`).textContent
            document.getElementById(`number-likes-${item.media.id}`).textContent = parseInt(numberLike) + 1
            showTotalLikes(id)
        })
    })

    showTotalLikes(id)

    // Contact Modal Starts here/////////////////////////////////////

    let modalbg = document.querySelector(".bground");
    let modalBtn = document.querySelectorAll(".modal-btn");
    let form = document.getElementById("contact-form");
    let closeIcon = document.querySelector(".close");

        ////////// Form inputs
    let formDataFirstName = document.getElementById("formData-first")
    let formDataLastName = document.getElementById("formData-last")
    let formDataEmail = document.getElementById("formData-email")
    let formDataMessage = document.getElementById("formData-message")

    function launchModal()
    {
        modalbg.style.display = "block";
    }

    function closeModal()
    {
        modalbg.style.display = "none";
    }

    function outputForValue()
    {
        console.log("Name:", formDataFirstName.value + " " + formDataLastName.value);
        console.log("Email:", formDataEmail.value);
        console.log("Message:", formDataMessage.value);
    }

        ////////// launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

    closeIcon.addEventListener("click", () => 
    {
        closeModal();
    });

    form.addEventListener("submit", event => 
    {
        event.preventDefault();
        outputForValue()
    })
    // Contact Modal Ends here//////////////////////////////////////////////////////////

    // Sort image gallery by selecting selectbox
    document.getElementById("selectbox").addEventListener("change", () => 
    {
        let selectboxvalue = document.getElementById("selectbox");
        let value = selectboxvalue.options[selectboxvalue.selectedIndex].value;
        switch(value)
        {
            case "popularity":
                showGallerySortedBypopularity(id)
                createMediaArrayOfPhotographer(id).forEach(item =>
                {
                    document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
                    { 
                        let numberLike = document.getElementById(`number-likes-${item.media.id}`).textContent
                        document.getElementById(`number-likes-${item.media.id}`).textContent = parseInt(numberLike) + 1
                        showTotalLikes(id)
                    })
                })
                // showTotalLikes(id)
     
                break;

            case "date":
                showGallerySortedByDate(id) 
                createMediaArrayOfPhotographer(id).forEach(item =>
                {
                    document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
                    { 
                        let numberLike = document.getElementById(`number-likes-${item.media.id}`).textContent
                        document.getElementById(`number-likes-${item.media.id}`).textContent = parseInt(numberLike) + 1
                        showTotalLikes(id)
                    })
                })
                // showTotalLikes(id)

                break;

            case "title":
                showGallerySortedByTitle(id) 
                createMediaArrayOfPhotographer(id).forEach(item =>
                {
                    document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
                    { 
                        let numberLike = document.getElementById(`number-likes-${item.media.id}`).textContent
                        document.getElementById(`number-likes-${item.media.id}`).textContent = parseInt(numberLike) + 1
                        showTotalLikes(id)
                    })
                })
                // showTotalLikes(id)
            
    
                break;

            default:
                createMediaGroup(createMediaArrayOfPhotographer(id)).join("")
                showTotalLikes(id)
        }
    })


    /////Style Selectbox
    const selector = document.querySelector(".custom-selector")
    // selector.addEventListener("change", e => {
    // 	console.log("changed", e.target.value);
    // })

    selector.addEventListener("mousedown", e => {
        e.preventDefault();

        const select = selector.children[0];
        const dropDown = document.createElement("ul");
        dropDown.className = "selector-options";

        [...select.children].forEach(option => {

            const dropDownOption = document.createElement("li");
            dropDownOption.textContent =  option.textContent;

            dropDownOption.addEventListener("mousedown", e => {
                e.stopPropagation();
                select.value = option.value
                selector.value = option.value
                select.dispatchEvent(new Event("change"))
                selector.dispatchEvent(new Event("change"))
                dropDown.remove();
            })

            dropDown.appendChild(dropDownOption)
        });

        selector.appendChild(dropDown);

        // handle click out
        // document.addEventListener("click", e => {
        //     if(!selector.contains(e.target)){
        //         dropDown.remove();
        //     }
        // })
    })
}   
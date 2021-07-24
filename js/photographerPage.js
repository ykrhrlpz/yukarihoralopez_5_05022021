// Function to show the header of individual page 
function showIndividualPageHeader()
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
////////////////////////////////////////////////////////////
 
//make an array of all the media from every photographer
const MediaGalleryOfAllPhotographers = media.map(item => new Media(item))

// /make an array of all the media from one photographer
const MediaGalleryByPhotographer = MediaGalleryOfAllPhotographers.map(item => new Media(item))

////////////////////////////////////////////////////////////

//Function to create an array of media group
function createMediaGroup (array)
{
    return array.map((media, index) => media.createGallery(index))
}

// fucntion to make an gallery of one photographer passing id of photographer
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

// fucntion to sort gallery of a photographer by popularity
function createMediaArrayOfPhotographerByPopularity(ID) 
{
    let mediaGroupByPhotographers = [];
    md = MediaGalleryOfAllPhotographers.filter(media => media.media.photographerId === ID)
    mediaGroupByPhotographers.push(md)
     mediaGroupByPhotographers[0].sort((a, b) => b.media.likes - a.media.likes)
    return mediaGroupByPhotographers[0]
}

// function to insert gallery sorted by date to DOM 
function showGallerySortedByDate(ID)
{
    let content = createMediaGroup(createMediaArrayOfPhotographerByDate(ID)).join("")
    document.getElementById("photo-gallery").innerHTML = content
}

// function to insert gallery sorted by title to DOM 
function showGallerySortedByTitle(ID)
{
    let content = createMediaGroup(createMediaArrayOfPhotographerByTitle(ID)).join("")
    document.getElementById("photo-gallery").innerHTML = content
}

// function to insert gallery sorted by popularity to DOM 
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
   return array.map(media => media.getLikes())
}

// function to get a sum of all the likes a photograher has
function calculateSumOfLikes(id)
{
    let totalLikes = 0
    createMediaArrayOfPhotographer(id).forEach(item =>
    {
        totalLikes = totalLikes + parseInt(document.getElementById(`number-likes-${item.media.id}`).textContent)
    })
    return totalLikes
}

//function to show the total number of likes in HTML
function showTotalLikes(id)
{
    document.getElementById("total-likes").textContent = calculateSumOfLikes(id)
}

// function to render photographer's page
function renderPhotographerIndividualPage(id)
{
    showIndividualPageHeader();
    showPhotographerMainSection(photographersGroup, id)

    //---------------------------- Contact Modal

    let modalbg = document.querySelector(".bground");
    let modalBtn = document.querySelectorAll(".modal-btn");
    let form = document.getElementById("contact-form");
    let closeIcon = document.querySelector(".close");
    let closeFormModal = document.getElementById("form-modal-close");
    const body = document.getElementById("body")
    let modalOpenBtn = document.querySelector(".contact-button");
    let main = document.getElementById("photographer-indivisual-main");

        ////////// Form inputs
    let formDataFirstName = document.getElementById("formData-first")
    let formDataLastName = document.getElementById("formData-last")
    let formDataEmail = document.getElementById("formData-email")
    let formDataMessage = document.getElementById("formData-message")
    //----------------------------

    createMediaArrayOfPhotographer(id).forEach(item =>
    {
        //add eventlister to the element with the unique id
        document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
        { 
            // Increment the number of likes everytime a user clicks a heart icon
            media[media.findIndex(mda => mda.id == item.media.id)].likes = media[media.findIndex(mda => mda.id == item.media.id)].likes + 1
            document.getElementById(`number-likes-${item.media.id}`).textContent = media[media.findIndex(mda => mda.id == item.media.id)].likes
            showTotalLikes(id)
        })
    })

    showTotalLikes(id)

    //---------------------------- Contact Modal
    //function to launch modal
    function launchModal()
    {
        modalbg.style.display = "block";
        main.setAttribute("aria-hidden", "true")
        modalbg.setAttribute('aria-hidden', 'false')
        main.classList.add("no-scroll")
        closeFormModal.focus()
    }
    //function to closse modal
    function closeModal()
    {
        modalbg.style.display = "none";
        main.setAttribute("aria-hidden", "false")
        modalbg.setAttribute('aria-hidden', 'true')
        main.classList.remove("no-scroll")
        modalOpenBtn.focus()
    }

    // function to log the input value a user enter
    function outputForValue()
    {
        console.log("Name:", formDataFirstName.value + " " + formDataLastName.value);
        console.log("Email:", formDataEmail.value);
        console.log("Message:", formDataMessage.value);

        closeModal()
    }

    //Launch modal event
    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

    closeIcon.addEventListener("click", () => 
    {
        closeModal();
    });
    
    //Submit modal event
    form.addEventListener("submit", event => 
    {
        event.preventDefault();
        outputForValue()
    })

    // Close Modal when a user presses escape key
    document.addEventListener('keydown', e =>
    {
        if(e.code === 'Escape' )
        {
            closeModal()
        }
    })
    //---------------------------- 

    //---------------------------- Select Box

    let selector = document.querySelector(".custom-selector")

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
                        // On click, increment the current likes for this media. 
                        media[media.findIndex(mda => mda.id == item.media.id)].likes = media[media.findIndex(mda => mda.id == item.media.id)].likes + 1
                        // Refreshing text content
                        document.getElementById(`number-likes-${item.media.id}`).textContent = media[media.findIndex(mda => mda.id == item.media.id)].likes
                        showTotalLikes(id)
                        
                    })
                })
     
                break;

            case "date":
                showGallerySortedByDate(id) 

                createMediaArrayOfPhotographer(id).forEach(item =>
                {
                    document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
                    { 
                        // On click, increment the current likes for this media. 
                        media[media.findIndex(mda => mda.id == item.media.id)].likes = media[media.findIndex(mda => mda.id == item.media.id)].likes + 1
                        // Refreshing text content
                        document.getElementById(`number-likes-${item.media.id}`).textContent = media[media.findIndex(mda => mda.id == item.media.id)].likes
                        showTotalLikes(id)
                    })
                })

                break;

            case "title":
                showGallerySortedByTitle(id) 

                createMediaArrayOfPhotographer(id).forEach(item =>
                {
                    document.getElementById(`add-${item.media.id}`).addEventListener("click", () => 
                    { 
                        // On click, increment the current likes for this media. 
                        media[media.findIndex(mda => mda.id == item.media.id)].likes = media[media.findIndex(mda => mda.id == item.media.id)].likes + 1
                        // Refreshing text content
                        document.getElementById(`number-likes-${item.media.id}`).textContent = media[media.findIndex(mda => mda.id == item.media.id)].likes
                        showTotalLikes(id)
                    })
                })

                break;

            default:
                createMediaGroup(createMediaArrayOfPhotographer(id)).join("")
                showTotalLikes(id)
        }

        SetGalleryListeners()
    })

    //---------------------------- Style Selectbox 
    selector.addEventListener("mousedown", e => 
    {
        e.preventDefault();

        const select = selector.children[0];
        const dropDown = document.createElement("ul");
        dropDown.className = "selector-options";

        [...select.children].forEach(option => 
        {
            const dropDownOption = document.createElement("li");
            dropDownOption.textContent =  option.textContent;

            dropDownOption.addEventListener("mousedown", e => 
            {
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
    })

    SetGalleryListeners()
}

// Lightbox starts here ----------------------------------------------------------------

function SetGalleryListeners()
{
    const gallery  = document.querySelectorAll(".image");
    previewBox = document.querySelector(".preview-box");
    previewImg = previewBox.querySelector("img");
    closeIconLightbox = previewBox.querySelector(".icon");
    currentImg = previewBox.querySelector(".current-img");
    totalImg = previewBox.querySelector(".total-img");
    shadow = document.querySelector(".shadow");

    function onNextAction (newIndex, nextBtn, prevBtn) 
    {
        if(newIndex < gallery.length - 1) newIndex++; //increment index if only I am not at last index right now.

        preview(newIndex); // Render the new preview

        if(newIndex >= gallery.length - 1)
        {
            prevBtn.style.display = "block"; 
            nextBtn.style.display = "none"; // If now that we increment newIndex, am I at the last index? If yes, display none.
        } 
        else 
        {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        }

        return newIndex;
    }

    function onPrevAction (newIndex, nextBtn, prevBtn) 
    {
        if(newIndex !== 0) newIndex--; //decrement index if only I am not at 0 right now.

        preview(newIndex); // Render the new preview

        if(newIndex == 0)
        {
            prevBtn.style.display = "none"; // If now that we decremented newIndex, am I at 0? If yes, display none.
            nextBtn.style.display = "block";
        } 
        else 
        {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
        }

        return newIndex;
    }

    function preview(newIndex)
    {
        currentImg.textContent = newIndex ; //passing current img index to currentImg varible with adding +1
        let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
        previewImg.src = imageURL; //passing user clicked img url in previewImg src

        // Updatge the title of the image in a light box
        let descriptionText = document.querySelectorAll(".media-title")[newIndex].textContent; 
        document.querySelectorAll(".lightbox-image-description")[0].querySelector("p").textContent = descriptionText
    }

    function onEscapeAction(clickedImgIndex, nextBtn, prevBtn, previewBox, shadow)
    {
        newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
        prevBtn.style.display = "block"; 
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
    }

    for (let i = 0; i < gallery.length; i++) 
    {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>
        {  
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)

            preview(newIndex); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if(newIndex == 0)
            { //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1)
            { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }

            prevBtn.onclick = () => newIndex = onPrevAction(newIndex, nextBtn, prevBtn)
            nextBtn.onclick = () => newIndex = onNextAction(newIndex, nextBtn, prevBtn)
            
            // Go though images in lightbox 
            document.onkeydown = function(e) 
            {
                if (e.key === "ArrowLeft") newIndex = onPrevAction(newIndex, nextBtn, prevBtn)
                if (e.key === "ArrowRight") newIndex = onNextAction(newIndex, nextBtn, prevBtn)
                if (e.key === "Escape") { e.preventDefault(); onEscapeAction(clickedImgIndex, nextBtn, prevBtn, previewBox, shadow) }
            }

            closeIconLightbox.onclick = ()=> onEscapeAction(clickedImgIndex, nextBtn, prevBtn, previewBox, shadow)

            const main = document.getElementById("photographer-indivisual-main");
            const lightmodal = document.getElementById("lightbox-modal")
            const galleryWrapper = document.getElementById("gallery-wrapper")

            // Displays the actual lightbox
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            main.setAttribute("aria-hidden", "true")
            main.setAttribute("visibility", "hidden")
            lightmodal.setAttribute('aria-hidden', 'false')
            galleryWrapper.setAttribute("aria-hidden", "true")
            galleryWrapper.setAttribute("visibility", "hidden")
        }
       
          // Open a lightbox with keyboard
          gallery[i].addEventListener('keydown', e => 
          {
              if (e.code === 'Enter')
              {
                clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)

                preview(newIndex); //calling above function
        
                const prevBtn = document.querySelector(".prev");
                const nextBtn = document.querySelector(".next");

                if(newIndex == 0)
                { //if index value is equal to 0 then hide prevBtn
                    prevBtn.style.display = "none"; 
                }
                if(newIndex >= gallery.length - 1)
                { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                    nextBtn.style.display = "none"; 
                }

                prevBtn.onclick = () => newIndex = onPrevAction(newIndex, nextBtn, prevBtn)
                nextBtn.onclick = () => newIndex = onNextAction(newIndex, nextBtn, prevBtn)
                
                // Go though images in lightbox 
                document.onkeydown = function(e) 
                {
                    if (e.key === "ArrowLeft") newIndex = onPrevAction(newIndex, nextBtn, prevBtn)
                    if (e.key === "ArrowRight") newIndex = onNextAction(newIndex, nextBtn, prevBtn)
                    if (e.key === "Escape") { e.preventDefault(); onEscapeAction(clickedImgIndex, nextBtn, prevBtn, previewBox, shadow) }
                }

                closeIconLightbox.onclick = ()=> onEscapeAction(clickedImgIndex, nextBtn, prevBtn, previewBox, shadow)

                const main = document.getElementById("photographer-indivisual-main");
                const lightmodal = document.getElementById("lightbox-modal")
                const galleryWrapper = document.getElementById("gallery-wrapper")


                // Displays the actual lightbox
                document.querySelector("body").style.overflow = "hidden";
                previewBox.classList.add("show"); 
                shadow.style.display = "block";   
                
                main.setAttribute("aria-hidden", "true")
                main.setAttribute("visibility", "hidden")
                lightmodal.setAttribute('aria-hidden', 'false')
                galleryWrapper.setAttribute("aria-hidden", "true")
                galleryWrapper.style.visibility = "hidden"
              }
          })
    }
}




 //getting all required elements
 const gallery  = document.querySelectorAll(".image"),
 previewBox = document.querySelector(".preview-box"),
 previewImg = previewBox.querySelector("img"),
 closeIcon = previewBox.querySelector(".icon"),
 currentImg = previewBox.querySelector(".current-img"),
 totalImg = previewBox.querySelector(".total-img"),
 shadow = document.querySelector(".shadow");
 
 window.onload = ()=>{
     for (let i = 0; i < gallery.length; i++) {
         totalImg.textContent = gallery.length; //passing total img length to totalImg variable
         let newIndex = i; //passing i value to newIndex variable
         let clickedImgIndex; //creating new variable
         
         gallery[i].onclick = () =>{
             clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
             function preview(){
                 currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                 let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                 previewImg.src = imageURL; //passing user clicked img url in previewImg src

                 let descriptionText = document.querySelectorAll(".img-title")[newIndex].querySelector(".media-title").textContent; //getting user clicked img url
                 document.querySelectorAll(".lightbox-image-description")[0].querySelector("p").textContent = descriptionText
                
             }
             preview(); //calling above function
     
             const prevBtn = document.querySelector(".prev");
             const nextBtn = document.querySelector(".next");
             if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                 prevBtn.style.display = "none"; 
             }
             if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                 nextBtn.style.display = "none"; 
             }
             prevBtn.onclick = ()=>{ 
                 newIndex--; //decrement index
                 if(newIndex == 0){
                     preview(); 
                     prevBtn.style.display = "none"; 
                 }else{
                     preview();
                     nextBtn.style.display = "block";
                 } 
             }
             nextBtn.onclick = ()=>{ 
                 newIndex++; //increment index
                 if(newIndex >= gallery.length - 1){
                     preview(); 
                     nextBtn.style.display = "none";
                 }else{
                     preview(); 
                     prevBtn.style.display = "block";
                 }
             }
             document.querySelector("body").style.overflow = "hidden";
             previewBox.classList.add("show"); 
             shadow.style.display = "block"; 
             closeIcon.onclick = ()=>{
                 newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                 prevBtn.style.display = "block"; 
                 nextBtn.style.display = "block";
                 previewBox.classList.remove("show");
                 shadow.style.display = "none";
                 document.querySelector("body").style.overflow = "scroll";
             }
         }
         
     }
     
 }

    //         return `
    //         <article class="image-item">        
    //             <video controls="controls" preload="metadata" poster="./img/PhotographersIDPhotos/${getPhotographerFullNameById(this.media.photographerId)}.jpg">
    //                 <source src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.video}" type="video/mp4">
    //                 Sorry, your browser doesn't support embedded videos.
    //             </video>

    //             <div class="img-title">
    //                 <p>${this.media.title}</p>
    //                 <div class="rating">
    //                     <p id="number-likes-${this.media.id}">${this.media.likes}</p>
    //                     <i id="add-${this.media.id}" class="fas fa-heart" aria-hidden="true"></i>
    //                 </div>
    //             </div>
    //         </article>
            
    //     `   
    // }

    // return `
    //     <article class="image-item">
         
    //         <div onclick="(() => { document.getElementsByClassName('carousel-modal')[0].classList.toggle('opened', true)})()">
    //             <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}" alt="${this.media.altDescription}" tabindex="0"/>
    //         </div>
    //         <div class="img-title">
    //             <p>${this.media.title}</p>
    //             <div class="rating">
    //                 <p id="number-likes-${this.media.id}">${this.media.likes}</p>
    //                 <i id="add-${this.media.id}" class="fas fa-heart" aria-hidden="true"></i>
    //             </div>
    //         </div>
    //     </article> 
    // `   

// // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
// // let itemClassName = "carousel__photo";
// // let items = document.getElementsByClassName("carousel__photo");
// // let totalItems = items.length;
// // let slide = 0;
// // let moving = true;

// let itemClassName = "carousel__photo";
// let slide = 0;
// let moving = true;



// // To initialise the carousel we'll want to update the DOM with our own classes
// const setInitialClasses = () => 
// {

//   let items = document.getElementsByClassName("carousel__photo");
//   let totalItems = items.length;
    
//   // Target the last, initial, and next items and give them the relevant class.
//   // This assumes there are three or more items.
//   items[totalItems - 1].classList.add("prev");
//   items[0].classList.add("active");
//   items[1].classList.add("next");
// }

// // Set click events to navigation buttons

// const setEventListeners = () => 
// {
//   var next = document.getElementsByClassName('carousel__button--next')[0],
//       prev = document.getElementsByClassName('carousel__button--prev')[0];

//   next.addEventListener('click', moveNext);
//   prev.addEventListener('click', movePrev);
// }

// // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
// const disableInteraction = () => {
//   moving = true;

//   setTimeout(function(){
//     moving = false
//   }, 500);
// }

// const moveCarouselTo  = (slide) => {
//     let items = document.getElementsByClassName("carousel__photo");
//     let totalItems = items.length;

//   // Check if carousel is moving, if not, allow interaction
//   if(!moving) {

//     // temporarily disable interactivity
//     disableInteraction();

//     // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
//     var newPrevious = slide - 1,
//         newNext = slide + 1,
//         oldPrevious = slide - 2,
//         oldNext = slide + 2;

//     // Test if carousel has more than three items
//     if ((totalItems - 1) > 3) {

//       // Checks if the new potential slide is out of bounds and sets slide numbers
//       if (newPrevious <= 0) {
//         oldPrevious = (totalItems - 1);
//       } else if (newNext >= (totalItems - 1)){
//         oldNext = 0;
//       }

//       // Check if current slide is at the beginning or end and sets slide numbers
//       if (slide === 0) {
//         newPrevious = (totalItems - 1);
//         oldPrevious = (totalItems - 2);
//         oldNext = (slide + 1);
//       } else if (slide === (totalItems -1)) {
//         newPrevious = (slide - 1);
//         newNext = 0;
//         oldNext = 1;
//       }

//       // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.

//       // Based on the current slide, reset to default classes.
//       items[oldPrevious].className = itemClassName;
//       items[oldNext].className = itemClassName;

//       // Add the new classes
//       items[newPrevious].className = itemClassName + " prev";
//       items[slide].className = itemClassName + " active";
//       items[newNext].className = itemClassName + " next";
//     }
//   }
// }

// // Next navigation handler
// const moveNext = () => {
//     let items = document.getElementsByClassName("carousel__photo");
//     let totalItems = items.length;
//   // Check if moving
//   if (!moving) {

//     // If it's the last slide, reset to 0, else +1
//     if (slide === (totalItems - 1)) {
//       slide = 0;
//     } else {
//       slide++;
//     }

//     // Move carousel to updated slide
//     moveCarouselTo(slide);
//   }
// }

// // Previous navigation handler
// const movePrev = () => {
//     let items = document.getElementsByClassName("carousel__photo");
//     let totalItems = items.length;
//   // Check if moving
//   if (!moving) {

//     // If it's the first slide, set as the last slide, else -1
//     if (slide === 0) {
//       slide = (totalItems - 1);
//     } else {
//       slide--;
//     }

//     // Move carousel to updated slide
//     moveCarouselTo(slide);
//   }
// }



// // Initialise carousel
// const initCarousel = () => 
// {

//     setInitialClasses();
//     setEventListeners();

//     // Set moving to false now that the carousel is ready
//     moving = false;
// }

// // make it rain
// // initCarousel();


//HomePageFunction.js------------------------------------------------


{/* <div class="select" tabindex="1">
					<input class="selectopt" name="test" type="radio" id="opt1" checked>
					<label for="opt1" class="option">Popularity</label>
					<input class="selectopt" name="test" type="radio" id="opt2">
					<label for="opt2" class="option">Date</label>
					<input class="selectopt" name="test" type="radio" id="opt3"　onclick="w3.sortHTML('#photo-gallery', 'article')">
					<label for="opt3" class="option">Title</label>
				</div> */}
// <div id="photo-gallery">
// 				${createMediaGroup(createMediaArrayOfPhotographer(ID)).join("")}
// 			</div>

// let test = createMediaGroup(createMediaArrayOfPhotographer(82)).join("")
// console.log(test);
// function myFunction() {

// 	let test = createMediaGroup(createMediaArrayOfPhotographer(82)).join("")
// 	createMediaGroup(createMediaArrayOfPhotographer(82)).join("").sort(function(a, b){return new Date(a.media.date) - new Date(b.media.date)});
// 	document.getElementById("photo-gallery").innerHTML = createMediaGroup(createMediaArrayOfPhotographer(82)).join("");
//   }

	// <article class="photographer">
	// 	<div onclick="renderPhotographerIndividualPage(${this.photographer.id})">
	// 		<img class="profile-img" src="./img/${getPhotographerNameById(this.photographer.id)}/${this.photographer.portrait}" alt="">
	// 		<h2>${this.photographer.name}</h2>
	// 	</div>
	// 	<h5>${this.photographer.city}, ${this.photographer.country}</h5>
	// 	<p class="description">${this.photographer.tagline}</p>
	// 	<p class="price-per-day">$${this.photographer.price}/day</p>
	// 	${generateTags(this.photographer.tags)}
	// </article>

	// <article class="photographer">
		// 		<a href="test.html" target="_blank" onclick="showTestPageHeader">
		// 			<img class="profile-img" src="${this.photographer.photo}" alt="Thumnail image of ${this.photographer.name}">
		// 			<h2>${this.photographer.name}</h2>
		// 		</a>
		// 		<h5>${this.photographer.city}, ${this.photographer.country}</h5>
		// 		<p class="description">${this.photographer.tagline}</p>
		// 		<p class="price-per-day">$${this.photographer.price}/day</p>
		// 		${generateTags(this.photographer.tags)}
		// 	</article>

    // <a href="test.html" target="_blank" onclick="renderPhotographerIndividualPage(${this.photographer.id})">
	// 		<img class="profile-img" src="${this.photographer.photo}" alt="Thumnail image of ${this.photographer.name}">
    //     	<h2>${this.photographer.name}</h2>
	// 	</a>
    //  <div class="photo-gallery">
    //     	${generateGallery(test2, ID)}

	// ${makeGallery(index)}
        	
    //     </div>

// ${generateGallery(test2, 243)}



// function showHomeMainSection (array)
// {
//     const group = [];
//     for (i = 0; i < array.length; i++) 
//     {
//         let select = array[i].showProfileInMain(); 
//         group.push(select)
//     }
//     document.getElementById("photographers").innerHTML = group;
// }


// method

// getID()
	// {
	// 	return this.photographer.id
	// }



{/* <article class="image-item">
             
                
<img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}"/>
<div class="img-title">
    <p>${this.media.title}</p>
    <div class="rating">
        <p>${this.media.likes}</p>
        <i class="fas fa-heart"></i>
    </div>

    <p id=\`number-likes-${this.media.photographerId}\`>${this.media.likes}</p>
                        <i id=\`add-${this.media.photographerId}\` class="fas fa-heart"></i>
</div>
</article> */}

//original Array
// const array1 = createMediaArrayOfPhotographer(243)

//  //Sorted array　Date ascending order
// const newArray = 
// array1.slice().sort(function(a,b){
//     // Turn the strings into dates, and then subtract them
//     // to get a value that is either negative, positive, or zero.
//     return new Date(a.media.date) - new Date(b.media.date)
// })
// const newArray1 = 
// array1.slice().sort(compare_to_sort)
// const newArray2 = 
// array1.slice().sort((a, b) => b.media.likes - a.media.likes)


// let btnAdd = document.querySelector("#add")
// let numberLikes = document.querySelector("#number-likes")

// console.log(numberLikes)

// btnAdd.addEventListener("click", () =>
//     {
//         numberLikes.textContent = parseInt(numberLikes.textContent) + 1
//     })


//increment value of likes
// let btnAdd = document.querySelector("#add")
// let numberLikes = document.querySelector("#number-likes")
// btnAdd.addEventListener("click", () =>
// {
//     p.textContent = parseInt(p.textContent) + 1
// })


// Dropdown starts here------------------------------------

// Dropdown ends here------------------------------------



// function myFunction() {
//     let test = createMediaGroup(createMediaArrayOfPhotographer(82)).join("")
//     // console.log(test);
// 	test.sort(function(a, b){return new Date(a.media.date) - new Date(b.media.date)});
// 	document.getElementById("photo-gallery").innerHTML = test
//     // console.log(test);
//   }

//   console.log(myFunction());
// console.log(array1);
// console.log(newArray2);
// console.log(newArray1);
// console.log(newArray);

//  console.log(array1);

// function waitDOMElement(id)
// {
// 	document.addEventListener('DOMContentLoaded', function()
// 	{
// 		document.getElementById("render-individual-page").addEventListener("keydown", function (e) 
// 		{
// 			if (e.code === "Enter") 
// 			{ 
// 				renderPhotographerIndividualPage(id);
// 			}
// 		});
// 	})
// }
// document.addEventListener('DOMContentLoaded', function()
// {
// 	document.getElementById("render-individual-page").addEventListener("keydown", function (e) 
// 	{
// 		if (e.code === "Enter") 
// 		{ 
// 			renderPhotographerIndividualPage(82);
// 		}
// 	});
// })


// <div class="sort-by">
//     <p>Order by</p>
    
//     <button id="popularity" onclick="showGallerySortedBypopularity(${ID})">Popularity</button>
//     <button id="date" onclick="showGallerySortedByDate(${ID})">Date</button>
//     <button id="title" onclick="showGallerySortedByTitle(${ID})">Title</button>
// </div>




// Test.js
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

// renderPhotographerIndividualPage(195)
// function renderPhotographerIndividualPage(index, id)
// {
//     showTestPageHeader();
//     showPhotographerMainSection(photographersGroup, index, id)
// }

// renderPhotographerIndividualPage(1,243)


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

// const renderPhotographerIndividualPage = (photographerIndex, photographerID) =>
// {
//     showTestPageHeader();
//     showPhotographerMainSection(photographersGroup, photographerIndex)
// }

// renderPhotographerIndividualPage()


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


// function test(id)
// {

//     let MediaGalleryOfAllPhotographerstest = []
//     for (let item of media)
//     {
//         const mda = new Media(item);
//         MediaGalleryOfAllPhotographerstest.push(mda)
//     }
    
//     let numberLikes = createMediaArrayOfPhotographer(id).map(mda => document.querySelector(`#number-likes-${mda.id}`))
//     let btnAdds = createMediaArrayOfPhotographer(id).map(mda => document.querySelector(`#add-${mda.id}`))

//     btnAdds.forEach(item, index => 
//     {
//         numberLike = numberLikes[index]
//         item.addEventListener("click", () =>
//         {
//             numberLike.textContent = parseInt(numberLike.textContent) + 1
//         })
//     })
// }
// function renderPhotographerIndividualPage(id)
// {
//     showTestPageHeader();
//     showPhotographerMainSection(photographersGroup, id)
   

// }

// photographersGroup.forEach(item => 
//     {
        
// let btnAdd = document.querySelector(`#add-${index}`)
//         let numberLikes = document.querySelector(`#number-likes-${index}`)

//         btnAdd.addEventListener("click", () =>
//         {
//             numberLikes.textContent = parseInt(numberLikes.textContent) + 1
//         })
//     })




// function showSumOfLikes(id)
// {
   
//     let result = array.reduce(function(a, b) {
//     return a + b;
    
//     })
//     return result
// }
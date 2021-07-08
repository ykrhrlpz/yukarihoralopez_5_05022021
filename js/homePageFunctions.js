let carouselModelIsOpen = true

class Photographer {
	constructor(photographer) 
	{
		this.photographer = photographer;
	}

	showProfileInMain() 
	{
		return ` 
			<article class="photographer">
				<div id="render-individual-page-${this.photographer.id}" onclick="renderPhotographerIndividualPage(${this.photographer.id})">
					<img class="profile-img" src="./img/PhotographersIDPhotos/${this.photographer.portrait}" alt="" tabindex="0">
					<h2>${this.photographer.name}</h2>
				</div>
				<h5>${this.photographer.city}, ${this.photographer.country}</h5>
				<p class="description">${this.photographer.tagline}</p>
				<p class="price-per-day">$${this.photographer.price}/day</p>
				${generateTags(this.photographer.tags)}
			</article>		
        	`
		
	}

	showIndividualProfile(ID) 
	{
		createMediaArrayOfPhotographer(ID).map(item => item.media.image)
		return `   
			<div class="photographerHeader">
				<div class="photographerHeaderLeft">
						<div>
							<h2>${this.photographer.name}</h2>
							<h5>${this.photographer.city}, ${this.photographer.country}</h5>
							<p class="header-description">${this.photographer.tagline}</p>
							${generateTags(this.photographer.tags)}
						</div>
				</div>
		
				<button class="contact-button modal-btn"">Contact me</button>
				<div class="header-profile-img-container">
					<img class="header-profile-img" src="./img/PhotographersIDPhotos/${this.photographer.portrait}" alt="Thumnail image of ${this.photographer.name}">
				</div>
			</div>
			
			<div class="bground">
			<div class="content">
			  <span class="close"></span>
			  <div class="modal-body">
		
				<p class="modal-body-title">Contact me</p>
				<p class="modal-body-title">${this.photographer.name}</p>
				<form
				  id="contact-form"
				  name="reserve"
				  action="index.html"
				  method="get"
				>
				  <div class="formData">
					<label for="formData-first">First Name</label><br>
					<input
					  class="text-control"
					  type="text"
					  id="formData-first"
					  name="first"
					/><br>
				  </div>
		
				  <div class="formData">
					<label for="formData-last">Last Name</label><br>
					<input
					  class="text-control"
					  type="text"
					  id="formData-last"
					  name="last"
					/><br>
				  </div>
		
				  <div class="formData">
					<label for="formData-email">Email</label><br>
					<input
					  class="text-control"
					  type="email"
					  id="formData-email"
					  name="email"
					/><br>
				  </div>
		
				  <div class="formData">
					<label for="formData-message">Your message</label><br>
					<textarea
						class="text-control textarea-text"
						type="email"
						id="formData-message"
						name="message"
					></textarea>
		
				  </div>
				  <button
					class="btn-submit button"
					type="submit"
					>
					Send
				  </button>
				</form>
			  </div>
			</div>
		  </div>
			
			<div class="sort-by">
				<p>Order by</p>
				
				<button id="popularity" onclick="showGallerySortedBypopularity(${ID})">Popularity</button>
				<button id="date" onclick="showGallerySortedByDate(${ID})">Date</button>
				<button id="title" onclick="showGallerySortedByTitle(${ID})">Title</button>
			</div>

	
			<label>Order by</label>
			<select id="selectbox" onclick="GallerySortedByCategory(${ID})">
				<option value="popularity" id="popularity">Popularity</option>
				<option value="date" id="date">Date</option>
				<option value="title" id="title">Title</option>
			</select>



			<div id="photo-gallery">
				${createMediaGroup(createMediaArrayOfPhotographer(ID)).join("")}
			</div>

			<div class="bottom-card">
				<div class="rating">
					<p id="total-likes"></p>
					<i class="fas fa-heart"></i>
                </div>
				<p>$${this.photographer.price}/day</p>
			</div>

			<div class="carousel-modal">
				<div class="modal-close-icon" onclick="(() => { document.getElementsByClassName('carousel-modal')[0].classList.toggle('opened', false); slide=0; moveCarouselTo(0)})()">
					<i class="fas fa-times fa-2x"></i>
				</div>
				<div class="carousel-wrapper">
					<div class="carousel">
				
					${
						createMediaArrayOfPhotographer(ID).map((item, index) => 
						{

							if (item.media.video)
							return `<video class="carousel__photo ${index == 0 ? 'initial' : null}" controls="controls" preload="metadata" poster="./img/PhotographersIDPhotos/${getPhotographerFullNameById(ID)}.jpg">
										<source src="./img/${getPhotographerNameById(ID)}/${item.media.video}" type="video/mp4">
										Sorry, your browser doesn't support embedded videos.
									</video>`
							else 
							return `<img class="carousel__photo ${index == 0 ? 'initial' : null}" src="./img/${getPhotographerNameById(ID)}/${item.media.image}">`
						}).join("")
					}
					
					<div class="carousel__button--next"><i class="fas fa-angle-right fa-2x carousel-icon"></i></div>
					<div class="carousel__button--prev"><i class="fas fa-angle-left fa-2x carousel-icon"></i></div>
					
					</div>
				</div>
			</div>
			`
		}

	}


function GallerySortedByCategory(id)
{
	let selectboxvalue = document.getElementById("selectbox");
	let value = selectboxvalue.options[selectboxvalue.selectedIndex].value;
	// console.log(value)
	switch(value)
	{
		case "popularity":

			showGallerySortedBypopularity(id)
			// console.log(value)
			break;

		case "date":
			showGallerySortedByDate(id) 
			// console.log(value)
			break;

		case "title":
			showGallerySortedByTitle(id) 
			// console.log(value)
			break;
		default:
			createMediaGroup(createMediaArrayOfPhotographer(ID)).join("")

	}
}

// Creating array of photographers
const photographersGroup = []
for (let photographer of photographers) 
{
	const pt = new Photographer(photographer);
	photographersGroup.push(pt)
}

// function to generate tags of photographers
function generateTags(tags) 
{
	return tags.map(tag => `<button class="category-button mr-1" onclick="showHomeMainSection(filterPhotographersByTag('${tag}'))">#${tag}</button>`).join('')
}

// function to sort photographers by tag
function filterPhotographersByTag(tag) 
{
	let filteredPhotographers = [];
	photographer = photographersGroup.filter(photographer => photographer.photographer.tags.includes(tag))
	filteredPhotographers.push(photographer)
	return filteredPhotographers[0]
}

// function to show Header of the Home page
function showHomePageHeader() {
	document.getElementById("body").innerHTML =
		`
  	<header class="homepage-header" role="banner">
		<a aria-label="Fish Eye" href="./index.html">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="50" viewBox="0 0 200 50">
				<defs>
				<rect id="rect-1" width="200" height="50" x="0" y="0"/>
				<mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="userSpaceOnUse">
					<rect width="200" height="50" x="0" y="0" fill="black"/>
					<use fill="white" xlink:href="#rect-1"/>
				</mask>
				</defs>
				<g>
				<use fill="none" xlink:href="#rect-1"/>
				<g mask="url(#mask-2)">
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M24.7206.911621V6.51058H6.31164V17.5783H21.4333v5.3385H6.31164v16.2761H0V.911621h24.7206z"/>
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M35.63439941 3.6458435c0-1.041687-.39440918-1.953125-1.05194091-2.604187C33.7935791.390625 33.00457764 0 31.95269775 0c-1.05200195 0-1.9724121.390625-2.62994384 1.0416565-.65740967.78125-1.05187989 1.5625-1.05187989 2.604187 0 .911438.39447022 1.8229065 1.05187989 2.473938.78900146.651062 1.5779419 1.041687 2.62994384 1.041687 1.05187989 0 1.97229004-.390625 2.62976075-1.041687.65753173-.6510315 1.05194091-1.4322815 1.05194091-2.473938zm-.78894043 35.546875v-27.994812H28.9282837v27.994812h5.9171753z"/>
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M43.261 36.9792c-2.3669-1.6927-3.5503-4.0365-3.5503-7.0313h5.7857c.1315 1.4323.7889 2.7344 2.1038 3.6458 1.315.9115 2.8929 1.4323 4.8653 1.4323 1.8409 0 3.2873-.3906 4.4707-1.0416 1.1834-.6511 1.7094-1.5625 1.7094-2.7344 0-.9115-.263-1.5625-.789-2.0833-.5259-.5209-1.1834-.7813-2.1038-1.0417-.9205-.2604-2.2354-.3906-3.9448-.651h-.1315l-.7889-.1302c-2.2354-.2605-4.2078-.6511-5.6542-1.1719-1.4464-.5209-2.7614-1.3021-3.5503-2.3438-.9205-1.0416-1.3149-2.3437-1.3149-4.1666 0-1.6927.5259-3.2552 1.4464-4.5573.9204-1.3021 2.3668-2.3438 4.0762-3.125 1.7094-.7813 3.6818-1.0417 5.9172-1.0417 3.5503 0 6.4431.7813 8.547 2.3437 2.2354 1.5626 3.4188 3.7761 3.5503 6.6407h-5.7857c-.1315-1.3021-.7889-2.3438-1.9724-3.125-1.1834-.7813-2.6298-1.3021-4.3392-1.3021s-3.1558.3906-4.0763 1.0417c-1.0519.651-1.5779 1.5625-1.5779 2.7343 0 .7813.263 1.4323.6575 1.823.526.3906 1.1834.651 1.9724.9114.7889.1302 1.9724.3906 3.5503.5208h.5259c2.4984.2605 4.4708.6511 6.1802 1.1719 1.5779.5209 3.0243 1.3021 3.9448 2.474 1.0519 1.1719 1.5779 2.7343 1.5779 4.6875 0 1.6927-.526 3.2552-1.5779 4.5573-1.052 1.3021-2.4984 2.3437-4.3393 3.125-1.8409.651-3.8133 1.0416-6.1801 1.0416-3.8133-.1302-6.8376-.9114-9.2045-2.6041z"/>
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M75.3452.91162v14.32017c.80377-1.07352 1.78334-1.99915 2.8929-2.73159 1.5779-1.0417 3.5503-1.5625 6.0486-1.5625 3.4188 0 6.1802 1.0416 8.284 2.9948 2.1039 2.0833 3.1559 5.3385 3.1559 9.8958v15.3646h-5.9172V24.0887c0-2.6042-.526-4.6875-1.7094-6.1198-1.1834-1.4323-2.8928-2.0833-4.9967-2.0833-1.5779 0-2.8928.3906-4.0763 1.0416-1.1834.7813-1.9724 1.823-2.6298 3.125-.6575 1.3021-.9205 2.9948-.9205 4.8178v14.1927h-5.9171V.91162h5.7856z"/>
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M149.507 11.1976l7.889 21.6146 7.627-21.6146h6.312L158.58 43.4893c-.658 1.6927-1.315 2.9948-1.841 3.9062-.526.9115-1.184 1.5625-2.104 1.9531-.789.3907-1.841.6511-3.287.6511h-6.443v-5.2084h4.207c.789 0 1.447-.1302 1.841-.2604.395-.1302.789-.3906 1.052-.7812.263-.3907.526-1.0417.921-1.8229l1.183-2.7344-11.045-28.125h6.443v.1302z"/>
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M174.0960083 32.68209839c1.1829834 2.08340454 2.89300537 3.77609253 5.12799072 4.9479065 2.23498535 1.17190551 4.86499024 1.82299804 7.7579956 1.69277953 2.23602296 0 4.20800782-.52087402 6.04901124-1.3020935 1.70898437-.91149903 3.15600586-2.08340454 4.33898926-3.51559448 1.184021-1.43231202 1.84100342-3.125 2.23498535-4.94799805h-6.04797363c-.39501954 1.5625-1.184021 2.73440552-2.49902344 3.64590454-1.1829834.91140747-2.76098633 1.3020935-4.60198975 1.3020935-1.57800293 0-2.89300537-.39068603-4.07598877-1.041687-1.184021-.65112305-2.1040039-1.5625-2.76098633-2.73440552-.65802001-1.17190552-.9210205-2.60421753-1.05200195-4.16671753v-.26037598h21.30096436C200 25.9112854 200 25.52069092 200 25.13000488v-1.04159546c0-2.60421753-.65802002-4.94790649-1.84100342-7.03131103-1.1829834-2.08331299-2.76098633-3.64581299-4.86499023-4.6875-2.1040039-1.04159546-4.4710083-1.5625-7.23199463-1.5625-2.76202393 0-5.12799072.65109253-7.23199463 1.8229065-2.1040039 1.17190551-3.68200684 2.8645935-4.86602783 4.94799804-1.1829834 2.08328247-1.70898438 4.6875-1.70898438 7.55200195 0 2.8645935.65698242 5.33859253 1.84100342 7.5520935zm6.04901123-13.93231201c.65698242-1.04159546 1.57702637-1.82287598 2.62896729-2.34368897 1.184021-.52081299 2.3670044-.91149902 3.55102539-.78131103 2.1040039 0 3.94403076.52090454 5.2590332 1.6927185 1.31500244 1.04168701 2.10394287 2.73440552 2.36694336 4.81777954h-15.12097168c.13098145-1.3020935.65698242-2.34378051 1.31500244-3.38549804z"/>
					<path fill="rgb(145,28,28)" fill-rule="evenodd" d="M129.256958 7.9428711h6.18005372c2.23596191 0 3.94494629 1.6927185 3.94494629 3.77603149V35.0262146c0 2.21347046-1.84100342 3.90618896-3.9449463 3.90618896h-31.1630249c-2.23602294 0-3.94500732-1.82290649-3.94500732-3.90618896V11.84909058c0-2.21350098 1.84100342-3.90621949 3.94500733-3.90621949h6.17999267l3.5499878-3.90625h11.70300292l3.5499878 3.90625zm-24.8519287 3.77603149v23.1770935h31.03198242V11.7189026h-7.88897705l-3.41900635-3.90625h-8.28399658l-3.5499878 3.90625h-7.89001464zm15.51593017 1.95309448c-5.3909912 0-9.72998047 4.29690552-9.72998047 9.63549805 0 5.33850097 4.33898926 9.6354065 9.72998047 9.6354065 5.39099121 0 9.73101807-4.29690553 9.73101807-9.6354065 0-5.33859253-4.34002686-9.63549805-9.73101807-9.63549805zm-5.7859497 9.76568604c0 3.125 2.63000488 5.72912597 5.78601074 5.72912597s5.78601074-2.60412597 5.78601074-5.72912597-2.63000488-5.72918702-5.78601074-5.72918702-5.78601074 2.60418702-5.78601074 5.72918702z"/>
				</g>
				</g>
			</svg>
        </a>
        <nav aria-label="Sort photographers by categories" role ="navigation">
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('portrait'))">#Portrait</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('art'))">#Art</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('fashion'))">#Fashion</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('architecture'))">#Architecture</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('travel'))">#Travel</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('sport'))">#Sport</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('animals'))"">#Animals</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('events'))">#Events</button>
        </nav>
        <h1 aria-label="The title of this home page">Our Photographer</h1>
		
    </header>
    <main id="photographers" aria-label="This section shows the list of registered photographers"></main>
  `
}

// function to show the main section of Home page which displays photographers info
function showHomeMainSection(array) 
{
	const group = [];
	array.forEach(item => 
	{
		let select = item.showProfileInMain();
		group.push(select)
	})
	document.getElementById("photographers").innerHTML = group.join("");
}


// wait until all the DOM elements renders
function waitDOMElement()
{
	document.addEventListener('DOMContentLoaded', function()
	{
		photographersGroup.forEach(item => 
		{
			// create a unique id to each photographer
			document.getElementById(`render-individual-page-${item.photographer.id}`).addEventListener("keydown", function (e) 
			{
				if (e.code === "Enter") 
				{ 
					renderPhotographerIndividualPage(item.photographer.id);
				}
			});
		})
	})
}

// Function to render Home page
function renderHomePage() 
{
	showHomePageHeader();
	showHomeMainSection(photographersGroup);
	
}


renderHomePage()
waitDOMElement()

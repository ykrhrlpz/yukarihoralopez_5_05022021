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
					<img class="profile-img" src="./img/PhotographersIDPhotos/${this.photographer.portrait}" alt="leads to individual page" tabindex="0">
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
							${generateTagsForIndividualPage(this.photographer.tags)}
						</div>
				</div>
		
				<button class="contact-button modal-btn">Contact me</button>
				<div class="header-profile-img-container">
					<img class="header-profile-img" src="./img/PhotographersIDPhotos/${this.photographer.portrait}" alt="Thumnail of ${this.photographer.name}">
				</div>
			</div>
			
			<div class="bground" role="dialog">
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

			<div class="selectbox-container">
				<p class="sorting-text">Order by</p>
				<label class="custom-selector">
					
					<select id="selectbox">
						<option value="popularity">Popularity</option>
						<option value="date">Date</option>
						<option value="title">Title</option>
					</select>
				</label>
			</div>


			<div class="gallery-wrapper">
				<div id="photo-gallery" class="gallery">
					${createMediaGroup(createMediaArrayOfPhotographer(ID)).join("")}
				</div>
			</div> 

			<div class="bottom-card">
				<div class="rating">
					<p id="total-likes"></p>
					<i class="fas fa-heart"></i>
                </div>
				<p>$${this.photographer.price}/day</p>
			</div>

		
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

// function to generate tags of photographers｀
function generateTags(tags) 
{
	return tags.map(tag => `<button class="category-button mr-1" onclick="showHomeMainSection(filterPhotographersByTag('${tag}'))">#${tag}</button>`).join('')
}
function generateTagsForIndividualPage(tags) 
{
	return tags.map(tag => `<button class="category-button-individual-page mr-1" tabindex="-1")">#${tag}</button>`).join('')
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
	  
		<a aria-label="Fish Eye" href="./index.html" tabindex="0">
			<img src="./img/logo.svg" alt="Fisheye home"/>		
        </a>
        <nav aria-label="Sort photographers by categories" role ="navigation">
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('portrait'))" >#Portrait</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('art'))" >#Art</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('fashion'))" >#Fashion</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('architecture'))" >#Architecture</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('travel'))" >#Travel</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('sport')) ">#Sport</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('animals'))" >#Animals</button>
            <button class="category-button" onclick="showHomeMainSection(filterPhotographersByTag('events'))" >#Events</button>
        </nav>
        <h1 aria-label="The title of this home page">Our Photographers</h1>
		
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

	setPhotographerListeners(array)
}



function setPhotographerListeners(photographersGroup)
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
}


// Function to render Home page
function renderHomePage() 
{
	showHomePageHeader();
	showHomeMainSection(photographersGroup);
	
	
}


renderHomePage()


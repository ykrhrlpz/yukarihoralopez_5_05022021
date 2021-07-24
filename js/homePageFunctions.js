// Creating array of photographers
// Using filter on media to be able to recover all the media that this photographer owns.
const photographersGroup = photographers.map(photographer => new Photographer(photographer, media.filter(mda => mda.photographerId === photographer.id)))

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

// function to open a photographer's individual page with keyboard
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


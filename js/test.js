function showTestPageHeader()
{
  document.getElementById("body").innerHTML = 
  `
    <header id="header-photographer" role="banner">
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
             
                <div onclick="(() => { document.getElementsByClassName('carousel-modal')[0].classList.toggle('opened', true)})()">
                    <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}"/>
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

    

    initCarousel();

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
}   
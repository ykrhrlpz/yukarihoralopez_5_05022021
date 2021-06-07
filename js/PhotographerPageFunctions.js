
function showPhotographerProfilePageHeader()
{
  document.getElementById("body").innerHTML = 
  `
    <header id="header-photographer">
        <a href="./index.html"><img src="./img/logo.svg" alt="FishEye Home Pag"></a>
    </header>
    <main id="photographers-profile"></main>
  `
  
}

const renderPhotographerPage = () =>
{
    document.getElementById("photographers-profile").innerHTML = 
    `
    <div class="photographerHeader">
        <div class="photographerHeaderLeft">
            <div>
                <h2>${photographers[0].name}</h2>
                <h5>${photographers[0].city}, ${photographers[0].country}</h5>
                <p class="description">${photographers[0].tagline}</p>
                <p class="price-per-day">$${photographers[0].price}/day</p>
            </div>
        </div>
        <div>
            <button class="contact-button">Contact Me</button>
        </div>
        <div>
            <img class="profile-img" src="${photographers[0].photo}" alt="Thumnail image of ${photographers[0].name}">
        </div>
    </div>

    <div class="sortong-dropdown">
        <label for="sorting">Order by</label>
        <select name="sort" id="sorting">
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
        <option value="title">Title</option>
        </select>
    </div>

    <div class="photo-gallary">
        <div>
            <img class="gallary-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of ">
            <div class="gallary-img-description">
                <p>Rainbow</p>
                <div class="rating">
                    <p>12</p>
                    <i class="fas fa-heart"></i>
                </div>


            </div>
        </div>
        <div>
            <img class="gallary-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of ">
        </div>
        <div>
            <img class="gallary-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of ">
        </div>
        <div>
            <img class="gallary-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of ">
        </div>
        <div>
            <img class="gallary-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of ">
        </div>
        <div>
            <img class="gallary-img" src="./img/Mimi/Portrait_Nora.jpg" alt="Thumnail image of ">
        </div>
    </div>

    `
}






function showProfilePage()
{
    showPhotographerProfilePageHeader()
    renderPhotographerPage()
}


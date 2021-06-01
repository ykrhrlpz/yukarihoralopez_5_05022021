//photographer.html page

document.getElementById("photographer").innerHTML = 
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
`
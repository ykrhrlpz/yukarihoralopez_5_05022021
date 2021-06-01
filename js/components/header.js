MainHeader = () =>
`
<header>
        <img src="./img/logo.svg" alt="The logo of FishEye">
        <nav>
            <button id="category-portrait" class="category-button" onclick="renderProfiles('portrait')">#Portrait</button>
            <button id="category-art" class="category-button" onclick="renderProfiles('art')">#Art</button>
            <button id="category-fashion" class="category-button" onclick="renderProfiles('fashion')">#Fashion</button>
            <button id="category-architecture" class="category-button" onclick="renderProfiles('architecture')">#Architecture</button>
            <button id="category-travel" class="category-button" onclick="renderProfiles('travel')">#Travel</button>
            <button id="category-sport" class="category-button" onclick="renderProfiles('sport')">#Sport</button>
            <button id="category-animals" class="category-button" onclick="renderProfiles('animals')">#Animals</button>
            <button id="category-events" class="category-button" onclick="renderProfiles('events')">#Events</button>
        </nav>
        <h1>Our Photographer</h1>
</header>
`

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
                        <p id="number-likes-${this.media.id}">${media.find(mda => mda.id == this.media.id).likes}</p>
                        <i id="add-${this.media.id}" class="fas fa-heart" aria-hidden="true"></i>
                    </div>
                </div>
            </article>
            `
        } 
        else 
        {
            return `
            <article class="image-item">
            
                <div class="image" tabindex="0">
                    <img src="./img/${getPhotographerNameById(this.media.photographerId)}/${this.media.image}" alt="${this.media.altDescription}"/>
                </div>
                <div class="img-title">
                    <p class="media-title">${this.media.title}</p>
                    <div class="rating">
                        <p id="number-likes-${this.media.id}">${media.find(mda => mda.id == this.media.id).likes}</p>
                        <i id="add-${this.media.id}" class="fas fa-heart"></i>
                    </div>
                </div>
            </article> 

            <div class="preview-box" role="dialog" aria-modal="true" aria-hidden="true" id=
            "lightbox-modal">
                <div class="details">
                    <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                    <span class="icon fas fa-times" aria-hidden="true"></span>
                </div>
                <div class="image-box" aria-label="Photogallery of a photographer" aria-roledescription=”carousel”>
                    <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                    <div class="slide next"><i class="fas fa-angle-right"></i></div>
                    <img src="" alt="" aria-roledescription=”slide”>
                </div>
                <div class="lightbox-image-description"><p></p></div>
            </div>
            <div class="shadow"></div>
            `
        }
    }
    getLikes()
    {
        return this.media.likes
    }
}
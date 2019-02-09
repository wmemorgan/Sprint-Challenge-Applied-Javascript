class Carousel {
    constructor(carousel) {
        this.carousel = carousel
        this.buttons = carousel.querySelectorAll('div')
        this.leftButton = carousel.querySelector('.left-button')
        this.rightButton = carousel.querySelector('.right-button')
        

        this.leftButton.addEventListener('click', () => this.goBack())
        this.rightButton.addEventListener('click', () => this.goForward())
    }

    goForward () {
        
        this.images = carousel.querySelectorAll('img').forEach((image, index) => {
            let displayedImageIndex = carousel.querySelectorAll('.img').filter((image, index) => {
                image.style.display === 'block'
                return index
            })

        })

    }

    goBack () {

    }
    
}

// class CarouselImage {
//     constructor(image) {
//         this.image = image
//     }

//     displayImage() {
//         this.image.style.display = 'block'
//     }    
// }

let carousel = document.querySelector('.carousel')
// console.log(carousel)
carousel.querySelector('img').style.display = 'block'
let displayedImageIndex = carousel.querySelectorAll('img')

console.log(displayedImageIndex)

let imageDisplayStatus =  window.getComputedStyle(carousel.querySelector('img'), 'img:last-child').display
//console.log(imageDisplayStatus)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
class Carousel {
    constructor(carousel) {
        this.carousel = carousel
        this.buttons = carousel.querySelectorAll('div')
        this.leftButton = carousel.querySelector('.left-button')
        this.rightButton = carousel.querySelector('.right-button')
        this.imageArr = Array.from(carousel.querySelectorAll('img'))
   
        this.leftButton.addEventListener('click', () => this.goBack())
        this.rightButton.addEventListener('click', () => this.goForward())
    }

    getDisplayIndex (num=0) {

        for (let i = 0; i < this.imageArr.length; i++) {
            if(window.getComputedStyle(this.imageArr[i], null).display === 'block') {
                this.displayIndex = i
                this.imageArr[i].style.display = 'none'
            }
        }

        if ((this.displayIndex + num) >  (this.imageArr.length -1)) {
            this.displayIndex = 0
        } else if ((this.displayIndex + num) < 0) {
            this.displayIndex = this.imageArr.length - 1
        } else {
            this.displayIndex = this.displayIndex + num
        } 

        this.imageArr[this.displayIndex].style.display = 'block'
    }



    goForward () {
        this.getDisplayIndex(1)
        
    }

    goBack () {
        this.getDisplayIndex(-1)
    }
    
}


let carousel = document.querySelector('.carousel')
carousel.querySelector('img').style.display = 'block'
carousel = new Carousel(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
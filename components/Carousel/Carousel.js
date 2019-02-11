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

    getDisplayIndex (num=0, direction='left') {

        for (let i = 0; i < this.imageArr.length; i++) {
            if(window.getComputedStyle(this.imageArr[i], null).display === 'block') {
                this.displayIndex = i
                this.imageArr[i].style.display = 'none'
            }
        }

        if ((this.displayIndex + num) >  (this.imageArr.length -1)) {
            this.displayIndex = 0
            console.log(this.displayIndex)
        } else if ((this.displayIndex + num) < 0) {
            this.displayIndex = this.imageArr.length - 1
            console.log(this.displayIndex)
        } else {
            this.displayIndex = this.displayIndex + num
            console.log(this.displayIndex)
        } 

        if (direction == 'right') {
            this.imageArr[this.displayIndex].style.display = 'block'
            this.imageArr[this.displayIndex].style.left = 'initial'
            this.imageArr[this.displayIndex].style.right = '-100%'
            this.imageArr[this.displayIndex].style.animation = 'slideRight 0.5s forwards'

        } else {
            this.imageArr[this.displayIndex].style.display = 'block'
            this.imageArr[this.displayIndex].style.right = 'initial'
            this.imageArr[this.displayIndex].style.left = '-100%'
            this.imageArr[this.displayIndex].style.animation = 'slide 0.5s forwards'
        }
        
    }



    goForward () {

        this.getDisplayIndex(1,'left')
        
    }

    goBack () {
        this.getDisplayIndex(-1,'right')
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
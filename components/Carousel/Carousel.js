class Carousel {
    constructor(carousel) {
        this.carousel = carousel
        this.leftButton = carousel.querySelector('.left-button')
        this.rightButton = carousel.querySelector('.right-button')
        // Place the NodeList of images inside an array to facilitate moving through the list
        this.imageArr = Array.from(carousel.querySelectorAll('img'))
   
        this.leftButton.addEventListener('click', () => this.goBack())
        this.rightButton.addEventListener('click', () => this.goForward())
    }

    displayImage (num=0, direction='left') {
        for (let i = 0; i < this.imageArr.length; i++) {
            // Find the index number of the image currently being displayed
            if(window.getComputedStyle(this.imageArr[i], null).display === 'block') {
                this.displayIndex = i
                this.imageArr[i].style.display = 'none'
            }
        }

        // Create an infinite loop by resetting the display index number to 0 or the array length - 1 
        if ((this.displayIndex + num) >  (this.imageArr.length -1)) {
            this.displayIndex = 0
        } else if ((this.displayIndex + num) < 0) {
            this.displayIndex = this.imageArr.length - 1
        } else {
            this.displayIndex = this.displayIndex + num
        } 

        // Display the next image in the array and execute the slide animation effect
        if (direction == 'right') {
            this.imageArr[this.displayIndex].style.display = 'block'
            this.imageArr[this.displayIndex].style.left = 'initial'
            this.imageArr[this.displayIndex].style.right = '-100%'
            this.imageArr[this.displayIndex].style.animation = 'slideRight 0.5s forwards'

        } else {
            this.imageArr[this.displayIndex].style.display = 'block'
            this.imageArr[this.displayIndex].style.right = 'initial'
            this.imageArr[this.displayIndex].style.left = '-100%'
            this.imageArr[this.displayIndex].style.animation = 'slideLeft 0.5s forwards'
        }
        
    }

    goForward () {
        this.displayImage(1,'left')
    }

    goBack () {
        this.displayImage(-1,'right')
    }
    
}


let carousel = document.querySelector('.carousel')
// Display the first image in the list by default
carousel.querySelector('img').style.display = 'block'
carousel = new Carousel(carousel)

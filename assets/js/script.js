const navbar = document.querySelector('.navbar')
const wumbo = document.querySelector('#wumbo')
const textJumbotron = document.querySelector('.text-jumbotron')
const kualitas = document.querySelector('.kualitas')
const footer = document.querySelector('.foot')
const line = document.querySelector('.line')
const hamburger = document.querySelector('.hamburger')
const navbarNav = document.querySelector('.navbar-nav')
const paragraph = document.querySelectorAll('.paragraph')

window.addEventListener('scroll', () => {
    if (window.scrollY > 90) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamburger.addEventListener('click', () => {
    if (navbar.classList.contains('scrolled')) {
        navbar.classList.remove('scrolled')
        // navbarNav.classList.add('d-none')
    } else {
        navbar.classList.add('scrolled')
        // navbarNav.classList.remove('d-none')
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const widthContent = () => {
        if (window.innerWidth <= 992) {
            textJumbotron.classList.add('shadow', 'shadow-lg')
            wumbo.classList.add('container-fluid')
            wumbo.classList.remove('container')
            // kualitas.classList.add('d-block')
            // kualitas.classList.remove('d-flex')
            footer.classList.remove('d-flex', 'justify-content-end')
            line.classList.remove('border-bottom')

            paragraph.forEach(paragraf => {
                paragraf.classList.add('d-none')
            })
        } else {
            wumbo.classList.add('container')
            wumbo.classList.remove('container-fluid')
            textJumbotron.classList.remove('shadow', 'shadow-lg')
            // kualitas.classList.add('d-flex')
            // kualitas.classList.remove('d-block')
            footer.classList.add('d-flex', 'justify-content-end')
            line.classList.add('border-bottom')

            paragraph.forEach(paragraf => {
                paragraf.classList.remove('d-none')
            })
        }
    }

    widthContent()

    window.addEventListener('resize', widthContent)

})


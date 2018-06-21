let els = document.querySelectorAll('[data-appear]')

const isVisible = (elem) => {
    let coords = elem.getBoundingClientRect()
    let windowHeight = document.documentElement.clientHeight
    let topVisible = coords.top + elem.clientHeight > 0 && coords.top < windowHeight

    return topVisible
}

const showVisible = () => {
    for (const el of els) {
        if (isVisible(el)) {
            el.classList.add('makeMeAppear')
        }
    }
}

// ver uma forma melhor de fazer isso.

let title = document.querySelectorAll('[data-appear-title]')

const showTitle = () => {
    for (const ttl of title) {
        if (isVisible(ttl)) {
            ttl.classList.add('makeMeAppear')
        }
    }
}

const apply = () => {
    showVisible()
    showTitle()
}

window.addEventListener('scroll', apply)
apply()


// Efeito da imagem
let image = document.getElementById('big')
    
document.addEventListener("scroll", function() {
    image.style.transform = `scale(0.${window.pageYOffset})`
}, false);
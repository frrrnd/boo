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


const apply = () => {
    showVisible()
}

window.addEventListener('scroll', apply)
apply()
let navbar = document.querySelector(".navbar");
let scroll_btn = document.querySelector(".scroll-up-btn")
let year = document.querySelector(".year")









document.addEventListener('scroll', () => {
    let scroll_position = window.scrollY;

// Adding shadow to the navbar when scrolled
    if (scroll_position > 10) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
    
// scroll btn show function
    if (scroll_position > 10) {
        scroll_btn.classList.add('show')
    } else {
        scroll_btn.classList.remove('show')
    }
})

// When the scroll-btn is click it takes us to the top of the page
scroll_btn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

// footer copyright year update
// year.textContent = new Date().getFullYear();
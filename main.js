const hamburger = document.querySelector('.navbar .menu-btn');
const mobile_menu = document.querySelector('.navbar .nav-menu');
const menu_item = document.querySelectorAll('.navbar .nav-menu .nav-list .nav-link');
const navbar = document.querySelector(".navbar");
const scroll_btn = document.querySelector(".scroll-up-btn")
const year = document.querySelector(".year")

// Mobile menu responsiveness
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activated');
    mobile_menu.classList.toggle('activated');
})

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('activated');
        mobile_menu.classList.toggle('activated');
    })
})

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

// When clicked takes us to the top of the page
scroll_btn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})

// footer copyright year update
year.textContent = new Date().getFullYear();
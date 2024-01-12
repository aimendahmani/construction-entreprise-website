let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

let searchForm = document.querySelector('.header .search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.header .login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

let contactInfo = document.querySelector('.contact-info');

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.toggle('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper('.home-slider', {
  loop:true,
  grabCursor:true,
  autoplay: {
      delay: 5000, // Set the delay to 5000 milliseconds (5 seconds)
    },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});

const swiper2 = new Swiper('.reviews-slider', {
  loop:true,
  grabCursor:true,
  autoplay: {
      delay: 5000, // Set the delay to 5000 milliseconds (5 seconds)
    },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
});

const swiper3 = new Swiper('.blogs-slider', {
  loop:true,
  grabCursor:true,
  autoplay: {
      delay: 5000, // Set the delay to 5000 milliseconds (5 seconds)
    },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
});

const swiper4 = new Swiper('.logo-slider', {
  loop:true,
  grabCursor:true,
  spaceBetween: 10,
  autoplay: {
      delay: 5000, // Set the delay to 5000 milliseconds (5 seconds)
    },
  pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
      },
      breakpoints: {
        450: {
          slidesPerView: 2,
          
        },
        640: {
          slidesPerView: 3,
          
        },
        768: {
          slidesPerView: 4,
          
        },
        1000: {
          slidesPerView: 5,
          
        },
      },
});

lightGallery(document.querySelector('.projects .box-container'));
});
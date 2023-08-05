import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
    let sliderWrapper = document.querySelector('.swiper-wrapper');
    let slides = sliderWrapper.children;

    sliderWrapper.style.gridTemplateColumns = `repeat(${slides.length}, 1fr)`;
});

export function initSwiper() {
    if (document.querySelector('.projects__swiper')) {
        new Swiper('.projects__swiper', {
            modules: [Navigation],
            observer: true,
            observeParents: true,
            spaceBetween: 56,
            slidesPerView: 3,
            autoHeight: false,
            speed: 800,
            navigation: {
                prevEl: '.projects__arrow_left',
                nextEl: '.projects__arrow_right'
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 5,
                    autoHeight: true
                },
                560: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 32
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 56
                }
            }
        });
    }
}
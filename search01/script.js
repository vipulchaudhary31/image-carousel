var swiper = new Swiper('.swiper-container.two', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    effect: 'coverflow',
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 0,
        stretch: 390,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
    direction: 'horizontal',
    reverseDirection: true
});

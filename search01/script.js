var swiper = new Swiper('.swiper-container.two', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'coverflow',
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 390,
        depth: 150,
        modifier: 1.5,
        slideShadows: false,
    },
    direction: 'horizontal',
    mousewheel: {
        forceToAxis: true,
    },
    touchEventsTarget: 'wrapper',
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    threshold: 5,
});

// Reverse direction for touch events
swiper.on('touchStart', function (e) {
    var touch = e.touches[0];
    swiper.touchesStart.x = touch.pageX;
    swiper.touchesStart.y = touch.pageY;
});

swiper.on('touchMove', function (e) {
    var touch = e.touches[0];
    var diffX = swiper.touchesStart.x - touch.pageX;
    var diffY = swiper.touchesStart.y - touch.pageY;
    
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    }
    
    e.preventDefault();
});

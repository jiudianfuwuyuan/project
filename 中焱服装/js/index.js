$(function(){
    var swiper = new Swiper('.swiper1 .swiper-container', {
        initialSlide :1,
        pagination: '.swiper1 .swiper-container .swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false
    });
    var swiper = new Swiper('.team_show .swiper-container', {
        initialSlide :2,
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 65,
    });
})
$(function(){
    $('.navig').hover(function(){
        $('.comboBox:nth-child(' + ($(this).index() + 1) + ')').stop().slideDown(200);
    },function(){
        $('.comboBox:nth-child(' + ($(this).index() + 1) + ')').stop().slideUp(200);
    })
    $('.comboBox').hover(function(){
        $(this).stop().show();
    },function(){
        $(this).stop().slideUp(200);
    })
    $('.autoplay').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    })
})
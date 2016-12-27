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
    $('.hot_product a').click(function(){
        $(this).css('background-color','#E1E1E1');
        $(this).siblings().css("background","none")
    })
    $('.option a').click(function(){
        $(this).addClass('oafc');
        $(this).siblings().removeClass('oafc');
    })
})  
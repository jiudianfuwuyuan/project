$(function(){
    $('.nav_btn').click(function(){
        var x = $('.nav_btn span').css('opacity');
        if(x == '1'){        
            $('.nav_btn span').stop().animate({opacity: 0},200);
            $('.nav_btn .nav_bar').stop().animate({marginLeft:'85.4%'},300);
            $('.nav_sida').stop().animate({width:'80%'},300);
            $('.nav_shade').stop().animate({width:'20%',left:'80%'},300);
            $('.nav_sida ul').css('display','block');
        }else{
            $('.nav_btn span').stop().animate({opacity: 1},200);
            $('.nav_btn .nav_bar').stop().animate({marginLeft:'3.1%'},300)
            $('.nav_sida').stop().animate({width:0},300);
            $('.nav_shade').stop().animate({width:0,left:'0'},300);
            $('.nav_sida ul').css('display','none');
        }
    })
})
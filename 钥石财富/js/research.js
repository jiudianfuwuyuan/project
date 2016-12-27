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
    $('.studys ul li').click(function(){
        $(this).css('background-color','#C28E34');
        $(this).find('a').css('border','none');
        $(this).find('a .chinese').css('color','#FFFFFF');
        $(this).find('a .english').css('color','#FFFFFF');
        $(this).siblings().css("background","none");
        $(this).siblings().find('a').css('border-right','1px solid #DBDBDB');
        $(this).siblings().find('a .chinese').css('color','#505050');
        $(this).siblings().find('a .english').css('color','#818181');
    })
    $('.qian').click(function(){
        $('.study1').css('display','block');
        $('.study2').css('display','none');
        $('.page1').css('color','#F08519');
        $('.page2').css('color','#7A7A7A');
    })
    $('.page1').click(function(){
        $('.study1').css('display','block');
        $('.study2').css('display','none');
        $('.page1').css('color','#F08519');
        $('.page2').css('color','#7A7A7A');
    })
    $('.hou').click(function(){
        $('.study2').css('display','block');
        $('.study1').css('display','none');
        $('.page2').css('color','#F08519');
        $('.page1').css('color','#7A7A7A');
    })
    $('.page2').click(function(){
        $('.study2').css('display','block');
        $('.study1').css('display','none');
        $('.page2').css('color','#F08519');
        $('.page1').css('color','#7A7A7A');
    })
})  
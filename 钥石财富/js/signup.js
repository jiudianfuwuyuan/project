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
    $('.login_content').click(function(){
        $(this).css('border','1px solid #C28E34');
        $(this).siblings('.login_content').css('border','1px solid #BFBFBF');
        $('.logent').css('border','1px solid #BFBFBF');
    })
    $('.logent').click(function(){
        $(this).css('border','1px solid #C28E34');
        $('.login_content').css('border','1px solid #BFBFBF');
    })
})  
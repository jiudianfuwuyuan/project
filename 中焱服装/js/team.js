$(function(){
    $('.group_btn div').click(function(){
        var x = $(".group_hide").css('left');
        if(x == '0px'){           
            $(".group_hide").animate({left:'-511px'},300);
        }else{
            $(".group_hide").animate({left:'0px'},300);
        }
    })
})
$(function(){

    $('nav #PCnav>ul>li').mouseenter(function(){
        $('nav #PCnav>ul>li>ul').stop().slideDown();
        $('.menu0').stop().slideDown();
        $('nav #PCnav>ul>li>ul').css("background-color","#fff");
        $(this).find('ul').css("background-color","#F8F8F8");
    });

    $('nav #PCnav').mouseleave(function(){
        $('nav #PCnav>ul>li>ul').stop().slideUp();
        $('.menu0').stop().slideUp();

    });


});
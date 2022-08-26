$(document).ready(function(){

    btn = 1;

    $('.familysite').click(function(){
        if(btn == 1){ 
            $('.fsub').fadeIn(); 
            $('.up').css('background-image','url(./img/footer_Familyicon.png)')
            btn = 0; 
        }else{ 
            $('.fsub').fadeOut();
            $('.up').css('background-image','url(./img/footer_Familyicon_2.png)') 
            btn = 1; 
        };
    });

    $('.fotUp').click(function(){ 
        $('html,body').animate({scrollTop : 0},400);
        return false;
    });

});
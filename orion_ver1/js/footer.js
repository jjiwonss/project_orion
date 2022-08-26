$(document).ready(function(){

    btn = 1;

    $('.familysite').click(function(){
        if(btn == 1){ 
            $('.fsub').show(); 
            btn = 0; 
        }else{ 
            $('.fsub').hide(); 
            btn = 1; 
        };
    });

});
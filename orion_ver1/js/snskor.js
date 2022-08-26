$(document).ready(function(){

    btn = 1;

    $('.SNS').click(function(){
        if(btn == 1){ 
            $('.SNSsub').show(); 
            btn = 0; 
        }else{ 
            $('.SNSsub').hide(); 
            btn = 1; 
        };
    });

    $('.KOR').click(function(){
        if(btn == 1){ 
            $('.LAN').show(); 
            btn = 0; 
        }else{ 
            $('.LAN').hide(); 
            btn = 1; 
        };
    });

    

});
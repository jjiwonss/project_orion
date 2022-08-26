$(function(){

    /* 컨텐츠1 */
     //tabslide
     var slide = $('div.contentSlide ul');
  
     var product = $('div.contentSlide ul li');
 
     var slideListWidth1 = $('div.contentSlide ul li').width();
   
     var current = 0; //초기화작업
   
   
   
     //오른쪽에서 왼쪽으로 이동
     function L_icon(){
         slide.stop().animate({left:-slideListWidth1},400,function(){
             $('div.contentSlide ul li:first').insertAfter('div.contentSlide ul li:last');
             slide.css('left',0);
         });
     }
   
     //왼쪽에서 오른쪽으로 이동
     function R_icon(){
         $('div.contentSlide ul li:last').insertBefore('div.contentSlide ul li:first');
         slide.css('left',-slideListWidth1);
         slide.animate({left:0},400);
     }
   
     $('.R_icon').click(function(){
         R_icon();
     });
   
     $('.L_icon').click(function(){
         L_icon();
     });/* 컨텐츠 1 끝 */


     /* 컨텐츠3 */
     //슬라이드 이미지
     var con4img = $('#content4 .con4wrap ul li');
     var button = $('#content4 .buttonList li');
     var current = 0;
     var leftBtn = $('.con3L');
     var rightBtn = $('.con3R');
     var setIntervalId;
 
     function move(tg, start, end){
         tg.css('left',start).stop().animate({left:end},500);
     }
 
     timer();
 
     function timer(){
         setIntervalId = setInterval(function(){
             var prev = con4img.eq(current);
             var pn = button.eq(current);
             move(prev,0,'100%');
 
             pn.removeClass('on');
             current++;
             if(current==con4img.size()){current=0;}
 
             var next = con4img.eq(current);
             var pnn = button.eq(current);
             move(next, '-100%', 0);
             pnn.addClass('on');
 
         },4000);
     }
 
 
 
     // stop, play 버튼
     $('#content4 .stop').click(function(){
         clearInterval(setIntervalId);
         $('#content4 .stop').hide();
         $('#content4 .play').show();
     });
 
     $('#content4 .play').click(function(){
         timer();
         $('#content4 .stop').show();
         $('#content4 .play').hide();
     });
 
 
     button.click(function(){
         var tg = $(this);
         var i = tg.index();
         button.removeClass('on');
         tg.addClass('on');
 
         movel(i);
 
     });
 
     function movel(i){
         if(current == i){return}
 
         var currentEl = con4img.eq(current);
         var nextEl = con4img.eq(i);
 
         currentEl.css({left:0}).stop().animate({left:'100%'},500);
         nextEl.css({left:'-100%'}).stop().animate({left:0},500);
 
         current = i;
     }


    /* 화살표 클릭 */
    rightBtn.click(function(){

        var prev = con4img.eq(current); 
        var pn = button.eq(current);

        move(prev, 0, '-100%');
        pn.removeClass('on');

        current++;

        if(current == con4img.size()){current=0}

        var next = con4img.eq(current);
        var pnn = button.eq(current);

        move(next, '100%', 0);
        pnn.addClass('on');

        return;

    }); //오른쪽 버튼


    leftBtn.click(function(){

        var prev = con4img.eq(current);
        var pn = button.eq(current);

        move(prev, 0, '100%');
        pn.removeClass('on');

        current--;

        if(current == -con4img.size()) {current=0}

        var next = con4img.eq(current);
        var pnn = button.eq(current);

        move(next, '-100%', 0);
        pnn.addClass('on');

        return;

    }); //왼쪽버튼


    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end}, {duration:500,ease:'easeOutCubic'})
    }





});
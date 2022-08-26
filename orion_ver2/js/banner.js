$(function(){
    
    /* 헤더 sns,kor */
    btn = 1;

    $('.SNS').click(function(){
        if(btn == 1){ 
            $('.SNS ul').fadeIn(); 
            btn = 0; 
        }else{ 
            $('.SNS ul').fadeOut(); 
            btn = 1; 
        };
    });

    btn = 1;

    $('.KOR').click(function(){
        if(btn == 1){ 
            $('.KOR ul').fadeIn(); 
            btn = 0; 
        }else{ 
            $('.KOR ul').fadeOut(); 
            btn = 1; 
        };
    });


    // 태블릿 모바일 메뉴
    $('#btnOpen').click(function(){
        $('#m_navwrap').fadeIn(300);
    })

    $('.btnClose').click(function(){
        $('#m_navwrap').fadeOut(300);
    })

    $('.m_subnav').hide();

    $('.m_nav1 > a').toggle(function(){
        var tg = $(this);
        var sub = tg.next('.m_subnav');

        sub.slideDown();
        tg.addClass('on');
        $('.m_nav1').css({height:'auto'});

    }, function(){
        var tg = $(this);
        var sub = tg.next('.m_subnav');

        sub.slideUp();
        tg.removeClass('on');
    })


    //슬라이드 이미지
    var Bimg = $('#PCbanner > ul.bannerimage > li');
    var button = $('.buttonList>li');
    var current = 0;
    var setIntervalId;

    function move(tg, start, end){
        tg.css('left',start).stop().animate({left:end},500);
    }

    timer();

    function timer(){
        setIntervalId = setInterval(function(){
            var prev = Bimg.eq(current);
            var pn = button.eq(current);
            move(prev,0,'100%');

            pn.removeClass('on');
            current++;
            if(current==Bimg.size()){current=0;}

            var next = Bimg.eq(current);
            var pnn = button.eq(current);
            move(next, '-100%', 0);
            pnn.addClass('on');

        },4000);
    }



    // stop, play 버튼
    $('.stop').click(function(){
        clearInterval(setIntervalId);
        $('.stop').hide();
        $('.play').show();
    });

    $('.play').click(function(){
        timer();
        $('.stop').show();
        $('.play').hide();
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

        var currentEl = Bimg.eq(current);
        var nextEl = Bimg.eq(i);

        currentEl.css({left:0}).stop().animate({left:'100%'},500);
        nextEl.css({left:'-100%'}).stop().animate({left:0},500);

        current = i;
    }

     //top버튼 위치 조정
     $('.B_icon li a').hide();

     $(window).scroll(function() {
         if($(this).scrollTop() > 120){
            $('.B_icon li a').fadeOut();
         } else{
             $('.B_icon li a').fadeIn();
         }
     });






});

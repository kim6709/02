$(document).ready(function(){

    //-------헤더 온 ----------------

    $(window).on('scroll', function(){
        let sct=$(window).scrollTop();
        // console.log(sct);
        if(sct>0) {
            $('#header').addClass('on')
        }else{
            $('#header').removeClass('on') 
        }
       
    });

    //로고클릭시 첫페이지에 가도록

    $('header h1').on('click', function(){
        $(window).reload;
    }); 
    
    //스크롤시 광고 사라지고 헤더 top 높이 조절
    $(window).scroll(function(){
        let current = $(this).scrollTop();
        if(current >= 50){
            $('#header').css('top','0');
        } else if(current < 50){
            $('#header').css('top','50px');
        };
    });

    //-----메인비주얼 동영상----------- 

    $("#m01").YTPlayer({
        videoURL:'',
        containment:'#main_visual',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        showControls:false, 
        quality:'highres',
    });



    //--------메인슬라이더----------

    // $('.main_slider').slick({
    //    arrows:false,
    //    autoplay:false,
    //    pauseOnHover:false,
       
    
    // }); 

    //----------제품슬라이드----------

    $('.slider01').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,

        // responsive: [ 
        //     { breakpoint: 768,
        //         settings: { slidesToShow: 1, slidesToScroll: 1 }
        //     },
        // ]
    });


    //----------탭메뉴 온---------------

    $('.tab_manu li').on('click', function(){ 
        let $this= $(this); 
        let idx=$(this).index(); 
       $('.customer>div').eq(idx).addClass('on').siblings().removeClass('on');
       $this.addClass('on').siblings().removeClass('on'); 

    });


    //-----------제품 온 아이콘----------

    $('#content01 .xi-angle-left-thin').on('click', function(){
        $('.slider01').slick('slickPrev');
    });
    $('#content01 .xi-angle-right-thin').on('click', function(){
        $('.slider01').slick('slickNext'); 
    });
    
    
    //---------빨리 움직이는 브랜드 슬라이드-----------
    
    $('.slider02').slick({
        arrows:false,
        autoplay:true,
        // centerMode:true,
        slidesToShow:3,
        autoplaySpeed:1800, 
    });

    $('.slider03').slick({
        arrows:false,
        // centerMode:true,
        autoplay:true,
        slidesToShow:4,
        autoplaySpeed:1800,

    });

    $('.slider04').slick({
        arrows:false,
        centerMode: true,
        fade:true,
        autoplay:false,
        autoplaySpeed:800,

    });

    $('.headslider').slick({
        arrows:false,
        autoplay:true,
        Infinity:true,
        autoplaySpeed:3000,
    });
    
    

    $('#content04 .xi-angle-left-thin').on('click', function(){
        $('.slider04').slick('slickPrev');
    });
    $('#content04 .xi-angle-right-thin').on('click', function(){
        $('.slider04').slick('slickNext'); 
    });


});
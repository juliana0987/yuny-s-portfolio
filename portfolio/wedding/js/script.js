$(function(){
    /* header */
    $('.open').click(function(){
        $('#header').stop().slideDown();
    });
    $('.close').click(function(){
        $('#header').stop().fadeOut(300);
    });

    // 헤더 슬라이드 
    $('a[href^="#"]').on('click',function(e){
      e.preventDefault();
      let scr = $($(this).attr('href'));
      if(scr.length){
      let ps = $(scr).offset().top;//offset()의 기능 
    $('html, body').animate({
      scrollTop: ps
    },500)
      }else{
        $('html, body').animate({
          scrollTop: 0
        }, 500)
      }
    });  

    /* 이미지 슬라이드 */
    $('.gslide').slick({
        slide: 'img',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        prevArrow : $('.left'),		// 이전 화살표 모양 설정
        nextArrow : $('.right'),		// 다음 화살표 모양 설정
        draggable : true, 	//드래그 가능 여부 
        fade: true,
    });
    

    /* 이미지 모달 */
    $('.full_s').click(function(){
        $('#myModal').stop().fadeIn();
        $('.gslide2').slick({
            slide: 'img',		//슬라이드 되어야 할 태그 ex) div, li 
            infinite : true, 	//무한 반복 옵션	 
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            autoplay : true,			// 자동 스크롤 사용 여부
            autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            prevArrow : $('.left2'),		// 이전 화살표 모양 설정
            nextArrow : $('.right2'),		// 다음 화살표 모양 설정
            draggable : true, 	//드래그 가능 여부 
            fade: true,
        });
    });
    $('.gslide2>.full_s2').click(function(){
        $('#myModal').css({'display':'none'});
    });    
});


//카카오지도
var mapContainer = document.getElementById('map');
var mapOption = {
    center: new kakao.maps.LatLng(37.6236, 126.7142),
    level: 3
};
var map = new kakao.maps.Map(mapContainer, mapOption);

/***********Yuny's Blog**************/

/******************************GALLERY*******************************/
//Gallery imgsort 메뉴 누르면 사진 분리
$(function(){
    $('#sort_1').click(function(){
        $('#gt').show();
        $('#gw').show();
        $('#gf').show();
        $('#gp').show();
    });
    $('#sort_2').click(function(){
        $('#gt').show();
        $('#gw').hide();
        $('#gf').hide();
        $('#gp').hide();
    });
    $('#sort_3').click(function(){
        $('#gt').hide();
        $('#gw').show();
        $('#gf').hide();
        $('#gp').hide();
    });
    $('#sort_4').click(function(){
        $('#gt').hide();
        $('#gw').hide();
        $('#gf').show();
        $('#gp').hide();
    });
    $('#sort_5').click(function(){
        $('#gt').hide();
        $('#gw').hide();
        $('#gf').hide();
        $('#gp').show();
    });
});

//Gallery gs-box /text올라오는 애니메이션
$(document).ready(function(){
    $('.col-3').hover(function(){
        $(this).find('.gs-box').fadeToggle(20);
    });
});

//Gallery modal & photo
$(document).ready(function(){
    $('.col-3').click(function(){
        $(this).find('.ga-modal').fadeToggle(20);
    });
    $('.close').click(function(){
        $('#ga-modal').hide();  //close누르면 전체 닫고 싶은데 close 누르면 안닫히고 modal을 누르면 닫힘
    });
});



/******************************CONTACT*******************************/
// CONTACT menu click 시 이동
$(document).ready(function(){
    $('#gnb-contact').click(function(){
        $('#co-modal1').fadeToggle();
    });
    $('.category>ul>li>#gnb-contact').click(function(){
        $('#co-modal1').fadeToggle();
    });
    $('#co-modal1').click(function(){
        $('#co-modal1').hide();
    });

});

// CONTACT button1
// $(function(){
//     $('#method-box>p').mouseover(function(){
//         $(this).start('myButton1');
//     });
// });


// $(function(){
//     $('.myButton1').mouseover(function(){
//         // $(this).stop(function(){
//         //     $('.myButton1').animate({
//         //         left:'269px',
//         //         width:'93px',
//         //         height:'93px'
//         //     },1000)
//         // });
//         $(this).animate({
//             left:'269px',
//             width:'93px',
//             height:'93px'
//         },1000,function(){
//             $('.myButton1').stop();
//         });
//     });
//     $('.myButton1').mouseleave(function(){
//         // $(this).stop(function(){
//         //     $('.myButton1').animate({
//         //         left:'',
//         //         width:'362px',
//         //         height:'93px'
//         //     },1000)
//         // });
//         $(this).animate({
//             left:'',
//             width:'362px',
//             height:'93px'
//         },1000,function(){
//             $('.myButton1').stop();
//         });
//     });
// });
     

$(document).ready(function(){
    $('#method-box').click(function(){
        $('#co-modal2').show();
    });
});


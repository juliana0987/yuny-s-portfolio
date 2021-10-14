$(function(){
    $('a.search').click(function(){
        $('.searchbox').animate({
            width : '20em'
        }).css({
            border: '2px solid #146992' ,
            backgroundColor: 'rgba(255,255,255,0.4)'
        });
    });

    //$('아이디').click(function(){})
    // = $('아이디').on('click', function(e){})

    $('.searchbox').on('keypress', function(e){
        if(e.which == 13 && !e.shiftkey){
            var key= $(this).val();
            // alert(key);
            $(this).animate({
                width:0
            }).css({
                border:'none',
                backgroundColor:'transparent'
            });
            // alert(key);
            getPos('', '', key);
        }
    });

    $('.searchbox').on('keyup blur', function(e){
        var v = $(this).val();
        $(this).val(v.replace(/[^a-zA-A-_0-9]/g,''));
    });


    var myLat = 0, myLng = 0;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            console.log(myLat, myLng);
            getPos(myLat, myLng, '');  //위도값, 경도값
        },function(err){
           if(err.code==1){
               console.log('에러');
           }
        });
    }

function getPos(lat, lon, city){
    var apiurl = "http://api.openweathermap.org/data/2.5/forecast";
    var apikey = '61817fe9871c5ce196a7b67a92ce3a6b';
    var apidata;
    if(city){                                    // City로 잡을 때는 도시이름으로 잡히고
      apidata = {
          q: city,
          appid:apikey,
          units: 'metric',
          lang: 'kr'
       }
    }else{                                       // 도시가 아닐 때는 위도, 경도로 잡히게 설정함.
       apidata = {
          lat: lat,
          lon: lon,
          appid:apikey,
          units: 'metric',
          lang: 'kr'     
       }
    }
    console.log(apidata);
        var weeks = ['일', '월', '화', '수', '목', '금', '토'];
    var $opt = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000
    }
    //console.log(new Date(1621922400*1000));
    //console.log(parseInt(new Date()/1000));
     $.ajax({
        url: apiurl,
        dataType: "json",
        type: "GET",
        async: "false",
        data: apidata,
        success: function(rs){
            console.log(rs);
            var fdays='';
            var cityname = rs.city.name;
            $('.city').html(cityname);

            var nDate = new Date(rs.list[0].dt*1000);
            var nyear = nDate.getFullYear();
            var nmonth = nDate.getMonth()+1;
            var ndt = nDate.getDate();
            var nweeks = weeks[nDate.getDay()]; 
            var ntimes = nDate.getHours();
            var nowDate = nyear+'.'+nmonth+"."+ndt+"("+nweeks+") "+ntimes+"시";
            $('.now-date').html(nowDate);
            var icon = '<img src="images/icon/'+rs.list[0].weather[0].icon+'.png" alt="'+rs.list[0].weather[0].main+'">'; 
            var temp = Number(rs.list[0].main.temp);
            var temp = temp.toFixed(1)+"ºc";
            var temp_min = Number(rs.list[0].main.temp_min);
            var temp_min = temp_min.toFixed(1)+"ºc";
            var temp_max = Number(rs.list[0].main.temp_max);
            var temp_max = temp_max.toFixed(1)+"ºc";

            var text = rs.list[0].weather[0].description;
            var text = text.replace('튼', '뜬');
            
            // $('.w-icon').html(icon);
            // $('.temp').html(temp);
            // $('.text').html(text);

            // $('.temp_min').html(temp_min);
            // $('.temp_max').html(temp_max);
            // var srise = new Date(rs.city.sunrise*1000);
            // var sunrise = srise.getHours()+"시"+srise.getMonth()+"분";
            // var sset = new Date(rs.city.sunset*1000); 
            // var sunset = sset.getHours()+"시"+sset.getMonth()+"분";
            // $('.sunrise').html(sunrise);
            // $(".sunset").html(sunset);
            // //바람 rs.list[0].wind.speed;
            // //습도 rs.list[0].main.humidity; 
            // $('.speed').html(rs.list[0].wind.speed+"m/s");
            // $('.humidity').html(rs.list[0].main.humidity+"%");

            // var mxlength = rs.list.length;       
            // for(var i=0; i<mxlength; i++){
            // //    var mdt = eval(nowdt - rs.list[i].dt);
            // //    if(mdt<0){
            // //        mdt = -mdt;
            // //    }
            // //    ndt.push(mdt);

            //    var myDate = new Date(rs.list[i].dt*1000);
            //     //  console.log(myDate);
            //     //  console.log(rs.list[i].dt_txt);
            //     //  console.log(rs.list[i].main.temp);
            //    var myyear = myDate.getFullYear();
            //    var mymonth = myDate.getMonth()+1;
            //    var mydt = myDate.getDate();
            //    var myweeks = weeks[myDate.getDay()]; 
            //    var mytimes = myDate.getHours();
            //    var temps = Number(rs.list[i].main.temp).toFixed(1)+"ºc";
            //    var icons = wethericon(rs.list[i].weather[0].icon);
            //    fdays += '<div class="weathers">';
            //    fdays += '<div>';
            //    fdays += '<p class="f-days">'+mydt+'일('+myweeks+')'+mytimes+'시</p>';
            //    fdays += '<p class="f-temps">'+temps+'</p>';
            //    fdays += icons;
            //    fdays += '<p class="f-texts">'+rs.list[i].weather[0].main+'</p>';
            //    fdays += '</div>';    
            //    fdays += '</div>';
        //    }
        //    //console.log(ndt);
        //    $('.slider').slick('unslick');
        //    $('.slider').html(fdays);            
        //    $('.slider').not('.slick-initialized').slick(getSliderSetting());
        //     //console.log(fdays);

       },
       beforeSend:function(){
           $('.loading').removeClass('display-none');
       },
       complete:function(){
           $('.loading').addClass('display-none');
       } 
     });
 
function getSliderSetting(){
 let $opt = {
       slidesToShow: 2,
       slidesToScroll: 2,
       dots: false,
       autoplay:true,
       autoplaySpeed: 3000,
       infinite: true,
       centerMode: true
 }
 return $opt; 
}
  
//    $('.slider').slick(getSliderSetting());
}

});
//가장 가까운 시간 구하기

function wethericon(icon){
    var wicon;
    switch(icon){
        case '01d':
           wicon = '<i class="wi wi-day-sunny" style="color:yellow"></i>';
        break;
        case '02d':
            wicon = '<i class="wi wi-day-cloudy"></i>';
        break;
        case '03d':
            wicon = '<i class="wi wi-cloud"></i>';
        break;
        case '04d':
            wicon = '<i class="wi wi-cloudy"></i>';
        break;       
        case '09d':
            wicon = '<i class="wi wi-rain"></i>';
        break;
        case '10d':
            wicon = '<i class="wi wi-day-rain"></i>';
        break;
        case '11d':
            wicon = '<i class="wi wi-thunderstorm style="color:gray"></i>';
        break;
        case '13d':
            wicon = '<i class="wi wi-snow"></i>';
        break;
        case '50d':
            wicon = '<i class="wi wi-windy" style="color:#ddd;"></i>';
        break;
        case '01n':
            wicon = '<i class="wi wi-night-clear" style="color:#666"></i>';
        break;
        case '02n':
            wicon = '<i class="wi wi-night-alt-cloudy" style="color:#666"></i>';
        break;
        case '03n':
            wicon = '<i class="wi wi-cloud"></i>';
        break;
        case '04n':
            wicon = '<i class="wi wi-cloudy"></i>';
        break;
        case '09n':
            wicon = '<i class="wi wi-rain"></i>';
        break;
        case '10n':
            wicon = '<i class="wi wi-night-alt-rain"></i>';
        break;
        case '11n':
            wicon = '<i class="wi wi-thunderstorm" style="color:#666"></i>';
        break;
        case '13n':
            wicon = '<i class="wi wi-snow"></i>';
        break;
        case '50n':
            wicon = '<i class="wi wi-windy" style="color:#555"></i>';
        break;
    }
    return wicon;
}


function transCity(c){
    if(c == "서울" || c == "서울시"){
        c = 'seoul';
    }else if(c == "고양" || c=="고양시"){
        c = "goyang-si";
    }else if(c == "인천" || c=="인천광역시"){
        c = "incheon";
    }
}

var ecity = 
    {'남동구':'Namdong-gu',
     '연수구':'Yeonsu-gu', 
     '미추홀구':'Michuhol-gu', 
     '동구':'Dong-gu',
     '중구':'Jung-gu', 
     '인천광역시':'Incheon Metropolitan City'}
 var ecityObj
console.log(ecity);


$(function(){
    // 버튼
    $('.bottom-box a:eq(0)').click(function(){
        $(this).css({'top':'-45px'});
        $('.menu2').css({'top':'-18px'});
        $('.menu3').css({'top':'-18px'});
        $('.menu4').css({'top':'-18px'});
        $('.menu5').css({'top':'-18px'});
        $('.today-box').show();
        $('.dust-box').hide();
        $('.clock-box').hide();
        $('.week').hide();
        $('.sunset-box').hide();
    });
    $('.bottom-box a:eq(1)').click(function(){
        $(this).css({'top':'-45px'});
        $('.menu1').css({'top':'-18px'});
        $('.menu3').css({'top':'-18px'});
        $('.menu4').css({'top':'-18px'});
        $('.menu5').css({'top':'-18px'});
        $('.today-box').hide();
        $('.dust-box').show();
        $('.clock-box').hide();
        $('.week').hide();
        $('.sunset-box').hide();
    });
    $('.bottom-box a:eq(2)').click(function(){
        $(this).css({'top':'-45px'});
        $('.menu1').css({'top':'-18px'});
        $('.menu2').css({'top':'-18px'});
        $('.menu4').css({'top':'-18px'});
        $('.menu5').css({'top':'-18px'});
        $('.today-box').hide();
        $('.dust-box').hide();
        $('.clock-box').show();
        $('.week').hide();
        $('.sunset-box').hide();
    });
    $('.bottom-box a:eq(3)').click(function(){
        $(this).css({'top':'-45px'});
        $('.menu1').css({'top':'-18px'});
        $('.menu2').css({'top':'-18px'});
        $('.menu3').css({'top':'-18px'});
        $('.menu5').css({'top':'-18px'});
        $('.today-box').hide();
        $('.dust-box').hide();
        $('.clock-box').hide();
        $('.week').show();
        $('.sunset-box').hide();
    });
    $('.bottom-box a:eq(4)').click(function(){
        $(this).css({'top':'-45px'});
        $('.menu1').css({'top':'-18px'});
        $('.menu2').css({'top':'-18px'});
        $('.menu3').css({'top':'-18px'});
        $('.menu4').css({'top':'-18px'});
        $('.today-box').hide();
        $('.dust-box').hide();
        $('.clock-box').hide();
        $('.week').hide();
        $('.sunset-box').show();
    });

    // 시간별 날씨
    $('.clock-slick').slick({
        slide: '.clocks',
        infinite : true,
        slidesToShow : 5,
        slidesToScroll : 2,
        autoplay: true,
        draggable : true
    });

    // // 주간 날씨
    $('#weekslick').slick({
        slide: 'div',
        vertical : true,
        infinite : true,
        slidesToShow : 2,
        slidesToScroll : 1,
        draggable :true,
        autoplay: true
    });
});
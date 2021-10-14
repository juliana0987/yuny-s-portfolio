//skrollr 
var s = skrollr.init();

function loading() {

    // 메인 효과
    setTimeout(function () {
        gsap.to(".main .waveBack", {
            duration: 1.2,
            opacity: 1,
            y: 0,
            ease: "elastic.out(1, 0.3)"
        })
        gsap.to(".main .waveFront", {
            duration: 1.3,
            opacity: 1,
            y: 0,
            ease: "elastic.out(1, 0.3)",
            delay: .5
        })
        gsap.to(".main .cloud1", {
            duration: 1.3,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1, 0.2)",
            delay: 2
        })
        gsap.to(".main .cloud2", {
            duration: 1.3,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1, 0.2)",
            delay: 2.5
        })
        gsap.to(".main .cloud3", {
            duration: 1.3,
            opacity: 1,
            scale: 1,
            ease: "elastic.out(1, 0.2)",
            delay: 3
        })
        $(".main .star").delay(3500).animate({
            opacity: 1
        }, 300).animate({
            opacity: 0
        }, 200).animate({
            opacity: 1
        }, 200).animate({
            opacity: 0
        }, 100).animate({
            opacity: 1
        }, 200);
        gsap.to(".main .mainCha", {
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: "elastic.out(1, 0.4)",
            delay: 4
        })
        gsap.to(".main .introTitle", {
            duration: 1,
            opacity: 1,
            scale: 1,
            rotate: 0,
            ease: "bounce.out",
            delay: 4
        })
    }, 500);

    setTimeout(function () {
        $(".main > div").addClass("loading");
        $(".main .scrollStart").show();
    }, 5000);
}
if (imgCurrent > 99) {
    imgCurrent = 100;
}

loading();
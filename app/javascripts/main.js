/*global $, Modernizr*/

$(function () {

    var deg = -90;
    var pageNum = 1;
    var curr = 1;
    var body = $('body');
    var nextBtn = $('#next-btn');
    var starsFront = $('#stars-overlay');

    // var frontPosition = 0;
    var backPosition = 0;
    // var distanceLong = -100;
    var distanceshort = -50;



    var slider = $('.bxslider').bxSlider({
        slideWidth: 490,
        controls: false,
        pager: false,
        keyboardEnabled: true,
        infiniteLoop: false,
        // onSlideNext: function () {
        //     currentSlider = slider.getCurrentSlide() + 1;
        // }
    });


    nextBtn.click(function () {

        if (pageNum === 2) {
            // slider control
            sliderControl();
        } else {
            // page control
            pageControl();
        }
    });


    function sliderControl() {

        curr += 1;
        // console.log('curr', curr);

        if (curr < 3) {
            // nect slider
            slider.goToNextSlide();
        } else {
            // page control
            pageControl();
            // console.log('next!');
        }
    }

    function pageControl() {
        // no infinite loop
        if (deg < -270) {
            $('#main').transition({
                opacity: 0,
                scale: 0,
            }, 400);

            // show end thanks
            $('#end').transition({
                scale: 1
            }, 550);

        } else {
            starsParallaxScroll();

            // normal
            $('#wheels').transition({
                rotate: deg + 'deg',
            }, 700, function () {
                deg += -90;
                pageNum += 1;

                if (pageNum === 5) {
                    pageNum = 1;
                }

                body.removeClass().addClass('page-' + pageNum);

            });
        }
    }

    function starsParallaxScroll() {

        // console.log('starsParallaxScroll!!');


        // frontPosition += distanceLong;
        backPosition += distanceshort;


        // console.log('frontPosition', frontPosition);

        // console.log('backPosition', backPosition);

        body.css({
            'background-position-x' : backPosition
        });

        // starsFront.css({
        //     'background-position-x' : frontPosition
        // });

    }

});



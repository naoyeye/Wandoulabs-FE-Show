/*global $, Modernizr*/

$(function () {

    var deg = -90;
    var pageNum = 1;
    var body = $('body');

    $('#wheels').click(function () {

        // if (deg < -270) {
            // $('#main').transition({
            //     opacity: 0,
            //     scale: 0,
            // }, 400);

            // $('#end').transition({
            //     scale: 1
            // }, 550);

        // } else {
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
        // }

    });
});



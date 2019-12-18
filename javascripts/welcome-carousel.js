/*
    * Welcome Carousel manages the synchronization between the carousel slides and the
    * slide list in the CSS class list-group li.
    * It requires the bootstrap javascript files.
*/

$(document).ready(function () {
    var clickEvent = false;

    $('#welcome-carousel').carousel({ interval: 4000 }).on('click', '.list-group li', function () {
        clickEvent = true;
        $('.content-block-div li').removeClass('active');
        $(this).addClass('active');
    }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
            var count = $('.content-block-div').children().length - 1,
                current = $('.content-block-div li.active'),
                id = parseInt(current.data('slide-to'), 10);

            current.removeClass('active').next().addClass('active');
            if (count == id) {
                $('.content-block-div li').first().addClass('active');
            }
        }
        clickEvent = false;
    });
});
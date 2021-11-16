function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



$(window).scroll(function () {

    $('.h1').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__lightSpeedInRight');
            $(this).removeClass('h1');
        }
    });

    $('.h2').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__fadeIn');
            $(this).removeClass('h2');
        }
    });

    $('.h3').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__flipInY');
            $(this).removeClass('h3');
        }
    });

    $('.h4').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animate__fadeInUp');
            $(this).removeClass('h4');
        }
    });

    $('.h5').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('fade-in');
            $(this).removeClass('h5');
        }
    });

});
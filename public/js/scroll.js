$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".section2").offset().top},
        'slow');
});
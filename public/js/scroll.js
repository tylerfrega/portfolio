$(document).ready(function(){
    $('.modal').modal();
     $('.trigger-modal').modal();
    
$(".aboutMeBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top},
        'slow');
});

$(".portfolioBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});

$(".contactMeBtn").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactMe").offset().top},
        'slow');
});


$(window).scroll(function(){
    $(".fade-scroll").css("opacity", 1 - $(window).scrollTop() / 250);
  });



});
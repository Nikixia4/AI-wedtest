$(document).ready(function(){
    $('.scrolltop').click(function(){
        $('html,body').animate({scrollTop:0}, 900);
    });
    $('.p-ans').hide();
    $('.title6 .qus1').click(function(event){
        $('.qus1 .p-ans').slideToggle();
        $('.qus1 .img').toggleClass("img-");
        $('.qus1').toggleClass("whiteline");
    })
    $('.title6 .qus2').click(function(event){
        $('.qus2 .p-ans').slideToggle();
        $('.qus2 .img').toggleClass("img-");
        $('.qus2').toggleClass("whiteline");
    })
    $('.title6 .qus3').click(function(event){
        $('.qus3 .p-ans').slideToggle();
        $('.qus3 .img').toggleClass("img-");
        $('.qus3').toggleClass("whiteline");
    })
    $('.title6 .qus4').click(function(event){
        $('.qus4 .p-ans').slideToggle();
        $('.qus4 .img').toggleClass("img-");
        $('.qus4').toggleClass("whiteline");
    })
    $('.title6 .qus5').click(function(event){
        $('.qus5 .p-ans').slideToggle();
        $('.qus5 .img').toggleClass("img-");
        $('.qus5').toggleClass("whiteline");
    })
    $('.meau-btn').click(function(event){
        $('.navbar-close').toggleClass('show');
        $('.title1, .title2, .title3, .title4, .title6, .title5, .footer1').toggle();
        $('.footer2').toggleClass('navbar');
    });

});
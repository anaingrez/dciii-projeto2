let numberOfImages = 50;
let time = 300;
let index = 1;
let sliderTimeout;

function changeImage() {
    document.slider.src = `fotos/f_${index}.png`;
    if (++index > numberOfImages)
        index = 1;
    sliderTimeout = setTimeout('changeImage()', time);
}

$(function(){
    changeImage();
});

function changeToHome(){
    $('.active-page').toggleClass('hidden active-page');
    $('.home-page').toggleClass('hidden active-page');

    $('.active').removeClass('active');
    $('#home').addClass('active');

    changeImage();
}

function changeToConceito(){
    $('.active-page').toggleClass('hidden active-page');
    $('.conceito-page').toggleClass('hidden active-page');

    $('.active').removeClass('active');
    $('#conceito').addClass('active');

    clearTimeout(sliderTimeout);
}

function changeToPublicacao(){
    $('.active-page').toggleClass('hidden active-page');
    $('.publicacao-page').toggleClass('hidden active-page');

    $('.active').removeClass('active');
    $('#publicacao').addClass('active');

    clearTimeout(sliderTimeout);
}

// $(".content").mCustomScrollbar({
//     theme:"minimal"
// });

// function($){
//     $(window).on("load",function(){
//         $(".content").mCustomScrollbar();
//     });
// })(jQuery);


// Usage $(selector).mCustomScrollbar({ autoDraggerLength: false });
// alwaysShowScrollbar: 0


$(document).ready(function() {

    // let random = Math.floor(Math.random() * (7 - 1) + 1);

    // $(".section-main").css({
    //     "background-image": "url(./assets/images/" + random + ".jpg)"
    // })


    $(".owl-carousel").owlCarousel({
        items: 1,
        autoHeight: true,
        animateOut: 'fadeOut',
        nav: true
    });

    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 300,
    });

        $(".to-search").click(function () {
          // mobileMenu.removeClass("-opened"); 
        var id  = $('.section-search'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        });

         $(".to-contact").click(function () {
        var id  = $('footer'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
        });

    let modalToggler = $(".js-modal-toggler"),
        modal = $(".modal"),
        headerMobile = $(".header-mobile"),
        mobileMenu = $(".mobile-menu"),
        modalElems = [
            ".js-modal-github",
            ".js-modal-vk",
            ".js-modal-inst",
            ".modal-map",
            ".modal-toggler"
        ];

    $(".mobile-toggler").click(function() {
        if (modal.hasClass('-active')) {
            modal.toggleClass('-active');
        }
        headerMobile.toggleClass("-isOpen");
        $(this).toggleClass('-opened');
        headerMobile.toggleClass('-is-open');
        headerMobile.removeClass('-active');
    });

    $(".js-modal-toggler").click(function() {
        headerMobile.removeClass("-isOpen");
        $(".mobile-toggler").removeClass("-opened");
    });

    setTimeout(function(){
        $(".-from-above").addClass("-animated");
        $(".-from-bottom").addClass("-animated");
    }, 500);

    // modalToggler.click(function() {
    //     modal.toggleClass("-active");
    //     for(let i = 0; i < modalElems.length ; i++) {
    //         let timeToWait = i * 200;

    //         setTimeout(function() {
    //             $(modalElems[i]).toggleClass("-active");
    //         }, 200 + timeToWait)
    //     }
    // });

});



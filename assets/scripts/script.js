$(document).ready(function() {

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
        btnSearch = $('.btn-search'),
        searchInput = $('.search-input');

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

    const clientId = 'rf51y_ZJNokGoTMgQa4Z6yOFuDpPplwSoPxyicUIMQEeC1vMWq9BlRlmwSPjGLhv';
    const clientSecret = 'UW2zsgiVtEI5jzUVCA1TxGTbJRUwEPLDEiVuVVH9tWqQpBxdEzyiE8jUbdpWa8IZ0k0kiCs-Mg4myqaGRby_aA';
    const redirectUri = '';
    const scope = '';
    const state = '';

    const basePath = 'https://api.genius.com/';
    const accessTokenText = '&access_token=';

    const clientToken = 'sBhmvMyC8Xn1FalOsrpSr6qYD8_tHvrUUDM18XfcVXhSb_MhutyXyoIpNjXml9yN';

    let searchRequest = '';

    btnSearch.click(function(){
        searchRequest = searchInput.val();
        sendRequest();
    })

    function sendRequest() {
        $.get(basePath + 'search?q=' + searchRequest + accessTokenText + clientToken, function(response) {
            for (let i = 0; i < response.response.hits.length; i++) {
                console.log(response.response.hits[i].result);
                $('.container-result').append(returnSongPreviewBlock(response.response.hits[i].result));
            }

        })

    }

    function returnSongPreviewBlock(songData) {
        return '<div class="song-items"><div class="img-wrapper"><img src="' + songData.song_art_image_thumbnail_url + '"></div><div class="info-items"><span class="song-item">' +  + '</span><div class="artist-wrapper"><span>by </span><span class="artist-item">' +  + '</span></div></div></div>';
    }
});



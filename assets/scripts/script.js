$(document).ready(function() {

    // $(".owl-carousel").owlCarousel({
    //     items: 1,
    //     autoHeight: true,
    //     animateOut: 'fadeOut',
    //     nav: true
    // });

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
        searchInput = $('.search-input'),
        songDiv = $('.container-result'),
        searchError = $('.search-error');

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

    const clientToken = 'o1gT8mENQxIc-F1ybroPLIvESbxv3thdd163BLBHQ-gxP_x7BgCht-FwELyXYv1x';

    let searchRequest = '';

    document.onkeyup = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            searchRequest = searchInput.val();
            sendRequest();
        }
        return false;
    }

    btnSearch.click(function(){
        searchRequest = searchInput.val();
        sendRequest();
    })

    function sendRequest() {
        songDiv.html('');
        $.get(basePath + 'search?q=' + searchRequest + accessTokenText + clientToken, function(response) {
            if(response.response.hits.length < 1) {
                searchError.toggleClass('-occured');
                // setTimeout(function(){
                //     searchError.removeClass('-occured');
                // }, 2500);
            } else {
                for (let i = 0; i < response.response.hits.length; i++) {
                    console.log(response.response.hits[i].result);
                    songDiv.append(returnSongPreviewBlock(response.response.hits[i].result));
                }
                searchError.removeClass('-occured');
            }
        })
    }

    function returnSongPreviewBlock(songData) {
        return '<div class="song-items" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><div class="img-wrapper"><img src="' + songData.song_art_image_thumbnail_url + '"></div><div class="info-items"><span class="song-item">' + songData.title_with_featured + '</span><div class="artist-wrapper"><span class="by-item">by </span><span class="artist-item">' + songData.primary_artist.name + '</span></div></div></div>';
    }
});



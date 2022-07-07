$(document).ready(function () {
    // Etart header
    // for bugger
    $('.navbuttons').click(function () {
        $('.navbuttons').toggleClass('crossxs');
    });
    // end bugger

    // for nav
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();

        if (getscrolltop >= 200) {
            $('.navbar').addClass('navmenus');
        } else {
            $('.navbar').removeClass('navmenus');
        }
    });
    // end nav
    // End header

    // Start properties

    $('.propertielists').click(function () {
        // for activeitem
        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        // for filter
        let getattvalue = $(this).attr('data-filter');
        // console.log(getattvalue);
        if (getattvalue === "all") {
            $('.filters').show();
        } else {
            $('.filters').hide();
            $('.filters').not('.' + getattvalue).hide();
            $('.filters').filter('.' + getattvalue).show('slide', 500);
        }

    });

    lightbox.option({
        showImageNumberLabel: false,
    })
    // End properties
    // Start Adv
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        if (getscrolltop >= 900) {
            $('.advimages').addClass('fromlefts');
            $('.advtexts').addClass('fromrights');
        } else {
            $('.advimages').removeClass('fromlefts');
            $('.advtexts').removeClass('fromrights');
        }
    })
    // End Adv
});
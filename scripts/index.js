$(document).ready(function () {

    (function () {

        let burger = $('.burger');
        let burgerMenu = $('.burger-menu');
        let burgerMenuTextCancel = $('.burger-menu-text-cancel');

        burger.on('click', function () {
            burgerMenu.removeClass('closeBurgerMenu');
            burgerMenu.addClass('openBurgerMenu');
        });

        burgerMenuTextCancel.on('click', function () {
            burgerMenu.removeClass('openBurgerMenu');
            burgerMenu.addClass('closeBurgerMenu');
        });

        let burgerMenuItemCatalog = $('.burger-menu-item-catalog');

        burgerMenuItemCatalog.on('click', function() {
            $('.main-products')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let burgerMenuItemSteps = $('.burger-menu-item-steps');

        burgerMenuItemSteps.on('click', function() {
            $('.steps')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let burgerMenuItemGallery = $('.burger-menu-item-gallery');

        burgerMenuItemGallery.on('click', function() {
            $('.gallery')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let burgerMenuItemOther = $('.burger-menu-item-other');

        burgerMenuItemOther.on('click', function() {
            $('.other')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let forCatalogPop = $('.forCatalogPop');
        let popCommon = $('.pop-common');

        forCatalogPop.on('click', function (event) {
            event.stopPropagation();
            popCommon.toggleClass('popOpen');
        });

        document.addEventListener('click', function() {
            popCommon.removeClass('popOpen');
        });

        let catalogPopItemCheap = $('.catalog-pop-item-cheap');

        catalogPopItemCheap.on('click', function() {
            $('.product-cheap')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemSingle = $('.catalog-pop-item-single');

        catalogPopItemSingle.on('click', function() {
            $('.product-single')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemPars = $('.catalog-pop-item-pars');

        catalogPopItemPars.on('click', function() {
            $('.product-pars')[0].scrollIntoView({behavior: "smooth"});
        });

        let liItemSteps = $('.li-item-steps');

        liItemSteps.on('click', function() {
            $('#steps')[0].scrollIntoView({behavior: "smooth"});
        });

        let liItemGallery = $('.li-item-gallery');

        liItemGallery.on('click', function() {
            $('#gallery')[0].scrollIntoView({behavior: "smooth"});
        });

        let liItemOther = $('.li-item-other');

        liItemOther.on('click', function() {
            $('#other')[0].scrollIntoView({behavior: "smooth"});
        });

        let mainBtnCatalog = $('#main-btn-catalog');

        mainBtnCatalog.on('click', function() {
            $('#main-products')[0].scrollIntoView({behavior: "smooth"});
        });

        let mainBtnConsult = $('#main-btn-consult');
        let takeInfoFromUserWrapper = $('.takeInfoFromUser-wrapper');

        mainBtnConsult.on('click', function() {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let takeInfoFromUserImg = $('.takeInfoFromUser-img');

        takeInfoFromUserImg.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnKnowPrice = $('#btn-know-price');

        btnKnowPrice.on('click', () => {
            takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
        });

        let btnCallAll = document.getElementsByClassName('btn-call');

        for (let i = 0; i < btnCallAll.length; i++) {
            btnCallAll[i].onclick =  function() {
                takeInfoFromUserWrapper.toggleClass('takeInfoFromUserWrapperOpen');
            }
        }

        let footerItemGalleryLi = $('.footer-item-gallery-li');

        footerItemGalleryLi.on('click', function() {
            $('#gallery')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemStepsLi = $('.footer-item-steps-li');

        footerItemStepsLi.on('click', function() {
            $('#steps')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemOtherLi = $('.footer-item-other-li');

        footerItemOtherLi.on('click', function() {
            $('#other')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemAboutLi = $('.footer-item-about-li');

        footerItemAboutLi.on('click', function() {
            $('#about')[0].scrollIntoView({behavior: "smooth"});
        });



    })();

});
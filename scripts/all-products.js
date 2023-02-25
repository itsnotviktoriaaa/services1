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

        let burgerMenuItemServices = $('.burger-menu-item-services');

        burgerMenuItemServices.on('click', function() {
            $('#product-services')[0].scrollIntoView({behavior: "smooth"});
            burgerMenu.removeClass('openBurgerMenu');
        });

        let allProductsServicesLi = $('.all-products-services-li');

        allProductsServicesLi.on('click', function() {
            $('#product-services')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemCheap = $('.footer-item-cheap');
        footerItemCheap.on('click', function() {
            $('#product-cheap')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemSingle = $('.footer-item-single');
        footerItemSingle.on('click', function() {
            $('#product-single')[0].scrollIntoView({behavior: "smooth"});
        });

        let footerItemCatalogLi = $('.footer-item-catalog-li');
        footerItemCatalogLi.on('click', function() {
            $('.header-wrapper')[0].scrollIntoView({behavior: "smooth"});
        });

        let takeInfoFromUserWrapper = $('.takeInfoFromUser-wrapper');
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
            $('#product-cheap')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemSingle = $('.catalog-pop-item-single');

        catalogPopItemSingle.on('click', function() {
            $('#product-single')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemPars = $('.catalog-pop-item-pars');

        catalogPopItemPars.on('click', function() {
            $('#product-pars')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemKrest = $('.catalog-pop-item-krest');

        catalogPopItemKrest.on('click', function() {
            $('#product-krest')[0].scrollIntoView({behavior: "smooth"});
        });

        let catalogPopItemExclusive = $('.catalog-pop-item-exclusive');

        catalogPopItemExclusive.on('click', function() {
            $('#product-exclusive')[0].scrollIntoView({behavior: "smooth"});
        });

    })();

});
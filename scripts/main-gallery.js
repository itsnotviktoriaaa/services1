$(document).ready(function () {

    (function () {

        let forCatalogPop = $('.forCatalogPop');
        let popCommon = $('.pop-common');

        forCatalogPop.on('click', function (event) {
            event.stopPropagation();
            popCommon.toggleClass('popOpen');
        });

        document.addEventListener('click', function() {
            popCommon.removeClass('popOpen');
        });

    })();

});
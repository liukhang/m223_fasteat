require(
    ['jquery', 'Magento_Ui/js/modal/modal'],
    function($, modal) {
        setTimeout(function(){
            modal({
                autoOpen: true,
                responsive: true,
                clickableOverlay: false,
                modalClass: 'modal-custom',
                title: ''
            }, $("#popup-content"));
        },5000);
    }
);
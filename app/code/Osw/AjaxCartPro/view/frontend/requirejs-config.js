var config = {
    map: {
        '*': {
			oswSidebar: 'Osw_AjaxCartPro/js/sidebar',
            catalogAddToCart: 'Osw_AjaxCartPro/js/catalog-add-to-cart',
			catalogAddToCompare: 'Osw_AjaxCartPro/js/catalog-add-to-compare'
        },
		'shim': {
    		'Osw_AjaxCartPro/js/catalog-add-to-cart': ['catalogAddToCart'],
			'Osw_AjaxCartPro/js/catalog-add-to-compare': ['mage/dataPost']
    	}
    }
};

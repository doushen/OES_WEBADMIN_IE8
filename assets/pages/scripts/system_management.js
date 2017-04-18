var System = function () {

    return {

        //main function to initiate the module
        init: function () {
            
			$(".iframeify").click(function(){
                top.Layout.addTab(this);
                return false;
            });

            $(".modalify").click(function(){
                
                return false;
            });
        }

    };
}();

jQuery(document).ready(function() {
	System.init();
});
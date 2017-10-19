jQuery(document).ready(function($){
	
	$(function () {
		$('.click-nav > ul').toggleClass('no-js js');
		$('.click-nav .js ul').hide();
		$('.click-nav .js').click(function(e) {
			$('.click-nav .js ul').slideToggle(200);
		    $('.clicker').toggleClass('active');
		    e.stopPropagation();
		});
		$(document).click(function() {
		    if ($('.click-nav .js ul').is(':visible')) {
		      	$('.click-nav .js ul', this).slideUp();
			  	$('.clicker').removeClass('active');
		    }
		});
	});		
	
	console.log(luminateExtend.library.version);
	
	jQuery('.bxslider').bxSlider({
		
		pager: false,
		
		controls: false,
		
		auto: true,
		
		speed: 1000
	
	});

	
});



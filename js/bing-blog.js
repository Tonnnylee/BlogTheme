/*
 *Clean Blog v1.0.0 (http://startbootstrap)
 *Some code were fromm Hux and Custom code from BING
 * 
 */

// Tooltip Init
$(function(){
	$("[data-toggle='tooltip']").tooltip();
});

// responsive tables
$(document).ready(function() {
	$("table").wrap("<div class='table-responsive'></div>");
	$("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () { 
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
	$('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});


// Navigation Script to show Header on Scroll-up
$(document).ready(function(){
    var MQL = 1170;

    if($(window).width() > MQL) {
    	var headerHeight = $('.navbar-custom').height();
    	$(window).on('scroll', {
    		previousTop: 0
    	},
        function() {
        	var currentTop = $(window).scrollTop();
        	//check if user is scrolling up
        	if (currentTop < this.previousTop) {
                //if scrolling up...
                if(currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                	$('.navbar-custom').addClass('is-visible');
                } else {
                    $('.navbar-custom').removeClass('is-visible is-fixed');
                }
        	} else {
                //if scrolling down...
                $('.navbar-custom').removeClass('is-visible');
                if(currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')){
                	$('.navbar-custom').addClass('is-fixed');
                }
        	}
        	this.previousTop = currentTop;
         }
    	)
    }
})
$(document).ready(function() {
	$('a[href^="#"]').on('click', function(event) {
	    var target = $($(this).attr('href'));
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if(target.length) {
	        $('html,body').animate({
	            scrollTop: target.offset().top - 80
	        }, 1000);
	        return false;
	    }
	});

	$('.toggle-button').on('click',function(event) {
	    $('.main-content').toggleClass("extra-margin-top");
	});
	$('.collapse-links').on('click', function(event) {
	    $(".toggle-button").click();
	});
    $('.main-content').click(function (event) {
        var clickover = $(event.target);
        var opened = $(".collapse").hasClass("collapse in");
        if (opened === true && !clickover.hasClass("toggle-button")) {
            $(".toggle-button").click();
        }
    });
});


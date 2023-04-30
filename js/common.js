// Variables globales:
var current=1;
var next=1;
var inc=0;
var jump="";
var total=5;
var max_width_xs=767;
var fadingMs=100;
var well=$("#well");
var dot1=$("#dot1");
var dot2=$("#dot2");
var dot3=$("#dot3");
var pagetop = $("#page_top");
var ideas=$("#ideas");
var light=$("#light");


$(document).ready(function() {
		
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} 
		else {
			pagetop.fadeOut();
		}
	});
	
	$(function() {
	    $("img").on('contextmenu', function(e) {
	        return false;
	    });
	});    

	$(function() {
		$('a[href^="#"]').click(function() {
			var velocidad = 400;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, velocidad, 'swing');
			if (href == "#about") {
				reset_about();
			}
			return false;
		});
	});

})


function reset_about(event) {
	current=1;
	next=1;
	document.getElementById('item1').scrollIntoView();
	document.getElementById('go_prev').style.opacity=0;
	document.getElementById('go_next').style.opacity=1;
}

function go_next(event) {
	event.preventDefault();
	if ($(window).width() <= max_width_xs) { // Case xs
		inc=1;
	}
	else {
		inc=2;
	}

	next = current + inc;
	
	if(next <= total) {
		jump = 'item'.concat(next);
		current = next;
		document.getElementById(jump).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
		if ((current+inc) > total) {
			document.getElementById('go_next').style.opacity=0;
		}
		if (current > 1) {
			document.getElementById('go_prev').style.opacity=1;
		}
	}
}

function go_prev(event) {
	event.preventDefault();
	if ($(window).width() <= max_width_xs) { // Case xs
		inc=1;
	}
	else {
		inc=2;
	}

	next = current - inc;
	if(next > 0) {
		jump = 'item'.concat(next);
		current = next;
		document.getElementById(jump).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start'});
		if ((current-inc) < 1) {
			document.getElementById('go_prev').style.opacity=0;
		}
		if (current<total) {
			document.getElementById('go_next').style.opacity=1;
		}
	}
	else {
		current = 1;
		document.getElementById('go_prev').style.opacity=0;
	}
}

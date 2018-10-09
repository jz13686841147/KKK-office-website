/* ----------------------------- 
Pre Loader
----------------------------- */
$(window).load(function() {
	'use strict';
	$('.loading-icon').delay(500).fadeOut();
	$('#preloader').delay(800).fadeOut('slow');
});



				

/* ----------------------------- 
滚动到视口动画
----------------------------- */
$(document).ready(function() {	
	'use strict';
	$('.animated').appear(function() {
		var element = $(this),
			animation = element.data('animation'),
			animationDelay = element.data('animation-delay');
			if ( animationDelay ) {

				setTimeout(function(){
					element.addClass( animation + " visible");
				}, animationDelay);

			} else {
				element.addClass( animation + " visible");
			}
	});
});
	

/* ---------------------------
NiceScroll
----------------------------- */	
// $(document).ready(function() {
// 	'use strict';
//     $("html").niceScroll({
// 		cursorcolor: '#E74C3C',
// 		cursoropacitymin: '1',
// 		cursorborder: '0px',
// 		cursorborderradius: '0px',
// 		cursorwidth: '5px',
// 		cursorminheight: 60,
// 		horizrailenabled: false,
// 		zindex: 1090,
//         mousescrollstep:100
// 	});
//   });




				
/* ----------------------------- 
Card Style Script
----------------------------- */					
$(document).ready(function() {
	'use strict';
	var $el 			= $( '#card-ul' ),
		sectionFeature  = $('#section-feature'),
		baraja 			= $el.baraja();
	
		if ( $(window).width() > 480) {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 100,
					direction : 'right',
					origin : { x : 50, y : 200 },
					center : true
				});
			}); 
		} else {
			sectionFeature.appear(function(){
				baraja.fan({
					speed : 1500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
			$('#feature-expand').click(function() {
				baraja.fan({
					speed : 500,
					easing : 'ease-out',
					range : 80,
					direction : 'left',
					origin : { x : 200, y : 50 },
					center : true
				});
			});
		}
		
	// Feature navigation
	$('#feature-prev').on( 'click', function( event ) {
		baraja.previous();
	});

	$('#feature-next').on( 'click', function( event ) {
		baraja.next();
	});
	
	// close Features
	$('#feature-close').on( 'click', function( event ) {
		baraja.close();
	});	
});

/* ----------------------------- 
Fitvids init
----------------------------- */
 $(document).ready(function(){
    'use strict';
    $('.video-content').fitVids();
 });


/* ----------------------------- 
IE 9 Placeholder fix
----------------------------- */
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();



/* ----------------------------- 
优质产品
----------------------------- */	
$(document).ready(function() {
	// 'use strict';
	// $('.view-project').on('click', function(e) {
    $("#section-screenshots").delegate(".view-project","click",function(e){
		e.preventDefault();

		var href 			= $(this).attr('href') + ' .portfolio-project',
			portfolioWrap	= $('.porfolio-container'),
			contentLoaded 	= $('#portfolio-load'),
			offset			= $('#section-screenshots').offset().top;
		portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
		portfolioWrap.fadeOut(400);
		$('html, body').animate({scrollTop: offset},{duration:800,queue:true});
		setTimeout(function(){ $('#portfolio-loader').fadeIn('fast'); },300);

		setTimeout(function(){
            contentLoaded.load(href, function(){
                $('#portfolio-loader').fadeOut('fast');
                contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
                $('.back-button').fadeIn(600);
                $('#myCarousel').carousel({
                    interval: 1000,
                    pause:"hover"
                });
            });
        },400);



	});
	$('.backToProject').on('click', function(e){
		e.preventDefault();

		var portfolioWrap	= $('.porfolio-container'),
			contentLoaded 	= $('#portfolio-load');

		contentLoaded.animate({'left':'105%'},{duration:400,queue:false}).delay(300).fadeOut(400);
        $(this).parent().fadeOut(400);
		setTimeout(function(){
            portfolioWrap.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap.fadeIn(600);
        },500);
        $('#section-screenshots').animatescroll();
	});

});


/*-----------------------
 新闻资讯
 ----------------------------*/
$(document).ready(function() {
    // 'use strict';
    // $('.view-project-3').on('click', function(e) {
    $("#section-screenshots-3").delegate(".view-project-3","click",function(e){
        e.preventDefault();

        var href 			= $(this).attr('href') + ' .portfolio-project',
            portfolioWrap	= $('.porfolio-container-3'),
            portfolioWrap1   = $('.page'),
            contentLoaded 	= $('#portfolio-load-3'),
            offset			= $('#section-screenshots-3').offset().top;

        portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
        portfolioWrap.fadeOut(400);
        portfolioWrap1.animate({'left':'-120%'},{duration:400,queue:false});
        portfolioWrap1.fadeOut(400);
        $('html, body').animate({scrollTop: offset},{duration:800,queue:true});
        setTimeout(function(){ $('#portfolio-loader-3').fadeIn('fast'); },300);

        setTimeout(function(){
            contentLoaded.load(href, function(){
                $('#portfolio-loader-3').fadeOut('fast');
                contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
                $('.back-button-3').fadeIn(600);
            });
        },400);



    });
    $('.backToProject1').on('click', function(e){
        e.preventDefault();

        var portfolioWrap	= $('.porfolio-container-3'),
            portfolioWrap1  = $('.page')
        contentLoaded 	= $('#portfolio-load-3');

        contentLoaded.animate({'left':'105%'},{duration:400,queue:false}).delay(300).fadeOut(400);
        $(this).parent().fadeOut(400);
        setTimeout(function(){
            portfolioWrap.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap.fadeIn(600);
            portfolioWrap1.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap1.fadeIn(600);
        },500);
        $('#section-screenshots-3').animatescroll();
    });

});



/*-----------------------
 招贤纳士
 ----------------------------*/
$(document).ready(function() {
    // 'use strict';
    // $('.view-project-2').on('click', function(e) {
    $("#section-screenshots-2").delegate(".view-project-2","click",function(e){
        e.preventDefault();

        var href 			= $(this).attr('href') + ' .portfolio-project',
            portfolioWrap	= $('.porfolio-container-2'),
            portfolioWrap1   = $('#page_navigation'),
            contentLoaded 	= $('#portfolio-load-2'),
            offset			= $('#section-screenshots-2').offset().top;

        portfolioWrap.animate({'left':'-120%'},{duration:400,queue:false});
        portfolioWrap.fadeOut(400);
        portfolioWrap1.animate({'left':'-120%'},{duration:400,queue:false});
        portfolioWrap1.fadeOut(400);
        $('html, body').animate({scrollTop: offset},{duration:800,queue:true});
        setTimeout(function(){ $('#portfolio-loader-2').fadeIn('fast'); },300);

        setTimeout(function(){
            contentLoaded.load(href, function(){
                $('#portfolio-loader-2').fadeOut('fast');
                contentLoaded.fadeIn(600).animate({'left':'0'},{duration:800,queue:false});
                $('.back-button-2').fadeIn(600);
            });
        },400);



    });
    $('.backToProject2').on('click', function(e){
        e.preventDefault();

        var portfolioWrap	= $('.porfolio-container-2'),
            portfolioWrap1  = $('#page_navigation')
        contentLoaded 	= $('#portfolio-load-2');

        contentLoaded.animate({'left':'105%'},{duration:400,queue:false}).delay(300).fadeOut(400);
        $(this).parent().fadeOut(400);
        setTimeout(function(){
            portfolioWrap.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap.fadeIn(600);
            portfolioWrap1.animate({'left':'0'},{duration:400,queue:false});
            portfolioWrap1.fadeIn(600);
        },500);
        $('#section-screenshots-2').animatescroll();
    });

});

/* ----------------------------- 
BxSlider
----------------------------- */		
$(document).ready(function() {
	'use strict';
	$('.testimonial-slider').bxSlider({
		pagerCustom: '#bx-pager',
		pager: true,
		touchEnabled: true,
		controls: false
	});	
});

				
/* ----------------------------- 
Main navigation
----------------------------- */
$(document).ready(function() {
	'use strict';
	$('.nav').onePageNav({
		currentClass: 'current',
		scrollSpeed: 1000,
		easing: 'easeInOutQuint'
	});
	$(window).bind('scroll', function(e) {
		var scrollPos = $(window).scrollTop();
		scrollPos > 220 ? $('.sticky-section').addClass('nav-bg') : $('.sticky-section').removeClass('nav-bg');
	});
});

/* -----------------------
 背景滑块
//  ----------------------------- */
$(window).ready(function() {
    'use strict';
    $.vegas('slideshow', {
        backgrounds:[
            { src:'https://static.kakuka.com.cn/bg-5.jpg', fade:1000 },
            // { src:'https://static.kakuka.com.cn/bg-4.jpg', fade:1000 },
            { src:'https://static.kakuka.com.cn/bg-6.jpg' }
        ]
    });
});
/* ----------------------------- 
 mailcimp脚本插件
----------------------------- */
// $(document).ready(function() {
// 	'use strict';
// 	$('#subscription-form').ajaxChimp({
// 		callback: mailchimpCallback,
// 		url: 'YOUR_URL' /* 用自己定义的链接代替它 '' */
// 	});
//
// 	function mailchimpCallback(resp) {
// 		 if(resp.result === 'success') {
// 			$('.subscription-success')
// 				.html(resp.msg)
// 				.delay(500)
// 				.fadeIn(1000);
//
// 			$('.subscription-success').fadeOut(8000);
//
// 		} else if(resp.result === 'error') {
// 			$('.subscription-failed')
// 				.html(resp.msg)
// 				.delay(500)
// 				.fadeIn(1000);
//
// 			$('.subscription-failed').fadeOut(5000);
// 		}
// 		$('#subscription-form .input-email').val('');
// 	};
// });

			

/* ----------------------------- 
联系方式
----------------------------- */			
// $(document).ready(function() {
// 	'use strict';
// 	$('form.contact-form').on('submit', function(e) {
// 		$.post('www.baidu.com', $(this).serialize(), function(response) {
// 			if ($('.confirmation p').html() != "") {
// 				$('.confirmation p').replaceWith('<p><span class="fa fa-check"></span></p>');
// 			}
// 			$('.confirmation p').append(response).parent('.confirmation').show();
// 			$('html, body').animate({
// 				scrollTop: $('#section-contact').offset().top
// 				},{duration:800,queue:true});
// 			$('.form-item').val('');
// 			setTimeout(function() {
// 				$('.confirmation').hide();
// 			}, 8000);
// 		});
// 		// 禁用默认动作
// 		e.preventDefault();
// 	});
//
// });
			

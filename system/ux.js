//Loader
$('body').append('<div class="loader"><div></div><div></div><span>Загрузка</span><span>Электро Поинт | Сарапул</span></div>');
$(document).ready(function(){$('.loader').remove(); $('body').css('overflow-y', 'initial');});

//GTM
$('head').append('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-172173285-1"></script>');
window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-172173285-1');

//Cart data-config-add-product-behavior="none"
$('head').append('<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.css">');
$('body').append('<script async src="https://cdn.snipcart.com/themes/v3.0.22/default/snipcart.js"></script><div id="snipcart" data-api-key="NGIwYzY2MGQtNDY1Yi00ZDI5LWI1YjItYjk2MjgzYmY4NGUxNjM3MzkwNDYxOTE0Njg4NTEy" hidden></div>');
document.addEventListener('snipcart.ready', () => {Snipcart.api.session.setCurrency('rub');});

//GSAP
$('body').append('<script src="libs/gsap.js"></script>');

//Init
var scroll_time = 60000;
var nav_left = '20rem';
if ($(window).width() > 720) {$('body').append('<span class="cursor"></span><div class="circle"></div>');}
if ($(window).width() < 720) {var scroll_time = 90000; $('.page-nav, .social').remove(); var nav_left = '0';}

//Nav Hide
var nps = window.pageYOffset;
if ($(window).width() < 720) {window.onscroll = function() {
	var ncs = window.pageYOffset; if (nps > ncs) {$('header').css({'top': '0', 'box-shadow': '0 0.125rem 0.25rem 0 rgba(0,0,0,0.125)'});} else {$('header').css({'top': '-4rem', 'box-shadow': 'initial'});} nps = ncs;}
}

function nav() {$('.nav').css('left', nav_left); $('body').css('overflow-y', 'hidden'); $('.nav-s').css('display', 'none'); $('.nav-c').css('display', 'inline-block');}
function nav_c() {$('.nav').css('left', '-125%'); $('body').css('overflow-y', 'initial'); $('.nav-c').css('display', 'none'); $('.nav-s').css('display', 'inline-block');}

$('.nav-3 li a').click(function(){nav_c();});

function totop() {$(window).scrollTop($('body').offset().top);}
function tobottom() {$(window).scrollTop($('footer p').offset().top);}

//Demo
$('body').append('<a class="stop-demo mdl2" href="javascript:scroll_p();"></a>');
$('footer').after('<audio src="https://electro-point.net/media/mp3/music-2.mp3" loop></audio>');

//Global
$('.hr').addClass('vw');
$('[data-top]').each(function(){var top = $(this).attr('data-top'); $(this).css('margin-top', top + 'rem');});
$('[data-right]').each(function(){var right = $(this).attr('data-right'); $(this).css('margin-right', right + 'rem');});

//$('').insertBefore('');

//$(document).ready(function() {$('aside').load('../core/aside.html'); $('footer').load('../core/footer.html');});

//AOS $element.removeAttr('animation'); setTimeout(function() {}, 500);
var $aos = $('[data-aos], [hr]');
function ciiv(){var wh = $(window).height(); var wtp = $(window).scrollTop(); var wbt = (wtp + wh); $.each($aos, function() {var $element = $(this); var eh = $element.outerHeight(); var etp = $element.offset().top; var ebp = (etp + eh); if ((ebp >= wtp) && (etp <= wbt)) {$element.addClass('aos');} else {}});}
$(window).on('scroll resize', ciiv); $(window).trigger('scroll');

$('[data-aos-dur]').each(function(){var aos_dur = $(this).attr('data-aos-dur'); $(this).css('animation-duration', aos_dur + 's');});

//Cursor
function moveCursor(e) {TweenLite.to($('.cursor'), 0, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCursor);
function moveCircle(e) {TweenLite.to($('.circle'), 0.5, {css: {left: e.pageX, top: e.pageY}});} $(window).on('mousemove', moveCircle);

$('a, button, input, .snipcart-add-item, .snipcart-checkout, .snipcart-customer-signin').hover(function(){$('.cursor').css({'color': 'white', 'text-shadow': 'initial'}); $('.circle').css({'background-color': 'rgba(0,0,0,0.125)', 'border': 'initial', 'box-shadow': 'initial'});},
				  function(){$('.cursor').css({'color': 'black', 'text-shadow': '0 0 0 0.25rem white'}); $('.circle').css({'background-color': 'initial', 'border': 'solid 0.0625rem black', 'box-shadow': '0 0 0 0.0625rem white'});});

$('header, nav, footer, .social').hover(function(){$('.cursor').css({'color': 'white', 'text-shadow': '0 0 0 0.25rem black'}); $('.circle').css({'border': 'solid 0.0625rem white', 'box-shadow': '0 0 0 0.0625rem black'});},
				  function(){$('.cursor').css({'color': 'black', 'text-shadow': '0 0 0 0.25rem white'}); $('.circle').css({'border': 'solid 0.0625rem black', 'box-shadow': '0 0 0 0.0625rem white'});});

$('header a, header span, nav a, footer a, .social a, .shop ul.se').hover(function(){$('.cursor').css({'color': 'white', 'text-shadow': 'initial'}); $('.circle').css({'background-color': 'rgba(255,255,255,0.25)', 'border': 'initial', 'box-shadow': 'initial'});},
					function(){$('.cursor').css({'color': 'white', 'text-shadow': '0 0 0 0.25rem black'}); $('.circle').css({'background-color': 'initial', 'border': 'solid 0.0625rem white', 'box-shadow': '0 0 0 0.0625rem black'});});

//Parallax
$(document).mousemove(function(e){parallaxIt(e, "[parallax=follow]", 50); parallaxIt(e, "[parallax=unfollow]", -50); parallaxIt(e, "[parallax=follow-x2]", 100); parallaxIt(e, "[parallax=unfollow-x2]", -100);});
function parallaxIt(e, target, movement){var $this = $("body"); var relX = e.pageX - $this.offset().left; var relY = e.pageY - $this.offset().top; TweenMax.to(target, 1, {x: (relX - $this.width() / 2) / $this.width() * movement, y: (relY - $this.height() / 2) / $this.height() * movement});}
$(document).mousemove(function(event){$("[parallax=angle]").each(function(index, element){var xPos = (event.clientX/$(window).width())-0.5, yPos = (event.clientY/$(window).height())-0.5, box = element; TweenLite.to(box, 1, {rotationY: xPos * -100, rotationX: yPos * 100, ease: Power1.easeOut,});})});

//Forms
var submitted=false;
$('form').keypress(function(e) {if (e.keyCode == 13) {return false;} else {}});

//Connection Directive
$('body').attr('ononline','online();'); $('body').attr('onoffline','offline();');
$('body').append('<audio preload id="online" src="https://electro-point.net/media/mp3/online.mp3"></audio>');
$('body').append('<audio preload id="offline" src="https://electro-point.net/media/mp3/offline.mp3"></audio>');
function onon() {$('#online').trigger('play');}
function onoff() {$('#offline').trigger('play');}

function online() {
	onon();
	$('input[type=button]').removeAttr('onclick');
	$('input[type=button]').attr('type','submit');
	$('[name=theme-color]').attr('content','#6FDEDE');
}
function offline() {
	onoff();
	$('input[type=submit]').attr('onclick','onoff();');
	$('input[type=submit]').attr('type','button');
	$('[name=theme-color]').attr('content','#DE0000');
}

//Demonstration
var audio = $('audio[loop]'); var elem = document.querySelector('html, body');

function scroll() {
	$('html').css('scroll-behavior', 'auto');
	$('*').css('cursor', 'initial');
	$('.cursor, .circle').css('display', 'none');
	$('body').css('overflow-y', 'hidden');
	$('.stop-demo').css('top', '8rem');
	audio.currentTime = 0; audio.trigger('play'); audio.prop('volume', 0.5);
	$('html, body').animate({scrollTop: $('footer').offset().top}, scroll_time); toggleFullScreen(elem);}

function scroll_p() {
	$('html').css('scroll-behavior', 'smooth');
	$('*').css('cursor', 'none');
	$('.cursor, .circle').css('display', 'initial');
	$('body').css('overflow-y', 'initial');
	audio.trigger('pause'); $('.stop-demo').css('top', '-10rem');
	$('html, body').queue([]).stop(); toggleFullScreen(elem);}

function toggleFullScreen(elem) {if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {if (elem.requestFullScreen) {elem.requestFullScreen();} else if (elem.mozRequestFullScreen) {elem.mozRequestFullScreen();} else if (elem.webkitRequestFullScreen) {elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);} else if (elem.msRequestFullscreen) {elem.msRequestFullscreen();}} else {if (document.cancelFullScreen) {document.cancelFullScreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.webkitCancelFullScreen) {document.webkitCancelFullScreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();}}}

//Share
function share() {if (navigator.share) {navigator.share({title: document.title, text: document.querySelector("meta[name='description']").getAttribute('content'), url: window.location.href}).then(() => {console.log('Ready!');}) .catch(console.error);} else {console.log('Error...');}}
/**
* Template Name: Personal - v2.1.0 (trimmed + continuous-scroll adaptation for leahfish portfolio)
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
"use strict";

$(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').fadeOut();
}
});

if ($('.nav-menu').length) {
var $mobile_nav = $('.nav-menu').first().clone().prop({
class: 'mobile-nav d-lg-none'
});
$('body').append($mobile_nav);
$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
$('body').append('<div class="mobile-nav-overly"></div>');

$(document).on('click', '.mobile-nav-toggle', function(e) {
$('body').toggleClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').toggle();
});

$(document).click(function(e) {
var container = $(".mobile-nav, .mobile-nav-toggle");
if (!container.is(e.target) && container.has(e.target).length === 0) {
if ($('body').hasClass('mobile-nav-active')) {
$('body').removeClass('mobile-nav-active');
$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
$('.mobile-nav-overly').fadeOut();
}
}
});
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
$(".mobile-nav, .mobile-nav-toggle").hide();
}

var $sections = $('section[id], header#header[id]');
function updateActiveNav() {
var scrollPos = $(window).scrollTop() + 150;
var currentId = $sections.first().attr('id');
var atBottom = ($(window).scrollTop() + $(window).height()) >= ($(document).height() - 4);
if (atBottom) {
currentId = $sections.last().attr('id');
} else {
$sections.each(function() {
if ($(this).offset().top <= scrollPos) {
currentId = $(this).attr('id');
}
});
}
$('.nav-menu li, .mobile-nav li').removeClass('active');
$('.nav-menu a[href="#' + currentId + '"], .mobile-nav a[href="#' + currentId + '"]').closest('li').addClass('active');
}
$(window).on('scroll', updateActiveNav);
$(window).on('load', function() {
updateActiveNav();
if (window.AOS) { AOS.init({ duration: 700, once: true, offset: 80 }); }
});

$(window).on('load', function() {
var portfolioIsotope = $('.portfolio-container').isotope({
itemSelector: '.portfolio-item',
layoutMode: 'fitRows'
});

$('#portfolio-flters li').on('click', function() {
$("#portfolio-flters li").removeClass('filter-active');
$(this).addClass('filter-active');

portfolioIsotope.isotope({
filter: $(this).data('filter')
});
});

});

$(document).ready(function() {
$('.venobox').venobox();
});

})(jQuery);

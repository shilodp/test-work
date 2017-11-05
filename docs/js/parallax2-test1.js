$(document).ready(function(){
 var yPosition;
 var scrolled = 0;
 var $parallaxElements = $('div#header');
 $(window).scroll(function() {
 scrolled = $(window).scrollTop();
 yPosition = (scrolled);
 if (scrolled>25) {
 $parallaxElements.css({ top: yPosition-25 });};
 if (scrolled<25) {
 $parallaxElements.css({ top: 0 });};
 });
});
(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;if(thresholdPassed()){if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-232.png' : 'images/zhan-tie-tu-xiang-116.png');
$('.js-2').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-726.png' : 'images/zhan-tie-tu-xiang-363.png');
$('.js-3').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-203.png' : 'images/zhan-tie-tu-xiang-102.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-152.png' : 'images/zhan-tie-tu-xiang-76.png');
$('.js-5').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-226.png' : 'images/zhan-tie-tu-xiang-113.png');
$('.js-6').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-151.png' : 'images/zhan-tie-tu-xiang-76-1.png');
$('.js-8').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-151-1.png' : 'images/zhan-tie-tu-xiang-76-2.png');
$('.js-9').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-231.png' : 'images/zhan-tie-tu-xiang-115.png');
$('.js-10').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-227.png' : 'images/zhan-tie-tu-xiang-114.png');}else{$('.js').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-77.png' : 'images/zhan-tie-tu-xiang-39.png');
$('.js-2').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-254.png' : 'images/zhan-tie-tu-xiang-127.png');
$('.js-3').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-68.png' : 'images/zhan-tie-tu-xiang-34.png');
$('.js-4').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-50-2.png' : 'images/zhan-tie-tu-xiang-25.png');
$('.js-5').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-76-4.png' : 'images/zhan-tie-tu-xiang-38.png');
$('.js-6').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-50-3.png' : 'images/zhan-tie-tu-xiang-25-1.png');
$('.js-8').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-50-4.png' : 'images/zhan-tie-tu-xiang-25-2.png');
$('.js-9').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-76-5.png' : 'images/zhan-tie-tu-xiang-38-1.png');
$('.js-10').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-74.png' : 'images/zhan-tie-tu-xiang-37.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "2.00s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "3.00s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "2.40s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "2.60s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "1.80s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "1.50s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "3.20s", 1, 100);
wl.addAnimation($('.js-9')[0], "1.00s", "2.20s", 1, 100);
wl.addAnimation($('.js-10')[0], "1.00s", "2.80s", 1, 100);
wl.start();

});
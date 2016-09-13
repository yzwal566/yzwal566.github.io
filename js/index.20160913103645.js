(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

(function(d, p){var a = new XMLHttpRequest(),b = d.body;a.open("GET", p, true);a.send();a.onload = function(){var c = d.createElement("div");c.style.display = "none";c.innerHTML = a.responseText;b.insertBefore(c, b.childNodes[0]);}})(document, "css/plyr.svg");

$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js').attr('src', (dpi>1) ? 'images/zhan-tie-tu-xiang-714.png' : 'images/zhan-tie-tu-xiang-357.png');};
if(!window.HTMLPictureElement){r();}
plyr.setup();
$('.js-2')[0].plyr.setVolume(0);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});
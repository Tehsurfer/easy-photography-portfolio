!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function(){"use strict";function t(t,i){if(this.el=t,this.$el=e(t),this.s=e.extend({},s,i),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=e(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(e(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var s={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};t.prototype.init=function(){var t=this;t.s.preload>t.$items.length&&(t.s.preload=t.$items.length);var s=window.location.hash;s.indexOf("lg="+this.s.galleryId)>0&&(t.index=parseInt(s.split("&slide=")[1],10),e("body").addClass("lg-from-hash"),e("body").hasClass("lg-on")||(setTimeout(function(){t.build(t.index)}),e("body").addClass("lg-on"))),t.s.dynamic?(t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||0,e("body").hasClass("lg-on")||setTimeout(function(){t.build(t.index),e("body").addClass("lg-on")})):t.$items.on("click.lgcustom",function(s){try{s.preventDefault(),s.preventDefault()}catch(e){s.returnValue=!1}t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||t.$items.index(this),e("body").hasClass("lg-on")||(t.build(t.index),e("body").addClass("lg-on"))})},t.prototype.build=function(t){var s=this;s.structure(),e.each(e.fn.lightGallery.modules,function(t){s.modules[t]=new e.fn.lightGallery.modules[t](s.el)}),s.slide(t,!1,!1,!1),s.s.keyPress&&s.keyPress(),s.$items.length>1&&(s.arrow(),setTimeout(function(){s.enableDrag(),s.enableSwipe()},50),s.s.mousewheel&&s.mousewheel()),s.counter(),s.closeGallery(),s.$el.trigger("onAfterOpen.lg"),s.$outer.on("mousemove.lg click.lg touchstart.lg",function(){s.$outer.removeClass("lg-hide-items"),clearTimeout(s.hideBartimeout),s.hideBartimeout=setTimeout(function(){s.$outer.addClass("lg-hide-items")},s.s.hideBarsDelay)}),s.$outer.trigger("mousemove.lg")},t.prototype.structure=function(){var t,s="",i="",l=0,o="",a=this;for(e("body").append('<div class="lg-backdrop"></div>'),e(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),l=0;l<this.$items.length;l++)s+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(i='<div class="lg-actions"><div class="lg-prev lg-icon">'+this.s.prevHtml+'</div><div class="lg-next lg-icon">'+this.s.nextHtml+"</div></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(o='<div class="lg-sub-html"></div>'),t='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+s+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+i+o+"</div></div>",e("body").append(t),this.$outer=e(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),a.setTop(),e(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){a.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var n=this.$outer.find(".lg-inner");n.css("transition-timing-function",this.s.cssEasing),n.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){e(".lg-backdrop").addClass("in")}),setTimeout(function(){a.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=e(window).scrollTop()},t.prototype.setTop=function(){if("100%"!==this.s.height){var t=e(window).height(),s=(t-parseInt(this.s.height,10))/2,i=this.$outer.find(".lg");t>=parseInt(this.s.height,10)?i.css("top",s+"px"):i.css("top","0px")}},t.prototype.doCss=function(){return!!function(){var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],t=document.documentElement,s=0;for(s=0;s<e.length;s++)if(e[s]in t.style)return!0}()},t.prototype.isVideo=function(e,t){var s;if(s=this.s.dynamic?this.s.dynamicEl[t].html:this.$items.eq(t).attr("data-html"),!e&&s)return{html5:!0};var i=e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),l=e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),o=e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),a=e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:l?{vimeo:l}:o?{dailymotion:o}:a?{vk:a}:void 0},t.prototype.counter=function(){this.s.counter&&e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},t.prototype.addHtml=function(t){var s,i,l=null;if(this.s.dynamic?this.s.dynamicEl[t].subHtmlUrl?s=this.s.dynamicEl[t].subHtmlUrl:l=this.s.dynamicEl[t].subHtml:(i=this.$items.eq(t),i.attr("data-sub-html-url")?s=i.attr("data-sub-html-url"):(l=i.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!l&&(l=i.attr("title")||i.find("img").first().attr("alt")))),!s)if(void 0!==l&&null!==l){var o=l.substring(0,1);"."!==o&&"#"!==o||(l=this.s.subHtmlSelectorRelative&&!this.s.dynamic?i.find(l).html():e(l).html())}else l="";".lg-sub-html"===this.s.appendSubHtmlTo?s?this.$outer.find(this.s.appendSubHtmlTo).load(s):this.$outer.find(this.s.appendSubHtmlTo).html(l):s?this.$slide.eq(t).load(s):this.$slide.eq(t).append(l),void 0!==l&&null!==l&&(""===l?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},t.prototype.preload=function(e){var t=1,s=1;for(t=1;t<=this.s.preload&&!(t>=this.$items.length-e);t++)this.loadContent(e+t,!1,0);for(s=1;s<=this.s.preload&&!(e-s<0);s++)this.loadContent(e-s,!1,0)},t.prototype.loadContent=function(t,s,i){var l,o,a,n,r,d,g=this,h=!1,u=function(t){for(var s=[],i=[],l=0;l<t.length;l++){var a=t[l].split(" ");""===a[0]&&a.splice(0,1),i.push(a[0]),s.push(a[1])}for(var n=e(window).width(),r=0;r<s.length;r++)if(parseInt(s[r],10)>n){o=i[r];break}};if(g.s.dynamic){if(g.s.dynamicEl[t].poster&&(h=!0,a=g.s.dynamicEl[t].poster),d=g.s.dynamicEl[t].html,o=g.s.dynamicEl[t].src,g.s.dynamicEl[t].responsive){u(g.s.dynamicEl[t].responsive.split(","))}n=g.s.dynamicEl[t].srcset,r=g.s.dynamicEl[t].sizes}else{if(g.$items.eq(t).attr("data-poster")&&(h=!0,a=g.$items.eq(t).attr("data-poster")),d=g.$items.eq(t).attr("data-html"),o=g.$items.eq(t).attr("href")||g.$items.eq(t).attr("data-src"),g.$items.eq(t).attr("data-responsive")){u(g.$items.eq(t).attr("data-responsive").split(","))}n=g.$items.eq(t).attr("data-srcset"),r=g.$items.eq(t).attr("data-sizes")}var c=!1;g.s.dynamic?g.s.dynamicEl[t].iframe&&(c=!0):"true"===g.$items.eq(t).attr("data-iframe")&&(c=!0);var m=g.isVideo(o,t);if(!g.$slide.eq(t).hasClass("lg-loaded")){if(c)g.$slide.eq(t).prepend('<div class="lg-video-cont" style="max-width:'+g.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+o+'"  allowfullscreen="true"></iframe></div></div>');else if(h){var p="";p=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",g.$slide.eq(t).prepend('<div class="lg-video-cont '+p+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+a+'" /></div></div>')}else m?(g.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),g.$el.trigger("hasVideo.lg",[t,o,d])):g.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+o+'" /></div>');if(g.$el.trigger("onAferAppendSlide.lg",[t]),l=g.$slide.eq(t).find(".lg-object"),r&&l.attr("sizes",r),n){l.attr("srcset",n);try{picturefill({elements:[l[0]]})}catch(e){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&g.addHtml(t),g.$slide.eq(t).addClass("lg-loaded")}g.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){var s=0;i&&!e("body").hasClass("lg-from-hash")&&(s=i),setTimeout(function(){g.$slide.eq(t).addClass("lg-complete"),g.$el.trigger("onSlideItemLoad.lg",[t,i||0])},s)}),m&&m.html5&&!h&&g.$slide.eq(t).addClass("lg-complete"),!0===s&&(g.$slide.eq(t).hasClass("lg-complete")?g.preload(t):g.$slide.eq(t).find(".lg-object").on("load.lg error.lg",function(){g.preload(t)}))},t.prototype.slide=function(t,s,i,l){var o=this.$outer.find(".lg-current").index(),a=this;if(!a.lGalleryOn||o!==t){var n=this.$slide.length,r=a.lGalleryOn?this.s.speed:0;if(!a.lgBusy){if(this.s.download){var d;d=a.s.dynamic?!1!==a.s.dynamicEl[t].downloadUrl&&(a.s.dynamicEl[t].downloadUrl||a.s.dynamicEl[t].src):"false"!==a.$items.eq(t).attr("data-download-url")&&(a.$items.eq(t).attr("data-download-url")||a.$items.eq(t).attr("href")||a.$items.eq(t).attr("data-src")),d?(e("#lg-download").attr("href",d),a.$outer.removeClass("lg-hide-download")):a.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[o,t,s,i]),a.lgBusy=!0,clearTimeout(a.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){a.addHtml(t)},r),this.arrowDisable(t),l||(t<o?l="prev":t>o&&(l="next")),s){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var g,h;n>2?(g=t-1,h=t+1,0===t&&o===n-1?(h=0,g=n-1):t===n-1&&0===o&&(h=0,g=n-1)):(g=0,h=1),"prev"===l?a.$slide.eq(h).addClass("lg-next-slide"):a.$slide.eq(g).addClass("lg-prev-slide"),a.$slide.eq(t).addClass("lg-current")}else a.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===l?(this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(o).addClass("lg-next-slide")):(this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(o).addClass("lg-prev-slide")),setTimeout(function(){a.$slide.removeClass("lg-current"),a.$slide.eq(t).addClass("lg-current"),a.$outer.removeClass("lg-no-trans")},50);a.lGalleryOn?(setTimeout(function(){a.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){a.lgBusy=!1,a.$el.trigger("onAfterSlide.lg",[o,t,s,i])},this.s.speed)):(a.loadContent(t,!0,a.s.backdropDuration),a.lgBusy=!1,a.$el.trigger("onAfterSlide.lg",[o,t,s,i])),a.lGalleryOn=!0,this.s.counter&&e("#lg-counter-current").text(t+1)}}},t.prototype.goToNextSlide=function(e){var t=this,s=t.s.loop;e&&t.$slide.length<3&&(s=!1),t.lgBusy||(t.index+1<t.$slide.length?(t.index++,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):s?(t.index=0,t.$el.trigger("onBeforeNextSlide.lg",[t.index]),t.slide(t.index,e,!1,"next")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-right-end"),setTimeout(function(){t.$outer.removeClass("lg-right-end")},400)))},t.prototype.goToPrevSlide=function(e){var t=this,s=t.s.loop;e&&t.$slide.length<3&&(s=!1),t.lgBusy||(t.index>0?(t.index--,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):s?(t.index=t.$items.length-1,t.$el.trigger("onBeforePrevSlide.lg",[t.index,e]),t.slide(t.index,e,!1,"prev")):t.s.slideEndAnimatoin&&!e&&(t.$outer.addClass("lg-left-end"),setTimeout(function(){t.$outer.removeClass("lg-left-end")},400)))},t.prototype.keyPress=function(){var t=this;this.$items.length>1&&e(window).on("keyup.lg",function(e){t.$items.length>1&&(37===e.keyCode&&(e.preventDefault(),t.goToPrevSlide()),39===e.keyCode&&(e.preventDefault(),t.goToNextSlide()))}),e(window).on("keydown.lg",function(e){!0===t.s.escKey&&27===e.keyCode&&(e.preventDefault(),t.$outer.hasClass("lg-thumb-open")?t.$outer.removeClass("lg-thumb-open"):t.destroy())})},t.prototype.arrow=function(){var e=this;this.$outer.find(".lg-prev").on("click.lg",function(){e.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){e.goToNextSlide()})},t.prototype.arrowDisable=function(e){!this.s.loop&&this.s.hideControlOnEnd&&(e+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),e>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},t.prototype.setTranslate=function(e,t,s){this.s.useLeft?e.css("left",t):e.css({transform:"translate3d("+t+"px, "+s+"px, 0px)"})},t.prototype.touchMove=function(t,s){var i=s-t;Math.abs(i)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),i,0),this.setTranslate(e(".lg-prev-slide"),-this.$slide.eq(this.index).width()+i,0),this.setTranslate(e(".lg-next-slide"),this.$slide.eq(this.index).width()+i,0))},t.prototype.touchEnd=function(e){var t=this;"lg-slide"!==t.s.mode&&t.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){t.$outer.removeClass("lg-dragging"),e<0&&Math.abs(e)>t.s.swipeThreshold?t.goToNextSlide(!0):e>0&&Math.abs(e)>t.s.swipeThreshold?t.goToPrevSlide(!0):Math.abs(e)<5&&t.$el.trigger("onSlideClick.lg"),t.$slide.removeAttr("style")}),setTimeout(function(){t.$outer.hasClass("lg-dragging")||"lg-slide"===t.s.mode||t.$outer.removeClass("lg-slide")},t.s.speed+100)},t.prototype.enableSwipe=function(){var e=this,t=0,s=0,i=!1;e.s.enableSwipe&&e.isTouch&&e.doCss()&&(e.$slide.on("touchstart.lg",function(s){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(s.preventDefault(),e.manageSwipeClass(),t=s.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(l){e.$outer.hasClass("lg-zoomed")||(l.preventDefault(),s=l.originalEvent.targetTouches[0].pageX,e.touchMove(t,s),i=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(i?(i=!1,e.touchEnd(s-t)):e.$el.trigger("onSlideClick.lg"))}))},t.prototype.enableDrag=function(){var t=this,s=0,i=0,l=!1,o=!1;t.s.enableDrag&&!t.isTouch&&t.doCss()&&(t.$slide.on("mousedown.lg",function(i){t.$outer.hasClass("lg-zoomed")||(e(i.target).hasClass("lg-object")||e(i.target).hasClass("lg-video-play"))&&(i.preventDefault(),t.lgBusy||(t.manageSwipeClass(),s=i.pageX,l=!0,t.$outer.scrollLeft+=1,t.$outer.scrollLeft-=1,t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),t.$el.trigger("onDragstart.lg")))}),e(window).on("mousemove.lg",function(e){l&&(o=!0,i=e.pageX,t.touchMove(s,i),t.$el.trigger("onDragmove.lg"))}),e(window).on("mouseup.lg",function(a){o?(o=!1,t.touchEnd(i-s),t.$el.trigger("onDragend.lg")):(e(a.target).hasClass("lg-object")||e(a.target).hasClass("lg-video-play"))&&t.$el.trigger("onSlideClick.lg"),l&&(l=!1,t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},t.prototype.manageSwipeClass=function(){var e=this.index+1,t=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?t=this.$slide.length-1:this.index===this.$slide.length-1&&(e=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),t>-1&&this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(e).addClass("lg-next-slide")},t.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY&&(t.deltaY>0?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},t.prototype.closeGallery=function(){var t=this,s=!1;this.$outer.find(".lg-close").on("click.lg",function(){t.destroy()}),t.s.closable&&(t.$outer.on("mousedown.lg",function(t){s=!!(e(t.target).is(".lg-outer")||e(t.target).is(".lg-item ")||e(t.target).is(".lg-img-wrap"))}),t.$outer.on("mouseup.lg",function(i){(e(i.target).is(".lg-outer")||e(i.target).is(".lg-item ")||e(i.target).is(".lg-img-wrap")&&s)&&(t.$outer.hasClass("lg-dragging")||t.destroy())}))},t.prototype.destroy=function(t){var s=this;t||(s.$el.trigger("onBeforeClose.lg"),e(window).scrollTop(s.prevScrollTop)),t&&(s.s.dynamic||this.$items.off("click.lg click.lgcustom"),e.removeData(s.el,"lightGallery")),this.$el.off(".lg.tm"),e.each(e.fn.lightGallery.modules,function(e){s.modules[e]&&s.modules[e].destroy()}),this.lGalleryOn=!1,clearTimeout(s.hideBartimeout),this.hideBartimeout=!1,e(window).off(".lg"),e("body").removeClass("lg-on lg-from-hash"),s.$outer&&s.$outer.removeClass("lg-visible"),e(".lg-backdrop").removeClass("in"),setTimeout(function(){s.$outer&&s.$outer.remove(),e(".lg-backdrop").remove(),t||s.$el.trigger("onCloseAfter.lg")},s.s.backdropDuration+50)},e.fn.lightGallery=function(s){return this.each(function(){if(e.data(this,"lightGallery"))try{e(this).data("lightGallery").init()}catch(e){console.error("lightGallery has not initiated properly")}else e.data(this,"lightGallery",new t(this,s))})},e.fn.lightGallery.modules={}}()});
!function(e,o){"function"==typeof define&&define.amd?define(["jquery"],function(e){return o(e)}):"object"==typeof exports?module.exports=o(require("jquery")):o(jQuery)}(0,function(e){!function(){"use strict";var o={videoMaxWidth:"855px",youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},i=function(i){return this.core=e(i).data("lightGallery"),this.$el=e(i),this.core.s=e.extend({},o,this.core.s),this.videoLoaded=!1,this.init(),this};i.prototype.init=function(){var o=this;o.core.$el.on("hasVideo.lg.tm",function(e,i,a,r){if(o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(a,"lg-object",!0,i,r)),r)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(i).find(".lg-html5").get(0),o.core.s.videojsOptions,function(){o.videoLoaded||this.play()})}catch(e){console.error("Make sure you have included videojs")}else o.core.$slide.eq(i).find(".lg-html5").get(0).play()}),o.core.$el.on("onAferAppendSlide.lg.tm",function(e,i){o.core.$slide.eq(i).find(".lg-video-cont").css("max-width",o.core.s.videoMaxWidth),o.videoLoaded=!0});var i=function(e){if(e.find(".lg-object").hasClass("lg-has-poster")&&e.find(".lg-object").is(":visible"))if(e.hasClass("lg-has-video")){var i=e.find(".lg-youtube").get(0),a=e.find(".lg-vimeo").get(0),r=e.find(".lg-dailymotion").get(0),l=e.find(".lg-html5").get(0);if(i)i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(a)try{$f(a).api("play")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(r)r.contentWindow.postMessage("play","*");else if(l)if(o.core.s.videojs)try{videojs(l).play()}catch(e){console.error("Make sure you have included videojs")}else l.play();e.addClass("lg-video-playing")}else{e.addClass("lg-video-playing lg-has-video");var s,t,d=function(i,a){if(e.find(".lg-video").append(o.loadVideo(i,"",!1,o.core.index,a)),a)if(o.core.s.videojs)try{videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0),o.core.s.videojsOptions,function(){this.play()})}catch(e){console.error("Make sure you have included videojs")}else o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()};o.core.s.dynamic?(s=o.core.s.dynamicEl[o.core.index].src,t=o.core.s.dynamicEl[o.core.index].html,d(s,t)):(s=o.core.$items.eq(o.core.index).attr("href")||o.core.$items.eq(o.core.index).attr("data-src"),t=o.core.$items.eq(o.core.index).attr("data-html"),d(s,t));var c=e.find(".lg-object");e.find(".lg-video").append(c),e.find(".lg-video-object").hasClass("lg-html5")||(e.removeClass("lg-complete"),e.find(".lg-video-object").on("load.lg error.lg",function(){e.addClass("lg-complete")}))}};o.core.doCss()&&o.core.$items.length>1&&(o.core.s.enableSwipe&&o.core.isTouch||o.core.s.enableDrag&&!o.core.isTouch)?o.core.$el.on("onSlideClick.lg.tm",function(){var e=o.core.$slide.eq(o.core.index);i(e)}):o.core.$slide.on("click.lg",function(){i(e(this))}),o.core.$el.on("onBeforeSlide.lg.tm",function(i,a,r){var l=o.core.$slide.eq(a),s=l.find(".lg-youtube").get(0),t=l.find(".lg-vimeo").get(0),d=l.find(".lg-dailymotion").get(0),c=l.find(".lg-vk").get(0),n=l.find(".lg-html5").get(0);if(s)s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(t)try{$f(t).api("pause")}catch(e){console.error("Make sure you have included froogaloop2 js")}else if(d)d.contentWindow.postMessage("pause","*");else if(n)if(o.core.s.videojs)try{videojs(n).pause()}catch(e){console.error("Make sure you have included videojs")}else n.pause();c&&e(c).attr("src",e(c).attr("src").replace("&autoplay","&noplay"));var m;m=o.core.s.dynamic?o.core.s.dynamicEl[r].src:o.core.$items.eq(r).attr("href")||o.core.$items.eq(r).attr("data-src");var f=o.core.isVideo(m,r)||{};(f.youtube||f.vimeo||f.dailymotion||f.vk)&&o.core.$outer.addClass("lg-hide-download")}),o.core.$el.on("onAfterSlide.lg.tm",function(e,i){o.core.$slide.eq(i).removeClass("lg-video-playing")})},i.prototype.loadVideo=function(o,i,a,r,l){var s="",t=1,d="",c=this.core.isVideo(o,r)||{};if(a&&(t=this.videoLoaded?0:1),c.youtube)d="?wmode=opaque&autoplay="+t+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(d=d+"&"+e.param(this.core.s.youtubePlayerParams)),s='<iframe class="lg-video-object lg-youtube '+i+'" width="560" height="315" src="//www.youtube.com/embed/'+c.youtube[1]+d+'" frameborder="0" allowfullscreen></iframe>';else if(c.vimeo)d="?autoplay="+t+"&api=1",this.core.s.vimeoPlayerParams&&(d=d+"&"+e.param(this.core.s.vimeoPlayerParams)),s='<iframe class="lg-video-object lg-vimeo '+i+'" width="560" height="315"  src="//player.vimeo.com/video/'+c.vimeo[1]+d+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(c.dailymotion)d="?wmode=opaque&autoplay="+t+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(d=d+"&"+e.param(this.core.s.dailymotionPlayerParams)),s='<iframe class="lg-video-object lg-dailymotion '+i+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+c.dailymotion[1]+d+'" frameborder="0" allowfullscreen></iframe>';else if(c.html5){var n=l.substring(0,1);"."!==n&&"#"!==n||(l=e(l).html()),s=l}else c.vk&&(d="&autoplay="+t,this.core.s.vkPlayerParams&&(d=d+"&"+e.param(this.core.s.vkPlayerParams)),s='<iframe class="lg-video-object lg-vk '+i+'" width="560" height="315" src="http://vk.com/video_ext.php?'+c.vk[1]+d+'" frameborder="0" allowfullscreen></iframe>');return s},i.prototype.destroy=function(){this.videoLoaded=!1},e.fn.lightGallery.modules.video=i}()});
!function(o,t){"function"==typeof define&&define.amd?define(["jquery"],function(o){return t(o)}):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(0,function(o){!function(){"use strict";var t={hash:!0},e=function(e){return this.core=o(e).data("lightGallery"),this.core.s=o.extend({},t,this.core.s),this.core.s.hash&&(this.oldHash=window.location.hash,this.init()),this};e.prototype.init=function(){var t,e=this;e.core.$el.on("onAfterSlide.lg.tm",function(o,t,i){window.location.hash="lg="+e.core.s.galleryId+"&slide="+i}),o(window).on("hashchange.lg.hash",function(){t=window.location.hash;var o=parseInt(t.split("&slide=")[1],10);t.indexOf("lg="+e.core.s.galleryId)>-1?e.core.slide(o,!1,!1):e.core.lGalleryOn&&e.core.destroy()})},e.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?window.location.hash=this.oldHash:history.pushState?history.pushState("",document.title,window.location.pathname+window.location.search):window.location.hash="",this.core.$el.off(".lg.hash"))},o.fn.lightGallery.modules.hash=e}()});
!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(0,function(t){!function(){"use strict";var e={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},i=function(i){return this.core=t(i).data("lightGallery"),this.core.s=t.extend({},e,this.core.s),this.$el=t(i),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.left=0,this.init(),this};i.prototype.init=function(){var t=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){t.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb?(this.core.s.enableThumbDrag&&!this.core.isTouch&&this.core.doCss()&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.core.isTouch&&this.core.doCss()&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},i.prototype.build=function(){function e(t,e,i){var s,r=o.core.isVideo(t,i)||{},a="";r.youtube||r.vimeo||r.dailymotion?r.youtube?s=o.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+r.youtube[1]+"/"+o.core.s.youtubeThumbSize+".jpg":e:r.vimeo?o.core.s.loadVimeoThumbnail?(s="//i.vimeocdn.com/video/error_"+u+".jpg",a=r.vimeo[1]):s=e:r.dailymotion&&(s=o.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+r.dailymotion[1]:e):s=e,h+='<div data-vimeo-id="'+a+'" class="lg-thumb-item" style="width:'+o.core.s.thumbWidth+"px; margin-right: "+o.core.s.thumbMargin+'px"><img src="'+s+'" /></div>',a=""}var i,o=this,h="",u="";switch(this.core.s.vimeoThumbSize){case"thumbnail_large":u="640";break;case"thumbnail_medium":u="200x150";break;case"thumbnail_small":u="100x75"}if(o.core.$outer.addClass("lg-has-thumb"),o.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'),o.$thumbOuter=o.core.$outer.find(".lg-thumb-outer"),o.thumbOuterWidth=o.$thumbOuter.width(),o.core.s.animateThumb&&o.core.$outer.find(".lg-thumb").css({width:o.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&o.$thumbOuter.css("height",o.core.s.thumbContHeight+"px"),o.core.s.dynamic)for(var s=0;s<o.core.s.dynamicEl.length;s++)e(o.core.s.dynamicEl[s].src,o.core.s.dynamicEl[s].thumb,s);else o.core.$items.each(function(i){o.core.s.exThumbImage?e(t(this).attr("href")||t(this).attr("data-src"),t(this).attr(o.core.s.exThumbImage),i):e(t(this).attr("href")||t(this).attr("data-src"),t(this).find("img").attr("src"),i)});o.core.$outer.find(".lg-thumb").html(h),i=o.core.$outer.find(".lg-thumb-item"),i.each(function(){var e=t(this),i=e.attr("data-vimeo-id");i&&t.getJSON("//www.vimeo.com/api/v2/video/"+i+".json?callback=?",{format:"json"},function(t){e.find("img").attr("src",t[0][o.core.s.vimeoThumbSize])})}),i.eq(o.core.index).addClass("active"),o.core.$el.on("onBeforeSlide.lg.tm",function(){i.removeClass("active"),i.eq(o.core.index).addClass("active")}),i.on("click.lg touchend.lg",function(){var e=t(this);setTimeout(function(){(o.thumbClickable&&!o.core.lgBusy||!o.core.doCss())&&(o.core.index=e.index(),o.core.slide(o.core.index,!1,!0,!1))},50)}),o.core.$el.on("onBeforeSlide.lg.tm",function(){o.animateThumb(o.core.index)}),t(window).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){o.animateThumb(o.core.index),o.thumbOuterWidth=o.$thumbOuter.width()},200)})},i.prototype.setTranslate=function(t){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+t+"px, 0px, 0px)"})},i.prototype.animateThumb=function(t){var e=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var i;switch(this.core.s.currentPagerPosition){case"left":i=0;break;case"middle":i=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":i=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*t-1-i,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(e.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||e.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||e.css("left",-this.left+"px"),this.setTranslate(this.left)}},i.prototype.enableThumbDrag=function(){var e=this,i=0,o=0,h=!1,u=!1,s=0;e.$thumbOuter.addClass("lg-grab"),e.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(t){e.thumbTotalWidth>e.thumbOuterWidth&&(t.preventDefault(),i=t.pageX,h=!0,e.core.$outer.scrollLeft+=1,e.core.$outer.scrollLeft-=1,e.thumbClickable=!1,e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),t(window).on("mousemove.lg.thumb",function(t){h&&(s=e.left,u=!0,o=t.pageX,e.$thumbOuter.addClass("lg-dragging"),s-=o-i,s>e.thumbTotalWidth-e.thumbOuterWidth&&(s=e.thumbTotalWidth-e.thumbOuterWidth),s<0&&(s=0),e.setTranslate(s))}),t(window).on("mouseup.lg.thumb",function(){u?(u=!1,e.$thumbOuter.removeClass("lg-dragging"),e.left=s,Math.abs(o-i)<e.core.s.swipeThreshold&&(e.thumbClickable=!0)):e.thumbClickable=!0,h&&(h=!1,e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},i.prototype.enableThumbSwipe=function(){var t=this,e=0,i=0,o=!1,h=0;t.core.$outer.find(".lg-thumb").on("touchstart.lg",function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e=i.originalEvent.targetTouches[0].pageX,t.thumbClickable=!1)}),t.core.$outer.find(".lg-thumb").on("touchmove.lg",function(u){t.thumbTotalWidth>t.thumbOuterWidth&&(u.preventDefault(),i=u.originalEvent.targetTouches[0].pageX,o=!0,t.$thumbOuter.addClass("lg-dragging"),h=t.left,h-=i-e,h>t.thumbTotalWidth-t.thumbOuterWidth&&(h=t.thumbTotalWidth-t.thumbOuterWidth),h<0&&(h=0),t.setTranslate(h))}),t.core.$outer.find(".lg-thumb").on("touchend.lg",function(){t.thumbTotalWidth>t.thumbOuterWidth&&o?(o=!1,t.$thumbOuter.removeClass("lg-dragging"),Math.abs(i-e)<t.core.s.swipeThreshold&&(t.thumbClickable=!0),t.left=h):t.thumbClickable=!0})},i.prototype.toogle=function(){var t=this;t.core.s.toogleThumb&&(t.core.$outer.addClass("lg-can-toggle"),t.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),t.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){t.core.$outer.toggleClass("lg-thumb-open")}))},i.prototype.thumbkeyPress=function(){var e=this;t(window).on("keydown.lg.thumb",function(t){38===t.keyCode?(t.preventDefault(),e.core.$outer.addClass("lg-thumb-open")):40===t.keyCode&&(t.preventDefault(),e.core.$outer.removeClass("lg-thumb-open"))})},i.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(t(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},t.fn.lightGallery.modules.Thumbnail=i}()});
!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(0,function(t){!function(){"use strict";var e={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",googlePlus:!0,googlePlusDropdownText:"GooglePlus",pinterest:!0,pinterestDropdownText:"Pinterest"},r=function(r){return this.core=t(r).data("lightGallery"),this.core.s=t.extend({},e,this.core.s),this.core.s.share&&this.init(),this};r.prototype.init=function(){var e=this,r='<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';r+=e.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+"</span></a></li>":"",r+=e.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+"</span></a></li>":"",r+=e.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+"</span></a></li>":"",r+=e.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+"</span></a></li>":"",r+="</ul></span>",this.core.$outer.find(".lg-toolbar").append(r),this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'),t("#lg-share").on("click.lg",function(){e.core.$outer.toggleClass("lg-dropdown-active")}),t("#lg-dropdown-overlay").on("click.lg",function(){e.core.$outer.removeClass("lg-dropdown-active")}),e.core.$el.on("onAfterSlide.lg.tm",function(r,o,s){setTimeout(function(){var r;r=!(!e.core.$items||!e.core.$items.eq)&&e.core.$items.eq(s);var o={facebook:{url:e.getShareURL("facebook-share-url",r)},googleplus:{url:e.getShareURL("googleplus-share-url",r)},twitter:{text:"",url:e.getShareURL("twitter-share-url",r)},pinterest:{media:"",text:"",url:e.getShareURL("data-pinterest-share-url",r)}};r&&(o.twitter.text=r.attr("data-tweet-text"),o.pinterest.media=encodeURIComponent(r.attr("href")||r.attr("data-src")),o.pinterest.text=r.attr("data-pinterest-text")),t("#lg-share-facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u="+o.facebook.url),t("#lg-share-twitter").attr("href","https://twitter.com/intent/tweet?text="+o.twitter.text+"&url="+o.twitter.url),t("#lg-share-googleplus").attr("href","https://plus.google.com/share?url="+o.googleplus.url),t("#lg-share-pinterest").attr("href","http://www.pinterest.com/pin/create/button/?url="+o.pinterest.url+"&media="+o.pinterest.media+"&description="+o.pinterest.text)},100)})},r.prototype.getShareURL=function(t,e){var r;return e&&(r=e.attr("data-"+t)),r||(r=window.location.href),encodeURIComponent(r)},r.prototype.destroy=function(){},t.fn.lightGallery.modules.share=r}()});
!function(e,l){"function"==typeof define&&define.amd?define(["jquery"],function(e){return l(e)}):"object"==typeof exports?module.exports=l(require("jquery")):l(jQuery)}(0,function(e){!function(){"use strict";var l={fullScreen:!0},n=function(n){return this.core=e(n).data("lightGallery"),this.$el=e(n),this.core.s=e.extend({},l,this.core.s),this.init(),this};n.prototype.init=function(){var e="";if(this.core.s.fullScreen){if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return;e='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(e),this.fullScreen()}},n.prototype.requestFullscreen=function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},n.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},n.prototype.fullScreen=function(){var l=this;e(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){l.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?l.exitFullscreen():l.requestFullscreen()})},n.prototype.destroy=function(){this.exitFullscreen(),e(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},e.fn.lightGallery.modules.fullscreen=n}()});
!function(o,e){"function"==typeof define&&define.amd?define(["jquery"],function(o){return e(o)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(0,function(o){!function(){"use strict";var e={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},t=function(t){return this.core=o(t).data("lightGallery"),this.$el=o(t),!(this.core.$items.length<2)&&(this.core.s=o.extend({},e,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};t.prototype.init=function(){var o=this;o.core.s.autoplayControls&&o.controls(),o.core.s.progressBar&&o.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),o.progress(),o.core.s.autoplay&&o.$el.one("onSlideItemLoad.lg.tm",function(){o.startlAuto()}),o.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){o.interval&&(o.cancelAuto(),o.canceledOnTouch=!0)}),o.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!o.interval&&o.canceledOnTouch&&(o.startlAuto(),o.canceledOnTouch=!1)})},t.prototype.progress=function(){var o,e,t=this;t.$el.on("onBeforeSlide.lg.tm",function(){t.core.s.progressBar&&t.fromAuto&&(o=t.core.$outer.find(".lg-progress-bar"),e=t.core.$outer.find(".lg-progress"),t.interval&&(e.removeAttr("style"),o.removeClass("lg-start"),setTimeout(function(){e.css("transition","width "+(t.core.s.speed+t.core.s.pause)+"ms ease 0s"),o.addClass("lg-start")},20))),t.fromAuto||t.core.s.fourceAutoplay||t.cancelAuto(),t.fromAuto=!1})},t.prototype.controls=function(){var e=this;o(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'),e.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){o(e.core.$outer).hasClass("lg-show-autoplay")?(e.cancelAuto(),e.core.s.fourceAutoplay=!1):e.interval||(e.startlAuto(),e.core.s.fourceAutoplay=e.fourceAutoplayTemp)})},t.prototype.startlAuto=function(){var o=this;o.core.$outer.find(".lg-progress").css("transition","width "+(o.core.s.speed+o.core.s.pause)+"ms ease 0s"),o.core.$outer.addClass("lg-show-autoplay"),o.core.$outer.find(".lg-progress-bar").addClass("lg-start"),o.interval=setInterval(function(){o.core.index+1<o.core.$items.length?o.core.index++:o.core.index=0,o.fromAuto=!0,o.core.slide(o.core.index,!1,!1,"next")},o.core.s.speed+o.core.s.pause)},t.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},t.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},o.fn.lightGallery.modules.autoplay=t}()});
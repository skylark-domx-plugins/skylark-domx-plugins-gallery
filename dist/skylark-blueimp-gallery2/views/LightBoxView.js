/**
 * skylark-blueimp-gallery2 - The skylark blueimp  gallery plugin library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-query","../Gallery","./SliderView"],function(i,t,e,n){var a=n.inherit({klassName:"LightBoxView",options:{hidePageScrollbars:!1,indicatorContainer:"ol",activeIndicatorClass:"active",thumbnailProperty:"thumbnail",thumbnailIndicators:!0},initOptions:function(t){t=i.mixin({},a.prototype.options,t);this.overrided(t)},createIndicator:function(i){var n,a,s=this.gallery,o=this.indicatorPrototype.cloneNode(!1),r=s.getItemTitle(i),d=this.options.thumbnailProperty;return this.options.thumbnailIndicators&&(d&&(n=e.getItemProperty(i,d)),void 0===n&&(a=i.getElementsByTagName&&t(i).find("img")[0])&&(n=a.src),n&&(o.style.backgroundImage='url("'+n+'")')),r&&(o.title=r),o},addIndicator:function(i){if(this.indicatorContainer.length){var t=this.createIndicator(this.list[i]);t.setAttribute("data-index",i),this.indicatorContainer[0].appendChild(t),this.indicators.push(t)}},setActiveIndicator:function(i){this.indicators&&(this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),this.activeIndicator=t(this.indicators[i]),this.activeIndicator.addClass(this.options.activeIndicatorClass))},initSlides:function(i){i||(this.indicatorContainer=this.container.find(this.options.indicatorContainer),this.indicatorContainer.length&&(this.indicatorPrototype=document.createElement("li"),this.indicators=this.indicatorContainer[0].children)),this.overrided(i)},addSlide:function(i){this.overrided(i),this.addIndicator(i)},resetSlides:function(){this.overrided(),this.indicatorContainer.empty(),this.indicators=[]},handleClick:function(i){var t=i.target||i.srcElement,e=t.parentNode;if(e===this.indicatorContainer[0])this.preventDefault(i),this.slide(this.getNodeIndex(t));else{if(e.parentNode!==this.indicatorContainer[0])return this.overrided(i);this.preventDefault(i),this.slide(this.getNodeIndex(e))}},handleSlide:function(i){this.overrided(i),this.setActiveIndicator(i)},handleClose:function(){this.activeIndicator&&this.activeIndicator.removeClass(this.options.activeIndicatorClass),this.overrided()}});return e.installAddon("views",{name:"lightbox",ctor:a,templates:{default:'<div class="slides"></div><h3 class="title"></h3><a class="prev">‹</a><a class="next">›</a><a class="close">×</a><ol class="indicator"></ol>'}}),a});
//# sourceMappingURL=../sourcemaps/views/LightBoxView.js.map
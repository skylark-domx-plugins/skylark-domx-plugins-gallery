/**
 * skylark-domx-plugins-gallery - The skylark gallery plugin library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-query","../Gallery","./video"],function(e,t,i,a,n){"use strict";var s=e.Evented.inherit({klassName:"VimeoPlayer",init:function(e,t,i,a){this.url=e,this.videoId=t,this.playerId=i,this.clickToPlay=a,this.element=document.createElement("div"),this.listeners={}},canPlayType:function(){return!0},on:function(e,t){return this.listeners[e]=t,this},loadAPI:function(){var e,t,a=this,n="//f.vimeocdn.com/js/froogaloop2.min.js",s=document.getElementsByTagName("script"),o=s.length;function r(){!t&&a.playOnReady&&a.play(),t=!0}for(;o;)if(s[o-=1].src===n){e=s[o];break}e||((e=document.createElement("script")).src=n),i(e).on("load",r),s[0].parentNode.insertBefore(e,s[0]),/loaded|complete/.test(e.readyState)&&r()},onReady:function(){var e=this;this.ready=!0,this.player.addEvent("play",function(){e.hasPlayed=!0,e.onPlaying()}),this.player.addEvent("pause",function(){e.onPause()}),this.player.addEvent("finish",function(){e.onPause()}),this.playOnReady&&this.play()},onPlaying:function(){this.playStatus<2&&(this.listeners.playing(),this.playStatus=2)},onPause:function(){this.listeners.pause(),delete this.playStatus},insertIframe:function(){var e=document.createElement("iframe");e.src=this.url.replace("VIDEO_ID",this.videoId).replace("PLAYER_ID",this.playerId),e.id=this.playerId,this.element.parentNode.replaceChild(e,this.element),this.element=e},play:function(){var e=this;this.playStatus||(this.listeners.play(),this.playStatus=1),this.ready?!this.hasPlayed&&(this.clickToPlay||window.navigator&&/iP(hone|od|ad)/.test(window.navigator.platform))?this.onPlaying():this.player.api("play"):(this.playOnReady=!0,window.$f?this.player||(this.insertIframe(),this.player=$f(this.element),this.player.addEvent("ready",function(){e.onReady()})):this.loadAPI())},pause:function(){this.ready?this.player.api("pause"):this.playStatus&&(delete this.playOnReady,this.listeners.pause(),delete this.playStatus)}}),o=0,r=n.ctor.inherit({klassName:"VimeoItemFactory",VimeoPlayer:s,options:{vimeoVideoIdProperty:"vimeo",vimeoPlayerUrl:"//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",vimeoPlayerIdPrefix:"vimeo-player-",vimeoClickToPlay:!0},initOptions:function(t){this.overrided(),this.options=e.mixin(this.options,r.prototype.options,t)},render:function(e,t){var i=this.options,a=this.getItemProperty(e,i.vimeoVideoIdProperty);if(a)return void 0===this.getItemProperty(e,i.urlProperty)&&(e[i.urlProperty]="//vimeo.com/"+a),o+=1,this.overrided(e,t,new s(i.vimeoPlayerUrl,a,i.vimeoPlayerIdPrefix+o,i.vimeoClickToPlay))}}),l={name:"vimeo",mimeType:"vimeo",ctor:r};return a.installAddon("items",l),l});
//# sourceMappingURL=../sourcemaps/items/vimeo.js.map

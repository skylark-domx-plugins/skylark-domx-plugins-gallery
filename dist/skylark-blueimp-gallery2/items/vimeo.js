/**
 * skylark-blueimp-gallery2 - The skylark blueimp  gallery plugin library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-query","skylark-domx-plugins-embeds/embed-vimeo","../Gallery","./video"],function(e,i,o,r,t,m){"use strict";var l=0,d=m.ctor.inherit({klassName:"VimeoItemFactory",options:{vimeoVideoIdProperty:"vimeo",vimeoPlayerUrl:"//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID",vimeoPlayerIdPrefix:"vimeo-player-",vimeoClickToPlay:!0},initOptions:function(i){this.overrided(),this.options=e.mixin(this.options,d.prototype.options,i)},render:function(e,o){var t=this.options,m=this.getItemProperty(e,t.vimeoVideoIdProperty);if(m)return void 0===this.getItemProperty(e,t.urlProperty)&&(e[t.urlProperty]="//vimeo.com/"+m),l+=1,this.overrided(e,o,new r(i.createElement("div"),{url:t.vimeoPlayerUrl,videoId:m,playerId:t.vimeoPlayerIdPrefix+l,clickToPlay:t.vimeoClickToPlay}))}}),n={name:"vimeo",mimeType:"vimeo",ctor:d};return t.installAddon("items",n),n});
//# sourceMappingURL=../sourcemaps/items/vimeo.js.map

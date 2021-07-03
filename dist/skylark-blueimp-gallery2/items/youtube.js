/**
 * skylark-blueimp-gallery2 - The skylark blueimp  gallery plugin library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-noder","skylark-domx-query","skylark-domx-plugins-embeds/embed-youtube","../Gallery","./video"],function(e,o,t,r,i,u){"use strict";var y=u.ctor.inherit({klassName:"YouTubeItemFactory",options:{youTubeVideoIdProperty:"youtube",youTubePlayerVars:{wmode:"transparent"},youTubeClickToPlay:!0},initOptions:function(o){this.overrided(),this.options=e.mixin(this.options,y.prototype.options,o)},render:function(e,t){var i=this.options,u=this.getItemProperty(e,i.youTubeVideoIdProperty);if(u)return void 0===this.getItemProperty(e,i.urlProperty)&&(e[i.urlProperty]="//www.youtube.com/watch?v="+u),void 0===this.getItemProperty(e,i.videoPosterProperty)&&(e[i.videoPosterProperty]="//img.youtube.com/vi/"+u+"/maxresdefault.jpg"),this.overrided(e,t,new r(o.createElement("div"),{videoId:u,playerVars:i.youTubePlayerVars,clickToPlay:i.youTubeClickToPlay}))}}),s={name:"youtube",mimeType:"youtube",ctor:y};return i.installAddon("items",s),s});
//# sourceMappingURL=../sourcemaps/items/youtube.js.map

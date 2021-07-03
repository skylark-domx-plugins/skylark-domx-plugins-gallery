define([
  "skylark-langx/langx",
  "skylark-domx-noder",
  "skylark-domx-query",
  "skylark-domx-plugins-embeds/embed-vimeo",
  '../Gallery',
  './video'
], function (langx, noder, $,EmbedVimeo, Gallery, video) {
  'use strict'

  var counter = 0;

  var VimeoItemFactory = video.ctor.inherit({
    klassName: "VimeoItemFactory",

    ///VimeoPlayer: VimeoPlayer,

    options: {
      // The list object property (or data attribute) with the Vimeo video id:
      vimeoVideoIdProperty: 'vimeo',
      // The URL for the Vimeo video player, can be extended with custom parameters:
      // https://developer.vimeo.com/player/embedding
      vimeoPlayerUrl: '//player.vimeo.com/video/VIDEO_ID?api=1&player_id=PLAYER_ID',
      // The prefix for the Vimeo video player ID:
      vimeoPlayerIdPrefix: 'vimeo-player-',
      // Require a click on the native Vimeo player for the initial playback:
      vimeoClickToPlay: true
    },

    initOptions: function (options) {
      this.overrided();
      this.options = langx.mixin(this.options, VimeoItemFactory.prototype.options, options);
    },

    render: function (obj, callback) {
      var options = this.options
      var videoId = this.getItemProperty(obj, options.vimeoVideoIdProperty)
      if (videoId) {
        if (this.getItemProperty(obj, options.urlProperty) === undefined) {
          obj[options.urlProperty] = '//vimeo.com/' + videoId
        }
        counter += 1;
        return this.overrided(
          obj,
          callback,
          new EmbedVimeo(
            noder.createElement("div"),
            {
              url : options.vimeoPlayerUrl,
              videoId,
              playerId : options.vimeoPlayerIdPrefix + counter,
              clickToPlay : options.vimeoClickToPlay
            }
          )
        )
      }
    }
  });

  var pluginInfo = {
    name: "vimeo",
    mimeType: "vimeo",
    ctor: VimeoItemFactory
  };

  Gallery.installAddon("items", pluginInfo);

  return pluginInfo;

});
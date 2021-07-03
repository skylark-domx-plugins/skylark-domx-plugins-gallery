define([
  "skylark-langx/langx",
  "skylark-domx-noder",
  "skylark-domx-query",
  "skylark-domx-plugins-embeds/embed-youtube",
  '../Gallery',
  './video'
], function (langx, noder, $, EmbedYoutube,Gallery, video) {
  'use strict'


  var YouTubeItemFactory = video.ctor.inherit({
    klassName: "YouTubeItemFactory",

    ///YouTubePlayer: YouTubePlayer,

    options: {
      // The list object property (or data attribute) with the YouTube video id:
      youTubeVideoIdProperty: 'youtube',
      // Optional object with parameters passed to the YouTube video player:
      // https://developers.google.com/youtube/player_parameters
      youTubePlayerVars: {
        wmode: 'transparent'
      },
      // Require a click on the native YouTube player for the initial playback:
      youTubeClickToPlay: true
    },

    initOptions: function (options) {
      this.overrided();
      this.options = langx.mixin(this.options, YouTubeItemFactory.prototype.options, options);
    },

    render: function (obj, callback) {
      var options = this.options
      var videoId = this.getItemProperty(obj, options.youTubeVideoIdProperty)
      if (videoId) {
        if (this.getItemProperty(obj, options.urlProperty) === undefined) {
          obj[options.urlProperty] = '//www.youtube.com/watch?v=' + videoId
        }
        if (
          this.getItemProperty(obj, options.videoPosterProperty) === undefined
        ) {
          obj[options.videoPosterProperty] =
            '//img.youtube.com/vi/' + videoId + '/maxresdefault.jpg'
        }
        return this.overrided(
          obj,
          callback,
          new EmbedYoutube(
            noder.createElement("div"),
            {
              videoId,
              playerVars : options.youTubePlayerVars,
              clickToPlay : options.youTubeClickToPlay
            }
          )
        )
      }
    }
  });

  var pluginInfo = {
    name: "youtube",
    mimeType: "youtube",
    ctor: YouTubeItemFactory
  };

  Gallery.installAddon("items", pluginInfo);

  return pluginInfo;
});
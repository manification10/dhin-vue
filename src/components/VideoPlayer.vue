<template>
<div>
  <video ref="videoPlayer" class="video-js" controls autoplay width="854" height="480" data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/b0CX4qBK_fo"}], "youtube": { } }'>
  </video>
</div>
</template>

<style>
</style>

<script>
import videojs from 'video.js';
import AnnotationComments from '@contently/videojs-annotation-comments';

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);

      this.markers({
        markers: [{
            time: 9.5,
            text: "this"
          },
          {
            time: 16,
            text: "is"
          },
          {
            time: 23.6,
            text: "so"
          },
          {
            time: 28,
            text: "cool"
          }
        ]
      });
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

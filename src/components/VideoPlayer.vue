<template>
<div>
  <video ref="videoPlayer" class="video-js" controls autoplay width="854" height="480" data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/b0CX4qBK_fo"}], "youtube": { } }'>
  </video>
  <div id="add-marker">
    <button v-on:click="logWhereYouAt">Add BookMark</button>
  </div>
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
    },
  },
  data() {
    return {
      player: null
    }
  },
  methods: {
    logWhereYouAt: function() {
      var whereYouAt = this.player.currentTime();
      console.log(whereYouAt);
      this.player.markers.add([{
        time: whereYouAt,
        text: 'dummy',
        overlayText: "Marker added at " + whereYouAt.toFixed(1)
      }])
    }
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
      this.markers({
        breakOverlay: {
          display: true
        },
        markers: []
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

<template>
<div>
  <video ref="videoPlayer" class="video-js"></video>
</div>
</template>

<style>
</style>

<script>
import videojs from 'video.js';

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

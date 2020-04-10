<template>
<div>
  <video ref="videoPlayer" class="video-js"></video>
</div>
</template>


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
    // let cssScript = document.createElement('script')
    // cssScript.setAttribute('src', 'video.js/dist/video-js.css')
    // document.head.appendChild(cssScript)
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

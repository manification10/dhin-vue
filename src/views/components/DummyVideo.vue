<template>
<div>
  <video ref="dummyVideo" class="video-js" controls autoplay width="854" height="480"
    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/yXjeuNQvgAM"}], "youtube": { "customVars" : { } } }'>
  </video>
  <div ref="container"></div>
</div>
</template>

<style>
</style>


<script>
import videojs from 'video.js';

export default {
  name: "DummyVideo",
  props: [],
  data() {
    return {
      player: null,
      options: {
        playbackRates: [0.5, 1, 1.5, 2],
      }
    }
  },
  methods: {},
  mounted() {
    this.player = videojs(this.$refs.dummyVideo, this.options, function onPlayerReady() {
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

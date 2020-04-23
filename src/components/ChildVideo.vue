<template>
<div>
  <h3> start: {{ start }} end: {{ end}} </h3>
  <video ref="childVideo" class="video-js" controls autoplay width="854" height="480"
    data-setup='{ "techOrder": ["html", "youtube"],"sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/yv8mTJCBpi4"}],"youtube": { "customVars" : { } } }'>
  </video>
</div>
</template>

<style>
</style>

<script>
import videojs from 'video.js';

export default {
  name: "ChildVideo",
  props: ['start', 'end'],
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
    this.player = videojs(this.$refs.childVideo, this.options, {
      youtube: {
        start: this.start,
        end: this.end
      }
    }, this.options, function onPlayerReady() {
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

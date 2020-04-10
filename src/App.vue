<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<div id="app">
  <HelloWorld msg="Welcome to Dhin" />
  <video-player id="videoPlayer" :options="videoOptions" />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VideoPlayer from './components/VideoPlayer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        loop: true,
        playbackRates: [0.5, 1, 1.5, 2],
      }
    };
  }
}
</script>

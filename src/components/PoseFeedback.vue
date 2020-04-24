<template>
  <vue-web-cam ... />
<div id="vid">
</div>
</template>

<style>
</style>

<script>
import Vue from 'vue';
import * as posenet from '@tensorflow-models/posenet';
import WebCam from "../../src";
Vue.use(WebCam);


export default {
  name: "PoseFeedback",
  props: [],
  data() {
    return {

    }
  },
  methods: {
    initializePose: function() {
      const net = await posenet.load({
        architecture: 'ResNet50',
        outputStride: 32,
        inputResolution: {
          width: 257,
          height: 200
        },
        quantBytes: 2
      });
    }


  },
  mounted() {

  },
  beforeDestroy() {

  }
</script>

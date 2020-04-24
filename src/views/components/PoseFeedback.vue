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

    async function estimatePoseOnImage(imageElement) {
      // load the posenet model from a checkpoint
      const net = await posenet.load();

      const pose = await net.estimateSinglePose(imageElement, {
        flipHorizontal: false
      });
      return pose;
    }

    const imageElement = document.getElementById('cat');

    const pose = estimatePoseOnImage(imageElement);

    console.log(pose);


  },
  mounted() {

  },
  beforeDestroy() {

  }
</script>

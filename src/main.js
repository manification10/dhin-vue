import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('../node_modules/video.js/dist/video-js.css')
require('../node_modules/videojs-markers/dist/videojs.markers.css')
require('../node_modules/videojs-markers/dist/videojs-markers.js')
require('../node_modules/videojs-youtube/dist/Youtube.js')


new Vue({
  render: h => h(App),
}).$mount('#app')

<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
  padding: 10px;
}

.grid-container > div {
  text-align: center;
  padding: 20px 0;
  font-size: 12px;
}
</style>

<template>
  <div>
    <div class="grid-container">
      <div>
        <video
          ref="videoPlayer"
          class="video-js"
          controls
          autoplay
          width="854"
          height="480"
          data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/b0CX4qBK_fo"}], "youtube": { "customVars" : { } } }'
        ></video>
      </div>
      <div>
        <div id="add-marker">
          <!-- <button v-on:click="logWhereYouAt">Add BookMark</button> -->
          <div class="md-layout">
              <!-- BOOKMARK -->
              <md-button v-on:click="logWhereYouAt" class="md-primary md-just-icon md-round"><md-icon >bookmark</md-icon>
                <md-tooltip md-direction="bottom">Add Bookmark</md-tooltip>
              </md-button>

              <!-- LOOP -->
              <md-button v-on:click="logWhereYouAt" class="md-primary md-just-icon md-round"><md-icon>loop</md-icon>
                <md-tooltip md-direction="bottom">Loop</md-tooltip>
              </md-button>

              <!-- SLOW MO -->
              <md-button v-on:click="logWhereYouAt" class="md-primary md-just-icon md-round"><md-icon>slow_motion_video</md-icon>
                <md-tooltip md-direction="bottom">Slow Motion</md-tooltip>
              </md-button>

              <!-- ZOOM -->
              <md-button v-on:click="logWhereYouAt" class="md-primary md-just-icon md-round"><md-icon>zoom_in</md-icon>
                <md-tooltip md-direction="bottom">Zoom In</md-tooltip>
              </md-button>

              <!-- STICK FIGURE -->
              <md-button v-on:click="showFeedback" class="md-primary md-just-icon md-round"><md-icon>accessibility</md-icon>
                <md-tooltip md-direction="bottom">Add Stick Figures</md-tooltip>
              </md-button>

              <!-- WEBCAM -->
              <md-button v-on:click="showFeedback" class="md-primary md-just-icon md-round"><md-icon>videocam</md-icon>
                <md-tooltip md-direction="bottom">Turn on Split Screen</md-tooltip>
              </md-button>
          </div>
        </div>
      </div>
      <div id="child">Add bookmarks to break the video down into steps!</div>
    </div>

    <div ref="container"></div>
  </div>
</template>

<style></style>

<script>
import videojs from "video.js";
import ChildVideo from "./ChildVideo";
import DummyVideo from './DummyVideo';
import Vue from "vue";

export default {
  name: "VideoPlayer",
  components: {
    // ChildVideo
  },
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
      player: null,
      children: []
    };
  },
  methods: {
    logWhereYouAt: function() {
      var whereYouAt = Math.floor(this.player.currentTime());
      console.log(whereYouAt);
      this.player.markers.add([
        {
          time: whereYouAt,
          text: "dummy",
          overlayText: "Marker added at " + whereYouAt
        }
      ]);
      this.addChildVideo(whereYouAt);
    },
    showFeedback: function(){
      var ComponentClass = Vue.extend(DummyVideo);
      var instance = new ComponentClass();
      instance.$mount();
      this.$refs.container.appendChild(instance.$el);
    },
    addChildVideo: function(whereYouAt) {
      console.log("add child video");
      var l = this.children.length;
      var child = {};
      if (l == 0) {
        child = {
          'start': 0,
          'end': whereYouAt
        };
      } else {
        var start = this.children[l - 1]['end']
        child = {
          'start': start,
          'end': whereYouAt
        }
      }
      console.log(child);
      this.children.push(child);
      var ComponentClass = Vue.extend(ChildVideo);
      var instance = new ComponentClass({
        propsData: { start: child.start, end: child.end}
      });
      instance.$mount();
      // this.$refs.container.appendChild(instance.$el);
      document.getElementById("child").appendChild(instance.$el);
    },
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

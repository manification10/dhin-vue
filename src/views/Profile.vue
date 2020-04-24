<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

#videoPlayer {
  /* display: inline-block; */
}

</style>

<template>

  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">

              </div>
            </div>
          </div>

          <div id="app">
            <video-player id="videoPlayer" :options="videoOptions" />
          </div>
          <div class="name">
            <p>
              <b>SONG</b>: BORED IN THE HOUSE<br/>
              <b>CHOREOGRAPHER</b>: ANU SHARMA<br/>
              <b>LEVEL</b>: BEGINNER<br/>
              <b>DATE UPLOADED</b>: 4/8/2020<br/>
              <br/>
              <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import VideoPlayer from './components/VideoPlayer.vue'

export default {
  components: {
    // Tabs,
    VideoPlayer
  },
  bodyClass: "profile-page",
  data() {
    return {
      
        videoOptions: {
        autoplay: true,
        controls: true,
        loop: true,
        playbackRates: [0.5, 1, 1.5, 2],
      }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/dance.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>

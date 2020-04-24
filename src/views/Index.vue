<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <!-- MEERA -->
              <h1>Dhin</h1>
              <h3>An online dance collaboration platform.</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>


<!-- MEERA -->
    <div class="main main-raised">
      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Videos</h2>
              <h4>
                Learn choreography from these amazing choreographers!
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                  :src="anisha"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
                >SONG: ILLEGAL WEAPON 2.0</md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                  :src="anjana"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
                >SONG: LOCA</md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                  :src="anu"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
                >SONG: BORED IN THE HOUSE</md-button
              >
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <a href="#/landing" target="_blank">
                <img
                  :src="nikhita"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/landing" class="md-simple md-success md-lg"
                >SONG: NACHDE NE SAARE</md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                  :src="alana"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
                >SONG: PURPLE HAT</md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                  :src="meera"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
                >SONG: WHAT A MAN GOTTA DO</md-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import { LoginCard } from "@/components";

export default {
  components: {
    // BasicElements,
    // Navigation,
    // SmallNavigation,
    // Tabs,
    // NavPills,
    // Notifications,
    // TypographyImages,
    // JavascriptComponents,
    // LoginCard
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/dance.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    },
    alana: {
      type: String,
      default: require("@/assets/img/alana.jpg")
    },
    anisha: {
      type: String,
      default: require("@/assets/img/anisha.jpg")
    },
    anu: {
      type: String,
      default: require("@/assets/img/anu.jpg")
    },
    anjana: {
      type: String,
      default: require("@/assets/img/anjana.jpg")
    },
    meera: {
      type: String,
      default: require("@/assets/img/meera.jpg")
    },
    nikhita: {
      type: String,
      default: require("@/assets/img/nikhita.jpg")
    },
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>

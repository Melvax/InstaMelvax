<template>
  <div id="app"><router-view> </router-view></div>
</template>

<script>
import feed from "./components/Feed.vue";
import HelloWorld from "./components/HelloWorld";

// local storage contrairement au session storage reste quand le navigateur ferme
import localstorage from "vue-localstorage";
import Vue from "vue";

Vue.use(localstorage);

export default {
  name: "App",
  components: {
    HelloWorld,
    feed
  },
  data() {
    return {};
  },
  mounted() {
    // test pour voir si le localstorage fonctionne
    this.$localStorage.set("gang", "this is my gang");
    var localgang = this.$localStorage.get("gang");
    if (localgang) {
      console.log(localgang);
    }
  }
};
</script>

<style lang="stylus">
#app
  color: black

//.nightmode

//.lightmode

@font-face
  font-family DINPRO
  font-style normal
  src url(./assets/fonts/DINPro_Bold.ttf)

.rosegradient
  display: table;
  margin: 0 auto;
  src url(./assets/fonts/DINPro_Bold.ttf)
  font: DINPRO;
  font-size: 1em;
  //background: linear-gradient(60deg,  #ff99cc 0%,#ff99cc 40%, #e05252 120%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

.title
  font-family DINPRO
#app0 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

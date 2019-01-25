<template>
  <div id="app">
    <!-- img width="25%" src="./assets/logo.png" -->
    <!-- HelloWorld/ -->
    <!-- p class="DINPRO"><strong>GANG </strong></p -->
    <myheader />

    <mybody :posts="posts" :filters="filters" />

    <myfooter />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import myheader from "./components/Header";
import myfooter from "./components/Footer";
import mybody from "./components/PhoneBody";

import filters from "./data/filters.js";
import posts from "./data/posts.js";

export default {
  name: "App",
  components: {
    HelloWorld,
    myheader,
    myfooter,
    mybody
  },
  data() {
    return {
      posts,
      filters
    };
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

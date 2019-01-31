<template>
  <div id="feed">
    <myheader />

    <mybody :posts="posts" :filters="filters" />

    <myfooter />
  </div>
</template>
<script>
//import header from "./Header.vue";

import myheader from "./Header";
import myfooter from "./Footer";
import mybody from "./PhoneBody";

import filters from "../data/filters.js";
import posts from "../data/posts.js";

export default {
  data() {
    return {
      posts,
      filters
    };
  },

  components: {
    myheader,
    myfooter,
    mybody
  }
};
</script>

<style lang="stylus"></style>

<template>
  <div class="container">
    <VuePost
      v-for="post in posts"
      :post="post"
      :key="posts.indexOf(post)"
      class="vuepost"
    />
  </div>
</template>

<script>
import VuePost from "./VuePost.vue";

export default {
  name: "PhoneBody",
  components: {
    VuePost
  },
  data() {
    return {
      msg: "gang"
    };
  },
  props: {
    posts: Array,
    filters: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" src="../assets/styles/style.stylus" scoped></style>

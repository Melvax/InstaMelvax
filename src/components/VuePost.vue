<template>
  <div class="vuegram-post">
    <div class="header level">
      <!--
        figure class="image is-32x32 hidden"><img :src="post.userImage" /></figure
      -->
      <div class="level-item">
        <span class="username dindin">
          <strong> {{ post.username }} </strong>
        </span>
      </div>
    </div>
    <div class="level image-container">
      <div class="level-item">
        <router-link to="/post/">
          <img
            @click="LogCaption"
            @mouseover="mouseOver"
            :src="post.postImage"
            class="image"
          />
        </router-link>
        <!-- Tilt element -->
      </div>
    </div>
    <!-- div height="20px" style="backgrond-color:red"></div -->
    <div class="content level">
      <!-- div class="heart"><i class="far fa-heart fa-lg"></i></div -->
      <!-- p class="likes">{{ post.likes }} likes</p -->
      <div></div>
      <p class="caption  level-item">
        <span>
          {{ post.username }} <i>{{ post.caption }}</i>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VuePost",

  components: {},

  props: {
    post: Object
  },
  methods: {
    LogCaption() {
      console.log("the caption is ");
      //console.log(this.post.caption);

      this.$localStorage.set("currentPost", JSON.stringify(this.post));
      console.log("y coordinate : " + event.clientY); // y coordinate
      this.$localStorage.set("yclick", JSON.stringify(event.clientY));

      var currentPost = this.$localStorage.get("currentPost");
      console.log(JSON.parse(currentPost).postImage);
    },
    mouseOver() {
      console.log("mouse hover");
    }
  }
};
</script>
<style lang="stylus" src="../assets/styles/style.stylus"></style>

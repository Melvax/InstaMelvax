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
        <div data-tilt><img :src="post.postImage" class="image" /></div>
        <!-- Tilt element -->
      </div>
    </div>
    <!-- div height="20px" style="backgrond-color:red"></div -->
    <div class="content level">
      <!-- div class="heart"><i class="far fa-heart fa-lg"></i></div -->
      <!-- p class="likes">{{ post.likes }} likes</p -->
      <div></div>
      <p class="caption level-item">
        <span>{{ post.username }}</span> {{ post.caption }}
      </p>
    </div>
  </div>
</template>

<script>
//import tilt.js and try some stuff? or not
// anime.js
// hover or click effect
//router

export default {
  name: "VuePost",

  components: {},

  props: {
    post: Object
  }
};
</script>
<style lang="stylus" src="../assets/styles/style.stylus"></style>

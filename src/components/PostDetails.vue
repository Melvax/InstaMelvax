<template>
  <div id="postdetails" class="level">
    <div class="level-item">
      <div>
        <img
          class="detailImage level-item "
          :src="currentPost.postImage"
          alt=""
        />
        <!-- p v-if="true" class="level-left"><strong>chacal </strong></p -->
        <p class=" has-text-centered">{{ currentPost.caption }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPost: ""
    };
  },
  computed: {
    changeCurrentPost() {
      console.log("current post has changed");
      return 0;
    }
  },
  mounted() {
    this.currentPost = JSON.parse(this.$localStorage.get("currentPost"));

    //this.currentPost = this.$localStorage.get("currentPost");

    //console.log(JSON.parse(this.currentPost).postImage);
    //this.currentPost = JSON.parse(this.$localStorage.get("currentPost").postImage;
  }
};
</script>
<style lang="stylus" src="../assets/styles/style.stylus"></style>

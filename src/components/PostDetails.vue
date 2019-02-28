<template>
  <div id="postdetails" class="level">
    <div class="level-item">
      <div>
        <img
          class="detailImage chakal level-item "
          :src="currentPost.postImage"
          alt=""
          id="chakal"
          @click="animatechakal"
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
      currentPost: "",
      translatey: 0
    };
  },
  created() {
    console.log("chakal cest monté");
    //var chakal = document.getElementsByClassName("chakal");

    //chakal.style.opacity = "0";

    this.translatey = JSON.parse(this.$localStorage.get("yclick"));

    //chakal.style.filter = "alpha(opacity=50)"; // IE fallback
    this.animatechakal(this.translatey);
  },
  BeforeMounted() {
    var chakal = document.getElementsByClassName("chakal");

    chakal.style.opacity = "0";
  },
  computed: {
    changeCurrentPost() {
      console.log("current post has changed");
      return 0;
    }
  },
  methods: {
    animatechakal: function(translatey) {
      //translatey = typeof translatey !== "undefined" ? translatey : 128;

      console.log("animatechakal");
      console.log(this.translatey);
      var x = this.translatey;

      setTimeout(function() {
        anime({
          targets: "#chakal",
          translateY: x,
          duration: 700 + x * 0.5,
          easing: "easeInBack",
          direction: "reverse",
          borderRadius: ["0%", "20%"],
          opacity: ["1", "0"],
          scale: ["1", ".85"]
        });
      }, 5);
    }
  },
  mounted() {
    //var chakal = document.getElementById("chakal");
    //chakal.style.opacity = "0";
    this.currentPost = JSON.parse(this.$localStorage.get("currentPost"));
    //console.log("click y test " + this.translatey);

    //this.currentPost = this.$localStorage.get("currentPost");

    //console.log(JSON.parse(this.currentPost).postImage);
    //this.currentPost = JSON.parse(this.$localStorage.get("currentPost").postImage;
  }
};
</script>
<style lang="stylus" src="../assets/styles/style.stylus"></style>

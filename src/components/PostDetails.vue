<template>
  <div id="postdetails" class="">
    <div >
        <img
          class="detailImage  level-item "
          :src="currentPost.postImage"
          alt=""
          id="chakal"
          @click="animatechakal"
        />
    </div>
      <!-- p v-if="true" class="level-left"><strong>chacal </strong></p -->
      <div class="container container-margin">
        <!--
          p class=" heimasf ">
            <strong> {{ currentPost.username }} </strong>
          </p>
          <p class=" ">{{ currentPost.caption }}</p
        -->
        <editor />
      </div>
    </div>
  </div>
</template>
<script>
import editor from "./Editor.vue";

export default {
  data() {
    return {
      currentPost: "",
      translatey: 0
    };
  },
  components: {
    editor
  },
  created() {
    console.log("chakal cest créé");

    this.translatey = JSON.parse(this.$localStorage.get("yclick"));
    this.animatechakal(this.translatey);

    //chakal.style.filter = "alpha(opacity=50)"; // IE fallback
  },
  beforeMount() {
    console.log("chakal c'est beforemounté");

    //document.getElementById("chakal").style.opacity = "0.0";
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
      }, 1);
    }
  },
  mounted() {
    //var chakal = document.getElementById("chakal");
    //chakal.style.opacity = "0";
    console.log("chakal c'est monté");
    this.currentPost = JSON.parse(this.$localStorage.get("currentPost"));

    //console.log("click y test " + this.translatey);

    //this.currentPost = this.$localStorage.get("currentPost");
    window.onscroll = function(e) {
      console.log(window.scrollY); // Value of scroll Y in px
    };
    //console.log(JSON.parse(this.currentPost).postImage);
    //this.currentPost = JSON.parse(this.$localStorage.get("currentPost").postImage;
  }
};
</script>
<style lang="stylus" src="../assets/styles/style.stylus">

</style>

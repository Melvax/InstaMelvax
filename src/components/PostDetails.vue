<template>
  <div id="postdetails"  class="">
    <div v-blur="blurConfig" class="detail-img-container">
        <img 
          class="detailImage  level-item "
          :src="currentPost.postImage"
          alt=""
          id="chakal"
          @click="animatechakal"
        />
    </div>
      <!-- p v-if="true" class="level-left"><strong>chacal </strong></p -->
      <div class="container ">
        <!--
          p class=" heimasf ">
            <strong> {{ currentPost.username }} </strong>
          </p>
          <p class=" ">{{ currentPost.caption }}</p
        -->
        <editor id="editor" />
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
      translatey: 0,
      scrolled:0,
      opaciblur:0,
      blurConfig: {
        isBlurred: false, // activate and deactivate blur directive example 2
        opacity: this.opaciblur,
        filter: 'blur(1px)',
        transition: 'all .1s linear'
      }
    };
  },
  components: {
    editor,
  },
  created() {
    console.log("chakal cest créé");
    window.addEventListener('scroll', this.handleScroll);

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

      setTimeout(function() {
        anime({
          targets: "#editor",
          duration: 1000  ,
          delay:200,
          easing: "easeInBack",
          opacity: ["0", "1"],
          scale: ["0.8", "1"]
        });
      }, 1);      
    },
    handleScroll () {
      this.scrolled = window.scrollY ;
      console.log("scrolled : "+this.scrolled)
      var hh = document.getElementById('chakal').clientHeight;

      console.log(hh+" is the height of id: chakal");
      console.log((this.scrolled/hh)*100+'%');

      this.opaciblur=this.scrolled/hh;
      console.log(this.opaciblur+"opaciblur value")
    }  

  },
  mounted() {
    //var chakal = document.getElementById("chakal");
    //chakal.style.opacity = "0";
    console.log("chakal c'est monté");
    this.currentPost = JSON.parse(this.$localStorage.get("currentPost"));
    
  
    console.log($('#chakal').height())
    //console.log("click y test " + this.translatey);

    //this.currentPost = this.$localStorage.get("currentPost");
    /*
    window.onscroll = function(e) {
      console.log(window.scrollY); // Value of scroll Y in px
    };
    */
    //console.log(JSON.parse(this.currentPost).postImage);
    //this.currentPost = JSON.parse(this.$localStorage.get("currentPost").postImage;
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }  
};
</script>
<style lang="stylus" src="../assets/styles/style.stylus">

</style>

<template>
  <nav class="level">
    <p class="DINPRO"><!-- i><strong>Hello Bulma! </strong> </i --></p>
    <p class="level-item has-text-centered">
      <img
        class="mylogo"
        src="https://uploads.codesandbox.io/uploads/user/60940ceb-6073-4bec-88ad-3139b09c452c/9T7R-MELVAX_black_hard_transparent2.png"
        height="75vw"
        width="75vw"
        alt="melvax logo"
      />
    </p>
  </nav>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    console.log("header");
    setTimeout(function() {
      anime({
        targets: ".mylogo",
        translateY: 35,
        duration: 5000,
        easing: "easeInBack",
        direction: "reverse",
        direction: "alternate",
        loop: true,
        opacity: ["1", "0"],
        scale: ["1", ".75"]
      });
    }, 5);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" src="../assets/styles/style.stylus" scoped></style>

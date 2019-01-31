<template>
  <nav class="level">
    <p class="DINPRO"><!-- i><strong>Hello Bulma! </strong> </i --></p>
    <p class="level-item has-text-centered">
      <img
        class="mylogo"
        src="https://uploads.codesandbox.io/uploads/user/60940ceb-6073-4bec-88ad-3139b09c452c/9T7R-MELVAX_black_hard_transparent2.png"
        height="75px"
        width="75px"
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" src="../assets/styles/style.stylus" scoped></style>

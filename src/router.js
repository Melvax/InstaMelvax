import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: require("./components/Feed.vue")
    },
    {
      path: "/post",
      component: require("./components/PostDetails.vue")
    }
  ]
});

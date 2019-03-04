// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router.js";
import store from "./store.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
/*
Ce qui'il reste à faire 
-write your story
--Anime.js
-chaine danimation
-lazy loading
-Splash screen
-profile view
-disqus
vibrate https://illyism.github.io/jquery.vibrate.js/
-hover blur
-ajouter Stripe pour paiement a prix libre à partire de 1€

//http:////https://alligator.io/vuejs/server-side-rendering-with-nuxtjs/
https://github.com/rachmanzz/vue-inview in view or not
-NAvigation inférieur pour avoir un sentiment NAtif
-Lier à Firebase ou AWS
--ajouter Notifications
--reflechir a un systeme de page pour le routeur avec id de post
-NUXT pour ssr et SEO

*/

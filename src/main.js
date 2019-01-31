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

-faire vue pour post 
-
-Anime.js
-lazy loading
-Splash screen
-profile view
-NAvigation inférieur pour avoir un sentiment NAtif
-ajouter Notifications
-reflechir a un systeme de page pour le routeur avec id de post
- animation ente page.
-hover blur 
-ajouter Stripe pour paiement a prix libre à partire de 1€ 
-NUXT pour ssr et SEO

*/

import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //like data
    loadingStatus: "not loading",
    posts: []
  },
  mutations: {
    // commit and track state changes peuve faire intervenir des actions
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    //like methods update dthe state
    fetchPosts(context) {
      context.commit("SET_LOADING_STATUS", "loading");
    }
  },
  getters: {
    //like computed qui surveille le state
    imagePosts(state) {
      return state.posts.filter(posts => post.image); // image true
    }
  }
});

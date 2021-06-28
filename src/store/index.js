import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    anchors: [],
    anchorParent: '',
  },
  mutations: {
    SET_ANCHORS(state, value) {
      state.anchors = value;
    },
    SET_ANCHOR_PARENT(state, value) {
      state.anchorParent = value;
    },
  },
  actions: {
    resetAnchors({ commit }, { name, anchors }) {
      commit('SET_ANCHORS', anchors);
      commit('SET_ANCHOR_PARENT', name);
    },
  },
  modules: {},
});

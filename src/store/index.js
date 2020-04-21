import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex);

const state = {
  movingTotal: 0,
  currentMap: [],
  role: null,
  goBack: {
    map: [],
    direction: []
  },
  mapLevel: 0
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

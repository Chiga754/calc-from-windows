import { createStore } from 'vuex'

export default createStore({
  state: {
    result: "0",
    showCalc: true,
    expand: false,
  },
  getters: {
  },
  mutations: {
    addRes(state, value) {
      state.result += value;
      state.result = state.result.replace(/^0+/, '');
    },
    setRes(state, value) {
      state.result = value;
    },
    resetRes(state){
      state.result = "0";
    },
    setShowCalc(state, bool){
      state.showCalc = bool;
    },
    reExpand(state) {
      state.expand = !state.expand;
    },
  },
  actions: {
  },
  modules: {
  }
})

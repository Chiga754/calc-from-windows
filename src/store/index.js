import { createStore } from 'vuex'

export default createStore({
  state: {
    result: "0",
    showCalc: true,
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
    }
  },
  actions: {
  },
  modules: {
  }
})

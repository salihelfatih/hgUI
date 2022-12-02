import FaveService from "../../services/FaveService";

export default {
  namespaced: true,
  state: {
    faves: [],
    fave: null,
  },
  getters: {
    faves: (state) => state.faves,
    fave: (state) => state.fave,
  },
  actions: {
    getFaves({ commit }) {
      FaveService.index().then((response) => {
        commit("SET_FAVES", response.data);
      });
    },
    getFave({ commit }, faveId) {
      FaveService.show(faveId).then((response) => {
        commit("SET_FAVE", response.data);
      });
    },
    addProductToFaves({ commit }, fave) {
      FaveService.add(fave).then((response) => {
        commit("ADD_TO_FAVES", response.data);
      });
    },
    removeFromFaves({ commit }, fave) {
      FaveService.delete(fave).then((response) => {
        commit("REMOVE_PRODUCT_FROM_FAVES", response.data);
      });
    },
    clearFaves({ commit }) {
      FaveService.deleteAll().then((response) => {
        commit("CLEAR_FAVES", response.data);
      });
    },
  },
  mutations: {
    SET_FAVES(state, faves) {
      state.faves = faves;
    },
    SET_FAVE(state, fave) {
      state.fave = fave;
    },
    ADD_TO_FAVES(state, fave) {
      state.faves.push(fave);
    },
    REMOVE_PRODUCT_FROM_FAVES(state, fave) {
      state.faves = state.faves.filter((p) => p.id !== fave.id);
    },
    CLEAR_FAVES(state) {
      state.faves = [];
    },
  },
};

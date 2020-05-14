import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'users-foo',
  },
  // "RootState is not available to mutations."
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    // Accesing the state of the root like so
    foo(state, getters, rootState) {
      return `users-getter/${rootState.foo}`;
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then((result) => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};

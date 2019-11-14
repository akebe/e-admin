import Vue from 'vue';

const store = {

  title: 'e-admin',

  route: {
    stopJump: false,
    to: null,
  },

  user: {
    id: '',
    name: '',
  },

};

Vue.observable(store);

export default store;
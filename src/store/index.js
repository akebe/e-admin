import Vue from 'vue';

let user = localStorage.getItem('document_user');

const store = {

  title: 'e-admin',

  route: {
    stopJump: false,
    to: null,
  },

  user: user ? JSON.parse(user) : {
    id: '',
    name: '',
  },

};

Vue.observable(store);

export default store;
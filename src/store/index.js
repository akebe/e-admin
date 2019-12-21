import Vue from 'vue';

let user = localStorage.getItem('document_user');
user = user ? JSON.parse(user) : {
  id: '',
  name: '',
};
if (!user.id) {
  user.id = Date.now();
  user.name = '临时用户';
}

const store = {

  title: 'e-admin',

  route: {
    stopJump: false,
    to: null,
  },

  user,

};

Vue.observable(store);

export default store;
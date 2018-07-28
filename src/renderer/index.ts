import Vue from 'vue';
import app from './component/app.vue';
import './style.scss';

const vm = new Vue({
  components: {
    app,
  },
  template: '<app></app>',
});

vm.$mount('#app');

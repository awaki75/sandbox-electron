import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      counter: 0,
      message: '',
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
  },
});

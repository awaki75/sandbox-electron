import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter += 1;
    },
  },
});

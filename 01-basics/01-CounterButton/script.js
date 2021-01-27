import Vue from './vue.esm.browser.js';

const app = new Vue({
	template: `#app`,

	data() {
		return {
			counter: 0
		}
	},

	methods: {
		addOne: function() {
			return this.counter += 1;
		}
	},
});

app.$mount('#app');

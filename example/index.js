import Vue from 'vue'
import App from './App.vue'

// Start the app on the #app div
new Vue({
	el: '#app',
	render: h => h(App),
	components: { App }
})

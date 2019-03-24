import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import './styles/reset.css';
import './styles/global.scss';

new Vue({
	el: '#app',
	router,
	render: h => h(App)
});

import Vue from "vue";
import Router from "vue-router";
import search from "./views/search.vue";
//import result from "./views/result.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	//base: process.env.BASE_URL,
	routes: [
		{
			path: "/search",
			name: "search",
			component: search
		},
		{
			path: "/result",
			name: "result",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/result.vue")
		},
		{
			path: '*',
			redirect: '/search'
		},
	]
});

import '../scss/common.scss'

import Vue from "vue"
import VueRouter from "vue-router"

import Axios from 'axios'
import VueAxios from 'vue-axios'

import topComponent from '../../component/top.vue'
import aboutComponent from '../../component/about.vue'
import profileComponent from '../../component/profile.vue'
import bbsComponent from '../../component/bbs.vue'
import linksComponent from '../../component/links.vue'
import contactComponent from '../../component/contact.vue'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: topComponent },
    { path: "/about", component: aboutComponent },
    { path: "/profile", component: profileComponent },
    { path: "/bbs", component: bbsComponent },
    { path: "/links", component: linksComponent },
    { path: "/contact", component: contactComponent },
  ]
});

Vue.use(VueAxios, Axios) 

new Vue({
  router,
  el: "#app"
});

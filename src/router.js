import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home';
import Competitions from './components/Competitions';
import Other from './components/Other';
import ThirdParty from './components/ThirdParty';

Vue.use(VueRouter);


const routes = [
    { path: '/', component: Home },
    { path: '/competitions', component: Competitions },
    { path: '/third-party', component: ThirdParty },
    { path: '/misc', component: Other },
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

export default router;
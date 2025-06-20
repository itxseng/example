import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import CountrySelect from '../view/countries/CountrySelect.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/country', component: CountrySelect }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import CountrySelect from '../view/countries/CountrySelect.vue';
import PhoneCodeSelect from '../view/countries/PhoneCodeSelect.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/country', component: CountrySelect },
    { path: '/phone-code', component: PhoneCodeSelect }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

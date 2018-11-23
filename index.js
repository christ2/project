import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_models';
import App from './app/App';

Vue.use(VeeValidate);

import { configureBackend } from './_models';
configureBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

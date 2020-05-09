import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')


Vue.filter('formatDateDefault', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});

Vue.filter('formatDateFromNow', function(value) {
    if (value) {
        return moment(String(value)).fromNow()
    }
});

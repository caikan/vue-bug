// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Bug from './Bug'

Vue.config.productionTip = false

Vue.component(Bug.name, Bug);
Vue.component(App.name, App);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
})
new Vue({
  el: '#app2',
  data: {
    array: [1, 2]
  },
});

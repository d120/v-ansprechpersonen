const Home = { template: '#home-template' }
const Activities = { template: '#activities-template', props: ['activities'] }
const UAs = { template: '#uas-template', props: ['uas'] }

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes: [
    { path: '/', component: Home },
    { path: '/activities', component: Activities, props: true },
    { path: '/uas', component: UAs, props: true }
  ]
});

var app = new Vue({
  router,
  data: {
    activities: [],
    uas: [],
  }
}).$mount('#app');

request = new Request("ansprechpersonen.json");
fetch(request)
  .then(response => response.json())
  .then(function(ansprechpersonen) {
    app.activities = ansprechpersonen.activities;
    app.uas = ansprechpersonen.uas;
  })

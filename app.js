const Home = { template: '#home-template' }
const Committees = { template: '#committees-template', props: ['committees'] }
const CommitteesCentral = { template: '#committeesCentral-template', props: ['committeesCentral'] }
const Events = { template: '#events-template', props: ['events'] }
const Internal = { template: '#internal-template', props: ['internal'] }
const Services = { template: '#services-template', props: ['services'] }

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes: [
    { path: '/', component: Home },
    { path: '/committees', component: Committees, props: true },
    { path: '/committeesCentral', component: CommitteesCentral, props: true },
    { path: '/events', component: Events, props: true },
    { path: '/internal', component: Internal, props: true },
    { path: '/services', component: Services, props: true }
  ]
});

var app = new Vue({
  router,
  data: {
    committees: [],
    committeesCentral: [],
    events: [],
    internal: [],
    services: [],
  }
}).$mount('#app');

request = new Request("ansprechpersonen.json", {credentials: 'include'});
fetch(request)
  .then(response => response.json())
  .then(function(ansprechpersonen) {
    app.committees = ansprechpersonen.committees;
    app.committeesCentral = ansprechpersonen.committeesCentral;
    app.events = ansprechpersonen.events;
    app.internal = ansprechpersonen.internal;
    app.services = ansprechpersonen.services;
  })

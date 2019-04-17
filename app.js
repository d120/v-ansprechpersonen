const Home = { template: '#home-template' }
const Activities = { template: '#activities-template', props: ['activities'] }
const UAs = { template: '#uas-template', props: ['uas'] }

const activities = [
  {
    name: 'Buchaktion',
    email: 'buchaktion@',
    members: ['Fabian D.', 'Daniel', 'Dennis']
  },{
    name: 'Feedback',
    email: 'feedback@',
    members: ['Heiko', 'Jonas H.', 'Frederik']
  },{
    name: 'Forum',
    email: 'forum@',
    members: ['Jan B.', 'Linh', 'Michael R.', 'Max']
  },{
    name: 'FSS',
    email: 'fss@',
    members: ['Jan H.', 'Johannes L.', 'Max', 'Fabian F.', 'Fabian D.']
  },{
    name: 'GnoM',
    email: 'gnom-orga@',
    members: ['Jannis', 'Daniel', 'Claas', 'Julius', 'Tschäääään']
  },{
    name: 'Inforz',
    email: 'inforz@',
    members: ['Heiko', 'Jannis', 'Fabian F.', 'Tobias H.']
  },{
    name: 'Ofahrtleitung',
    email: 'ofahrt-leitung@',
    members: ['Janika', 'Fabian D.', 'Tim P.']
  },{
    name: 'Ophasenleitung',
    email: 'ophase-leitung@',
    members: ['Tim, Janika, Dennis, Jonas H.']
  },{
    name: 'Programmiervorkurs',
    email: 'vorkurs@',
    members: ['Kevin', 'Steffen', 'Jonas H', 'Jonas K', 'Daniel', 'Jannis']
  },{
    name: 'Raumbuchung',
    email: 'raumbuchung@',
    members: ['Tschäääään', 'Max K.']
  },{
    name: 'RPGnoM',
    email: 'rpgnom-orga@',
    members: ['Tobias H.', 'Claas']
  },{
    name: 'Sommerfest',
    members: ['Maggi', 'Lukas', 'Melanie', 'Heiko', 'Claas'],
    email: 'sommerfest@'
  },{
    name: 'Transponderbeauftragte',
    email: 'dini@, jwillich@',
    members: ['Dini', 'Julius']
  },{
    name: 'Universitätserfahrung',
    email: 'ue@',
    members: ['Steffi', 'Tim']
  },{
    name: 'Verein',
    email: 'verein@',
    members: ['alle Mitglieder des Vereins']
  },{
    name: 'Vereinsvorstand',
    email: 'verein-vorstand@',
    members: ['Dini', 'Simone', 'Tim P., Fabian F.', 'Benjamin', 'Lukas']
  },{
    name: 'Website',
    email: 'webseite@',
    members: ['Benjamin', 'Daniel S.', 'Heiko', 'Jan B.']
  }
];

const uas = [
  {
    name: 'Absolventen',
    members: ['Nadja', 'Kevin', 'Jörn'],
    email: 'ua-absolventen@'
  },{
    name: 'Fachbereichsrat',
    members: ['Jannis', 'Claas'],
    email: 'fbr@',
    allmail: 'fbrat@informatik.tu-darmstadt.de'
  },{
    name: 'Fachschaftsrat',
    members: ['Claas', 'Nadja', 'Jannis', 'Dini', 'Janika', 'Heiko', 'Tobias', 'Tim', 'Stefan'],
    email: 'fsr@'
  },{
    name: 'LuSt',
    members: ['Tim', 'Heiko', 'Stefan'],
    email: 'lust@',
    allmail: 'lust@informatik.tu-darmstadt.de'
  },{
    name: 'Mentorensystem',
    members: ['Jannis', 'Michael R.'],
    email: 'ua-mentorensystem@'
  },{
    name: 'OSA',
    members: ['Benjamin', 'Julian', 'Claas'],
    email: 'osa@'
  },{
    name: 'QSL',
    members: ['Janika', 'Daniel', 'Dennis', 'Mark'],
    email: 'sg-verwendung@',
    allmail: 'qsl@informatik.tu-darmstadt.de'
  },{
    name: 'Vernetzung / Studentische Selbstverwaltung',
    members: ['Tim', 'Dini', 'Janika', 'Fabian D.', 'Christian A.', 'Tobias H.', 'Dennis', 'Lukas U.'],
    email: 'vernetzung@'
  }
]

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
    activities: activities,
    uas: uas
  }
}).$mount('#app');



import LandingPage from './views/LandingPage.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import Dashboard from './views/dashboard/Dashboard.vue'
import Profile from './views/profile/Profile.vue'
import AddOffer from './views/offers/AddOffer.vue'
import MenageOffer from './views/offers/MenageOffer.vue'
import EditOffer from './views/offers/EditOffer.vue'
import Candidates from './views/candidates/Candidates.vue'
import CandidatesList from './views/candidates/CandidatesList.vue'



export const routes =[
  { path : '/',  name: 'landingPage', component: LandingPage},
  { path: '/register', name: 'register', component: Register},
  { path: '/login', name: 'login', component: Login },
    { path: '/dashboard', name: 'dashboard', component: Dashboard,  meta: { requiresAuth: true } },
    { path: '/profile', name: 'profile', component: Profile,  meta: { requiresAuth: true } },
    { path: '/addOffer', name: 'addOffer', component: AddOffer,  meta: { requiresAuth: true } },
    { path: '/menageOffer', name: 'menageOffer', component: MenageOffer,  meta: { requiresAuth: true } },
    { path: '/edit/:id', name: 'editOffer', component: EditOffer,  meta: { requiresAuth: true } },
    { path: '/candidates', name: 'candidates', component: Candidates,  meta: { requiresAuth: true } },
    { path: '/candidatesList', name: 'candidatesList', component: CandidatesList,  meta: { requiresAuth: true } },

     {path: '*', redirect: {name: 'landingPage'}}
];



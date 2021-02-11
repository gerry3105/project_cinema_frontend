import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import TheaterList from '../views/TheaterList.vue'
import UserAccount from '../views/UserAccount.vue'
import MovieDetail from '../views/MovieDetail.vue'
import TheaterDetail from '../views/TheaterDetail.vue'
import NowPlayingMovies from '../views/NowPlayingMovies.vue'
import OpeningThisWeekMovies from '../views/OpeningThisWeekMovies.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { guest: true}

  },
  {
    path: '/login',
    name: 'Login',
    component: Login, 
    meta: { guest: true}
  },
  {
    path: '/movie_detail',
    name: 'MovieDetail',
    component: MovieDetail,
    meta: {requiresAuth: true},
  },
  {
    path: '/now_playing_movies',
    name: 'NowPlayingMovies',
    component: NowPlayingMovies,
    meta: {requiresAuth: true},
  },
  {
    path: '/opening_whis_week_movies',
    name: 'OpeningThisWeekMovies',
    component: OpeningThisWeekMovies,
    meta: {requiresAuth: true},
  },
  {
    path: '/theater_detail',
    name: 'TheaterDetail',
    component: TheaterDetail,
    meta: {requiresAuth: true},
  },
  {
    path: '/theater_list',
    name: 'TheaterList',
    component: TheaterList,
    meta: {requiresAuth: true},
  },
  {
    path: '/user_account',
    name: 'UserAccount',
    component: UserAccount,
    meta: {requiresAuth: true},
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import router from '../router'

// mutations to alter the state of the app as per the actions
export default {
  SET_NOW_PLAYING_MOVIES(state, payload){
    state.now_playing_movies = payload
  },
  SET_OPENING_THIS_WEEK_MOVIES(state, payload){
    state.opening_this_week_movies = payload
  },
  SET_CATEGORIES(state, payload){
    state.categories = payload
  },
  SET_THEATERS(state, payload){
    state.theaters = payload
  },
  SET_SCREENINGS(state, payload){
    state.screenings = payload
  },
  SET_SEATS(state, payload){
    state.seats = payload
  },
  SET_USER(state, payload){
    state.user_token = payload
  },
  SET_USER_INFO(state, payload){
    state.user_info = payload
  },
  LOG_OUT(state, payload){
    state.user_token = payload
    router.push('/login')
  }
}
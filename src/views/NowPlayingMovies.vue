<template>
<transition name='view' appear enter-active-class="animate__animated animate__fadeIn animate__dealy__slower" leave-active-class="animate__animated">
  <div>
    <BaseHeader/>
  <div class="container mt-5">
    <div class="container row">
        <h1 style="color: white">Movies Currently Showing:</h1>
    </div>
    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4" v-for="(movie, index) in NowPlayingMovies" :key="index">
        <div class="card h-100">
          <img class="card-img-top" v-bind:src="'http://localhost:8000' + movie.image" alt="movie-image">
          <div class="card-body">
            <h4 class="card-title">{{movie.title}}</h4>
            <p class="card-text">{{movie.description.slice(0, 100)}}......</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-secondary" @click="$router.push({path: `/movie_detail/${movie.id}`})">More Details</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</transition>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
export default {
  name: "NowPlayingMovies",
  components: {
    BaseHeader
  }, 
  computed: {
    NowPlayingMovies() {
      return this.$store.getters.getNowPlayingMovies
    }
  }
}
</script>
<style>
  
</style>
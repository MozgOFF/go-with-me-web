<template>
  <div class="col-lg-9">
    <h3>Недавно добавленные</h3>
    <recently-created/>
    <h2>События</h2>
    <div class="row">
      <Loader
          v-if="loadingEvents"
      />
      <Poster
          v-else="events"
          v-for="event in events.data.results"
          v-bind:event="event"
      />
    </div>
  </div>
</template>

<script>
    import Navigation from "./Navigation";
    import RecentlyCreated from "./RecentlyCreated";
    import Poster from "./Poster"
    import Loader from './Loader.vue'
    import Categories from './Category.vue'

    const axios = require('axios');

    export default {
        name: 'MainBody',
        components: {RecentlyCreated, Navigation, Poster, Loader, Categories},

        data() {
            return {
                events: {}, loadingEvents: true,
                categories: {}, loadingCategories: true,
                // {id: 1, title: 'Поход в горы 1', date: '11-04-2020', img: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_348.jpg'},
            }
        },

        mounted() {
            axios.get('http://34.90.109.115/api/v1/event/all/', {
                // params: {
                //     api_key: '23d691ff8bed37cf9cf63c5ceb5445eb',
                //     language: 'ru-RU'
                // }
            }).then(response =>
                    (this.events = response),
                (this.loadingEvents = false)
            );

            axios.get('http://34.90.109.115/api/v1/event/categories', {
            }).then(response =>
                    (this.categories = response),
                (this.loadingCategories = false)
            )
            // fetch('https://api.themoviedb.org/3/movie/now_playing')
            //     .then(response => response.json())
            //     .then(json => console.log(json))
        }
    }
</script>
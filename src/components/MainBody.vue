<template>
  <div>
    <navigation class="main-nav"
      v-on:search-by-key-word="searchByKeyWord"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="sticky-top">
            <h1 class="my-4">Категории</h1>
            <div class="list-group">
              <a v-on:click.prevent="filterByCategoryClear" id="all_categories" href="#"
                 class="list-group-item">Все категории</a>
              <Loader
                  v-if="loadingCategories"
              />
              <Categories
                  v-else="!loadingCategories"
                  v-for="category in categories.data"
                  v-bind:category="category"
                  v-on:filter-by-category="filterByCategory"
              />
            </div>
          </div>
        </div>
        <!--<router-view/>-->
        <div class="col-lg-9">
          <h3>Недавно добавленные</h3>
          <recently-created/>
          <h2>События</h2>
          <div class="row">
            <Loader
              v-if="loadingEvents"
            />
            <Poster
                v-else-if="!loadingEvents"
                v-for="event in events.data.results"
                v-bind:event="event"
            />
          </div>
        </div>
      </div>
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
    const baseUrl = 'http://34.90.109.115';

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
        },
        methods: {
            filterByCategory(id) {
                axios.get('http://34.90.109.115/api/v1/event/all/', {
                    params: {
                        categories: id,
                    }
                }).then(response =>
                    (this.events = response),
                    (this.loadingEvents = false)
                )
              },
            filterByCategoryClear() {
                axios.get('http://34.90.109.115/api/v1/event/all/', {
                }).then(response =>
                    (this.events = response),
                    (this.loadingEvents = false)
                )
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-nav {
    margin-bottom: 5%;
  }
</style>

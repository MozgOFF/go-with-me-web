<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="sticky-top">
            <h1 class="my-4">Фильтр</h1>
            <div class="list-group">
              <div class="card">
                <article class="card-group-item">
                  <header class="card-header"><h6 class="title">Категории</h6></header>
                  <div class="filter-content">
                    <div class="list-group list-group-flush">
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
                </article>
                <article class="card-group-item">
                  <header class="card-header"><h6 class="title">Цена события</h6></header>
                  <div class="filter-content">
                    <div class="card-body">
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label>Мин</label>
                          <input type="number" class="form-control" id="inputEmail4" placeholder="$0">
                        </div>
                        <div class="form-group col-md-6 text-right">
                          <label>Макс</label>
                          <input type="number" class="form-control" placeholder="$1,0000">
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <!--<router-view/>-->
        <div class="col-lg-9">
          <h3>Недавно добавленные</h3>
          <div class="row">
            <Loader
                v-if="loadingEventsStartSoon"
            />
            <RecentlyCreated
                v-for="card in eventsStartSoon.results"
                v-bind:event="card"
            />
          </div>
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
    import RecentlyCreated from "../components/RecentlyCreated";
    import Poster from "../components/Poster"
    import Loader from '../components/Loader.vue'
    import Categories from '../components/Category.vue'

    const axios = require('axios');
    const baseUrl = 'http://34.90.109.115';

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        }
    };

    let data = {
        'HTTP_CONTENT_LANGUAGE': self.language
    };

    export default {
        name: 'MainBody',
        components: {RecentlyCreated, Poster, Loader, Categories},
        data() {
            return {
                events: {}, loadingEvents: true,
                eventsStartSoon: {}, loadingEventsStartSoon: true,
                categories: {}, loadingCategories: true,
                // {id: 1, title: 'Поход в горы 1', date: '11-04-2020', img: 'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_348.jpg'},
            }
        },
        mounted() {
            axios.get('http://34.90.109.115/api/v1/event/all/', {
            }, config).then(response =>
                (this.events = response),
                (this.loadingEvents = false)
            );
            axios.get('http://34.90.109.115/api/v1/event/categories', {
            }, config).then(response =>
                (this.categories = response),
                (this.loadingCategories = false)
            );
            axios.get('http://34.90.109.115/api/v1/event/all/', {
                params: {
                    ordering: 'start'
                }
            }, config).then(response =>
                    (this.eventsStartSoon = response.data),
                    (this.loadingEventsStartSoon = false)
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
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

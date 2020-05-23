<template>
  <div>
    <h1></h1>
    <div class="container">
      <!-- Page Heading -->
      <h1 class="my-4">Результаты по запросу:
        <small>{{ query }}</small>
      </h1>

      <div class="row">
        <Loader
          v-if="loadingEvents"
        />
        <h2 v-if="!loadingEvents && !searchingEvents.results.length > 0">Результатов не найдено!</h2>
        <SearchItem
          v-for="item in searchingEvents.results"
          v-bind:searchItem="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import SearchItem from "../components/SearchItem"
    import Loader from "../components/Loader"

    const axios = require('axios');
    const baseUrl = 'http://34.90.109.115';

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };

    let data = {
        'HTTP_CONTENT_LANGUAGE': self.language
    };

    export default {
        name: 'SearchEvents',
        components: {Loader, SearchItem,},
        props: {
            query: {
                type: String,
                required: true
            },
        },
        data() {
            return {
                searchingEvents: {}, loadingEvents: true,
                query: ''
            }
        },
        mounted() {
            axios.get('http://34.90.109.115/api/v1/event/all/', {
                params: {
                    search: this.query,
                }
            }, config).then(response =>
                (this.searchingEvents = response.data),
                (this.loadingEvents = false)
            );
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <h1>{{ query }}</h1>
    {{ searchingEvents }}
  </div>
</template>

<script>
    import Poster from "../components/Poster"

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
        components: {Poster,},
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
            axios.get('http://34.90.109.115/api/v1/event/all/', {}, config).then(response =>
                    (this.searchingEvents = response),
                (this.loadingEvents = false)
            );
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

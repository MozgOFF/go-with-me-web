<template>
  <div class="container">
    <h1 class="my-4">
      <small>{{ $route.params.categoryId }}</small>
    </h1>
    <loader
      v-if="loadingEvents"
    />
    <EventsByCategoryItem
        v-else-if="!loadingEvents"
        v-for="item in eventsList.results"
        v-bind:event="item"
    />
  </div>
</template>

<script>
    import EventsByCategoryItem from '../components/EventsByCategoryItem.vue'
    import Loader from '../components/Loader.vue'

    const axios = require('axios');

    export default {
        name: "EventsByCategory",
        components: { EventsByCategoryItem, Loader },
        data() {
            return {
                eventsList: {}, loadingEvents: true,
            }
        },
        mounted() {
            axios.get('http://34.90.109.115/api/v1/event/all/', {
                params: {
                    categories: this.$route.params.categoryId,
                }
            }).then(response =>
                (this.eventsList = response.data),
                (this.loadingEvents = false)
            );
        }
    }
</script>

<style scoped>

</style>
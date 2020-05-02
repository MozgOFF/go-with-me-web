<template>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a><img class="card-img-top" v-bind:src="event.img" alt="Тут будет картинка"></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{{ event.title }}</a>
          </h4>
          <h5>{{ event.price }}</h5>
          <p class="card-text">{{ event.description }}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Начало: {{ event.start | formatDateFromNow }}</small>
        </div>
      </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        name: "Poster",
        props: {
            event: {
                type: Object,
                required: true
            }
        }
    }

</script>

<style scoped>

</style>
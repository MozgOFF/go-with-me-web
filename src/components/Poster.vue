<template>
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="card h-100">
        <a><img class="card-img-top" v-bind:src="'http://34.90.109.115' + event.images[0].image" alt="Тут будет картинка"></a>
        <div class="card-body">
          <h4 class="card-title">
            <a v-bind:href="'/details/'+ event.id" >{{ event.title }}</a>
          </h4>
          <h5>Стоимость участия: {{ event.price }}</h5>
          <p class="card-text">{{ event.description }}</p>
        </div>
        <iframe
            frameborder="0" style="border:0"
            v-bind:src="'https://maps.google.com/maps?q=' + event.latitude + ',' + event.longitude + '&hl=es&output=embed'">
        </iframe>
        <div class="card-footer">
          <small class="text-muted">Начало: {{ event.start | formatDateFromNow }}</small>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Poster",
        props: {
            event: {
                type: Object,
                required: true
            },
        },
    }
</script>

<style scoped>

</style>
<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <iframe
            frameborder="0" style="border:0"
            width="100%"
            height="200px"
            v-bind:src="'https://maps.google.com/maps?q=' + event.latitude + ',' + event.longitude + '&output=embed'">
        </iframe>
      </div>
      <div class="col-md-5">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
        <p class="small">Начало {{ event.start }}</p>
        <p class="small">Конец {{ event.end }}</p>
        <a class="btn btn-primary" v-bind:href="'/details/'+ event.id">Подробнее</a>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
    export default {
        name: "EventsByCategoryItem",
        props: {
            event: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>
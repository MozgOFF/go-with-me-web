<template>
  <div class="col-lg-6 mb-4">
    <div class="card h-100">
      <a v-bind:href="'/details/'+ searchItem.id"><img class="card-img-top" v-bind:src="'http://34.90.109.115' + searchItem.images[0].image" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{ searchItem.title }}</a>
        </h4>
        <p class="card-text">{{ searchItem.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchItem",
        props: {
            searchItem: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
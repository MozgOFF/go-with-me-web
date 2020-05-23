<template>
  <div class="media mb-4">
    <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
    <div class="media-body">
      <h5 class="mt-0">{{ Comment.author.first_name }} {{ Comment.author.last_name }}</h5>
      {{ Comment.content }}
    </div>
    <small>{{ Comment.created }}</small>
  </div>
</template>

<script>
    export default {
        name: "Comment",
        props: {
            Comment: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
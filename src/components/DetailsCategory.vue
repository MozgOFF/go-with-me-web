<template>
  <div>
    <a v-bind:href="'/category/'+ categoryName.id">{{ categoryName.name }}</a>
  </div>
</template>

<script>
    export default {
        name: "DetailsCategory",
        props: {
            categoryName: {
                type: Object,
                required: true
            },
        }
    }
</script>

<style scoped>

</style>
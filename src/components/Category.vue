<template>
  <div>
    <a href="#" v-on:click.prevent="$emit('filter-by-category', category.id)" class="list-group-item">{{ category.name }}</a>
  </div>
</template>

<script>
    export default {
        name: "Category",
        props: {
            category: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
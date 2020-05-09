<template>
  <div id="app">
    <!--<MainBody/>-->
    <navigation class="main-nav"/>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import MainBody from './views/MainBody.vue'

export default {
  name: 'App',
  components: { MainBody, Navigation },
}
</script>

<style scoped>
  .main-nav {
    margin-bottom: 5%;
  }
</style>

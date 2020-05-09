<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Кто Со Мной?</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Искать ...">
          <span class="input-group-btn">
              <button class="btn btn-secondary" type="button" v-on:click.prevent="$emit('search-by-keyword', keyword)">Найти</button>
            </span>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive">

          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Домашняя
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Профиль</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
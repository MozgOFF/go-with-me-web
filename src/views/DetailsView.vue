<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="mt-4">{{ details.title }}</h1>
          <p class="lead">
            Просмотров:
            <span class="badge">{{ details.view_counter }}</span>
          </p>
          <hr>
          <p class="lead">
            <img v-bind:src="'http://34.90.109.115' + details.author.image.image" alt="Avatar" class="avatar">
            <a href="#">{{details.author.last_name}} {{ details.author.first_name }}</a>
          </p>
          <hr>
          <img class="img-fluid rounded" v-bind:src="'http://34.90.109.115' + details.images[0].image" alt="">
          <hr>
          <p class="lead">{{ details.description }}</p>
          <!--<p>{{ details.description }}</p>-->
          <hr>
          <div class="container">
            <!--<profile-popup/>-->
            <iframe
                frameborder="0" style="border:0"
                width="100%"
                height="300px"
                v-bind:src="'https://maps.google.com/maps?q=' + details.latitude + ',' + details.longitude + '&output=embed'">
            </iframe>
          </div>
          <hr>
          <div class="card my-4">
            <h5 class="card-header">Оставить комментарий:</h5>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <textarea class="form-control" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Опубликовать</button>
              </form>
            </div>
          </div>
          <div class="media mb-4">
            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
            <div class="media-body">
              <h5 class="mt-0">Комментатор 1</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
          <div class="media mb-4">
            <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
            <div class="media-body">
              <h5 class="mt-0">Комментатор 2</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

              <div class="media mt-4">
                <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
                <div class="media-body">
                  <h5 class="mt-0">Комментатор 3</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
              <div class="media mt-4">
                <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="">
                <div class="media-body">
                  <h5 class="mt-0">Комментатор 4</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card my-4 sticky-top">
            <h5 class="card-header">Категории</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg ">
                  <ul class="list-unstyled mb-0">
                    <li>
                      <details-category
                          v-for="category in details.categories"
                          v-bind:categoryName="category"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="card my-4 ">
            <h5 class="card-header">Детали</h5>
            <div class="card-body">
              <p>Стоимость участия: {{ details.price }}</p>
              <p>Начало: {{ details.start}}</p>
              <p>Конец: {{ details.end }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import DetailsCategory from '../components/DetailsCategory.vue'
    import ProfilePopup from '../components/ProfilePopup.vue'

    const axios = require('axios');

    let config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*',
        }
    };

    export default {
        name: "Details",
        components: { DetailsCategory, ProfilePopup },
        data() {
            return {
                details: {}, loadingDetails: true,
            }
        },
        mounted() {
            axios.get("http://34.90.109.115/api/v1/event/detail/" + this.$route.params.id, {
            }, config).then(response =>
                  (this.details = response.data),
                  (this.loadingDetails = false)
            );
        }
    }
</script>



<style scoped>
  .avatar {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
</style>
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
            <a href="#"> {{ details.author.first_name }} {{details.author.last_name}}</a>
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
                <button disabled type="submit" class="btn btn-primary">Опубликовать</button>
              </form>
            </div>
          </div>
        <Comment
            v-if="comments.length > 0"
            v-for="item in comments"
            v-bind:comment="item"
        />
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
              <p>Стоимость: {{ details.price }}</p>
              <p>Начало: {{ details.start }}</p>
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
    import Comment from '../components/Comments.vue'

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
        components: { DetailsCategory, ProfilePopup,Comment },
        data() {
            return {
                details: {}, loadingDetails: true,
                comments: {},
            }
        },
        mounted() {
            axios.get("http://34.90.109.115/api/v1/event/detail/" + this.$route.params.id, {
            }, config).then(response =>
                  (this.details = response.data),
                  (this.loadingDetails = false)
            );
            axios.get("http://34.90.109.115/api/v1/event/detail/" + this.$route.params.id + "/comments/", {
            }, config).then(response =>
                  (this.comments = response.data),
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
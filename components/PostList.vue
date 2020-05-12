<template>
  <div >
    <section class="posts-list" v-for="post in posts" :key="post.id">
      <nuxt-link :to="`/posts/${post.id}`">
      <article >
        <div>
          <div class="post-content">
            <img class="post-thumbnail" :src="post.thumbnail"/>
            <div class="post-content">
              <h1>{{ post.title }}</h1>
              <p>{{ post.content}}</p>
            </div>
          </div>

        </div>

    </article>
      </nuxt-link>
      <button><router-link :to="`/editPost/${post.id}`">Editar Post</router-link></button>
     <button @click="deletePost(post)">Eliminar Post</button>
    </section>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name: 'PostList',
    props:{
      posts:{
        type:Array
      } 
    },
    methods:{
      ...mapActions(['deletePost'])
    }
  }
</script>

<style  scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 50%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
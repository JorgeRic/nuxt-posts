<template>
  <div class="home-page">
    
  <h1>Home Page</h1>
    <!-- <form @submit.prevent="addPost(post)">
      <label>title</label>
        <input class="" type="text" v-model="post.title">
      <label>author</label>
        <input class="" type="text" v-model="post.author">
      <label>thumbnail</label>
        <input class="" type="text" v-model="post.thumbnail">
      <label>content</label>
        <textarea rows="10" v-model="post.content"></textarea>
      <button class="" type="submit">Agregar Post</button>
    </form> -->
  <nuxt-link to="/createPost">Create New Post</nuxt-link>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  // import inputCreatePost from '@/components/InputCreatePost.vue'

export default {
  data(){
    return{
      // post:{
      //   title: '',
      //   author: '',
      //   thumbnail: '',
      //   content: ''
      // }
    }
  },
    components: {
  //  ...mapState(['loadedPosts'])
  },
    methods:{
    // ...mapActions(['addPost'])
  },
    computed:{
  }
}

</script>

<style scoped>
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

.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-thumbnail {
  width: 500%;
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

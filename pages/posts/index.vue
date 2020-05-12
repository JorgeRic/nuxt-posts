<template>
  <div class="home-page">
    
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList 
    :posts = "loadedPosts"
    />
  </div>
</template>

<script>

import {mapGetters, mapState, mapMutations} from 'vuex'
import PostList from '@/components/PostList.vue'
export default {
  components: {
    PostList
  },
  methods:{

  },
  computed:{
    ...mapGetters(['loadedPosts'])
     
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

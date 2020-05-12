<template>
  <div>
    <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <img class="post-thumbnail" :src="post.thumbnail"/>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ post.updatedDate }}</div>
        <div class="post-detail">Written by {{ post.author }}</div>
      </div>
      <p class="post-content">{{ post.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {db} from '@/plugins/firebase.js'
  export default {

  fetch({store, params}){
      return db.collection('posts').doc(params.id).get()
        // console.log(store.commit('setTarea', post)
      .then(doc => {
        if(doc.exists){
          let post = doc.data()
          post.id = doc.id
          return store.commit('setPost', post)
        }
      })
      .catch(Error => {
        consol.log(error)
      })
    },
  computed:{
      post:{
        get(){
          return{
            author: this.$store.state.post.author,
            title: this.$store.state.post.title,
            content: this.$store.state.post.content,
            thumbnail: this.$store.state.post.thumbnail,
            id: this.$store.state.post.id
          }
        }
      }
    },
  
 
};
</script>

<style scoped>
.post-thumbnail {
  width: 50%;
  height: 200px;
  background-position: center;
  background-size: cover;
}
</style>
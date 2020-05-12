<template>
  <div >
  <h1>Edit Post</h1>
    <form @submit.prevent="editPost(post)">
      <label>title</label>
        <input class="" type="text" v-model="post.title">
      <label>author</label>
        <input class="" type="text" v-model="post.author">
      <label>thumbnail</label>
        <input class="" type="text" v-model="post.thumbnail">
      <label>content</label>
        <textarea rows="10" v-model="post.content"></textarea>
        <Button type="submit" class="button">Editar</Button>
      
    </form>
  </div>
</template>

<script>
import {db} from '@/plugins/firebase.js'
import {mapActions} from 'vuex'
import Button from '@/components/Button'

export default {
  components:{
    Button
  },
  fetch({store, params}){
      return db.collection('posts').doc(params.id).get()
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
    methods:{
      ...mapActions(['editPost'])
    }

}

</script>
<style>

</style>



<template>
  <div >
  <h1>Create New Post</h1>
    <form @submit.prevent="addPost(post)">
      <label>title</label>
        <input class="" type="text" v-model="post.title">
      <label>author</label>
        <input class="" type="text" v-model="post.author">
      <label>thumbnail</label>
        <input class="" type="text" v-model="post.thumbnail">
      <label>content</label>
        <textarea rows="10" v-model="post.content"></textarea>
      
      <Button type="submit">Añadir Post</Button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Button from '@/components/Button'

export default {
  components: {
    Button

  },
  data(){
    return{
      post:{
        title: '',
        author: '',
        thumbnail: '',
        content: ''
      }
    }
  },
    methods:{
    ...mapActions(['addPost'])
  },
    computed:{
  }
}

</script>
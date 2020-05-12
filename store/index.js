import Vuex from "vuex";
import {db} from '@/plugins/firebase.js'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      post:''
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      setPost(state, post){
        state.post = post;
      },
      addPost(state, post){
        state.loadedPosts.push(post)
      },
      deletePost(state, post){
        const index = state.loadedPosts.findIndex(elem => elem.id === post.id)
        state.loadedPosts.splice(index, 1)
      },
      updatePost(state, editedPost){
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      }
    },
    actions: {
    
      async nuxtServerInit({commit}, {req}){
        await db.collection('posts').get()
        .then(query => {
          const loadedPosts = []
          query.forEach(element => {         
            let post = element.data()
            post.id = element.id
            loadedPosts.push(post)
          });
          return commit('setPosts', loadedPosts)
        })
        .catch(error => console.log(error))
      },
      async addPost({commit}, post){
        try{
          const doc = await db.collection('posts').add({
            title: post.title,
            author: post.author,
            thumbnail: post.thumbnail,
            content: post.content
          })
          console.log(doc, 'Hola')
          commit('addPost', {title: doc.title, author: doc.author, thumbnail: doc.thumbnail, content: doc.content, id: doc.id})
          this.app.router.push('/posts')
        }
        catch(error) {
          console.log(error)
        }
      },
      deletePost({commit}, post){
         db.collection('posts').doc(post.id).delete()
        .then(()=>{
          commit('deletePost', post)
        })
        .catch(error=> {
          console.log(error)
        })
      },
      editPost({commit}, post){
        db.collection('posts').doc(post.id).update({
          title: post.title,
          author: post.author,
          thumbnail: post.thumbnail,
          content: post.content
        })
        .then(()=> {
          commit('updatePost', post)
          this.app.router.push('/posts')
        })
        .catch(error => {
          console.log(error)
        })
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;


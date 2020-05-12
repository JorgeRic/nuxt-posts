<template>
  <div>
    <nav class="navbar">
      <ul class="">
        <li class="">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="">
          <nuxt-link to="/posts">Posts</nuxt-link>
       </li>
      </ul>
    </nav>
  </div>
</template>


<script>
  export default {
    name:'Navbar'
  }
</script>

<style scoped>
.navbar{
  background-color: aqua;
  width: 100%;
  height: 200px;
}
</style>



<template>
  <div class="home">

    <ul class="sidebar">
      <li v-for="post in getAllPosts" :key="post.id">
        {{post.id}}.
        <router-link :to='/post/+ post.id'>{{ post.title }}</router-link>
      </li>
    </ul>


  </div>
</template>

<script>
// @ is an alias to /src
import TestComponent from '@/components/TestComponent.vue'

export default {
  name: 'home',
  components: {
    TestComponent
  },
  data () {
    return {
      
    }
  },
  created() {
   
  },
  computed: {
    getAllPosts() {
      return this.$store.getters.getPosts
    }
  } 
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 300px;
  text-align: left;
  li {
    margin: 10px;
  }
}
</style>
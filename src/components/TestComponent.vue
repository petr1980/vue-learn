<template>
  <div class="hello">
    <ul class="sidebar">
      <li v-for="post in getAllPosts" :key="post.id">
        {{post.id}}.
        <router-link :to='/post/+ post.id'>{{ post.title }}</router-link>
      </li>
    </ul>
    <div class="content">
      <div class="post" v-if="getPost">
        <h1 class="post__title">{{ getPost.title }}</h1>
        <p class="post__body">{{ getPost.body }}</p>
        <p class="post__id">{{ getPost.id }}</p>
      </div>
    </div>


  </div>
</template>

<script>


export default {
  name: 'TestComponent',
  props: {
    id: String
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
    },
    getPost() {
      return this.$store.getters.getPosts.find( post => post.id.toString() === this.id)
    }
  }

}
</script>

<style scoped lang="scss">
.hello {
  display: flex;
}
.sidebar {
  width: 300px;
  text-align: left;
  li {
    margin: 10px;
  }
}
</style>

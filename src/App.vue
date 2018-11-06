<template>
  <div id="app">
    <header class="header">
      <div id="nav" class="container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">login</router-link>
        <router-link to="/registration">registration</router-link>
        <div class="user">Hello Peter</div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

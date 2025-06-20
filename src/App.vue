<script setup>
import Nav from './view/Nav.vue'
</script>

<template>
  <header>
    <Nav />
  </header>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-bottom: 1rem;
}
</style>

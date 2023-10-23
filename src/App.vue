<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
      <navigation-bar />
  </header>
  <main>
    <b-container fluid="false">
      <router-view />
    </b-container>
  </main>
  <footer>
    <footer-bar />
  </footer>
</template>

<style scoped>

</style>

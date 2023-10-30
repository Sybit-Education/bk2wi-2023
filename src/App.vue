<script setup lang="ts">
import { RouterView } from 'vue-router'
<<<<<<< HEAD
import type LocaleeHeaderVue from './components/LocaleeHeader.vue';


</script>

<template>
  <LocaleeHeaderVue/>
  <RouterView/>
</template>

<style>
=======
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
>>>>>>> f30e627f7a64d74acf267c40967c4e5a9f22b7f4

</style>

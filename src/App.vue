<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
      <navigation-bar />
  </header>
  <main>
    <b-container fluid="false">
      <b-row>
        <b-col cols="4">
          Filter
        </b-col>
        <b-col>
          <router-view />
        </b-col>
        
      </b-row>
    </b-container>
  </main>
  <footer>
    <footer-bar />
  </footer>
</template>

<style scoped>
main {
  min-height: calc(100vh - 20px);
}
</style>

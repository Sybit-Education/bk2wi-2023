<script setup lang="ts">
import { RouterView } from 'vue-router'
import LocaleeHeader from "./components/LocaleeHeader.vue"
import FilterSidebar from './components/FilterSidebar.vue';
import HomeContent from './components/HomeContent.vue';
</script>

<template>
  
  <LocaleeHeader/>

  
  <RouterView/>
  
</template>

<style>
  
  *{
  font-family: Arial, Helvetica, sans-serif;
  }

  .container{
    
  }


</style>

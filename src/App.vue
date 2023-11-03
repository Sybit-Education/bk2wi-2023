<script setup lang="ts">
import { RouterView } from 'vue-router'
import LocaleeHeader from "./components/LocaleeHeader.vue"
import { useEventItemStore } from './stores/eventItem';


const storeEvents = useEventItemStore()
storeEvents.load()


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

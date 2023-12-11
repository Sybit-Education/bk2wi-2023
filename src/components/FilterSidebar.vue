<template>
  <BButton @click="click">Kategorie</BButton>
  <BOffcanvas v-model="show" >

    <BNav vertical class="w-25">
      <BNavItem to="/">Home</BNavItem>
      <BNavItem to="/verleih">Verleihe</BNavItem>
      <BNavItem to="/events">Events</BNavItem>
      <BNavItem to="/about">Über uns</BNavItem>
    </BNav>




  </BOffcanvas>

</template>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)

const click = () => {
  show.value = !show.value
}
</script>
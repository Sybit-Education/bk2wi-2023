<script setup lang="ts">
import VerleihList from '../components/verleih/VerleihList.vue'

</script>

<template>

  <div id="verleihList">
    <BBreadcrumb>
      <BBreadcrumbItem to="/"> Home </BBreadcrumbItem>
      <BBreadcrumbItem to="/verleih"> Verleihe </BBreadcrumbItem>
    </BBreadcrumb>
    
    <verleih-list />
  </div>

</template>
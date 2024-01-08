<script setup lang="ts">
import HomeContent from '@/components/HomeContent.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'
import SearchBar from '@/components/SearchBar.vue'
import type { BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'

const searchQuery = ref('')
const entries = ref([ "test", '1234', '567'])

</script>

<template>
  <BContainer>
      <!-- <BCol lg="3">
        <FilterSidebar />
      </BCol> -->
          <SearchBar :searchQuery="searchQuery" @searchQuery="searchQuery = $event" />
          <HomeContent :entries="entries" :foundEntry="searchQuery" />
  </BContainer>   
</template>

<style scoped>
.col {
  border: 1px solid;
}

.col-lg-3 {
  border: 1px solid;
}
</style>

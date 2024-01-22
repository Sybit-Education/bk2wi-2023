<script setup lang="ts">
import HomeContent from '@/components/HomeContent.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useSearchStore } from '@/stores/search';
import { ref } from 'vue'

const searchList = useSearchStore().getAll
const searchQuery = ref('')
const entries = ref([ "test", '1234', '567'])

</script>

<template>
  <BContainer>
      <!-- <BCol lg="3">
        <FilterSidebar />
      </BCol> -->
      <div>
          <SearchBar :search-list="searchList" @searchQuery="searchQuery = $event" />
          <HomeContent :entries="entries" :foundEntry="searchQuery" />
      </div>
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

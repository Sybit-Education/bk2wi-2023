<script setup lang="ts">
  import HomeContent from '@/components/HomeContent.vue';
  import FilterSidebar from '@/components/FilterSidebar.vue';
  import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
  <main>



    <SearchBar/>
    <FilterSidebar/>
    <HomeContent/>
  </main>
</template>

<script setup lang="ts">
import BarList from '../components/bar/BarList.vue'

</script>

<template>

<BContainer>
  <BRow>
    <!-- <BCol>
      <FilterSidebar />
    </BCol > -->
      <!-- <BCol>
        <SearchBar :searchQuery="searchQuery" @searchQuery="searchQuery = $event" />
    </BCol> -->
    <!-- <BCol>
      icon
    </BCol > -->
  </BRow>
  <BRow>
<HomeContent :entries="entries" :foundEntry="searchQuery" />
  </BRow>
</BContainer>

</template>
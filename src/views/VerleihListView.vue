<script setup lang="ts">
import VerleihList from '../components/verleih/VerleihList.vue'

</script>

<template>

<BContainer>
  <BRow>
    <BCol>
      <FilterSidebar />
    </BCol >
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
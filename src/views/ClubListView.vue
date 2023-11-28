<script setup lang="ts">
import ClubContent from '@/components/ClubContent.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'
import SearchBar from '@/components/SearchBar.vue'
import type { BRow } from 'bootstrap-vue-next'
import { defineComponent, ref } from 'vue'
import Vue from 'vue'

const searchQuery = ref('')
const entries = ref([ "test", '1234', '567'])

</script>

<template>

<BContainer>
  <BRow>
    <BCol lg = "4">
      <FilterSidebar />
    </BCol >
      <BCol lg = "4">
        <SearchBar :searchQuery="searchQuery" @searchQuery="searchQuery = $event" />
        
    </BCol>
    <BCol lg = "4">
      icon
    </BCol >
  </BRow>
  <BRow lg = "12">
<HomeContent :entries="entries" :foundEntry="searchQuery" />
  </BRow>
</BContainer>

</template>
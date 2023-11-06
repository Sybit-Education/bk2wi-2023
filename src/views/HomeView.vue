<script setup lang="ts">
import LocaleeHeader from '@/components/LocaleeHeader.vue'
import HomeSidebar from '@/components/FilterSidebar.vue'
import HomeContent from '@/components/HomeContent.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'
import SearchBar from '@/components/SearchBar.vue'
import type { BRow } from 'bootstrap-vue-next'
import { defineComponent, ref } from 'vue'
import ContentItem from '@/components/ContentItem.vue'
import Vue from 'vue'



const searchQuery = ref('')
const entries = ref([ "test", '1234', '567'])



</script>

<template>
  <main>
    
    <BContainer>
      <BRow>
        <BCol lg="3">
          <FilterSidebar />
        </BCol>
        <BCol>
          <BRow>
            <SearchBar :searchQuery="searchQuery" @searchQuery="searchQuery = $event" />
            <HomeContent :entries="entries" :foundEntry="searchQuery" />
          </BRow>
        </BCol>
      </BRow>
    </BContainer>

  </main>
</template>

<style scoped>
.col {
  border: 1px solid;
}

.col-lg-3 {
  border: 1px solid;
}
</style>

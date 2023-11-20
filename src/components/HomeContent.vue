<template>
    <div id="contentbox">
      
      <!--
      <div class="item entry" v-for="entry in filteredList()" :key="entry">
        {{entry}}
      </div>
      -->

      <ContentItem title="test"></ContentItem>

      <ContentItem></ContentItem>

      <EventList />

    </div>
</template>

<script setup lang="ts">
import ContentItem from './ContentItem.vue';
import EventList from './events/EventList.vue'

const props = defineProps(['foundEntry', 'entries'])

function filteredList() {
  console.log(props.entries)
  console.log(props.foundEntry)
  if (!props.foundEntry && props.foundEntry === '') {
    return props.entries
  }
  return props.entries.filter((entry: any) =>
    entry.toLowerCase().includes(props.foundEntry?.toLowerCase())
  )
}
</script>

<style scoped>
#contentbox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  border: 1px solid;
}
</style>

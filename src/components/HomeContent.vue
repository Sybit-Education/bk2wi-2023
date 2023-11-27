<template>
    <div>
      
      <!--
      <div class="item entry" v-for="entry in filteredList()" :key="entry">
        {{entry}}
      </div>
      -->

      <h2>Clubs</h2>
      <ClubList />

      
      <h2>Events</h2>
      <EventList />

    </div>
</template>

<script setup lang="ts">
import ContentItem from './ContentItem.vue';
import EventList from './events/EventList.vue'
import ClubList from './club/ClubList.vue'


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

</style>

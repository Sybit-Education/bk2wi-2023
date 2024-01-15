<template>
    <div>
      
      <!--
      <div class="item entry" v-for="entry in filteredList()" :key="entry">
        {{entry}}
      </div>
      -->

      <h2>Verleih</h2>
      <VerleihList/>

      
      
      <h2>Events</h2>
      <EventList />



      <h2>Bars</h2>
      <BarList />

    </div>
</template>

<script setup lang="ts">

import VerleihList from './verleih/VerleihList.vue'
import BarList from './bar/BarList.vue'
import EventList from './event/EventList.vue'


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

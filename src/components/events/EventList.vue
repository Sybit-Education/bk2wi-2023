<template>
    <b-card-group columns="true" class="my-3">
     <event-item
            v-for="event in eventList"
            :key="event.id"
            :event="event"
          />
    </b-card-group>
</template>
<script lang="ts">
import type EventItem from '@/models/EventItem';
import { useEventItemStore } from '@/stores/eventItem';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ProjectListView",
  computed: {
    ...mapState(useEventItemStore, {
      eventList: (store) => store.eventItemList as Array<EventItem>,
    }),
  }
})
</script>
<template>
    <b-card-group columns="true" class="my-3">
      <BPlaceholderWrapper  :loading="showLoadingSpinner">
        <template #loading>
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
        </template>    
        <event-item
                v-for="event in eventList"
                :key="event.id"
                :event="event"
              />
      </BPlaceholderWrapper>
    </b-card-group>
</template>
<script lang="ts">
import type EventItem from '../../models/EventItem';
import { useEventItemStore } from '../../stores/eventItem';
import { useLoadingStore } from '../../stores/loading';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ProjectListView",
  computed: {
    ...mapState(useEventItemStore, {
      eventList: (store) => store.eventItemList as Array<EventItem>,
    }),
    ...mapState(useLoadingStore, {
      showLoadingSpinner: (store) => store.showLoadingSpinner
    })
  }
})
</script>
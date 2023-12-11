<template>
    <b-card-group columns="true" class="my-3">
      <BPlaceholderWrapper  :loading="showLoadingSpinner">
        <template #loading>
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
        </template>    
        <bar-item
                v-for="bar in barList"
                :key="bar.id"
                :bar="bar"
              />
      </BPlaceholderWrapper>
    </b-card-group>
</template>
<script lang="ts">
import type BarItem from '@/models/BarItem'
import { useBarItemStore } from '@/stores/barItem';
import { useLoadingStore } from '@/stores/loading';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ProjectListView",
  computed: {
    ...mapState(useBarItemStore, {
      barList: (store) => store.barItemList as Array<BarItem>,
    }),
    ...mapState(useLoadingStore, {
      showLoadingSpinner: (store) => store.showLoadingSpinner
    })
  }
})
</script>
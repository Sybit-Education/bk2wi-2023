<template>
    <b-card-group columns="true" class="my-3">
      <BPlaceholderWrapper  :loading="showLoadingSpinner">
        <template #loading>
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
        </template>    
        <bars-item
                v-for="bars in verleihList"
                :key="bars.id"
                :verleih="bars"
              />
      </BPlaceholderWrapper>
    </b-card-group>
</template>
<script lang="ts">
import type VerleihItem from '@/models/VerleihItem'
import { useVerleihItemStore } from '@/stores/verleihItem';
import { useLoadingStore } from '@/stores/loading';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ProjectListView",
  computed: {
    ...mapState(useVerleihItemStore, {
      verleihList: (store) => store.verleihItemList as Array<VerleihItem>,
    }),
    ...mapState(useLoadingStore, {
      showLoadingSpinner: (store) => store.showLoadingSpinner
    })
  }
})
</script>
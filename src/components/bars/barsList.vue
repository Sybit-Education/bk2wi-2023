<template>
    <b-card-group columns="true" class="my-3">
      <BPlaceholderWrapper  :loading="showLoadingSpinner">
        <template #loading>
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
        </template>    
        <bars-item
                v-for="bars in clubList"
                :key="bars.id"
                :club="bars"
              />
      </BPlaceholderWrapper>
    </b-card-group>
</template>
<script lang="ts">
import type ClubItem from '@/models/ClubItem'
import { useClubItemStore } from '@/stores/clubItem';
import { useLoadingStore } from '@/stores/loading';
import { mapState } from 'pinia';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "ProjectListView",
  computed: {
    ...mapState(useClubItemStore, {
      clubList: (store) => store.clubItemList as Array<ClubItem>,
    }),
    ...mapState(useLoadingStore, {
      showLoadingSpinner: (store) => store.showLoadingSpinner
    })
  }
})
</script>
<template>
    <b-card-group columns="true" class="my-3">
      <BPlaceholderWrapper  :loading="showLoadingSpinner">
        <template #loading>
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
          <BPlaceholderCard style="min-width: 10rem;" no-footer />
        </template>    
        <club-item
                v-for="club in clubList"
                :key="club.id"
                :club="club"
              />
      </BPlaceholderWrapper>
    </b-card-group>
</template>
<script lang="ts">
import type ClubItem from '../../models/ClubItem'
import { useClubItemStore } from '../../stores/clubItem';
import { useLoadingStore } from '../../stores/loading';
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
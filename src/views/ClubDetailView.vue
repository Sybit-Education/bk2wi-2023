<template>
    <div v-if="club">
        <h1>{{ club.name }}</h1>
        <b-img :src="image" />
        <p>{{ club.notes }}</p>

    </div>
</template>
<script lang="ts">
import { mapState } from "pinia";
import { useClubItemStore } from '@/stores/clubItem'
import { defineComponent } from 'vue'
import type ClubItem from "@/models/ClubItem"

export default defineComponent({
  name: 'ClubDetailView',
  computed: {
    ...mapState(useClubItemStore, {
      getById: (state) => state.getById,
      imageById: (state) => state.imageById
    }),
    club(): ClubItem {
      return this.getById(this.$route.params.id as string) as ClubItem;
    },
    image() : string {
      return this.imageById(this.$route.params.id as string) as string;
    }
  }
})
</script>
<style>

</style>
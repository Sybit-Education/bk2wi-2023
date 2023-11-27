<template>
  <div  v-if="club">
    <BBreadcrumb>
      <BBreadcrumbItem to="/home"> Home </BBreadcrumbItem>
      <BBreadcrumbItem to="/club"> Clubs </BBreadcrumbItem>
      <BBreadcrumbItem :to="'/club/' + club.id" active> {{ club.name }} </BBreadcrumbItem>
    </BBreadcrumb>

    <div>
      <h1>{{ club.name }}</h1>
      <b-img :src="image" fluid-grow />
      <p>{{ club.notes }}</p>

      <h3>Adresse</h3>
      <address>
        <span id="street">{{ club.adresse }}</span><br />
        <span id="zipCode">{{ club.plz }}</span> <span id="city">{{ club.ort }}</span>
      </address>

    </div>
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
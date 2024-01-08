<template>
    <div  v-if="events">
      <BBreadcrumb>
        <BBreadcrumbItem to="/"> Home </BBreadcrumbItem>
        <BBreadcrumbItem to="/event"> Events </BBreadcrumbItem>
        <BBreadcrumbItem :to="'/event/' + events.id" active> {{ events.name }} </BBreadcrumbItem>
      </BBreadcrumb>
  
      <div>
        <h1>{{ events.name }}</h1>
        <b-img :src="image" fluid-grow />
        <p>{{ events.notes }}</p>
  
        <h3>Adresse</h3>
        <address>
          <span id="street">{{ events.adresse }}</span><br />
          <span id="zipCode">{{ events.plz }}</span> <span id="city">{{ events.ort }}</span>
        </address>
  
      </div>
    </div>
  </template>
  <script lang="ts">
  import { mapState } from "pinia";
  import { useEventItemStore } from '@/stores/eventItem'
  import { defineComponent } from 'vue'
  import type EventItem from "@/models/EventItem"
  
  export default defineComponent({
    name: 'EventDetailView',
    computed: {
      ...mapState(useEventItemStore, {
        getById: (state) => state.getById,
        imageById: (state) => state.imageById
      }),
      events(): EventItem {
        return this.getById(this.$route.params.id as string) as EventItem;
      },
      image() : string {
        return this.imageById(this.$route.params.id as string) as string;
      }
    }
  })
  </script>
  <style>
  
  </style>
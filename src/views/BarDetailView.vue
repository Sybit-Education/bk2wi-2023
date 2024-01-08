<template>
    <div  v-if="bar">
      <BBreadcrumb>
        <BBreadcrumbItem to="/home"> Home </BBreadcrumbItem>
        <BBreadcrumbItem to="/bar"> Bar </BBreadcrumbItem>
        <BBreadcrumbItem :to="'/bar/' + bar.id" active> {{ bar.name }} </BBreadcrumbItem>
      </BBreadcrumb>
  
      <div>
        <h1>{{ bar.name }}</h1>
        <b-img :src="image" fluid-grow />
      
  
        <h3>Anschrift</h3>
        <address>
          <span id="street">{{ bar.adresse }}</span><br />
          <span id="zipCode">{{ bar.plz }}</span> <span id="city">{{ bar.ort }}</span>
        </address>

        <h4>Kontaktdaten</h4>
        <contactDetails>
            <p>Telefon: <span>{{ bar.telefon }}</span> </p>
            <p>Email:<span>{{ bar.email }}</span> </p>
        </contactDetails>

        <h5>Öffnungszeiten</h5>
        <openingHours>
            <p>Öffnungstage<span>{{ bar.oeffnungstage }}</span></p>
            <p>Öffnungszeit<span>{{ bar.oeffnungszeiten }}</span></p>
        </openingHours>
        
        <h6>Webseite</h6>
        <website>
          <span>{{ bar.webseite}}</span>
        </website>
    
  
      </div>
    </div>
  </template>
  <script lang="ts">
  import { mapState } from "pinia";
  import { useBarItemStore } from '@/stores/barItem'
  import { defineComponent } from 'vue'
  import type BarItem from "@/models/BarItem"
  
  export default defineComponent({
    name: 'BarDetailView',
    computed: {
      ...mapState(useBarItemStore, {
        getById: (state) => state.getById,
        imageById: (state) => state.imageById
      }),
      bar(): BarItem {
        return this.getById(this.$route.params.id as string) as BarItem;
      },
      image() : string {
        return this.imageById(this.$route.params.id as string) as string;
      }
    }
  })
  </script>
  <style>
  
  </style>
<template>
  <div  v-if="verleih">
    <BBreadcrumb>
      <BBreadcrumbItem to="/"> Home </BBreadcrumbItem>
      <BBreadcrumbItem to="/verleih"> Verleihe </BBreadcrumbItem>
      <BBreadcrumbItem :to="'/verleih/' + verleih.id" active> {{ verleih.name }} </BBreadcrumbItem>
    </BBreadcrumb>

    <div>
      <h1>{{ verleih.name }}</h1>
      <b-img :src="image" fluid-grow />
      <p>{{ verleih.notes }}</p>

      <h3>Adresse</h3>
      <address>
        <span id="street">{{ verleih.adresse }}</span><br />
        <span id="zipCode">{{ verleih.plz }}</span> <span id="city">{{ verleih.ort }}</span>
      </address>

      <h4>Kontaktdaten</h4>
      <contactDetails>
        <p>Telefon: <span> {{ verleih.telefon }} </span></p>
        <p>Email:<span>{{ verleih.email }}</span> </p>
      </contactDetails>

      <h5>Öffnungszeiten</h5>
        <openingHours>
            <p>Öffnungstage<span>{{ verleih.oeffnungstage }}</span></p>
            <p>Öffnungszeit<span>{{ verleih.oeffnungszeiten }}</span></p>
        </openingHours>

        <h6>Webseite</h6>
        <website>
          <span>{{ verleih.webseite}}</span>
        </website>

    </div>
  </div>
</template>
<script lang="ts">
import { mapState } from "pinia";
import { useVerleihItemStore } from '@/stores/verleihItem'
import { defineComponent } from 'vue'
import type VerleihItem from "@/models/VerleihItem"

export default defineComponent({
  name: 'VerleihDetailView',
  computed: {
    ...mapState(useVerleihItemStore, {
      getById: (state) => state.getById,
      imageById: (state) => state.imageById
    }),
    verleih(): VerleihItem {
      return this.getById(this.$route.params.id as string) as VerleihItem;
    },
    image() : string {
      return this.imageById(this.$route.params.id as string) as string;
    }
  }
})
</script>
<style>

</style>
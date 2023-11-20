<script lang="ts">
import { RouterView } from 'vue-router'
import LocaleeHeader from "./components/LocaleeHeader.vue"
import { useEventItemStore } from './stores/eventItem';
import { useClubItemStore } from './stores/clubItem';

import { defineComponent } from 'vue';

export default defineComponent({

  created () {
    const storeEvents = useEventItemStore()
    const storeClub = useClubItemStore()
    storeEvents.load()
    storeClub.load()
  }
})
</script>


<template>
  <header>
    <LocaleeHeader/>
  </header>
  <main>
    <BContainer>
      <RouterView/>
    </BContainer>
  </main>
</template>


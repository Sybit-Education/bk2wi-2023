<script lang="ts">
import { RouterView } from 'vue-router'
import LocaleeHeader from "./components/LocaleeHeader.vue"
import { useEventItemStore } from './stores/eventItem';

import { defineComponent } from 'vue';

export default defineComponent({

  created () {
    const storeEvents = useEventItemStore()
    storeEvents.load()
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


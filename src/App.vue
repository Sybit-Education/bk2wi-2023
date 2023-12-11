<script lang="ts">
import { useEventItemStore } from './stores/eventItem';
import { useVerleihItemStore } from './stores/verleihItem';
import { useBarItemStore } from './stores/barItem';

import { defineComponent } from 'vue';

export default defineComponent({

  created () {
    const storeEvents = useEventItemStore()
    const storeVerleih = useVerleihItemStore()
    const storeBar = useBarItemStore()
    storeEvents.load()
    storeVerleih.load()
    storeBar.load()
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


<script lang="ts">
import { useEventItemStore } from './stores/eventItem';
import { useVerleihItemStore } from './stores/verleihItem';

import { defineComponent } from 'vue';

export default defineComponent({

  created () {
    const storeEvents = useEventItemStore()
    const storeVerleih = useVerleihItemStore()
    storeEvents.load()
    storeVerleih.load()
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

./stores/VerleihItem
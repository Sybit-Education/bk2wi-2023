<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col-1">
      <IBiSearch />
    </div>

    <div class="col">
      <div class="mb-3">
        <BFormInput
        id="inline-form-input-name"
        placeholder="Suchen"
        v-model = "input"
        @input="input => { emit('searchQuery', input) }"
      />
      </div>
    </div>
  </div>




</template>

<script setup lang="ts">

import { ref } from "vue";


    let input = ref("");
    
    const emit = defineEmits(['searchQuery'])
    const props = defineProps(['searchQuery'])



</script>

<style scoped>
.col-1 {
  margin-bottom: 18px;
  text-align: center;
}
</style>

<template>
  <div class="row justify-content-center align-items-center g-2">
    <div class="col">
        <BInputGroup>
          <template #append>
            <BButton>Suche</BButton>
          </template>
          <input
            id="inline-form-input-name"
            list="searchList"
            placeholder="Suchen"
            @change="search(evt)"
          />
          <datalist id="searchList">
            <option v-for="item in searchList" v-bind:key="item.id" :value="item.id">
              {{ item.title }}
            </option>
          </datalist>
        </BInputGroup>
    </div>
  </div>
</template>

<script  lang="ts">
import type SearchItem from '@/models/SearchItem'
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'SearchBar',
  props: {
    searchList: {
      type: Array<SearchItem>,
      required: true
    }
  },
  data () {
    return {
      searchQuery: '' as string
    }
  },
  emits: ['search'],
  methods: {
    search (input: string) {
      this.searchQuery = input
      this.$emit('search', this.searchQuery)
    }
  }

})
</script>

<style scoped>
.col-1 {
  margin-bottom: 18px;
  text-align: center;
}
</style>

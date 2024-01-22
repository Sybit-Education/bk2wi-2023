import { defineStore } from 'pinia'
import type BarItem from '@/models/BarItem'
import barService from '@/services/bar.service'
import { useLoadingStore } from './loading'


interface State {
  barItemList: BarItem[]
}
export const useBarItemStore = defineStore('bar', {
  state: (): State => {
    return {
      barItemList: [],
    };
  },
  getters: {
    getAll: (state) => state.barItemList,
    getById: (state) => (id: string) =>
      state.barItemList.find((bar: BarItem) => bar.id === id),
    imageById: (state) => (id: string) => {
        const item = state.barItemList.find((bar: BarItem) => bar.id === id)
        if (item && item.bild) {
            return item.bild[0].thumbnails.large.url
        } else {
            return ''
        }
    }
  },
  actions: {
    async load() {
      const loadingStore = useLoadingStore();
      loadingStore.updateLoading(true);
      barService.getList().then((result) => {
        this.barItemList = result as Array<BarItem>;
        loadingStore.updateLoading(false);
      })
      
    },
  },
  
})
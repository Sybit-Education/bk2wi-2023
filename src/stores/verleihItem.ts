import { defineStore } from 'pinia'
import type VerleihItem from '@/models/VerleihItem'
import verleihService from '@/services/verleih.service'
import { useLoadingStore } from './loading'

interface State {
  verleihItemList: VerleihItem[]
}
export const useVerleihItemStore = defineStore('verleih', {
  state: (): State => {
    return {
      verleihItemList: [],
    };
  },
  getters: {
    getAll: (state) => state.verleihItemList,
    getById: (state) => (id: string) =>
      state.verleihItemList.find((verleih: VerleihItem) => verleih.id === id),
    imageById: (state) => (id: string) => {
        const item = state.verleihItemList.find((verleih: VerleihItem) => verleih.id === id)
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
      verleihService.getList().then((result) => {
        this.verleihItemList = result as Array<VerleihItem>;
        loadingStore.updateLoading(false);
      })
      
    },
  },
})
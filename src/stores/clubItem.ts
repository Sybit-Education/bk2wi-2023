import { defineStore } from 'pinia'
import type ClubItem from '@/models/ClubItem'
import clubService from '@/services/club.service'
import { useLoadingStore } from './loading'

interface State {
  clubItemList: ClubItem[]
}
export const useClubItemStore = defineStore('club', {
  state: (): State => {
    return {
      clubItemList: [],
    };
  },
  getters: {
    getAll: (state) => state.clubItemList,
    getById: (state) => (id: string) =>
      state.clubItemList.find((club: ClubItem) => club.id === id),
    imageById: (state) => (id: string) => {
        const item = state.clubItemList.find((club: ClubItem) => club.id === id)
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
      clubService.getList().then((result) => {
        this.clubItemList = result as Array<ClubItem>;
        loadingStore.updateLoading(false);
      })
      
    },
  },
})
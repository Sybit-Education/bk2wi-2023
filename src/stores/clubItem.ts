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
      state.clubItemList.find((club: clubItem) => club.id === id),
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
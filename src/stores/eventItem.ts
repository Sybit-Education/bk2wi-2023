import { defineStore } from 'pinia'
import type EventItem from '@/models/EventItem'
import eventService from '@/services/event.service'
import { useLoadingStore } from './loading'

interface State {
  eventItemList: EventItem[]
}
export const useEventItemStore = defineStore('event', {
  state: (): State => {
    return {
      eventItemList: [],
    };
  },
  getters: {
    getAll: (state) => state.eventItemList,
    getById: (state) => (id: string) =>
      state.eventItemList.find((event: EventItem) => event.id === id),
  },
  actions: {
    async load() {
      const loadingStore = useLoadingStore();
      loadingStore.updateLoading(true);
      this.eventItemList = eventService.getList()
      loadingStore.updateLoading(false);
    },
  },
})

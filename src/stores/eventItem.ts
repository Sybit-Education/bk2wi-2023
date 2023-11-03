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
      eventService.getList().then((result) => {
        this.eventItemList = result as Array<EventItem>;
        loadingStore.updateLoading(false);
      })
      
    },
  },
})

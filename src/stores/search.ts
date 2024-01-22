import type EventItem from "@/models/EventItem"
import type SearchItem from "@/models/SearchItem"
import { defineStore } from "pinia"

interface State {
  searchList: SearchItem[]
}

export const useSearchStore = defineStore('search', {
  state: (): State => {
    return {
      searchList: []
    }
  },
  getters: {
    getAll: (state) => state.searchList
  },
  actions: {
    clear() {
        this.searchList = []
    },
    addEventList(list: EventItem[]) {

      list.forEach(eventItem => {
        const searchItem: SearchItem = {
          id: eventItem.id,
          type: 'event',
          title: eventItem.name,
          searchContent: Object.values(eventItem).join(", ").toLocaleLowerCase()
        }

        this.searchList.push(searchItem)
      });
    }
  }
})

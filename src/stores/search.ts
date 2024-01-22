import type EventItem from "@/models/EventItem"
import type SearchItem from "@/models/SearchItem"
import { defineStore } from "pinia"

interface State {
  searchList: SearchItem[]
}

export const useSeachStore = defineStore('search', {
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
      let searchItem: SearchItem
      
      list.forEach(eventItem => {
        
        searchItem.id = eventItem.id
        searchItem.type = 'event'
        searchItem.title = eventItem.name
        searchItem.searchContent = Object.values(eventItem).join(", ").toLocaleLowerCase()

        this.searchList.push(searchItem)
      });
    }

  }
})

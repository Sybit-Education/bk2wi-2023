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
    reset() {
        this.searchList = []
    },
    addEventList(list: EventItem[]) {
      let searchItem: SearchItem
      list.forEach(eventItem => {
        searchItem.id = eventItem.id
        searchItem.type = 'event'
        searchItem.title = eventItem.name
        searchItem.searchContent = eventItem.name.toLocaleLowerCase() 
            + ' ' + eventItem.beschreibung.toLocaleLowerCase() 
            + ' ' + eventItem.ort.toLocaleLowerCase()
        this.searchList.push(searchItem)
      });
    }

  }
})

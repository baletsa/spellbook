import { autorun, computed, toJS, action, observable } from 'mobx'

import data from './data/spellData.json';


const SortByName = (a, b) => {
  const aName = a.name.toLowerCase(),
    bName = b.name.toLowerCase();
  
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

let spellList = data.spells.sort(SortByName)

class FilterStore {
  @observable spells = spellList

  @observable filterButtonVisible = true
  @observable filterMenuVisible = false
  
  @observable filters = {
    "class": [],
    "level": [],
    "school": [],
    "components": [],
    "concentration": [],
    "ritual": []
  }
  
  @computed get filteredSpells() {
    let filterNames = [Object.keys(this.filters).forEach((key) => 
        (this.filters[key] === null || !this.filters[key].length) && delete this.filters[key]), this.filters][1]

    let results = this.spells.filter(sp =>
        Object.keys(this.filters).every(f => 
        this.filters[f].some( z => z == sp[f] )))

    return results
  }

  @action
  toggleFilterMenu() {
    console.log('toggle filterMenu')
    this.filterButtonVisible = !this.filterButtonVisible
    this.filterMenuVisible = !this.filterMenuVisible
    if (!document.body.classList.contains('stop-scroll')) {
      document.body.className += ' ' + 'stop-scroll'
    }
    else {
      document.body.classList.remove('stop-scroll')
    }
  }

  @action 
  toggleFilter(key) {
    console.log('toggle filter')
  }

  @action 
  clearFilter() {
    console.log('clear filter')
    this.filters = {} 
  }
}

var store = new FilterStore

export default store

autorun(() => {
  //console.log(store.filteredSpells)
  //console.log(store.spells)
  //console.log(store.filters)
})
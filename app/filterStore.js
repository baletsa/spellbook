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
    'class': [],
    'level': [],
    'school': []
  }
  
  @computed get filteredSpells() {
    let results = this.spells.filter(sp =>
      Object.keys(this.filters).every(key => 
        this.filters[key].some(f => 
          RegExp(f).test(sp[key]) 
        )
      )
    )
    return results
  }

  @observable active = false

  @action
  toggleFilter(key, value) {

    if(this.filters[key].indexOf(value) !== -1) {
      this.filters[key].splice(this.filters[key].indexOf(value), 1)
    } else {
      this.filters[key].push(value)
    }
    
    console.log(key)
    console.log(this.filters[key])
  }

  @action
  toggleFilterButton() {
    
  }

  @action
  toggleFilterMenu() {
    //console.log('toggle filterMenu')
    this.filterButtonVisible = !this.filterButtonVisible
    this.filterMenuVisible = !this.filterMenuVisible
    if (!document.body.classList.contains('stop-scroll')) {
      document.body.className += ' ' + 'stop-scroll'
    }
    else {
      document.body.classList.remove('stop-scroll')
    }
    //console.log(this.filterButtonVisible)
  }

  @action 
  clearFilter() {
    console.log('clear filter')
    this.filters = {} 
  }
}

var store = window.store = new FilterStore

export default store

autorun(() => {
  //console.log(store.filteredSpells)
  //console.log(store.spells)
  //console.log(store.filters)
})
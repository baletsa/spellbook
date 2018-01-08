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

  @observable toggledButtons = []
  
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

  @action
  toggleFilter(key, value) {

    if(this.filters[key].indexOf(value) !== -1) {
      this.filters[key].splice(this.filters[key].indexOf(value), 1)
    } else {
      this.filters[key].push(value)
    }
    
    //console.log(key)
    //console.log(this.filters[key])
  }

  @action
  toggleFilterButton(id) {
    // check to see if id exists in array
    const index = this.toggledButtons.indexOf(id);

    // if item exists in array, remove it
    if (index > -1) {
      return this.toggledButtons.splice(index, 1);
    }

    // otherwise add it to list
    this.toggledButtons.push(id);
    console.log(this.toggledButtons.slice())
  }

  @action
  toggleFilterMenu() {
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
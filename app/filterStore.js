import { autorun, computed, toJS, action, observable } from 'mobx'

import data from './data/spellData.json';

const DefaultSort = (a, b) => {
  const aLevel = a.level.toLowerCase(),
        bLevel = b.level.toLowerCase(),
        aName = a.name.toLowerCase(),
        bName = b.name.toLowerCase()

  if (aLevel.match(/\d+/) !== null && bLevel.match(/\d+/) !== null) {
    if (aLevel.match(/\d+/)[0] === bLevel.match(/\d+/)[0]) {
      return (aName < bName) ? -1 : ((aName > bName) ? 1 : 0)
    } else if (aLevel.match(/\d+/)[0] > bLevel.match(/\d+/)[0]) {
      return 1
    } else if (aLevel.match(/\d+/)[0] < bLevel.match(/\d+/)[0]) {
      return -1
    } 
  } else if (aLevel === 'cantrip' && bLevel === 'cantrip') {
    return (aName < bName) ? -1 : ((aName > bName) ? 1 : 0)
  } else if (aLevel === 'cantrip') {
    return -1
  } else if (bLevel === 'cantrip') {
    return 1
  } 
}

const SortByName = (a, b) => {
  const aName = a.name.toLowerCase(),
        bName = b.name.toLowerCase()
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

const SortByLevel = (a, b) => {
  const aLevel = a.level.toLowerCase(),
        bLevel = b.level.toLowerCase()

  if (aLevel.match(/\d+/) !== null && bLevel.match(/\d+/) !== null) {
    if (aLevel.match(/\d+/)[0] > bLevel.match(/\d+/)[0]) {
      return 1
    } else if (aLevel.match(/\d+/)[0] < bLevel.match(/\d+/)[0]) {
      return -1
    } 
  } else if (aLevel === 'cantrip') {
    return -1
  } else if (bLevel === 'cantrip') {
    return 1
  } 

}

let spellList = data.spells.sort(DefaultSort)

class FilterStore {
  @observable spells = spellList

  @observable filterButtonVisible = true
  @observable filterMenuVisible = false

  @observable toggledButtons = []
  
  @observable classFilter = []
  @observable levelFilter = []
  @observable schoolFilter = []
  @observable componentsFilter = []
  @observable concentrationFilter = []
  @observable ritualFilter = []
  
  @computed get filteredSpells() {
    let results = this.spells
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
    this.toggledButtons = []
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
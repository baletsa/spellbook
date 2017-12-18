import { autorun, computed, action, observable } from 'mobx'

import data from './data/spellData.json';


const SortByName = (a, b) => {
  const aName = a.name.toLowerCase(),
    bName = b.name.toLowerCase();
  
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

let spellList = data.spells.sort(SortByName)

class FilterStore {
  @observable spells = spellList
  
  @observable filters = {
    "class": ["Druid"],
    "level": ["Cantrip"]
  }
  
  @computed get filteredSpells() {
    let results = this.spells.filter(sp =>
        Object.keys(this.filters).every(f => 
        this.filters[f].some( z => z == sp[f] )))

    return results
  }
}

var store = new FilterStore

export default store

autorun(() => {
  //console.log(store.filteredSpells)
  //console.log(store.spells)
  //console.log(store.filters)
})
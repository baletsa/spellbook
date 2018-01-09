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

  // Save button states
  @observable filterButtons = []
  @observable concentrationButtons = []
  @observable ritualButtons = []
  
  // Set filters
  @observable classFilter = []
  @observable levelFilter = []
  @observable schoolFilter = []
  @observable componentsFilter = []
  @observable concentrationFilter = []
  @observable ritualFilter = []
  
  @computed get filteredSpells() {
    let results = this.spells

    // filter class
    if (this.classFilter.length > 0) {
      var classes = this.classFilter
      results = results.filter((item) => {
        return classes.some(function(el){
          return RegExp(el).test(item.class) 
        })
      })
      console.log(results)
    } 

    // filter level
    if (this.levelFilter.length > 0) {
      var levels = this.levelFilter
      results = results.filter(function(item) {
        return levels.indexOf(item.level) >= 0
      })
      console.log(results)
    } 

    // filter school
    if (this.schoolFilter.length > 0) {
      var schools = this.schoolFilter
      results = results.filter(function(item) {
        return schools.indexOf(item.school) >= 0
      })
    } 

    // filter components
    if (this.componentsFilter.length > 0) {
      var components = this.componentsFilter
      results = results.filter((item) => {
        return components.some(function(el){
          return RegExp(el).test(item.components) 
        })
      })
    } 

    return results
  }

  @action
  toggleFilter(key, value) {
    switch(key) {
      case 'class':
        if(this.classFilter.indexOf(value) !== -1) {
          this.classFilter.splice(this.classFilter.indexOf(value), 1)
        } else {
          this.classFilter.push(value)
        }
        break;
      case 'level':
        if(this.levelFilter.indexOf(value) !== -1) {
          this.levelFilter.splice(this.levelFilter.indexOf(value), 1)
        } else {
          this.levelFilter.push(value)
        }
        break;
      case 'school':
        if(this.schoolFilter.indexOf(value) !== -1) {
          this.schoolFilter.splice(this.schoolFilter.indexOf(value), 1)
        } else {
          this.schoolFilter.push(value)
        }
        break;
      case 'components':
        switch(value) {
          case 'verbal':
            value = 'V'
            break;
          case 'somatic':
            value = 'S'
            break;
          case 'material':
            value = 'M'
            break;
        }
        if(this.componentsFilter.indexOf(value) !== -1) {
          this.componentsFilter.splice(this.componentsFilter.indexOf(value), 1)
        } else {
          this.componentsFilter.push(value)
        }
        break;
    }
    console.log(this.classFilter.slice())
    console.log(this.schoolFilter.slice())
    console.log(this.levelFilter.slice())
    console.log(this.componentsFilter.slice())
  }

  @action
  toggleFilterButton(id) {
    // check to see if id exists in array
    const index = this.filterButtons.indexOf(id);

    // if item exists in array, remove it
    if (index > -1) {
      return this.filterButtons.splice(index, 1);
    }

    // otherwise add it to list
    this.filterButtons.push(id);
    //console.log(this.filterButtons.slice())
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
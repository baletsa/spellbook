import React, { Component } from 'react'
import { observer } from "mobx-react"

import Header from '../Header'
import Filter from '../Filter'
import SpellList from '../SpellList'
import store from '../../filterStore'

import '../../assets/styles/reset.scss'
import '../../assets/styles/base.scss'
import './main.scss'

@observer
class Main extends Component {
  render() {
    return (
      <div>
        <div className="site-header" >
          <Header filterButtonVisible={store.filterButtonVisible} toggleFilterMenu={store.toggleFilterMenu.bind(store)} />
          <Filter clearFilter={store.clearFilter.bind(store)} toggleFilterMenu={store.toggleFilterMenu.bind(store)} filterMenuVisible={store.filterMenuVisible} />
        </div>
        <main className="spellbook-content">
          <div className="content">
            <div className="spell-list-sort">
              <select className="sort-toggle">
                <option className="spell-list-sort-name">Sort by Name</option>
                <option className="spell-list-sort-level">Sort by Level</option>
              </select>
            </div>
            <SpellList spells={store.filteredSpells} />
          </div>
        </main>
      </div>
    )
  }
}

export default Main;

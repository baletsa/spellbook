import React, { Component } from 'react'

import Header from '../Header'
import Filter from '../Filter'
import SpellList from '../SpellList'
import store from '../../filterStore'

import '../../assets/styles/reset.scss'
import '../../assets/styles/base.scss'
import './main.scss'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterVisible: false
    }
    this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleFilter() {
    let filterVisible = this.state.filterVisible === false  ? true : false
    let buttonVisible = this.state.filterButtonVisible === true  ? false : true
    if (!document.body.classList.contains('stop-scroll')) {
      document.body.className += ' ' + 'stop-scroll'
    }
    else {
      document.body.classList.remove('stop-scroll')
    }
    this.setState({ filterVisible: filterVisible, filterButtonVisible: buttonVisible})
  }

  render() {
    return (
      <div>

        <div className="site-header" >
          <Header toggleFilter={this.toggleFilter} />
          <Filter openFilter={this.state.filterVisible ? 'active' : null}/>
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

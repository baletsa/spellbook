import React, { Component } from 'react'
import { observer } from "mobx-react"

import SpellItem from '../SpellItem'

import './spellList.scss'

@observer
class SpellList extends Component {

  renderList(list) {
    if (list.length) {
      return list.map(spell =>
        <SpellItem spell={spell} key={spell.name} />
      )
    } 
    else {
      return (
        <div className="no-results-message">
          <div className="results-headline">No Results</div>
          <div className="results-message"></div>
        </div>
      )
    }
  }

  render() {
    let spells = this.props.store.filteredSpells
    
    return (
      <div className="spell-list">
       {this.renderList(spells)}
      </div>
    )
  }
}

export default SpellList;
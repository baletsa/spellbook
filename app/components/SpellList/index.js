import React, { Component } from 'react';

import SpellItem from '../SpellItem';

import './spellList.scss';

class SpellList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: this.props.spells
    }
  }

  SortByName(a, b) {
    const aName = a.name.toLowerCase(),
      bName = b.name.toLowerCase();
    
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }

  render() {
    const spells = (this.state.spells).sort(this.SortByName)
    
    return (
      <div className="spell-list">
       {
          this.state.spells.map(spell =>
            <SpellItem spell={spell} key={spell.name} />
          )
       }
      </div>
    )
  }
}

export default SpellList;
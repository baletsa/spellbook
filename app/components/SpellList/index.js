import React from 'react';

import './spellList.scss';
import SpellItem from '../SpellItem';

class SpellList extends React.Component {

  render() {
    const spells = this.props.spells;
    return (
      <div className="spell-list">
       {
          spells.map(spell =>
            <SpellItem spell={spell} key={spell.id} />
          )
       }
      </div>
    )
  }
}

export default SpellList;
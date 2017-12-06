import React from 'react';

import './spellList.scss';
import SpellItem from '../SpellItem';

class SpellList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: this.props.spells
    }
  }

  render() {
    return (
      <div className="spell-list">
       {
          this.state.spells.map(spell =>
            <SpellItem spell={spell} key={spell.id} />
          )
       }
      </div>
    )
  }
}

export default SpellList;
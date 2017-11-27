import React from 'react';

import './spellList.scss';

class SpellList extends React.Component {
  render() {
    const spells = this.props.spells;
    return (
      spells.map(function(item, index){    
        return (
          <div className='spell-list-item'>
            <div className='spell_item-name'>{item.name}</div>
            <div className='spell_item-level'>{item.level}</div>
            <div className='spell_item-trigger'></div>
          </div>
        )
      })
    );
  }
}

export default SpellList;
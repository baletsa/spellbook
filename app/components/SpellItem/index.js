import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { observer } from "mobx-react"

import './spellItem.scss';

@observer
class SpellItem extends Component {
  render() {
    const spell = this.props.spell,
          url = spell.name.replace(/'/g, '').replace(/[\/\s-]+/g, '-').toLowerCase();
    return (
      <div key={url} item={url} className='spell'>
        <Link className='spell-list-item' to={ { pathname: `/spells/${url}`}}>
          <div className='spell_item-name'>{spell.name}</div>
          <div className='spell_item-level'>{spell.level}</div>
          <div className='spell_item-trigger'></div>
        </Link>
      </div>
    )
  }
}

export default SpellItem;
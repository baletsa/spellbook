import React from 'react';
import { Route, Link } from 'react-router-dom'

import './spellItem.scss';

class SpellItem extends React.Component {
  constructor() {
      super();
      this.state = {
        isVisible: false
      }
      this.showSpell = this.showSpell.bind(this)
  }
  
  showSpell() {
    this.setState({ 
      isVisible: !this.state.isVisible
    })
  }

  render() {
    const spell = this.props.spell,
          url = spell.name.replace(/'/g, '').replace(/[\/\s-]+/g, '-').toLowerCase();
    return (
      <div key={spell.id} item={spell} className='spell'>
        <div className={`spell-list-item ${this.state.isVisible ? 'active' : null}`} onClick={this.showSpell}>
          <div className='spell_item-name'>{spell.name}</div>
          <div className='spell_item-level'>{spell.level}</div>
          <div className='spell_item-trigger'></div>
        </div>
        <div className={`spell-list-info ${this.state.isVisible ? 'active' : null}`}>
          <div className='spell_info-stats'>
            <div className='spell_info-level'><b>Level:</b> {spell.level}</div>
            <div className='spell_info-school'><b>School:</b> {spell.school}</div>
            <div className='spell_info-range'><b>Range:</b> {spell.range}</div>
            <div className='spell_info-comp'>
              <b>Components:</b> {spell.material ? `${spell.components} (${spell.material})` : spell.components}
            </div>
            <div className='spell_info-duration'><b>Duration:</b> {spell.duration}</div>
            <div className='spell_info-castingtime'><b>Casting Time:</b> {spell.casting_time}</div>
            <div className='spell_info-ritual'><b>Ritual:</b> {spell.ritual}</div>
          </div>
          <div className='spell_info-desc'>
            <div className='spell_info-content' dangerouslySetInnerHTML={{__html: spell.desc}} />
            {spell.higher_level ? <div className='spell_info-higher_level' dangerouslySetInnerHTML={{__html: '<b>At Higher Levels: </b> ' + spell.higher_level}} /> : null}
          </div>
          <div className='spell_info-cta'>
            <Link className='spell-detail-button' spell={{spell}} to={`/spells/${url}`}>View Detail Page</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SpellItem;
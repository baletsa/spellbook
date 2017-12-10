// Import Dependencies
import React, { Component } from 'react';

import data from '../../data/spellData.json';

import styles from './detail.scss';

const DetailView = ({ match }) => {

  const matchSpell = data.spells.filter(s => s.name.replace(/'/g, '').replace(/[\/\s-]+/g, '-').toLowerCase() === match.params.spellName);

  return (
    matchSpell.map(spell =>
        <div className='spell-detail' key={spell.name}>
          <div>
            <h2 className='spell_item-name'>{spell.name}</h2>
          </div>
          <div>
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
              {spell.higher_level ? <div className='spell_info-higher_level' dangerouslySetInnerHTML={{__html: spell.higher_level}} /> : null}
            </div>
          </div>
        </div>
    )
  )
}

export default DetailView;
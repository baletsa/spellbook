// Import Dependencies
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import data from '../../data/spellData.json';

import Header from '../Header';

import styles from './detail.scss';

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

const DetailView = ({ match }) => {

  const matchSpell = data.spells.filter(s => s.name.replace(/'/g, '').replace(/[\/\s-]+/g, '-').toLowerCase() === match.params.spellName);

  return (
    matchSpell.map(spell =>
        <div>
          <Header isFixed={false} />
          <div className='spell-detail' key={spell.name}>
            <div>
              <h1 className='spell_item-name'>{spell.name}</h1>
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
              <div className='spell_detail-cta'>
                <Link className='back-button' to='/'>Back to spell list</Link>
              </div>
            </div>
          </div>
        </div>
    )
  )
}

export default DetailView;
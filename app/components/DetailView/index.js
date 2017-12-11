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

  const matchSpell = data.spells.filter(s => s.name.replace(/'/g, '').replace(/[\/\s-]+/g, '-').toLowerCase() === match.params.spellName)

  return (
    matchSpell.map(spell =>
        <div key={spell.name}>
          <ScrollToTopOnMount/>
          <Header isFixed={true} filter={false} />
          <article className='spell-detail'>
            <div className='spell_detail-header'>
              <h1 className='spell_item-name'>{spell.name}</h1>
            </div>
            <div className='spell_detail-stats'>
              <div className='spell_detail-level'><b>Level:</b> {spell.level}</div>
              <div className='spell_detail-school'><b>School:</b> {spell.school}</div>
              <div className='spell_detail-castingtime'><b>Casting Time:</b> {spell.casting_time}</div>
              <div className='spell_detail-range'><b>Range:</b> {spell.range}</div>
              <div className='spell_detail-comp'>
                <b>Components:</b> {spell.material ? `${spell.components} (${spell.material})` : spell.components}
              </div>
              <div className='spell_detail-duration'><b>Duration:</b> {spell.concentration === 'yes' ? <span className='contentration'>Concentration, </span> : null} {spell.duration}</div>
              <div className='spell_detail-ritual'><b>Ritual:</b> {spell.ritual}</div>
            </div>
            <div className='spell_detail-desc'>
              <div className='spell_detail-content' dangerouslySetInnerHTML={{__html: spell.desc}} />
              {spell.higher_level ? <div className='spell_detail-higher_level' dangerouslySetInnerHTML={{__html: '<b>At Higher Levels: </b> ' + spell.higher_level}} /> : null}
            </div>
            <div className='spell_detail-cta'>
              <Link className='back-button' to='/'>&laquo; Back to spell list</Link>
            </div>
          </article>
        </div>
    )
  )
}

export default DetailView;
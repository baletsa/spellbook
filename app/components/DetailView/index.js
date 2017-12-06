// Import Dependencies
import React, { Component } from 'react';

// Import Stylesheet
import styles from './detail.scss';

class DetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
            {spell.higher_level ? <div className='spell_info-higher_level' dangerouslySetInnerHTML={{__html: spell.higher_level}} /> : null}
          </div>
          <div className='spell_info-cta'>
            <Link to={`${match.url}/${linkName}`} component={DetailView} spell={this.props.spell}>
              View Detail Page
            </Link>
            <button className='spell-detail-button' onClick={this.showSpell}>View Detail Page</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailView;
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
      <div className='spell'>
            {console.log(this.props.spell)}
        <div className='spell-list-item'>
          <div className='spell_item-name'>{this.props.spell.name}</div>
          <div className='spell_item-level'>{this.props.spell.level}</div>
          <div className='spell_item-trigger'></div>
        </div>
        <div className='spell-list-info'>
          <div className='spell_info-stats'>
            <div className='spell_info-level'><b>Level:</b> {this.props.spell.level}</div>
            <div className='spell_info-school'><b>School:</b> {this.props.spell.school}</div>
            <div className='spell_info-range'><b>Range:</b> {this.props.spell.range}</div>
            <div className='spell_info-comp'>
              <b>Components:</b> {this.props.spell.material ? `${this.props.spell.components} (${this.props.spell.material})` : this.props.spell.components}
            </div>
            <div className='spell_info-duration'><b>Duration:</b> {spell.duration}</div>
            <div className='spell_info-castingtime'><b>Casting Time:</b> {spell.casting_time}</div>
            <div className='spell_info-ritual'><b>Ritual:</b> {spell.ritual}</div>
          </div>
          <div className='spell_info-desc'>
            <div className='spell_info-content' dangerouslySetInnerHTML={{__html: this.props.spell.desc}} />
            {this.props.spell.higher_level ? <div className='spell_info-higher_level' dangerouslySetInnerHTML={{__html: this.props.spell.higher_level}} /> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailView;
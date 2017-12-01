import React from 'react';

import './spellList.scss';

class SpellList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        spellInfoVisible: false
      }
      this.showSpell = this.showSpell.bind(this)
  }
  
  showSpell() {
    let spellVisible = this.state.spellInfoVisible === false  ? true : false
    this.setState({ spellInfoVisible: spellVisible})
  }

  render() {
    const spells = this.props.spells;

    return (
      spells.map(function(item, index){    
        return (
          <div className='spell'>
            <div className='spell-list-item' onClick={this.showSpell}>
              <div className='spell_item-name'>{item.name}</div>
              <div className='spell_item-level'>{item.level}</div>
              <div className='spell_item-trigger'></div>
            </div>
            <div className={`spell-list-info ${this.state.spellInfoVisible ? 'active' : null}`}>
              <div className='spell_info-level'><b>Level:</b> {item.level}</div>
              <div className='spell_info-school'><b>School:</b> {item.school}</div>
              <div className='spell_info-range'><b>Range:</b> {item.range}</div>
              <div className='spell_info-comp'>
                <b>Components:</b> {item.material ? `${item.components} (${item.material})` : item.components}
              </div>
              <div className='spell_info-duration'><b>Duration:</b> {item.duration}</div>
              <div className='spell_info-castingtime'><b>Casting Time:</b> {item.casting_time}</div>
              <div className='spell_info-ritual'><b>Ritual:</b> {item.ritual}</div>
              <div className='spell_info-desc'>
                <div className='spell_info-content' dangerouslySetInnerHTML={{__html: item.desc}} />
                {item.higher_level ? <div className='spell_info-higher_level' dangerouslySetInnerHTML={{__html: item.higher_level}} /> : null}
              </div>
            </div>
          </div>
        )
      }, this)
    );
  }
}

export default SpellList;
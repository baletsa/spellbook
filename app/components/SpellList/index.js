import React from 'react';

import './spellList.scss';

class SpellList extends React.Component {
  render() {
    const spells = this.props.spells;

    /*if (titleText === 'Cantrip') {
      titleText += 's';
    }*/

    return (
      <section className={`spell-list-section ${spells.name} ${spells.level}`}>
        <h2>{`${spells.name}`}</h2>
        <ul>
         {spells.map(function(item, index){
           return (<li key={index}>{item.name}</li>)
         })}
        </ul>
      </section>
    );
  }
}

export default SpellList;
import React from 'react';

import './spellList.scss';

class SpellList extends React.Component {
  render() {
    const spells = this.props.spells,
          levels = ['cantrips', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] 

    return (
      levels.map(function(item, index){

        let lvlKey

         item === 'one' ? lvlKey = '1st Level'
         : item === 'two' ? lvlKey = '2nd Level'
         : item === 'three' ? lvlKey = '3rd Level'
         : item === 'four' ? lvlKey = '4th Level'
         : item === 'five' ? lvlKey = '5th Level'
         : item === 'six' ? lvlKey = '6th Level'
         : item === 'seven' ? lvlKey = '7th Level'
         : item === 'eight' ? lvlKey = '8th Level'
         : item === 'nine' ? lvlKey = '9th Level'
         : lvlKey = 'Cantrip'

        return (
          <section className={`spell-list-section ${item}`}>
          <h2>{item === 'cantrips' ? `${item}` : `Level ${item}`}</h2>
            <ul>
              {spells.map(function(item, index){
                if (item.level === lvlKey) {
                  return <li key={index}><a>{item.name}</a></li>
                }
              })}
            </ul>
          </section>
        )
      })
    )
  }
}

export default SpellList;
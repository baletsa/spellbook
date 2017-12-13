import React, { Component } from 'react';

import data from '../../data/spellData.json';

import FilterButton from '../FilterButton';

import styles from './filter.scss';

const filterData = [
  {
    'title': 'class', 
    'options': ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard'],
    'type': 'toggle'
  }, {
    'title': 'level', 
    'options': ['cantrip', 'level 1', 'level 2', 'level 3', 'level 4', 'level 5', 'level 6', 'level 7', 'level 8', 'level 9'],
    'type': 'toggle'
  }, { 
    'title': 'school',
    'options': ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation'],
    'type': 'toggle'
  }, {
    'title': 'components',
    'options': ['verbal', 'somatic', 'material'],
    'type': 'toggle'
  }, {
    'title': 'concentration',
    'options': ['yes', 'no'],
    'type': 'radio'
  }, {
    'title': 'ritual',
    'options': ['yes', 'no'],
    'type': 'radio'
  }
]

let filterValues = {
  level: ['Cantrip'],
  class: ['Druid']
}

class Filter extends Component {  
  constructor(props) {
    super(props);
    this.filterSpells = this.filterSpells.bind(this)
  }

  filterSpells(param) {
    const results = data.spells.filter(x =>
      Object.keys(filterValues).every(f => 
      filterValues[f].some( z => z == x[f] )))
    console.log(results)
    return results
  }

  clearFilter() {
    console.log('clear filter')
  }

  render() {
    return (
      <section className={`filter ${ this.props.openFilter }`}>
        <div className="filter__content">
          <div className="filter__title-bar">
            <div className="filter__title-bar-content">
              <a className="filter__reset" onClick={this.clearFilter}>Clear</a>
              <h2 className="filter__title">Filters</h2>
              <a className="filter__close" onClick={this.props.toggleFilter}>Close</a>
            </div>
          </div>       
          {
            filterData.map(filter => {
              let buttonType = filter.type
              return (
                <div key={filter.title} className={`filter__element filter__${filter.title}`}>
                  <h3 className="filter__label">{filter.title}</h3>
                  <div className="filter__options">
                    {
                      filter.options.map(buttonValue =>
                        <FilterButton key={buttonValue} filterSpells={this.filterSpells} className={buttonValue} buttonType={buttonType} buttonText={buttonValue} />
                      )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Filter;
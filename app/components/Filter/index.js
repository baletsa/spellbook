import React, { Component } from 'react';

import FilterButton from '../FilterButton';

import styles from './filter.scss';

const filterConfig = [
  {
    'category': 'class', 
    'options': ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard'],
    'type': 'toggle'
  }, {
    'category': 'level', 
    'options': ['cantrip', 'level 1', 'level 2', 'level 3', 'level 4', 'level 5', 'level 6', 'level 7', 'level 8', 'level 9'],
    'type': 'toggle'
  }, { 
    'category': 'school',
    'options': ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation'],
    'type': 'toggle'
  }, {
    'category': 'components',
    'options': ['verbal', 'somatic', 'material'],
    'type': 'toggle'
  }, {
    'category': 'concentration',
    'options': ['yes', 'no'],
    'type': 'radio'
  }, {
    'category': 'ritual',
    'options': ['yes', 'no'],
    'type': 'radio'
  }
]

class Filter extends Component {  
  render() {
    return (
      <section className={`filter ${this.props.filterMenuVisible ? 'active' : null}`}>
        <div className="filter__content">
          <div className="filter__title-bar">
            <div className="filter__title-bar-content">
              <a className="filter__reset" onClick={this.props.clearFilter}>Clear</a>
              <h2 className="filter__title">Filters</h2>
              <a className="filter__close" onClick={this.props.toggleFilterMenu}>Close</a>
            </div>
          </div>       
          {
            filterConfig.map(filter => {
              let buttonType = filter.type,
                  filterKey = filter.category
              return (
                <div key={filterKey} className={`filter__element filter__${filterKey}`}>
                  <h3 className="filter__label">{filterKey}</h3>
                  <div className="filter__options">
                    {
                      filter.options.map(buttonValue =>
                        <FilterButton key={buttonValue} filterKey={filterKey} className={buttonValue} buttonType={buttonType} buttonText={buttonValue} />
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
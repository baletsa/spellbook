import React, { Component } from 'react';
import { observer } from "mobx-react"

import FilterButton from '../FilterButton';

import styles from './filter.scss';

const filterConfig = [
  {
    'category': 'class', 
    'options': ['Bard', 'Cleric', 'Druid', 'Paladin', 'Ranger', 'Sorcerer', 'Warlock', 'Wizard'],
    'type': 'toggle'
  }, {
    'category': 'level', 
    'options': ['Cantrip', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'],
    'type': 'toggle'
  }, { 
    'category': 'school',
    'options': ['Abjuration', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromancy', 'Transmutation'],
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

@observer
class Filter extends Component {  
  render() {
    return (
      <section className={`filter ${this.props.store.filterMenuVisible ? 'active' : ''}`}>
        <div className="filter__content">
          <div className="filter__title-bar">
            <div className="filter__title-bar-content">
              <a className="filter__reset" onClick={this.props.store.clearFilter.bind(this.props.store)}>Clear</a>
              <h2 className="filter__title">Filters</h2>
              <a className="filter__close" onClick={this.props.store.toggleFilterMenu.bind(this.props.store)}>Close</a>
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
                        <FilterButton key={buttonValue} filterKey={filterKey} className={buttonValue} buttonType={buttonType} buttonText={buttonValue} store={this.props.store} />
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
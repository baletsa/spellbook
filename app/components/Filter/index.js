import React from 'react';

import styles from './filter.scss';

const filterData = [
  {
    'title': 'class', 
    'options': ['bard', 'cleric', 'druid', 'paladin', 'ranger', 'sorcerer', 'warlock', 'wizard']
  },{
    'title': 'level', 
    'options': ['cantrip', 'level 1', 'level 2', 'level 3', 'level 4', 'level 5', 'level 6', 'level 7', 'level 8', 'level 9']
  }, { 
    'title': 'school',
    'options': ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation']
  },{
    'title': 'ritual',
    'options': ['yes', 'no']
  },{
    'title': 'concentration',
    'options': ['yes', 'no']
  },{
    'title': 'components',
    'options': ['verbal', 'somatic', 'material']
  }
]

class Filter extends React.Component {  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={`filter ${ this.props.openFilter }`}>
        <div className="filter__content">
          <div className="filter__title-bar">
            <div className="filter__title-bar-content">
              <a className="filter__reset">Clear</a>
              <h2 className="filter__title">Filters</h2>
              <a className="filter__close" onClick={this.props.toggleFilter}>Close</a>
            </div>
          </div>       
          {
            filterData.map(filter =>
              <div className={`filter__element filter__${filter.title}`}>
                <h3 className="filter__label">{filter.title}</h3>
                <div className="filter__options">
                  {
                    filter.options.map(button =>
                      <a className={button}>{button}</a>
                    )
                  }
                </div>
              </div>
            )
          }
        </div>
      </section>
    )
  }
};

export default Filter;
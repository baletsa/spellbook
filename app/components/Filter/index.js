import React from 'react';

import styles from './filter.scss';

class Filter extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      'applyFilter': false
    }
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter() {
    this.setState({"applyFilter": true});
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
          <div className="filter__element filter__class">
            <h3 className="filter__label">Class</h3>
            <div className="filter__options">
              <a className="bard" onClick={this.applyFilter}>Bard</a>
              <a className="cleric">Cleric</a>
              <a className="druid">Druid</a>
              <a className="paladin">Paladin</a>
              <a className="ranger">Ranger</a>
              <a className="sorcerer">Sorcerer</a>
              <a className="warlock">Warlock</a>
              <a className="wizard">Wizard</a>
            </div>
          </div>
          <div className="filter__element filter__level">
            <h3 className="filter__label">Level</h3>
            <div className="filter__options">
              <a className="cantrip">Cantrip</a>
              <a className="lvl1">Level 1</a>
              <a className="lvl2">Level 2</a>
              <a className="lvl3">Level 3</a>
              <a className="lvl4">Level 4</a>
              <a className="lvl5">Level 5</a>
              <a className="lvl6">Level 6</a>
              <a className="lvl7">Level 7</a>
              <a className="lvl8">Level 8</a>
              <a className="lvl9">Level 9</a>
            </div>
          </div>
          <div className="filter__element filter__school">
            <h3 className="filter__label">School</h3>
            <div className="filter__options">
              <a className="abjuration">Abjuration</a>
              <a className="abjuration">Conjuration</a>
              <a className="abjuration">Divination</a>
              <a className="abjuration">Enchantment</a>
              <a className="abjuration">Evocation</a>
              <a className="abjuration">Illusion</a>
              <a className="abjuration">Necromancy</a>
              <a className="abjuration">Transmutation</a>
            </div>
          </div>
          <div className="filter__element filter__ritual">
            <h3 className="filter__label">Ritual</h3>
            <div className="filter__options">
              <a className="t">Yes</a>
              <a className="f">No</a>
            </div>
          </div>
          <div className="filter__element filter__concentration">
            <h3 className="filter__label">Concentration</h3>
            <div className="filter__options">
              <a className="t">Yes</a>
              <a className="f">No</a>
            </div>
          </div>
          <div className="filter__element filter__components">
            <h3 className="filter__label">Components</h3>
            <div className="filter__options">
              <a className="filter__toggle__button" data-value="v" id="filter-components-verbal">Verbal</a>
              <a className="filter__toggle__button" data-value="s" id="filter-components-somatic">Somatic</a>
              <a className="filter__toggle__button" data-value="m" id="filter-components-material">Material</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
};

export default Filter;
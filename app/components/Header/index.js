import React from 'react';

import styles from './header.scss';

import Filter from '../Filter';

class Header extends React.Component {
  constructor() {
      super();
      this.state = {filterVisible: false}
      this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleFilter() {
    let trigger = this.state.filterVisible === false  ? true : false
    console.log(trigger)
    this.setState({ filterVisible: trigger })
  }

  render() {
    return (
      <div className="site-header">
        <header>
          <div className="content">
            <div className="site-reset">
              <a className="site-title all">SpellbOOK</a>
            </div>
            <div className="filter-menu">
              <a className="filter-menu--trigger" onClick={this.toggleFilter}>Filter</a>
            </div>
          </div>
        </header>
        <Filter openFilter={this.state.filterVisible ? 'active' : null} />
      </div>
    )
  }
};

export default Header;
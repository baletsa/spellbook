import React from 'react';

import styles from './header.scss';

import Filter from '../Filter';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        filterVisible: false, 
        buttonVisible: true, 
        isFixed: this.props.isFixed
      }
      this.toggleFilter = this.toggleFilter.bind(this)
  }

  toggleFilter() {
    let filterVisible = this.state.filterVisible === false  ? true : false
    let buttonVisible = this.state.buttonVisible === true  ? false : true
    if (!document.body.classList.contains('stop-scroll')) {
      document.body.className += ' ' + 'stop-scroll'
    }
    else {
      document.body.classList.remove('stop-scroll')
    }
    this.setState({ filterVisible: filterVisible, buttonVisible: buttonVisible})
  }

  render() {
    return (
      <div className={`site-header ${this.state.isFixed ? 'fixed' : null}`} >
        <header>
          <div className="content">
            <div className="site-reset">
              <a className="site-title all">SpellbOOK</a>
            </div>
            <div className="filter-menu">
              <a className={`filter-menu--trigger ${this.state.filterVisible ? 'active' : null}`} onClick={this.toggleFilter}>Filter</a>
            </div>
          </div>
        </header>
        <Filter openFilter={this.state.filterVisible ? 'active' : null} toggleFilter={this.toggleFilter} />
      </div>
    )
  }
};

export default Header;
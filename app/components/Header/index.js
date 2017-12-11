import React from 'react';
import { Route, Link } from 'react-router-dom'

import styles from './header.scss';

import Filter from '../Filter';

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        filterButton: this.props.filter, 
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

    let button = null;
    let filter = null;
    if(this.state.filterButton) {
      button = <a className={`filter-menu--trigger ${this.state.filterVisible ? 'active' : null}`} onClick={this.toggleFilter}>Filter</a>
      filter = <Filter openFilter={this.state.filterVisible ? 'active' : null} toggleFilter={this.toggleFilter} />
    } else {
      button = null
      filter = null
    }

    return (
      <div className={`site-header ${this.state.isFixed ? 'fixed' : null}`} >
        <header>
          <div className="content">
            <div className="site-reset">
              <Link className='site-title all' to='/'>SpellbOOK</Link>
            </div>
            <div className="filter-menu">
              {button}
            </div>
          </div>
        </header>
        {filter}
      </div>
    )
  }
};

export default Header;
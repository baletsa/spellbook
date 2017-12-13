import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'

import styles from './header.scss';

class Header extends Component { 
  constructor(props) {
      super(props);
      this.state = {
        filterVisible: false, 
        buttonVisible: true, 
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
    const { match, location, history } = this.props

    let headerLink = null,
        filterButton = null

    if(location.pathname === '/') {
      headerLink = <span className='site-title'>SpellbOOK</span>
      filterButton = <div className="filter-menu"><a className={`filter-menu--trigger ${this.state.filterVisible ? 'active' : null}`} onClick={this.toggleFilter}>Filter</a></div>
    } else {
      headerLink = <Link className='back-button' to='/'>Back to spell list</Link>
      filterButton = null
    }

    return (
      <header>
        <div className="content">
          <div className="header-link">
            {headerLink}
          </div>
          {filterButton}
        </div>
      </header>
    )
  }
}

export default withRouter(Header);
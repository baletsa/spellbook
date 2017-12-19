import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'

import styles from './header.scss';

class Header extends Component { 
  render() {
    const { match, location, history } = this.props

    let headerLink = null,
        filterButton = null

    if(location.pathname === '/') {
      headerLink = <span className='site-title'>SpellbOOK</span>
      filterButton = <div className="filter-menu"><a className={`filter-menu--trigger ${this.props.filterButtonVisible ? null : 'hide'}`} onClick={this.props.toggleFilterMenu}>Filter</a></div>
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
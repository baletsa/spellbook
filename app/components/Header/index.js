import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
import { observer } from "mobx-react"

import styles from './header.scss';

@observer
class Header extends Component { 
  render() {
    const { match, location, history } = this.props

    let headerLink = null,
        headerButton = null

    if(location.pathname === '/') {
      headerLink = <div className="header-link"><span className='site-title'>SpellbOOK</span></div>
      headerButton = <div className="filter-menu"><a className={`filter-menu--trigger ${this.props.store.filterButtonVisible ? null : 'hide'}`} onClick={this.props.store.toggleFilterMenu.bind(this.props.store)}>Filter</a></div>
    } else {
      headerLink = null
      headerButton = <Link className='back-button' to='/'>Back to spell list</Link>
    }

    return (
      <header>
        <div className="content">
          {headerLink}{headerButton}
        </div>
      </header>
    )
  }
}

export default withRouter(Header);
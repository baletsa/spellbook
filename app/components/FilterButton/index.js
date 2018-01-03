import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import styles from './filterButton.scss';

@observer
class FilterButton extends Component { 
  
  handleClick(e) {
    //console.log('filter: click')
    //console.log(this.props.store.filters)
    if(this.props.store.active === false) {
      this.props.store.active = true 
    } else {
      this.props.store.active = false
    }
    //console.log(e.target.id)
    //console.log(e.target.getAttribute('data-key'))
    this.props.store.toggleFilter(e.target.getAttribute('data-key'), e.target.id)
  }

  render() {    
    let buttonName = this.props.buttonText.replace(/\s/g, '')

    return (
      <button id={this.props.buttonText} data-key={this.props.filterKey} className={`filter__button filter__button--${buttonName} ${this.props.store.active ? 'active' : ''}`} onClick={this.handleClick.bind(this)}>{this.props.buttonText}</button>
    )
  }
}

export default FilterButton;
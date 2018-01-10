import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import styles from './filterButton.scss';

@observer
class FilterButton extends Component { 
  
  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.store.toggleFilterButton(e.target.getAttribute('data-key'), e.target.id)
    this.props.store.toggleFilter(e.target.getAttribute('data-key'), e.target.id)
  }

  render() {    
    let buttonName = this.props.buttonText.replace(/\s/g, '')

    return (
      <
      button 
        id={this.props.buttonText} 
        data-key={this.props.filterKey} 
        className={
          `filter__button filter__button--${buttonName} 
          ${this.props.store.filterButtons.indexOf(this.props.buttonText) > -1 || 
            this.props.store.componentButtons.indexOf(this.props.buttonText) > -1 || 
            (this.props.store.concentrationButtons.indexOf(this.props.buttonText) > -1 && this.props.filterKey === 'concentration') ||
            (this.props.store.ritualButtons.indexOf(this.props.buttonText) > -1 && this.props.filterKey === 'ritual') ? 'active' : ''}`
        } 
        onClick={e => this.handleClick(e)}
      >
        {this.props.buttonText}
      </button>
    )
  }
}

export default FilterButton;
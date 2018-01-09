import React, { Component } from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import styles from './filterButton.scss';

@observer
class FilterButton extends Component { 
  
  handleClick(e, id) {
    e.preventDefault();
    e.stopPropagation();
    this.props.store.toggleFilterButton(id)
    this.props.store.toggleFilter(e.target.getAttribute('data-key'), e.target.id)
  }

  render() {    

    const Id = this.props.buttonText;

    let buttonName = this.props.buttonText.replace(/\s/g, '')

    return (
      <button id={this.props.buttonText} data-key={this.props.filterKey} className={`filter__button filter__button--${buttonName} ${this.props.store.filterButtons.indexOf(Id) > -1 ? 'active' : ''}`} onClick={e => this.handleClick(e, Id)}>{this.props.buttonText}</button>
    )
  }
}

export default FilterButton;
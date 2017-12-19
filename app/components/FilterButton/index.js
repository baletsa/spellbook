import React, { Component } from 'react';
import { observer } from "mobx-react"

import styles from './filterButton.scss';

@observer
class FilterButton extends Component { 
  
  handleClick(key, value) {
    if (this.state.buttonType === 'radio') {
      console.log('radio') 
    } else {
      console.log('toggle')
    }
  }

  render() {
    let buttonKey = this.props.buttonText.replace(/\s/g, '')
    return (
      <button className={`filter__button filter__button--${buttonKey}`} onClick={this.handleClick}>{this.props.buttonText}</button>
    )
  }
}

export default FilterButton;
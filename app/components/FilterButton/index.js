import React, { Component } from 'react';

import styles from './filterButton.scss';

class FilterButton extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      buttonType: this.props.buttonType,
      toggle: false,
    }      
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.filterSpells()

    if (this.state.buttonType === 'radio') {
      console.log('radio')
      this.setState({
        toggle: !this.state.toggle
      })  
    } else {
      this.setState({
        toggle: !this.state.toggle
      })
    }
  }

  render() {
    return (
      <a className={this.state.buttonType + ` ${this.state.toggle ? 'active' : null}`} onClick={this.handleClick}>{this.props.buttonText}</a>
    )
  }
}

export default FilterButton;
import React from 'react';

import styles from './filterButton.scss';

class FilterButton extends React.Component {  
  constructor() {
    super();
    this.state = {
      toggle: false
    }      
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <a className={`${this.state.toggle ? 'active' : null}`} onClick={this.handleClick} >{this.props.buttonName}</a>
    )
  }
};

export default FilterButton;
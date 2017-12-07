import React from 'react';

import styles from './filterButton.scss';

class FilterButton extends React.Component {  
  constructor() {
    super();
    this.state = {
      toggle: false
    }      
    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <a className={`${this.state.toggle ? 'active' : null}`} onClick={this.toggleButton}>{this.props.buttonName}</a>
    )
  }
};

export default FilterButton;
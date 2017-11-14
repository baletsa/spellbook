@observer
// Import Dependencies
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// Import Stylesheet
// import styles from './modal.css';

@observer
export class SetList extends Component {
  constructor(props) {
    super(props);
    this.state = {spells: []};
  }

  render() {
    let titleText = this.props.level;
    if (titleText === 'Cantrip') {
      titleText += 's';
    }
    return (
      <h2>{titleText}</h2>
      <ul></ul>
    );
  }

};
export SetList;
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
    this.getData = this.getData.bind(this);
  }

  render() {
    return (
      <ul>
        {list}
      </ul>
    );
  }

};
export SetList;
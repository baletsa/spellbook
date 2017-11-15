import React from 'react';
// import data from './data/spellData.json';

import Header from '../Header';

import '../../assets/styles/base.scss';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="spell-list">
          <div className="content">
            <h1 className="game-board">
              Hello World!
            </h1>
            <p>Lorem ipsum dolor sit amet</p>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

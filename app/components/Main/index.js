import React, { Component } from 'react';

import data from '../../data/spellData.json';

import Header from '../Header';
import Filter from '../Filter';
import SpellList from '../SpellList';

import '../../assets/styles/reset.scss';
import '../../assets/styles/base.scss';
import './main.scss';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spells: data.spells
    }
  }

  render() {
    return (
      <div>
        <div className="site-header" >
          <Header />
          <Filter openFilter={this.state.filterVisible ? 'active' : null} toggleFilter={this.toggleFilter} />
        </div>
        <main className="spellbook-content">
          <div className="content">
            <div className="spell-list-sort">
              <select className="sort-toggle">
                <option className="spell-list-sort-name">Sort by Name</option>
                <option className="spell-list-sort-level">Sort by Level</option>
              </select>
            </div>
            <SpellList spells={this.state.spells} />
          </div>
        </main>
      </div>
    )
  }
}

export default Main;

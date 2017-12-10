import React from 'react';

import data from '../../data/spellData.json';

import Header from '../Header';
import SpellList from '../SpellList';

import '../../assets/styles/reset.scss';
import '../../assets/styles/base.scss';
import './main.scss';

class Main extends React.Component {
  render() {
    const SortByName = (a, b) => {
      const aName = a.name.toLowerCase(),
        bName = b.name.toLowerCase();
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    };

    const spells = (data.spells).sort(SortByName)

    return (
      <div>
        <Header isFixed={true} />
        <main className="spellbook-content">
          <div className="content">
            <div className="spell-list-sort">
              <select className="sort-toggle">
                <option className="spell-list-sort-name">Sort by Name</option>
                <option className="spell-list-sort-level">Sort by Level</option>
              </select>
            </div>
            <SpellList spells={spells} />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;

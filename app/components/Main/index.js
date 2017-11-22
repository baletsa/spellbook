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
        <Header />
        <div className="spell-list">
          <div className="content">
            <SpellList spells={spells} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

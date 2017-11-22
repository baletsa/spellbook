import React from 'react';

import styles from './header.scss';

import Filter from '../Filter';
import FilterTrigger from '../FilterTrigger';


const Header = () => {
    return (
      <div className="site-header">
        <header>
          <div className="content">
            <div className="site-reset">
              <a className="site-title all">SpellbOOK</a>
            </div>
            <FilterTrigger />
          </div>
        </header>
        <Filter />
      </div>
    );
};

export default Header;
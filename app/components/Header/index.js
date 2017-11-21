import React from 'react';

import styles from './header.scss';

import FilterTrigger from '../FilterTrigger';

const Header = () => {
    return (
      <header className="site-header">
        <div className="content">
          <div className="site-reset">
            <a className="site-title all">SpellbOOK</a>
          </div>
          <FilterTrigger />
        </div>
      </header>
    );
};

export default Header;
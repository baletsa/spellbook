import React from 'react';

import styles from './header.scss';

import FilterTrigger from '../FilterTrigger';

const Header = () => {
    return (
      <div className={styles.header}>
        <header>
          <div className="content">
            <div className="site-reset">
              <a className="site-title all">SpellbOOK</a>
            </div>
            <FilterTrigger />
          </div>
        </header>
      </div>
    );
};

export default Header;
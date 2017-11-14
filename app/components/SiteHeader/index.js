import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.css';

import Filter from '../Filter';

const Header = () => {
    return (
        <div className={styles.header}>
          <header>
            <div className="content">
              <div className="site-reset">
                <a className="site-title all">SpellbOOK</a>
              </div>
              <div className="filter-menu">
                <a className="filter-menu--trigger">Filter</a>
              </div>
            </div>
          </header>
          <Filter />
        </div>
    );
};

export default Header;
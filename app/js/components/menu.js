import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../css/menu.css';

export default class Menu extends Component {
  constructor(props) {
   super(props);
   this.state = {

    };
    this.clickIt = this.clickIt.bind(this);
  }

   clickIt(input) {
      console.log(input);
  }

  render() {
    return (
      <div className={styles.background}>
        <div className={styles.menu}>
          <NavLink
          exact
          to="/"
          onClick={() => { this.clickIt('home'); }}
          activeClassName={styles.active}
          className={styles.links}
          >HOME</NavLink>
          <p className={styles.break}> | </p>
          <NavLink
          exact
          to="/features"
          onClick={() => { this.clickIt('features'); }}
          activeClassName={styles.active}
          className={styles.links}
          >FEATURES</NavLink>
          <p className={styles.break}> | </p>
          <NavLink
          exact
          to="/faq"
          onClick={() => { this.clickIt('FAQ'); }}
          activeClassName={styles.active}
          className={styles.links}
          >FAQ</NavLink>
          <p className={styles.break}> | </p>
          <NavLink
          exact
          to="/contact"
          onClick={() => { this.clickIt('contact'); }}
          activeClassName={styles.active}
          className={styles.links}
          >CONTACT</NavLink>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../css/logo.css';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={styles.logoZone}>
        <Link
        to='/'
        >
        <img id='Logo' className={styles.logo} src='../../assets/WC-White.png' alt='none' />
        </Link>
      </div>
    );
  }
}

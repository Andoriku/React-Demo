import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from '../../css/features.css';

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
      <div>
        <div className={styles.row}>
          <div className={styles.images1}>
            <img
            id='features1'
            className={styles.features1}
            src='../../assets/Features-1.png'
            alt='Feature 1'
            />
            <img
            id='features2'
            className={styles.features1}
            src='../../assets/Features-2.png'
            alt='Feature 2'
            />
          </div>
          <div className={styles.textBlock}>
            <h1>Send wound checks from your mobile device</h1>
            <p>Invite patients to share photos via text or email.</p>
          </div>
        </div>

        <div className={styles.column}>
        <h1>Reassurance with full HIPAA compliance</h1>
          <img
          id='features3'
          className={styles.features3}
          src='../../assets/Features-5.png'
          alt='Feature 3'
          />
        </div>
        <div className={styles.column}>
        <h1>Easy patient image upload</h1>
          <img
          id='features4'
          className={styles.features4}
          src='../../assets/Features-6.png'
          alt='Feature 4'
          />
        </div>
        <div className={styles.row}>
          <img
          id='features5'
          className={styles.features5}
          src='../../assets/Features-3.png'
          alt='Feature 5'
          />
          <div className={styles.textBlock}>
            <h1>Check on your patients in between office visits</h1>
            <p>Use patient photos to guide the next step in patient care.</p>
          </div>
        </div>
        <div className={styles.footerBackground}>
          <div className={styles.footerContainer}>
            <h1 className={styles.footer}>Start With WoundCheck Today</h1>
          </div>
          <div>
            <Link to='/contact' className={styles.footerGetStartedButton}> GET STARTED</Link>
          </div>
        </div>
      </div>
    );
  }
}

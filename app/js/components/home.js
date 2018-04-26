import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import styles from '../../css/home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      success: false,
      error: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={styles.homeBlock}>
        <div className={styles.row}>
        <img className={styles.lady} src='../../assets/HappyLady.jpg' alt='Lady.img' />
          <div className={styles.textBlock}>
              <div className={styles.head}>
                Welcome to WoundCheck
              </div>
              <div
              className={styles.body}
              > With Woundcheck, you can connect with your patients on a secure
                and safe platform that is easy for them and
                convienient for you. You can request images of your patients
                trouble area without the storing that sensitive information exposed
                in your email server. click
                <Link
                to='/featrues'
                className={styles.links}
                > here </Link>
                to learn more.
              </div>
              <Link to='/contact' className={styles.getStartedButton}> GET STARTED</Link>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.textBlock}>
            <div className={styles.head}>
              Secure Messaging
            </div>
            <div
            className={styles.body}
            > With Woundcheck, you can connect with your patients on a secure
              and safe platform that is easy for them and
              convienient for you. You can request images of your patients
              trouble area without the storing that sensitive information exposed
              in your email server. click <Link to='/features'>here</Link> to learn more.
            </div>
            <Link to='/faq' className={styles.button}>About HIPPA Compliance</Link>
          </div>
          <img className={styles.text} src='../../assets/HoldingPhone.jpg' alt='phone.img' />
        </div>
        <p className={styles.endFloat} />

        <div className={styles.row}>
        <img className={styles.lady} src='../../assets/HoldingHands.jpg' alt='Lady.img' />
          <div className={styles.textBlock}>
              <div className={styles.head}>
                Efficient Care
              </div>
              <div
              className={styles.body}
              > With Woundcheck, you can connect with your patients on a secure
                and safe platform that is easy for them and
                convienient for you. You can request images of your patients
                trouble area without the storing that sensitive information exposed
                in your email server. click <Link to='/featrues'>here</Link> to learn more.
              </div>
              <Link to='/faq' className={styles.button}>What devices do I need?</Link>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.textBlock}>
            <div className={styles.head}>
              Patient Experience
            </div>
            <div
            className={styles.body}
            > With Woundcheck, you can connect with your patients on a secure
              and safe platform that is easy for them and
              convienient for you. You can request images of your patients
              trouble area without the storing that sensitive information exposed
              in your email server. click <Link to='/features'>here</Link> to learn more.
            </div>
            <Link to='/faq' className={styles.button}>Educating your patients</Link>
          </div>
          <img className={styles.text} src='../../assets/HealthyMom.jpg' alt='Mother.img' />
        </div>
        <p className={styles.endFloat} />

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

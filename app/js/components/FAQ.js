import React, { Component } from 'react';

import styles from '../../css/about.css';
import Hippa from './hippa.js';
import Technology from './technology.js';
import Support from './support.js';
import Other from './other.js';

export default class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      faqQuestion: 'technology',
      active: 'technology'
    };
    this.handleQuestionSelection = this.handleQuestionSelection.bind(this);
  }
  handleQuestionSelection(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
      active: event.target.value
    });
    console.log(this.state);
  }
  renderContent() {
    return (
      <div>
        {this.renderHippa()}
        {this.renderTechology()}
        {this.renderSupport()}
        {this.renderOther()}
      </div>
    );
  }
  renderHippa() {
    if (this.state.faqQuestion === 'hippa') {
      return (
        <div>
          <Hippa />
        </div>
      );
    }
    return (
      <div />
    );
  }
  renderTechology() {
    if (this.state.faqQuestion === 'technology') {
      return (
        <div>
          <Technology />
        </div>
      );
    }
    return (
      <div />
    );
  }
  renderSupport() {
    if (this.state.faqQuestion === 'support') {
      return (
        <div>
          <Support />
        </div>
      );
    }
    return (
      <div />
    );
  }
  renderOther() {
    if (this.state.faqQuestion === 'other') {
      return (
        <div>
          <Other />
        </div>
      );
    }
    return (
      <div />
    );
  }
  render() {
    return (
      <div className={styles.menuBlock}>
        <div className={styles.menu}>
          <button
          className={styles.menuButton}
          onClick={this.handleQuestionSelection}
          value='technology'
          name='faqQuestion'
          >TECHNOLOGY</button>
          <button
          className={styles.menuButton}
          onClick={this.handleQuestionSelection}
          value='hippa'
          name='faqQuestion'
          >HIPPA COMPLIANCE</button>
          <button
          className={styles.menuButton}
          onClick={this.handleQuestionSelection}
          value='support'
          name='faqQuestion'
          >SUPPORT</button>
          <button
          className={styles.menuButton}
          onClick={this.handleQuestionSelection}
          value='other'
          name='faqQuestion'
          >OTHER TOPICS</button>
        </div>
        {this.renderContent()}
        <div />
      </div>
    );
  }
}

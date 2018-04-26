import React, { Component } from 'react';

import Features from '../components/features.js';
import Logo from '../components/Logo.js';
import Menu from '../components/menu.js';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
      <Logo />
      <Menu />
      <Features />
      </div>
    );
  }
}

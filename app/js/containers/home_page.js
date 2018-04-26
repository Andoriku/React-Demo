import React, { Component } from 'react';

import Home from '../components/home.js';
import Logo from '../components/Logo.js';
import Menu from '../components/menu.js';

export default class HomePage extends Component {
  render() {
    return (
      <div>
      <Logo />
      <Menu />
      <Home />
      <Menu />
      </div>
    );
  }
}

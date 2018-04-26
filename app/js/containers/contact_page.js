import React, { Component } from 'react';

import Contact from '../components/contact.js';
import Logo from '../components/Logo.js';
import Menu from '../components/menu.js';

export default class ContactPage extends Component {
  render() {
    return (
      <div>
      <Logo />
      <Menu />
      <Contact />
      </div>
    );
  }
}

import React, { Component } from 'react';
import logo from '../Images/logo_branco.png';
import css from './nav.module.css';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className={css.navwrapper}>
          <div className={css.loguinho}>
            <img src={logo} alt="Uniasselvi" />
          </div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
    );
  }
}

import React, { Component } from 'react';

import css from './footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className={css.footercopyright}>
          <div className={css.container}>© 2021 André Branco</div>
        </div>
      </footer>
    );
  }
}

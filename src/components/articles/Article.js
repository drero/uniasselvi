import React from 'react';

import css from './articles.module.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Artigo1 from '../pages/Artigo1';
import Artigo2 from '../pages/artigo2';
import Artigo3 from '../pages/artigo3';
import Artigo4 from '../pages/artigo4';
import Artigo5 from '../pages/artigo5';

export default function Article({ article }) {
  const { id, titulo, autor, resumo } = article;

  return (
    <Router>
      <Switch>
        <Route path="/artigo-1" exact={true} component={Artigo1} />
        <Route path="/artigo-2" exact={true} component={Artigo2} />
        <Route path="/artigo-3" exact={true} component={Artigo3} />
        <Route path="/artigo-4" exact={true} component={Artigo4} />
        <Route path="/artigo-5" exact={true} component={Artigo5} />
        <Route path="/" exact={true} />
      </Switch>

      <div className={`${css.card} ${css.border}`}>
        <Link to={`/${id}`}>
          <h5 align="center">{titulo}</h5>
          <div align="center" className={css.autor}>
            {autor}
            <br />
            <div align="center">autor</div>
          </div>

          <p>
            <b>Resumo:</b> {resumo.substring(0, 150)} ...
          </p>
        </Link>
      </div>
    </Router>
  );
}

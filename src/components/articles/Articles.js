import React from 'react';
import Article from './Article';

import css from './articles.module.css';

export default function Articles({ articles }) {
  return (
    <div className={`${css.border} `}>
      {articles.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </div>
  );
}

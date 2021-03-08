import React, { useState, useEffect } from 'react';

import Articles from './components/articles/Articles';
import Header from './components/header/Header';
import data from './components/data/lista_exemplos.json';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

export default function App() {
  const [allArticles, setallArticles] = useState([]);
  const [filteredArticles, setfilteredArticles] = useState([]);

  const [userFilter, setUserFilter] = useState('');

  useEffect(() => {
    const getArticles = async () => {
      // CÓDIGO PARA UTILIZAR FETCH
      //const res = await fetch('ENDEREÇO API');
      //let allArticles = await res.json();

      const allArticles = data.map(({ id, titulo, resumo, autor }) => {
        return {
          id,
          filterName: titulo.toLowerCase(),
          titulo,
          autor,
          resumo,
        };
      });

      setallArticles(allArticles);
      setfilteredArticles(Object.assign([], allArticles));
    };

    getArticles();
  }, []);
  //Busca
  const handleChangeFilter = (newText) => {
    setUserFilter(newText);

    const filterLowerCase = newText.toLowerCase();

    const filteredArticles = allArticles.filter((art) => {
      return art.filterName.includes(filterLowerCase);
    });

    setfilteredArticles(filteredArticles);
  };

  return (
    <div>
      <Nav />
      <Header filter={userFilter} onChangeFilter={handleChangeFilter} />
      <h4 style={styles.centeredTitle}>Artigos</h4>
      <hr style={styles.hrTitle} />
      <Articles articles={filteredArticles} />

      <Footer />
    </div>
  );
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  hrTitle: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
    width: '3%',
    borderColor: '#00aea9',
  },
};

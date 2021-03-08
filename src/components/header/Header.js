import React from 'react';

import css from './header.module.css';

export default function Header({ filter, onChangeFilter }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;

    onChangeFilter(newText);
  };

  return (
    <div className={css.flexRow}>
      <div className="input-field">
        <input
          id="first_name"
          type="text"
          value={filter}
          placeholder="Pesquisar pelo título"
          onChange={handleInputChange}
        />
      </div>
      |<button>DSC</button>
      <button>ASC</button>|
    </div>
  );
}

import React from 'react';
import './SearchPanel.scss'

const SearchPanel = () => {
  return (
    <input
          type='text'
          placeholder='type to seatch'
          className='form-control search-input'
    />
  );
}

export default SearchPanel;
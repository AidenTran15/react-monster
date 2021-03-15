import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder, handleChange})  => (
    <input 
    className='search' 
    text='search'
    placeholder= {placeholder}
    onChange={handleChange}
    />
);
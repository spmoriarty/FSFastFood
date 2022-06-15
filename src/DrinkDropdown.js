import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }

  return <select onChange={handleChange}>
    <option value='1'>Coffee</option>
    <option value='2'>Orange Juice</option>
    <option value='3'>Milk</option>
    <option value='4'>Bloody Mary</option>

  </select>;

  
}

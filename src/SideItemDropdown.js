import React from 'react';

export default function SideItemDropdown({ setSideItemId }) {
  function handleChange(e) {
    setSideItemId(e.target.value);
  }

  return <select onChange={handleChange}>
    <option value='1'>Bacon</option>
    <option value='2'>Hash Potatos</option>
    <option value='3'>Fresh Fruit</option>
  </select>;
}

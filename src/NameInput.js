import React from 'react';

export default function NameInput({ setName }) {
  function handleChange(e) {
    setName(e.target.value);
  }

  return <div className='order-name'>
    Order For:
    <input onChange={handleChange} />
  </div>;
  
}

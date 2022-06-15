import React from 'react'

export default function FoodDropdown({} setFoodId }) {
  function handleChange(e){
    setFoodId(e.target.value);
  }
  return <select onChange={handleChange}>
<option value='1'>French Toast</option>
<option value='2'>Eggs Benedict</option>
<option value='3'>Chef's Breakfast</option>

  </select>;
  
}

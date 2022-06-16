
import './App.css';
import { useState } from 'react';
import DrinkDropdown from './DrinkDropdown';
import SideItemDropdown from './SideItemDropdown';
import FoodDropdown from './FoodDropdown';
import MenuImg from './MenuImg';
import InstructionsForm from './InstructionForm';
import NameInput from './NameInput';




function App() {

  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['Extra Butter', 'extra flavor']);
  const [name, setName] = useState('Tony"s Order');
  
  return (
    <div className='menu'>
      
      <div>
        <h3>Order for {name}</h3>
        <MenuImg foodId={foodId} sideId={sideId} drinkId={drinkId} />
      
      </div>

      <div className='drops'>
        <FoodDropdown setFoodId={setFoodId}/>
        <DrinkDropdown setDrinkId={setDrinkId}/>
        <SideItemDropdown setSideId={setSideId}/>
      </div>

      <div className='instructions'>
        <InstructionsForm setInstructions={setInstructions} instructions={instructions} />

      </div>
      <ul className='special-instructions'>
        {
          instructions.map((instruction, i) => <li instruction key={`${instruction + i}`}>
            {instruction}
          </li>)
        }
      </ul>
      <NameInput setName={setName}/>


    </div>
  );
}

export default App;

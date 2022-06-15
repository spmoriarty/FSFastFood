import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DrinkDropdown from './DrinkDropdown';
import SideItemDropdown from './SideItemDropdown';
import FoodDropdown from './FoodDropdown';




const [foodId, setFoodId] = useState(1);
const [sideId, setSideId] = useState(1);
const [drinkId, setDrinkId] = useState(1);
const [instructions, setInstructions] = useState('');
const [formInstruction, setFormInstruction] = useState('');



function App() {
  return (
    <div>

    
    </div>
  );
}

export default App;

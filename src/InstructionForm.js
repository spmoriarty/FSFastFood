import React from 'react';
import { useState } from 'react';

export default function InstructionForm({ instructions, setInstructions }) {
  const [instructionForm, setInstructionForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    instructions([...setInstructions, instructionForm]);
    
  } 
  function handleInstructionChange(e) {
    setInstructionForm(e.target.value);

  }
  
  return <form onSubmit={handleSubmit}>
    <label> Specific request </label>
    <input required value={setInstructions} onChange={handleInstructionChange}></input>
    
    <button>let us know!</button>
  </form>;
    
  
}

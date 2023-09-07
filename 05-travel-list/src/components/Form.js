import React, { useState } from 'react'

const Form = () => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = { quantity, description, id: new Date().toISOString(), }
    console.log(newItem);
    setDescription("");
    setQuantity();
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for 😍 trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          (num) => (
            <option value={num} key={num}>{num}</option>
          )
        )}
      </select>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>
    </form>
  )
}

export default Form
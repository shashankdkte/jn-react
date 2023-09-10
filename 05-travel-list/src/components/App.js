import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {

  const [items, setItems] = useState(initialItems)
  
  const handleAddItem = (newItem) => {
    
    setItems((items) => {
      return [...items, newItem]
    });
  }

  const handleDeleteItem = (id) => {
   
    setItems((items) => {
      return items.filter(item=> item.id !== id)
    })
  }
  const handleToggleItem = (id) => {
    setItems((items) => {
      return items.map(item => {
        if (item.id === id)
        {
          return {...item, packed : !item.packed }
        }
        else
        {
          return item
          }
      })
    })
  }

  const handleClearList = () => {
    const confirm = window.confirm("Are you sure you want to delete all Items ?");
    if (confirm)
    {
      setItems([]);
      }
  }
  const packedItems =items.filter(item => item.packed)
  return <div className="app" >
    <Logo />
    <Form handleAddItem={handleAddItem}/>
    <PackingList items={items} handleDeleteItem={handleDeleteItem}  handleToggleItem={handleToggleItem} handleClearList={handleClearList}/>
    <Stats numItems = {items.length} packedItems={packedItems.length}/>
  </div>
}

export default App;



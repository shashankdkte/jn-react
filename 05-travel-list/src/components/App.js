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
  return <div className="app" >
    <Logo />
    <Form handleAddItem={handleAddItem}/>
    <PackingList items={items} />
    <Stats/>
  </div>
}

export default App;



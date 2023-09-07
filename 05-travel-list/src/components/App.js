import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
function App() {
  return <div className="app">
    <Logo />
    <Form />
    <PackingList items={initialItems}/>
    <Stats/>
  </div>
}

export default App;



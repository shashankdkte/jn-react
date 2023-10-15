
import { BrowserRouter,Route,Routes } from "react-router-dom"
import './App.css'
import Home from './pages/Home';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import AppNav from './components/AppNav';

function App() {
  

  return (
    <>
      <AppNav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/pricing' element={<Pricing />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

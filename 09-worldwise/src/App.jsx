

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import { CitiesProvider } from './contexts/CitiesContext'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import CityList from './components/CityList'
import City from './components/City'
import CountryList from './components/CountryList'
import Form from './components/Form'


function App() {

  return (
    <>
      <CitiesProvider>
      <BrowserRouter>
        <Routes>
        <Route  index element={<Home />}/>
        <Route path='product' element={<Product/> }/>
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login/>} />
        <Route path='app' element={<AppLayout />} >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path='cities' element={<CityList /> } />
              <Route path='cities/:id' element={<City/>}/>
              <Route path='countries' element={<CountryList />}/>
              <Route path='form' element={<Form/>}/>
        </Route>
            
        <Route  path='*' element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      </CitiesProvider>
    </>
  )
}

export default App

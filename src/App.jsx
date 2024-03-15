import React from 'react'
import Home from './component/Home'
import Products from './component/Products'
import  Shared  from './component/Shared'
import Cart from './component/Cart'
import Navbar from './component/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shared />}>
            <Route index element={<Home/>}/>
            <Route path='product' element={<Products/>}/>
            <Route path='cart' element={<Cart/>}/>
            
          </Route>
        </Routes>
      </Router>
    </>
  ) 
}

export default App
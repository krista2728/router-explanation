import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './About';
import Home from './Home';
import Shop from './Shop';
import Hotel from './Hotel';

function App() {

  
  return <div> <Router>
<nav>
<Link to="/" className='link'>Полный список</Link>
    <Link to="/about" className='link'>О книгах</Link>
    <Link to="/shop" className='link'>выбор читателя</Link>
    <Link to="/hotel" className='link'>Hotel</Link>
</nav>

<Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/shop' element={<Shop/>}  />
  <Route path='/about' element={<About/>}  />
  <Route path='/hotel' element={<Hotel/>}  />
</Routes>
<div> 
  <h1 className='hello'>СПИСОК ЛИТЕРАТУРЫ</h1>
</div>

  </Router>
  
  </div>
}

export default App;

// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Design from './components/Design';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Sidebar from './components/Sidebar'; 
// import Products from './scenes/product/product.js';

// import product from './models/productModel';
// import productStat from './models/productStatsModel';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
          <Sidebar/>
          {/* <Design/> */}
      </header>
        <main>
          <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/user" element={<Welcome/>}/>
          {/* <Route path="/product" element={<Welcome/>}/> */}
          
          {/* <Route path='/login' element={<Login/>}/> */}
          </Routes>
        </main>
    </React.Fragment>
  );
}

export default App;

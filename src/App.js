import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SideBar from './components/Sidebar';

import './App.css';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import Account from './components/Account';

function App () {
  return(
    <Router>
      <div className='app'>
        <SideBar />
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/userorders' element={<Orders />} />
          <Route exact path='/userproducts' element={<Products />} />
          <Route exact path='/alluseraccounts' element={<Account />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./components/Sidebar";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Account from "./components/Account";
import AllUserData from "./components/AllUserData";
import EditItems from "./components/EditItems";
import AddNewProduct from "./components/AddNewProduct";

function App() {
  return (
    <Router>
      <div className="app">
        <SideBar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/userorders" element={<Orders />} />
          <Route exact path="/userproducts" element={<Products />} />
          <Route exact path="/admin-account" element={<Account />} />
          <Route exact path="/alluseraccounts" element={<AllUserData />} />
          <Route exact path="/add-product" element={<AddNewProduct />} />
          <Route exact path="/edit-items/:userId" element={<EditItems />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

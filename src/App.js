
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navimage from "./components/Navimage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
// import Wines from "./pages/wines"
// import Wine from "./pages/wine"

import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"


function App() {
  const URL = "http://localhost:4000/"
  const [wineData, setWineData] = React.useState(null)
  const getWineData = async () => {
    const response = await fetch (
      "https://api.sampleapis.com/wines/reds"
    )
    const data =await response.json()
    setWineData(data)
    console.log(data)
  }
  React.useEffect(()=> {
    getWineData();},
    [])
  
  return (
    <div>
      <div className='Nav'>
        <Navimage />
      </div>
      <Header className='navheader' />
      <Logo />
      <Routes>
        <Route exact path="/" element={<Home URL={URL}/>}/>
        <Route exact path="/about" element={<About URL={URL}/>}/>
        <Route exact path="/register" element={<Register URL={URL}/>}/>
        {/* <Route exact path="/wines" element={<Wines URL={URL}/>}/> */}
      </Routes>
      <Footer />
    </div>
    ) 
}
export default App;

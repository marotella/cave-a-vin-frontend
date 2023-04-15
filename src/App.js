

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Navimage from "./components/Navimage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Home from "./pages/Home"
import About from "./pages/About"
import Register from "./pages/Register"
import Wines from "./pages/Wines"
import Wine from "./pages/Wine"
import New from "./pages/New"

import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"


function App() {
  const URL = "http://localhost:4000/"
  const [wineData, setWineData] = React.useState(null)

  const getWineData = async () => {
    const redWineResponse = await fetch("https://api.sampleapis.com/wines/reds")
    const redWineData = await redWineResponse.json()
    console.log(redWineData)
    const whiteWineResponse = await fetch("https://api.sampleapis.com/wines/whites")
    const whiteWineData = await whiteWineResponse.json()
    console.log(whiteWineData)
    const combinedWineData = [...redWineData, ...whiteWineData].map((wine, index) => {
      return {
        ...wine,
        id: index + 1 // Assign a unique ID to each wine, starting from 1
      };
    });

    setWineData(combinedWineData);
    console.log(wineData)
  };
  React.useEffect(() => {
    getWineData();
  },
    [])

  const deleteWine = async (id) => {
    console.log(id)
    try {
      const response = await fetch(`${URL}wines/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete wine");
      }
      getWineData();
    } catch (error) {
      console.error(error);
    }}

    const createWine = async (newWine) => {
      await fetch (URL + newWine, {
          method:"POST",
        })
        getWineData()
    }

return (
  <div>
    <div className='Nav'>
      <Navimage />
    </div>
    <Header className='navheader' />
    <Logo />
    <Routes>
      <Route exact path="/" element={<Home URL={URL} />} />
      <Route exact path="/about" element={<About URL={URL} />} />
      <Route exact path="/register" element={<Register URL={URL} />} />
      <Route exact path="/new" element={<New URL={URL} createWine={createWine}/>} />
      <Route exact path="/wines" element={<Wines wineData={wineData} URL={URL} />} />
      <Route exact path="/wines/:id" element={<Wine wineData={wineData} URL={URL} deleteWine={deleteWine} getWineData={getWineData} />} />
    </Routes>
    <Footer />
  </div>
) 
}

export default App;


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
import Edit from "./pages/Edit"


import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom"


function App() {
  const URL = "http://localhost:4000/"
  const [wineData, setWineData] = useState(null) //defines the wine data pulled from ATLAS/SEEDED API Data
  const getWineData = async () => {
    try {
      const response = await fetch(`${URL}wines`); //pull data in from ATLAS
      if (!response.ok) {
        throw new Error('Failed to fetch wine data');//alerts if the data does not land
      }
      const data = await response.json(); //makes the data into JSON format?
      setWineData(data); //sets the sate of wineData
      console.log(data) //checks the data lands
    } catch (error) {
      console.error(error);  //logs errors 
    }
  };
  React.useEffect(()=> {
    getWineData();},
    [])//prompts react to pull the data once and not throw an error as it loads
  const deleteWine = async (_id) => {
    console.log(_id)
    try {
      const response = await fetch(`${URL}wines/${_id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete wine");
      }
      getWineData();
    } catch (error) {
      console.error(error);
    }}

    //create
    const createWine = async (_id, createdWine) => {
      try{
        const response = await fetch (`${URL}wines/${_id}`, {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(createdWine),
        });
        if (!response.ok) {
          throw new Error("Failed to create wine");
        }
        getWineData();
      } catch (error) {
        console.error(error)
      }
    };

    //update
    const updateWine = async (_id, updatedWine) => {
      try {
        const response = await fetch(`${URL}wines/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedWine),
        });
        if (!response.ok) {
          throw new Error("Failed to update wine");
        }
        getWineData();
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      getWineData();
    }, []);
    //

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
      <Route exact path="/wines/new" element={<New wineData={wineData} createWine={createWine}/>} />
      <Route exact path="/wines" element={<Wines wineData={wineData} URL={URL} />} />
      <Route exact path="/wines/:_id" element={<Wine wineData={wineData} URL={URL} deleteWine={deleteWine} getWineData={getWineData} />} />
      <Route exact path="/wines/:_id/edit" element={<Edit wineData={wineData} updateWine={updateWine} />} />

    </Routes>
    <Footer />
  </div>
) 

}
export default App;
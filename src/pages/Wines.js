import { useState } from "react";
import { Link } from "react-router-dom"
import React from "react";
import Wine from "../components/Wine"
import { useNavigate, useParams } from "react-router-dom";

const Wines = (props) => {
  console.log(props.wineData) //confirms that data is bieng passesd
  const { _id } = useParams();
  const navigate = useNavigate();
  
  
  const loaded = () => {
    return(
      <div className="new">

      <button className="plus" title="Add a New Wine" onClick={() => navigate(`/wines/new`)}>+</button>
    <div className="wineIndex"> {props.wineData.data.map((wineData) => (
        <Wine {...wineData} />
    ))} 
    </div>
    </div>)
  };

  const loading = () => {
    return <h1 style={{color:"#943330", fontFamily:'Courier New', letterSpacing:'-0.6px', position:"relative", left:"70px"}}>Pouring...</h1>;
  };
  return (props.wineData ? loaded() : loading());
}

export default Wines
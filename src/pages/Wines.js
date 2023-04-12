import { useState } from "react";
import { Link } from "react-router-dom"
import Wine from "../components/Wine"

const Wines = (props) => {
  // loaded function
  const loaded = () => {
    return(
      <div className="new">
      <a href='/new' className="plus" title="Add a New Wine">+</a>
    <div className="wineIndex"> {props.wineData.map((wineData) => (
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
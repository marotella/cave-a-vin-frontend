import { useState } from "react";
import { Link } from "react-router-dom"
import Wine from "../components/Wine"

const Wines = (props) => {
  console.log(props.wineData) //confirms that data is bieng passesd
  // loaded function, NOTE: Need to use wineData.data to access the array inside the object. If not, it will not be able to use .map method
  const loaded = () => {
    return(
      <div className="new">
      <a href='/new' className="plus" title="Add a New Wine">+</a>
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
import { useState } from "react";
import { Link } from "react-router-dom"
import Wine from "../components/Wine"

const Wines = (props) => {
  // loaded function
  const loaded = () => {
    return(<div className="wineIndex"> {props.wineData.map((wineData) => (
        <Wine {...wineData} />
    ))}
    </div>)
  };

  const loading = () => {
    return <h1>Pouring...</h1>;
  };
  return (props.wineData ? loaded() : loading());
}

export default Wines

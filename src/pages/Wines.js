import { useState } from "react";
import {Link} from "react-router-dom"

const Wines = (props) => {

  // loaded function
  const loaded = () => {
    return props.wineData.map((wineData) => (
      <div key={wineData._id} className="wine">
        <h1>{wineData.wine}</h1>
        <img src={wineData.image} alt={wineData.wine} />
        <h3>{wineData.winery}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.wineData ? loaded() : loading());
}

export default Wines

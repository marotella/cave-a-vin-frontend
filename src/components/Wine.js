
 

import React from 'react';
import { Link } from "react-router-dom"

function Wine(props) {
  return (
        <div key={props._id} className="wineTiles">
        <h4>{props.winery}</h4>
        <Link to = {`/wines/${props._id}`}>
          <img src={props.image} alt={props.wine} className="wineTileImg"/>
        </Link>
        <Link to = {`/wines/${props._id}`} className="linkToShow">
          <p>{props.wine}</p>
        </Link>
      </div >
    )
}

export default Wine;
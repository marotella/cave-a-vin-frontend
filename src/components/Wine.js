import React from 'react';

function Wine (props){
    return(
        <div key={props._id} className="wineTiles">
        <h4>{props.winery}</h4>
        <img src={props.image} alt={props.wine} className="wineTileImg"/>
        <p>{props.wine}</p>
      </div>
    )
}

export default Wine;
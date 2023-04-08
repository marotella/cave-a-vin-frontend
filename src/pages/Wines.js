// import { useState } from "react";
// import {Link} from "react-router-dom"

// const Wines = (props) => {

//   // loaded function
//   const loaded = () => {
//     return props.wines.map((wine) => (
//       <div key={wine._id} className="wine">
//         <Link to={`/wine/${wine._id}`}><h1>{wine.name}</h1></Link>
//         <img src={wine.image} alt={wine.name} />
//         <h3>{wine.title}</h3>
//       </div>
//     ));
//   };

//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };
//   return (props.wines ? loaded() : loading());
// }

// export default Wines

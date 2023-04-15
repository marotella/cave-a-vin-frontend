import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Wine.css";

const Wine = (props) => {
  const [enlarged, setEnlarged] = React.useState(false);
  const { id } = useParams();
  const wine = props.wineData.find(wine => wine.id == id);
  const navigate = useNavigate();

  const removeWine = async (e) => {
    e.preventDefault();
    await props.deleteWine(wine.id);
    props.getWineData();
    navigate("/wines");
  };

  const starRating = (rating) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="stars-outer">
        <div
          className="stars-inner"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };

  const loading = () => {
    return <h1 style={{color:"#943330", fontFamily:'Courier New', letterSpacing:'-0.6px', position:"relative", left:"70px"}}>Pouring...</h1>;
  };

  const loaded = () => {
    const prevId = wine.id - 1;
    const nextId = wine.id + 1;
    return (
      <div className="wineDetails">
        <ul>
          <li>
            <img
              src={wine.image}
              alt={wine.wine}
              onClick={() => setEnlarged(!enlarged)}
              className={enlarged ? "enlarged" : ""}
            />
          </li>
        </ul>
        <ul className="wineDetailsList">
          <li>{wine.wine}</li>
          <li>Winery: {wine.winery}</li>
          <li style={{ marginBottom: "40px" }}>Location: {wine.location}</li>
          <li>
            <span className="ratingStars">
              {starRating(wine.rating.average)}
            </span>
            <span className="ratingText">
              ({Number(wine.rating.average).toFixed(1)}) ({wine.rating.reviews})
            </span>
          </li>
          <li className="buttonContainer">
            <button
              className="arrowButton"
              onClick={() => navigate(`/wines/${prevId}`)}
            >
              {"Previous"}
            </button>
            <button
              className="arrowButton"
              onClick={() => navigate(`/wines/${nextId}`)}
            >
              {"Next"}
            </button>
          </li>
          <li>
            <button id="delete" onClick={removeWine}>DELETE</button>
          </li>
        </ul>
      </div>
    );
  };

  return <div>{wine ? loaded() : loading()}</div>;
};

export default Wine;
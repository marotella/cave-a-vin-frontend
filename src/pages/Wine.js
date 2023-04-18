import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Wine.css";


//pass down the props in the app.js so that we can display individual data and delete. We will need to add in update when we are ready
const Wine = ({wineData, deleteWine, getWineData}) => {
  const [enlarged, setEnlarged] = React.useState(false);
  //use the param to match the id in the database
  const { _id } = useParams();
  //checks that the wine data is loaded and then looks for the wine that matches the param of id.
  const wine = wineData?.data.find(wine => wine._id == _id);
  const navigate = useNavigate();

  //used to remove a wine form the data base, not yet functional.
  const removeWine = async (e) => {
    e.preventDefault();
    await deleteWine(wine._id);
    getWineData();
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
    const currentIndex = wineData.data.findIndex(wine => wine._id == _id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : wineData.data.length - 1;
    const nextIndex = currentIndex < wineData.data.length - 1 ? currentIndex + 1 : 0;
    const prevId = wineData.data[prevIndex]._id;
    const nextId = wineData.data[nextIndex]._id;
   
    return (
      <section className="showSection">
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
          <li style={{ marginBottom: "20px" }} className="buttonContainer">
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

            <button id="edit" onClick={() => navigate(`/wines/${_id}/edit`)}>EDIT</button>
            {/* <button className="edit-button" onClick={() => navigate(`/wines/${_id}/edit`)}>
            <img src="https://i.imgur.com/ZufHNsm.png" alt="Edit Wine" title="Edit" style={{ width: "20px", height: "20px" }}/>
            </button> */}

          </li>
        </ul>
      </div>
      </section>
    );
  };

  return <div>{wine ? loaded() : loading()}</div>;
};

export default Wine;
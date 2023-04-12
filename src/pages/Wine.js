import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//I created a separate css file for this page
import "../Wine.css";

const Wine = (props) => {
  const [wine, setWine] = useState(null);
  const { id } = useParams();

  //fetch wine data from API
  useEffect(() => {
    const fetchWineData = async () => {
      try {
        const response = await fetch(
          `https://api.sampleapis.com/wines/reds/${id}`
        );
        const data = await response.json();
        setWine(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWineData();
  }, [id]);

  //helper function to render star rating based on avg rating from wine API
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
    return <h1>Pouring...</h1>;
  };

  const loaded = () => {
    return (
      <div className="wineDetails">
        <ul>
          <li>
            <img src={wine.image} alt={wine.wine} />
          </li>
        </ul>
        <ul>
  <li>Winery: {wine.winery}</li>
  <li>Wine: {wine.wine}</li>
  <li style={{ marginBottom: "40px" }}>Location: {wine.location}</li>
  <li>
    <span className="ratingStars">{starRating(wine.rating.average)}</span>
    <span className="ratingText">
      ({Number(wine.rating.average).toFixed(1)}) ({wine.rating.reviews})
    </span>
  </li>
</ul>

      </div>
      
    );
  };

  return <div>{wine ? loaded() : loading()}</div>;
};

export default Wine;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";


//This form is used to generate a new wine using state and a backend create route
const New = ({wineData, createWine}) => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const wine = wineData?.data.find((wine) => wine._id === _id);
  const [wineForm, setWineForm] = React.useState({ ...wine,
    rating: wine?.rating ?? {}});

//event handler for the form when submited which executes the create route
const handleSubmit = async(e) => {
  e.preventDefault();
  await createWine(_id, wineForm);
  navigate(`/wines`);
};

//handles changes in the form being populated
const handleChange = (e) => {
  if (e.target.name === "average") {
    setWineForm({
      ...wineForm,
      rating: { ...(wineForm.rating || {}), average: e.target.value }
    });
  } else if (e.target.name === "reviews") {
    setWineForm({
      ...wineForm,
      rating: { ...(wineForm.rating || {}), reviews: e.target.value }
    });
  } else {
    setWineForm({ ...wineForm, [e.target.name]: e.target.value, rating: wineForm?.rating || {} });
  }
};


//The form to collect required fields for the wine model 
 return (
  <div>
  <div className='style'></div>
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="winery">Winery: </label>
      <input
      type="text"
      className="formitems"
      value={wineForm?.winery || ""}
      name="winery"
      placeholder="winery"
      onChange={handleChange}
        />
        <label htmlFor="wine">Wine: </label>
      <input
      type="text"
      className="formitems"
      value={wineForm?.wine || ""}
      name="wine"
      placeholder="wine"
      onChange={handleChange}
        />
        <label htmlFor="average">Rating: </label>
      <input
      type="number"
      name="average"
      min="0"
      max="5"
      step="0.1"
      className="formitems"
      value={wineForm?.rating?.average || ""}
      placeholder="rating"
      onChange={handleChange}
        />
      <label htmlFor="reviews">Number of Reviews: </label>
      <input
      type="string"
      className="formitems"
      min="0"
      value={wineForm?.rating?.reviews || ""}
      name="reviews"
      placeholder="number of reviews"
      onChange={handleChange}
        />
        <label htmlFor="location">Location: </label>
      <input
      type="text"
      className="formitems"
      value={wineForm?.location || ""}
      name="location"
      placeholder="location"
      onChange={handleChange}
        />
        <label htmlFor="image">Image: </label>
      <input
      type="text"
      className="formitems"
      value={wineForm?.image || ""}
      name="image"
      placeholder="image"
      onChange={handleChange}
        />
        <div className="buttonContainer">
          <button type="submit" className="create">Create Wine</button>
        </div>
    </form>
  </div>
 )
}

export default New;


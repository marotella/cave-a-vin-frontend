import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Edit.css";

const Edit = ({ wineData, updateWine }) => {
  const navigate = useNavigate(); //initialize navigate to use routing functions
  const { _id } = useParams(); //get the ID of the wine to be edited
  const wine = wineData?.data.find((wine) => wine._id == _id); //find the wine with the matching _id
  const [wineForm, setWineForm] = React.useState(wine); //initialize wineForm to the data of the wine to be edited

   //This function handles form submission when user clicks "Update Wine"
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Please confirm that you would like to save these changes.");
  if (confirmed) {
    await updateWine(_id, wineForm); //call updateWine function to update the wine with the new data
    navigate(`/wines/${_id}`); //navigate back to the Wine page for the updated wine
  }
}

 //This function handles changes in the input fields of the form
  const handleChange = (e) => {
    setWineForm({ ...wineForm, [e.target.name]: e.target.value });
  };

  return (
    <section className="editSection">
        <div>
        <div className="imageContainer">
          <img src={wineForm.image} alt={wineForm.wine} />
        </div>
        </div>
    <div className="wineForm">
      {/* <h3>Edit Wine</h3> */}
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="wine">Wine Name:</label>
          <input
            type="text"
            id="wine"
            name="wine"
            value={wineForm.wine}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="winery">Winery:</label>
          <input
            type="text"
            id="winery"
            name="winery"
            value={wineForm.winery}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={wineForm.location}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={wineForm.image}
            onChange={handleChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="0"
            max="5"
            step="0.1"
            value={wineForm.rating.average}
            onChange={(e) =>
              setWineForm({
                ...wineForm,
                rating: { average: e.target.value, reviews: wineForm.rating.reviews },
              })
            }
          />
        </div>
        <div className="formGroup">
          <label htmlFor="reviews">Number of Reviews:</label>
          <input
            type="string"
            id="reviews"
            name="reviews"
            min="0"
            value={wineForm.rating.reviews}
            onChange={(e) =>
              setWineForm({
                ...wineForm,
                rating: { average: wineForm.rating.average, reviews: e.target.value },
              })
            }
          />
        </div>
      
        <div style={{ marginTop: "40px" }}className="buttonContainer">
          <button type="submit">Update Wine</button>
          <button onClick={() => navigate(`/wines/${_id}`)}>Cancel</button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default Edit;

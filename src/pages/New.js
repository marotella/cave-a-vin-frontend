// import { useState } from "react";
// import { Link } from "react-router-dom";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const New = ({wineData, createWine}) => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const wine = wineData?.data.find((wine) => wine._id == _id);
  const [wineForm, setWineForm] = React.useState(wine);

const handleSubmit = async(e) => {
  e.preventDefault();
  await createWine(_id, wineForm);
  navigate(`/wines`);
};

const handleChange = (e) => {
  setWineForm({ ...wineForm, [e.target.name]: e.target.value });
};

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
        {/* <label htmlFor="rating">Rating: </label>
      <input
      type="number"
      name="rating"
      min="0"
      max="5"
      step="0.1"
      className="formitems"
      value={wineForm?.average || ""}
      placeholder="rating"
      onChange={(e) => setWineForm({ ...wineForm, rating: { average: e.target.value, reviews: wineForm.rating.reviews },})}
        />
      <label htmlFor="reviews">Number of Reviews: </label>
      <input
      type="number"
      className="formitems"
      min="0"
       max="5"
      step="0.1"
      value={wineForm?.reviews || ""}
      name="reviews"
      placeholder="Number of Reviews"
      onChange={(e) => setWineForm({ ... wineForm, rating: { average: wineForm.rating.average, reviews: e.target.value },})}
        /> */}
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
          <button type="submit">Create Wine</button>
          <button onClick={() => navigate(`/wines/${_id}`)}>Cancel</button>
        </div>
    </form>
  </div>
 )
}

// function New(props) {
 
//   const [newForm, setNewForm] = useState({
//     winery: "",
//     wine: "",
//     rating: "",
//     location: "",
//     image: ""
//   });

//   const handleChange = (event) => {
//     setNewForm({ ...newForm, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     props.createWine(newForm);
//     setNewForm({
//       winery: "",
//       wine: "",
//       rating: "",
//       location: "",
//       image: ""
//     });
//   };

//   const loaded = () => {
//     return props.wineData.map((wine) => (
//       <div key={wine._id} className="wine">
//         <Link to={`/wines/${wine._id}`}>
//           <h1>{wine.winery}</h1>
//         </Link>
//         <img src={wine.image} alt={wine.wine} />
//         <h3>{wine.winery}</h3>
//       </div>
//     ));
//   };
//   const loading = () => {
//     return <h1>Loading...</h1>;
//   };
//   return (
//     <section>
//       <div className='style'></div>
//       <form className="form" onSubmit={handleSubmit} method ="POST">
//         <input
//           type="text"
//           className="formitems"
//           value={newForm.name}
//           name="winery"
//           placeholder="winery"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           className="formitems"
//           value={newForm.name}
//           name="wine"
//           placeholder="wine"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           className="formitems"
//           value={newForm.name}
//           name="rating"
//           placeholder="rating"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           className="formitems"
//           value={newForm.name}
//           name="location"
//           placeholder="location"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           className="formitems"
//           value={newForm.name}
//           name="image"
//           placeholder="image URL"
//           onChange={handleChange}
//         />
     
//         <button><input className="create" type="submit" value="Create Wine" /></button>
//         {/* <button onClick={() => navigate(`/wines/${_id}`)}></button> */}
//       </form>
//       {props.wineData ? loaded() : loading()}
//     </section>
//   );
// }
export default New;

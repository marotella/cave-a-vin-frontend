import { useState } from "react";
import { Link } from "react-router-dom";

//Allows the user to create a new entry for a wine they enjoy
function New(props) {
 
  // for the form state
  const [newForm, setNewForm] = useState({
    winery: "",
    wine: "",
    rating: "",
    location: "",
    image: ""
  });

  //handler for the new form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
//calls the create wine function on submit of the new form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createWine(newForm);
    setNewForm({
      winery: "",
      wine: "",
      rating: "",
      location: "",
      image: ""
    });
  };

  const loaded = () => {
    return props.wineData.map((wine) => (
      <div key={wine._id} className="wine">
        <Link to={`/wines/${wine._id}`}>
          <h1>{wine.winery}</h1>
        </Link>
        <img src={wine.image} alt={wine.wine} />
        <h3>{wine.winery}</h3>
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <div className='style'></div>
      <form className="form" onSubmit={handleSubmit} method ="POST">
        <input
          type="text"
          className="formitems"
          value={newForm.name}
          name="winery"
          placeholder="winery"
          onChange={handleChange}
        />
        <input
          type="text"
          className="formitems"
          value={newForm.name}
          name="wine"
          placeholder="wine"
          onChange={handleChange}
        />
        <input
          type="text"
          className="formitems"
          value={newForm.name}
          name="rating"
          placeholder="rating"
          onChange={handleChange}
        />
        <input
          type="text"
          className="formitems"
          value={newForm.name}
          name="location"
          placeholder="location"
          onChange={handleChange}
        />
        <input
          type="text"
          className="formitems"
          value={newForm.name}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
     
        <input className="create" type="submit" value="Create Wine" />
      </form>
      {props.wineData ? loaded() : loading()}
    </section>
  );
}
export default New;

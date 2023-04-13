import { useState } from "react";
import { Link } from "react-router-dom";

function New(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    winery: "",
    wine: "",
    rating: "",
    location: ""
  });
  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createWine(newForm);
    setNewForm({
      winery: "",
      wine: "",
      rating: "",
      location: ""
    });
  };
  // loaded function
  const loaded = () => {
    return props.wines.map((wine) => (
      <div key={wine._id} className="wine">
        <Link to={`/wines/${wine._id}`}>
          <h1>{wine.winery}</h1>
        </Link>
        {/* <img src={person.image} alt={person.name} /> */}
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
      <form className="form" onSubmit={handleSubmit}>
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
      {props.wines ? loaded() : loading()}
    </section>
  );
}
export default New;

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.wine}
          wine="wine"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Wine" />
      </form>
      {props.wines ? loaded() : loading()}
    </section>
  );
}
export default New;


//   winery: String,
//   wine: String,
//   rating: {
//       average: String,
//       reviews: String,
//   },
//   location: String,
//   image: String,
//   id: Number,
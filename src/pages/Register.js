import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = (props) => {
  const [newForm, setNewForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.signin(newForm)
    setNewForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}

        /> 
        <input
          type="text"
          value={newForm.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.email}
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" value="Signin">Submit</button>
      </form>
    </div>
  );
};

export default Register;

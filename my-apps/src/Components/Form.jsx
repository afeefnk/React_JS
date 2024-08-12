import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const resetFunc = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
    });
  };

  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstmame</label>
        <input
          type="text"
          placeholder="Enter first name"
          name="firstname"
          onChange={(e) => handleChange(e)}
          value={values.firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Enter last name"
          name="lastname"
          onChange={(e) => handleChange(e)}
          value={values.lastname}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={values.email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          placeholder="Enter phone"
          name="contact"
          onChange={(e) => handleChange(e)}
          value={values.contact}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e)}
          checked={values.gender === 'male'}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e)}
          checked={values.gender === 'female'}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={(e) => handleChange(e)}
          checked={values.gender === 'other'}
        />
        Other
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={(e) => handleChange(e)}>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
          <option value="English">English</option>
        </select>
        <button type="button" onClick={resetFunc}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

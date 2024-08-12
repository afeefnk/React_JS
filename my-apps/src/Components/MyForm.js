import React, { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    gender: "",
    file: "",
    language: "",
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
      phone: "",
      email: "",
      address: "",
      gender: "",
      file: "",
      language: "",
    });
  };
  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
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
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          placeholder="Phone No."
          name="phone"
          onChange={(e) => handleChange(e)}
          value={values.phone}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => handleChange(e)}
          value={values.email}
        />
        <label htmlFor="address">Address</label>
        <input
          type="textarea"
          placeholder="Enter Address"
          name="address"
          onChange={(e) => handleChange(e)}
          value={values.address}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={(e) => handleChange(e)}
          checked={values.gender === "male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={(e) => handleChange(e)}
          checked={values.gender === "male"}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={(e) => handleChange(e)}
          checked={values.gender === "male"}
        />
        Others
        <label htmlFor="sign">Upload Signature</label>
        <input
          type="file"
          name="file"
          onChange={(e) => handleChange(e)}
          value={values.file}
        />
        <label htmlFor="language">Select MotherTongue</label>
        <select name="language" id="language" onChange={(e) => handleChange(e)}>
          <option value="Malayalam">Malayalam</option>
          <option value="Hindi">Hindi</option>
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

export default MyForm;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Form.css';

const Forms = () => {
  const [data, setData] = useState();
  const [newData, setNewData] = useState('');

  let handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setNewData(data);
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h1 className="heading">Registration Form</h1>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-4">
          <Form.Control
            onChange={handleChange}
            type="email"
            placeholder="Enter your Email"
            name="email"
            className="form-control"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            onChange={handleChange}
            type="text"
            placeholder="Enter your Address"
            name="address"
            className="form-control mb-4"
            required
          />
        </Form.Group>

        <Row className="mb-4">
          <Form.Group as={Col}>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Enter the City"
              name="city"
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="State"
              name="state"
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              onChange={handleChange}
              type="text"
              placeholder="Zipcode"
              name="zipcode"
              required
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h3>{newData.firstName}{newData.lastName}</h3>
      <h3>{newData.email}</h3>
      <h3>{newData.address}</h3>
      <h3>{newData.city}</h3>
      <h3>{newData.state}</h3>
      <h3>{newData.zipcode}</h3>
    </div>
  );
};

export default Forms;


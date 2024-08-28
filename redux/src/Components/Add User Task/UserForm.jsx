import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './usersSlice';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      dispatch(addUser({ name, email }));
      setName('');  // Clear the input fields
      setEmail(''); // Clear the input fields
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

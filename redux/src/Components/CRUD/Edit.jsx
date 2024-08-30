import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from './UserSlice';

const Edit = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users)

    const existingUser = users.find((user) => user.id === Number(id))

    const [uname, setName] = useState(existingUser ? existingUser.name : '')
    const [uemail, setEmail] = useState(existingUser ? existingUser.email : '');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit =(e) => {
        e.preventDefault();
        dispatch(editUser({
            id: Number(id),
            name: uname,
            email: uemail
        }))
        navigate('/');
    }

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={uname}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={uemail}
            required
          />
        </div>
        <button type="submit" onClick={handleEdit} className="btn btn-success d-block mx-auto">
          Edit
        </button>
      </form>
    </div>
  )
}

export default Edit

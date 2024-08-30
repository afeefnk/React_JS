import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../CRUD/UserSlice';

const Edit = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users)

    const existingUser = users.find((user) => user.id === Number(id))

    const [uname, setName] = useState(existingUser ? existingUser.name : '')
    const [uemail, setEmail] = useState(existingUser ? existingUser.email: '')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editUser({
            id: Number(id),
            name: uname,
            email: uemail
        }))
        navigate('/');
    }
  return (
    <div>
      <form onSubmit={handleEdit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                    value={uname}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={uemail}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </form>
    </div>
  )
}

export default Edit

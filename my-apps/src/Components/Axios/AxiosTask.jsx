import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTask = () => {
  const [data,setData] = useState([])
  const [filter, setFilter]= useState('');
  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10.')
    .then((response) => {
      setData(response.data.results)
    })
    .catch((err) => {
      console.log(err);
      
    })
  },[])
  const filteredData = data.filter(user => `${user.name.first} ${user.name.last}`.toLowerCase().includes(filter.toLowerCase()));  
  return (
    <div>
      <h1 className='title mt-3'>Users Lists</h1>
      <input type="text" placeholder='Enter first or last name' className='form-control mb-4 mt-4' value={filter} onChange={e =>setFilter(e.target.value)} />

      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((user, index) => (
            <tr key={index}>
              <td>{`${user.name.first}`}</td>
              <td>{`${user.name.last}`}</td>
              <td>{`${user.email}`}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default AxiosTask

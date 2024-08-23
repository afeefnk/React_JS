import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const[data, setData] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            console.log(err);
        })
    })
  return (
    <div>
      <h1>Axios</h1>
      {data.map((datas) => {
        return (
          <div>
            <li>{datas.title}</li>
            <li>{datas.body}</li>
          </div>
        );
      })}
    </div>
  )
}

export default Axios

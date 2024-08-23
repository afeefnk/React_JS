import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <h1>FetchData</h1>
      {data.map((datas) => {
        return (
          <div>
            <li>{datas.title}</li>
            <li>{datas.body}</li>
          </div>
        );
      })}
    </div>
  );
};

export default FetchData;

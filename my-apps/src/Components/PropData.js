import React from 'react';
import Prop from './Prop';

function PropData() {
    let details = [{
        name: "Adam Johnson",
        role: "Developer",
       
      },
      {
        name: "Linda Larson",
        role: "Manager",
       
      }];

  return (
    <div>
      {details.map((item,index) => {
        return(
                 <Prop key={index} name={item.name} role = {item.role}/>
        );
      })}
    </div>
  );
}

export default PropData

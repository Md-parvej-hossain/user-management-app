import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
  const data = useLoaderData();
  console.log(data);
  const handaleUpdateUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedData = { name, email };
    console.log(updatedData);

    //update user info in database 
    fetch(`http://localhost:5000/users/${data._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body:JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={handaleUpdateUser} action="">
        <div>
          <label htmlFor="">Name : </label>
          <input
            className="border"
            type="text"
            placeholder="Name"
            name="name"
            defaultValue={data.name}
          />
        </div>
        <div>
          <label htmlFor="">Email : </label>
          <input
            className="border"
            type="email"
            placeholder="Email"
            name="email"
            defaultValue={data.email}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;

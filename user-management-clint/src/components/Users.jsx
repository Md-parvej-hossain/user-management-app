import { useState } from 'react';
import { Link } from 'react-router';

const Users = ({ user }) => {
  const [instateUser, setInstateUser] = useState(user);
  console.log(instateUser);
  const handaleUsers = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const userData = { name, email };

    //create user in the db
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(res => res.json())
      .then(data => {
        console.log('data after creating user in the db', data);
        if (data.insertedId) {
          userData._id = data.insertedId;
          const newUsers = [...instateUser, userData];

          setInstateUser(newUsers);
        }
      });
  };

  const handaleUserDelate = id => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount) {
          const remingUsers = instateUser.filter(us => us._id !== id);
          console.log(remingUsers);
          setInstateUser(remingUsers);
          console.log('after delet user', data);
        }
      });
  };
  return (
    <div>
      {/* add users  */}
      <div className="border w-5/12 mx-auto my-10 bg-amber-50 rounded-2xl p-4">
        <p className="text-center text-xl font-bold my-2">Add user BD</p>
        <form onSubmit={handaleUsers} action="" className="space-y-2 ">
          <div>
            <label htmlFor="">Name : </label>
            <input type="text" name="name" className="border" />
          </div>

          <div>
            <label htmlFor="">Email : </label>
            <input type="text" name="email" className="border" />
          </div>
          <input type="submit" className="bg-secondary p-2 rounded-md" />
        </form>
      </div>
      <div>
        {instateUser.map((u, index) => (
          <div key={index}>
            <p>{u.email}</p>
            <p>{u.name}</p>
            <button onClick={() => handaleUserDelate(u._id)} className="btn">
              X
            </button>
            <Link to={`users/${u._id}`} className="btn">
              Detals
            </Link>
            <Link to={`update/${u._id}`} className="btn">
              Update
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

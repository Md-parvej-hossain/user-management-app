import { use } from 'react';

const Users = ({ usetsData }) => {
  const users = use(usetsData);
  console.log(users);
  return (
    <div className="grid grid-cols-3 gap-5 my-20">
      {users.map((user) => (
        <div key={user.id} className="card  bg-base-100 card-lg shadow-sm">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{ user.email}</p>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;

import { use } from 'react';
import Users from '../components/Users';
const userPromise = fetch('http://localhost:5000/users').then(res =>
  res.json()
);
const Home = () => {
  const user = use(userPromise);
 
  return (
    <div>
      <Users user={user}></Users>
    </div>
  );
};

export default Home;

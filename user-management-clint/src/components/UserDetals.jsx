import { useLoaderData } from 'react-router';

const UserDetals = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>user det</p>
    </div>
  );
};

export default UserDetals;

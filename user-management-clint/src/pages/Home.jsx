import Users from '../components/Users';
const usetsData = fetch('http://localhost:5000/users').then(res => res.json());

const Home = () => {
  return (
    <div>
      <Users usetsData={usetsData} />
    </div>
  );
};

export default Home;
